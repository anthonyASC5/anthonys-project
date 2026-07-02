import AVFoundation
import Foundation

struct ExportJob {
  let input: String
  let output: String
}

let root = URL(fileURLWithPath: FileManager.default.currentDirectoryPath)
let jobs = [
  ExportJob(input: "assets/videos/blobtracker.mov", output: "assets/videos/blobtracker-autoplay.mov"),
  ExportJob(input: "assets/videos/Datamosh.mov", output: "assets/videos/Datamosh-autoplay.mov"),
  ExportJob(input: "assets/videos/l4vfx.mov", output: "assets/videos/l4vfx-autoplay.mov"),
  ExportJob(input: "assets/videos/Lall Suite.mov", output: "assets/videos/Lall Suite-autoplay.mov"),
  ExportJob(input: "assets/videos/audiomachine.mov", output: "assets/videos/audiomachine-autoplay.mov"),
  ExportJob(input: "assets/videos/lanzoid.mov", output: "assets/videos/lanzoid-autoplay.mov")
]

func waitForTracks(_ asset: AVAsset, mediaType: AVMediaType) -> [AVAssetTrack] {
  let semaphore = DispatchSemaphore(value: 0)
  var tracks: [AVAssetTrack] = []

  asset.loadValuesAsynchronously(forKeys: ["tracks"]) {
    tracks = asset.tracks(withMediaType: mediaType)
    semaphore.signal()
  }

  semaphore.wait()
  return tracks
}

for job in jobs {
  let inputURL = root.appendingPathComponent(job.input)
  let outputURL = root.appendingPathComponent(job.output)

  let asset = AVURLAsset(url: inputURL)
  let sourceTracks = waitForTracks(asset, mediaType: .video)

  guard let sourceTrack = sourceTracks.first else {
    fputs("Skipping \(job.input): no video track found.\n", stderr)
    continue
  }

  let composition = AVMutableComposition()
  guard let compositionTrack = composition.addMutableTrack(withMediaType: .video, preferredTrackID: kCMPersistentTrackID_Invalid) else {
    fputs("Skipping \(job.input): unable to create composition track.\n", stderr)
    continue
  }

  do {
    try compositionTrack.insertTimeRange(CMTimeRange(start: .zero, duration: asset.duration), of: sourceTrack, at: .zero)
    compositionTrack.preferredTransform = sourceTrack.preferredTransform
  } catch {
    fputs("Skipping \(job.input): \(error.localizedDescription)\n", stderr)
    continue
  }

  try? FileManager.default.removeItem(at: outputURL)

  guard let exportSession = AVAssetExportSession(asset: composition, presetName: AVAssetExportPresetPassthrough) else {
    fputs("Skipping \(job.input): unable to create export session.\n", stderr)
    continue
  }

  exportSession.outputURL = outputURL
  exportSession.outputFileType = .mov
  exportSession.shouldOptimizeForNetworkUse = true

  let semaphore = DispatchSemaphore(value: 0)
  exportSession.exportAsynchronously {
    semaphore.signal()
  }
  semaphore.wait()

  switch exportSession.status {
  case .completed:
    print("Exported \(job.output)")
  case .failed, .cancelled:
    let message = exportSession.error?.localizedDescription ?? "unknown error"
    fputs("Failed \(job.input): \(message)\n", stderr)
  default:
    fputs("Failed \(job.input): export finished with status \(exportSession.status.rawValue).\n", stderr)
  }
}
