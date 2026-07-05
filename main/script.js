// Project metadata drives the desktop tiles, preview windows, and project detail templates.
const projectData = {
  me: {
    title: "Me",
    accent: "#6b4a2f",
    iconPath: "icons/me.svg",
    iconAlt: "Pixel portrait icon"
  },
  paath: {
    title: "Paath",
    tag: "App",
    subtitle: "Student Budgeting Solution",
    year: "2024",
    category: "Financial Technology",
    role: "Product concept",
    format: "iOS-style interface study",
    notes: "Finance, tasks, and clean hierarchy",
    summary:
      "A focused money and task-management concept designed around clarity, trust, and speed.",
    lead: "Paath is a student-centered budgeting app empowering Cornell undergraduates to take control of their finances with clarity and confidence.",
    body: "Tailored for the unique financial lifestyle of college students, Paath simplifies expense tracking and provides campus-specific savings insights.",
    details: [
      { label: "Role", value: "UI/UX Designer" },
      { label: "Timeline", value: "1 Year (2024-2025)" },
      { label: "Tools", value: "Figma, Adobe XD" }
    ],
    problem: "Standard banking apps don't account for variable student expenses like meal plans, laundry, and campus-related discretionary spending.",
    solutionHeading: "Project Solution: Financial Management App",
    solutions: [
      { label: "Unified Dashboard", text: "Effortless tracking of income, expenses, and budgets in a single interface." },
      { label: "Transaction & Portfolio", text: "Detailed transaction history and income tracking with integrated investment overview." },
      { label: "Education", text: "Tax preparation information and curated resources to build smart financial habits." }
    ],
    benefitsHeading: "Student-Focused Benefits",
    benefits: [
      "Promotes clear financial literacy by simplifying complex planning for students.",
      "Reduces financial stress and saves time, helping build a secure, debt-free future."
    ],
    monitoringHeading: "Project Monitoring and Control",
    monitoring: [
      "Utilized Gantt charts to visualize progress, identify dependencies, and manage deadlines across all phases.",
      "Conducted frequent team check-ins to address challenges and maintain alignment on tasks.",
      "Regularly reviewed the Work Breakdown Structure (WBS) to ensure consistency with objectives."
    ],
    challengeHeading: "Challenge Intervention",
    challenge: "Proposed and implemented a shared project log and brief daily updates to increase team transparency and responsiveness.",
    futureHeading: "Future Steps",
    future: [
      "Conducting User Testing + In-depth Research",
      "UX Research + Final Product Shipout"
    ],
    href: "https://www.figma.com/proto/UZEY8tk5c8DYBgbSsmPeYU/4125-APP-PROTOTYPE?node-id=2044-217&node-type=canvas&t=U61WLU1kxodoVhAY-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2044%3A136",
    linkLabel: "Open Paath Prototype",
    linkNote: "Student finance prototype and planning flow.",
    accent: "#4f9cff",
    iconPath: "icons/paath.svg",
    iconAlt: "Paath icon"
  },
  blobtracker: {
    title: "Blob Tracker",
    tag: "Live",
    subtitle: "Live Motion Tracking Study",
    year: "2026",
    category: "Interactive VFX",
    role: "Motion tracking project",
    format: "Browser video experiment",
    notes: "Established in 2026",
    summary:
      "Motion tracking, reactive blobs, and video experiments. Established in 2026.",
    lead: "Blob Tracker explores motion-reactive visuals that respond to movement in real time.",
    body: "The project pairs tracking logic with organic, playful blob behaviors for a live browser experiment.",
    details: [
      { label: "Role", value: "Creative Developer" },
      { label: "Timeline", value: "2026" },
      { label: "Tools", value: "JavaScript, Canvas, WebGL" }
    ],
    problem: "Static visuals do not capture movement-driven feedback well enough for the concept.",
    solutionHeading: "Project Solution: Motion-Responsive Visuals",
    solutions: [
      { label: "Tracking", text: "Uses live motion input to influence the visual system." },
      { label: "Response", text: "Reactive blobs deform and travel with movement." },
      { label: "Experimentation", text: "Keeps the browser-based workflow fast for prototyping." }
    ],
    benefitsHeading: "Student-Focused Benefits",
    benefits: [
      "Creates immediate visual feedback for motion-based ideas.",
      "Supports playful experimentation without heavy setup."
    ],
    monitoringHeading: "Project Monitoring and Control",
    monitoring: [
      "Tested tracking behavior repeatedly to check stability.",
      "Monitored performance while iterating on visual complexity.",
      "Adjusted parameters to keep the motion response legible."
    ],
    challengeHeading: "Challenge Intervention",
    challenge: "Improved responsiveness while keeping the blobs smooth and readable.",
    futureHeading: "Future Steps",
    future: [
      "Refine tracking accuracy",
      "Add more experimental visual states"
    ],
    href: "https://anthonyasc5.github.io/blobbertrack/",
    linkLabel: "Open Blob Tracker",
    linkNote: "Live motion-tracking experiment.",
    accent: "#ff71c7",
    iconPath: "icons/blob-tracker.svg",
    iconAlt: "Blob Tracker icon"
  },
  datamosh: {
    title: "Datamosh",
    tag: "Build",
    subtitle: "Compression Glitch Studio",
    year: "2026",
    category: "Video Effects",
    role: "VFX project",
    format: "Browser video effects",
    notes: "Established in 2026",
    summary:
      "Broken-frame transitions and compression glitches. Build and VFX work established in 2026.",
    lead: "Datamosh is a glitch-focused browser project built around broken-frame transitions and compression artifacts.",
    body: "The project turns video distortion into a visual system instead of treating it as a mistake.",
    details: [
      { label: "Role", value: "VFX Developer" },
      { label: "Timeline", value: "2026" },
      { label: "Tools", value: "JavaScript, Video Processing" }
    ],
    problem: "Clean transition systems felt too polished for the effect language I wanted.",
    solutionHeading: "Project Solution: Glitch Pipeline",
    solutions: [
      { label: "Frame Distortion", text: "Introduces intentional breaks in video continuity." },
      { label: "Compression Artifacts", text: "Uses codec-inspired glitches as a core visual motif." },
      { label: "Browser Workflow", text: "Keeps experimentation quick and accessible." }
    ],
    benefitsHeading: "Student-Focused Benefits",
    benefits: [
      "Adds a distinct motion language to browser-based visuals.",
      "Supports rapid experimentation with effect timing and texture."
    ],
    monitoringHeading: "Project Monitoring and Control",
    monitoring: [
      "Compared effect variants to maintain visual balance.",
      "Reviewed output for readability across different clips.",
      "Used iterative testing to keep the glitch effect controllable."
    ],
    challengeHeading: "Challenge Intervention",
    challenge: "Tuned distortion so it stayed expressive without overwhelming the source footage.",
    futureHeading: "Future Steps",
    future: [
      "Expand the effect library",
      "Add more export and preset controls"
    ],
    href: "https://anthonyasc5.github.io/datamoshme/html/datamosh.html",
    linkLabel: "Open Datamosh",
    linkNote: "Compression glitch studio live build.",
    accent: "#ff4f4f",
    iconPath: "icons/datamosh.svg",
    iconAlt: "Datamosh icon"
  },
  l4vfx: {
    title: "L4VFX",
    tag: "VFX",
    subtitle: "Fast Browser Video Effects",
    year: "2026",
    category: "Visual Effects",
    role: "Fast browser video effects",
    format: "Stylized processing",
    notes: "Established in 2026",
    summary:
      "Fast browser video effects and stylized processing. Established in 2026.",
    lead: "L4VFX is a browser-based effects playground for fast, stylized video processing.",
    body: "The project focuses on speed, modularity, and simple iteration for visual experimentation.",
    details: [
      { label: "Role", value: "Creative Developer" },
      { label: "Timeline", value: "2026" },
      { label: "Tools", value: "JavaScript, Canvas, WebGL" }
    ],
    problem: "Video effect prototypes need to feel fast enough for real creative iteration.",
    solutionHeading: "Project Solution: Real-Time Effect Modules",
    solutions: [
      { label: "Live Preview", text: "Keeps effects visible while changing parameters." },
      { label: "Modular Processing", text: "Breaks visuals into reusable effect stages." },
      { label: "Stylized Output", text: "Allows expressive processing without a heavy workflow." }
    ],
    benefitsHeading: "Student-Focused Benefits",
    benefits: [
      "Speeds up testing for visual ideas.",
      "Makes browser effects feel more like a creative instrument."
    ],
    monitoringHeading: "Project Monitoring and Control",
    monitoring: [
      "Profiled performance while iterating on shader and canvas effects.",
      "Adjusted the pipeline to keep rendering responsive.",
      "Tested variations to keep the system flexible."
    ],
    challengeHeading: "Challenge Intervention",
    challenge: "Kept the visuals expressive while preserving browser responsiveness.",
    futureHeading: "Future Steps",
    future: [
      "Add more effect modules",
      "Build export and preset tools"
    ],
    href: "https://anthonyasc5.github.io/L4VFX/html/motionvideo.html",
    linkLabel: "Open L4VFX",
    linkNote: "Fast browser video effects live build.",
    accent: "#6fb7ff",
    iconPath: "icons/l4vfx.svg",
    iconAlt: "L4VFX icon"
  },
  audiomachine: {
    title: "Audio Machine",
    tag: "Audio",
    subtitle: "Slowed + Reverb Studio",
    year: "2026",
    category: "Music Tools",
    role: "Creative web audio utility",
    format: "Browser audio processor",
    notes: "Purple identity and ambient processing",
    summary:
      "A slowed-and-reverb web tool for reshaping tracks into atmospheric edits.",
    lead: "Audio Machine is a streamlined slowed-and-reverb workspace for expressive audio edits in the browser.",
    body: "The flow emphasizes speed, style, and immediate playback feedback while preserving a simple control surface.",
    details: [
      { label: "Role", value: "Creative Developer" },
      { label: "Timeline", value: "2026" },
      { label: "Tools", value: "Web Audio API, JavaScript" }
    ],
    problem: "Quick audio mood-editing often requires heavyweight desktop tooling.",
    solutionHeading: "Project Solution: Fast Audio Shaping",
    solutions: [
      { label: "Slowed Engine", text: "Pitch/time controls tune tracks into slower textures." },
      { label: "Reverb Space", text: "Adds ambient depth for richer sonic atmosphere." },
      { label: "Simple Workflow", text: "Keeps upload, adjust, and preview flow immediate." }
    ],
    benefitsHeading: "Build Benefits",
    benefits: [
      "Makes stylistic audio edits faster for experiments and concept tracks.",
      "Creates a focused interface for mood-first sound design."
    ],
    monitoringHeading: "Project Monitoring and Control",
    monitoring: [
      "Tested playback stability across browsers.",
      "Refined control ranges for musical responsiveness.",
      "Kept visual identity and controls consistent with the suite."
    ],
    challengeHeading: "Challenge Intervention",
    challenge: "Balanced expressive effects with responsive playback and clean UI controls.",
    futureHeading: "Future Steps",
    future: [
      "Add preset banks",
      "Expand export and effect-chain controls"
    ],
    href: "https://anthonyasc5.github.io/Audiomachine/#/",
    linkLabel: "Open Audio Machine",
    linkNote: "Slowed + reverb browser audio machine.",
    accent: "#8b5cf6",
    iconPath: "icons/audiomachine.svg",
    iconAlt: "Audio Machine icon"
  },
  lanzoid: {
    title: "Lanzoid",
    tag: "3D",
    subtitle: "3D Video Editor",
    year: "2026",
    category: "Video Tools",
    role: "3D editor interface",
    format: "Browser-based editing surface",
    notes: "Part of the L4VFX tool ecosystem",
    summary:
      "A 3D-focused video editor concept designed for spatial motion workflows.",
    lead: "Lanzoid is a browser-based 3D video editor built for stylized motion and spatial visual control.",
    body: "The project extends L4 tooling into 3D editing patterns with an accessible interface for creative iteration.",
    details: [
      { label: "Role", value: "Creative Developer" },
      { label: "Timeline", value: "2026" },
      { label: "Tools", value: "JavaScript, WebGL, Video APIs" }
    ],
    problem: "Spatial video ideas are hard to prototype quickly with standard flat workflows.",
    solutionHeading: "Project Solution: 3D Editing Surface",
    solutions: [
      { label: "Spatial Controls", text: "Supports depth-aware motion and stylized framing." },
      { label: "Creative Speed", text: "Keeps iteration browser-native and lightweight." },
      { label: "L4 Integration", text: "Connects cleanly with the broader L4 build language." }
    ],
    benefitsHeading: "Build Benefits",
    benefits: [
      "Improves experimentation speed for 3D video concepts.",
      "Bridges motion graphics ideas with interactive browser tooling."
    ],
    monitoringHeading: "Project Monitoring and Control",
    monitoring: [
      "Validated editor responsiveness under heavier visuals.",
      "Reviewed UI hierarchy for 3D-first task flow.",
      "Iterated on controls to reduce friction while editing."
    ],
    challengeHeading: "Challenge Intervention",
    challenge: "Balanced advanced 3D controls with a clear, approachable editing experience.",
    futureHeading: "Future Steps",
    future: [
      "Add timeline refinements and camera presets",
      "Expand 3D effects and export tooling"
    ],
    href: "https://anthonyasc5.github.io/L4VFX/lanzoid/lanzoid.html",
    linkLabel: "Open Lanzoid",
    linkNote: "3D video editor live build.",
    accent: "#2ec5ff",
    iconPath: "icons/lanzoid.svg",
    iconAlt: "Lanzoid icon"
  },
  karebare: {
    title: "KareBare",
    tag: "Education",
    subtitle: "Social Media Literacy Companion",
    year: "2024-2025",
    category: "Education / Well-being",
    role: "Brand and education concept",
    format: "App icon portfolio view",
    notes: "Warm brand language and softer UI",
    summary:
      "A learning experience concept with a gentle visual voice and structured layout.",
    lead: "KareBare is a virtual chat box designed to improve social media literacy and promote healthy online interactions for young users.",
    body: "The concept helps teenagers learn safe digital behavior with a calm, approachable tone.",
    details: [
      { label: "Role", value: "UI/UX Designer" },
      { label: "Timeline", value: "1 Year (2024-2025)" },
      { label: "Tools", value: "Figma, Research Notes" }
    ],
    problem: "Young users need support navigating online harms, etiquette, and digital well-being.",
    solutionHeading: "Project Solution: Guided Social Literacy",
    solutions: [
      { label: "Chat Guidance", text: "Uses a virtual chatbot to teach online etiquette." },
      { label: "Safety", text: "Builds awareness around cyberbullying and bad actors." },
      { label: "Education", text: "Turns complex social topics into accessible prompts." }
    ],
    benefitsHeading: "Student-Focused Benefits",
    benefits: [
      "Promotes safer digital habits for teens.",
      "Supports healthy online interactions with friendly, educational feedback."
    ],
    monitoringHeading: "Project Monitoring and Control",
    monitoring: [
      "Reviewed literature around youth online risks and policy.",
      "Mapped research findings into concept flows and content hierarchy.",
      "Refined the chatbot voice to stay supportive rather than preachy."
    ],
    challengeHeading: "Challenge Intervention",
    challenge: "Translated sensitive social topics into a clear, welcoming interface.",
    futureHeading: "Future Steps",
    future: [
      "User testing with teenagers",
      "Refine content tone and conversational depth"
    ],
    href: "https://valberri121.wixsite.com/karebare",
    linkLabel: "Open KareBare",
    linkNote: "Student literacy and social support concept.",
    accent: "#4c8dff",
    iconPath: "icons/karebare.svg",
    iconAlt: "KareBare icon"
  },
  coala: {
    title: "Coala",
    tag: "Brand",
    subtitle: "Long Distance App + Product",
    year: "2024-2025",
    category: "Relationship Tech",
    role: "Identity concept",
    format: "Flat app window",
    notes: "Compact, logo-led presentation",
    summary:
      "A branding study that uses minimal presentation and strong iconography.",
    lead: "Coala is designed to improve communication between college students in long-distance relationships.",
    body: "The concept focuses on emotional nuance, passive sharing, and creative bonding over distance.",
    details: [
      { label: "Role", value: "UI/UX Designer" },
      { label: "Timeline", value: "1 Semester Project" },
      { label: "Tools", value: "Figma, Design Research" }
    ],
    problem: "Text-based communication often misses emotional nuance in long-distance relationships.",
    solutionHeading: "Project Solution: Creative Bonding Experience",
    solutions: [
      { label: "Passive Sharing", text: "Makes it easier to convey mood and emotion." },
      { label: "Creative Interaction", text: "Provides a bonding outlet beyond plain messaging." },
      { label: "Customization", text: "Supports different relationship styles and communication needs." }
    ],
    benefitsHeading: "Student-Focused Benefits",
    benefits: [
      "Improves emotional communication with less misunderstanding.",
      "Helps couples maintain a more expressive digital connection."
    ],
    monitoringHeading: "Project Monitoring and Control",
    monitoring: [
      "Used user research to frame the problem space.",
      "Reviewed interaction ideas against emotional communication goals.",
      "Kept the concept grounded in real long-distance relationship scenarios."
    ],
    challengeHeading: "Challenge Intervention",
    challenge: "Balanced emotional expression with a simple and lightweight product concept.",
    futureHeading: "Future Steps",
    future: [
      "Prototype emotional sharing flows",
      "Validate concept with student couples"
    ],
    href: "https://www.figma.com/proto/9CHpMrXa2iunMF2O5GmseS/3450-Design-Final?node-id=1-55&starting-point-node-id=1%3A55&mode=design&t=cWCKuzKa3cECSVa5-1",
    linkLabel: "Open Coala Prototype",
    linkNote: "Long-distance relationship concept and identity work.",
    accent: "#5bbd74",
    iconPath: "icons/coala.svg",
    iconAlt: "Coala icon"
  },
  cmp: {
    title: "Cornell Music Production",
    tag: "Music",
    subtitle: "Cornell Music Production Website",
    year: "In Progress",
    category: "Creative Web Identity",
    role: "Web identity",
    format: "Desktop app presentation",
    notes: "Simple structure for a creative group",
    summary:
      "A web presence concept for a creative collective that needs clarity and rhythm.",
    lead: "Cornell Music Production is a web identity project for a creative group that needs a clearer digital home.",
    body: "The site organizes music-related content into a simple, approachable structure that feels easy to navigate.",
    details: [
      { label: "Role", value: "Web Designer" },
      { label: "Timeline", value: "Ongoing" },
      { label: "Tools", value: "HTML, CSS, JavaScript" }
    ],
    problem: "Creative collectives often need a straightforward site that still feels alive and personal.",
    solutionHeading: "Project Solution: Clear Creative Identity",
    solutions: [
      { label: "Homepage", text: "Provides a clean entry point for the group." },
      { label: "Content Structure", text: "Organizes updates, events, and brand language." },
      { label: "Rhythm", text: "Uses spacing and hierarchy to feel more musical." }
    ],
    benefitsHeading: "Student-Focused Benefits",
    benefits: [
      "Makes the collective easier to find and understand.",
      "Turns an in-progress music identity into a more polished web experience."
    ],
    monitoringHeading: "Project Monitoring and Control",
    monitoring: [
      "Reviewed layout clarity as content changed over time.",
      "Iterated on hierarchy to keep the site simple and readable.",
      "Used feedback from the group to improve structure."
    ],
    challengeHeading: "Challenge Intervention",
    challenge: "Kept the site clear while still leaving room for creative personality.",
    futureHeading: "Future Steps",
    future: [
      "Publish updated lineup information",
      "Expand the identity system and content modules"
    ],
    href: "https://stphnmade.github.io/cuprod_web/",
    linkLabel: "Open CMP",
    linkNote: "Cornell Music Production site.",
    accent: "#ff4f4f",
    iconPath: "icons/cmp.svg",
    iconAlt: "Cornell Music Production icon"
  },
  shotbyall: {
    title: "ShotByAll",
    tag: "Photo",
    subtitle: "Photography Brand",
    year: "2025",
    category: "Photography",
    role: "Photography brand",
    format: "Portfolio app window",
    notes: "Imagery and brand presence",
    summary:
      "A photography brand presentation centered on portrait work and visual identity.",
    lead: "ShotByAll is the visual brand for my photography work, centered on portrait imagery and visual identity.",
    body: "The site and brand system give the portfolio a cleaner home for presenting work and directing viewers.",
    details: [
      { label: "Role", value: "Photographer / Brand Owner" },
      { label: "Timeline", value: "Ongoing" },
      { label: "Tools", value: "Camera, Pixieset" }
    ],
    problem: "Photography work needs a polished online home that is easy to browse and share.",
    solutionHeading: "Project Solution: Brand-Led Portfolio",
    solutions: [
      { label: "Portfolio", text: "Shows work in a clean, image-forward layout." },
      { label: "Branding", text: "Keeps the identity consistent across visuals." },
      { label: "Access", text: "Gives viewers a direct path to the photo site." }
    ],
    benefitsHeading: "Student-Focused Benefits",
    benefits: [
      "Makes the portfolio easier to present professionally.",
      "Centers the photography brand in one place."
    ],
    monitoringHeading: "Project Monitoring and Control",
    monitoring: [
      "Curated images and updated the portfolio over time.",
      "Reviewed the brand presentation to keep it visually consistent.",
      "Kept the site lean so the imagery stays central."
    ],
    challengeHeading: "Challenge Intervention",
    challenge: "Balanced image-heavy presentation with a clean and lightweight layout.",
    futureHeading: "Future Steps",
    future: [
      "Add new shoots",
      "Refine gallery structure and client flow"
    ],
    href: "https://shotbylall.pixieset.com/",
    linkLabel: "Open ShotByAll",
    linkNote: "Photography portfolio and brand site.",
    accent: "#ff9a2e",
    iconPath: "icons/shotbyall.svg",
    iconAlt: "ShotByAll icon"
  },
  lallsuite: {
    title: "LALLSUITE",
    tag: "Suite",
    subtitle: "Creative Tools and Systems",
    year: "2026",
    category: "Creative Platform",
    role: "Tool suite",
    format: "Web app suite",
    notes: "L4 tool ecosystem",
    summary:
      "LALLSUITE is an active collection of creative web tools, motion experiments, and interactive systems.",
    lead: "LALLSUITE is the central build surface for linked creative apps and media experiments.",
    body: "The suite brings visual tooling, motion systems, and prototype workflows into one evolving platform.",
    details: [
      { label: "Role", value: "Creative Developer" },
      { label: "Timeline", value: "Active in 2026" },
      { label: "Tools", value: "JavaScript, CSS, Web APIs" }
    ],
    problem: "Creative tooling often gets fragmented across separate prototypes with no shared system.",
    solutionHeading: "Project Solution: Unified Creative Suite",
    solutions: [
      { label: "Shared Surface", text: "Groups active experiments into one ecosystem." },
      { label: "Iteration Speed", text: "Keeps testing and visual refinement lightweight." },
      { label: "Expansion", text: "Supports new tools as the suite grows." }
    ],
    benefitsHeading: "Build Benefits",
    benefits: [
      "Creates a consistent home for active creative projects.",
      "Improves flow between motion, visuals, and utility tools."
    ],
    monitoringHeading: "Project Monitoring and Control",
    monitoring: [
      "Tracked usage and iteration needs across connected tools.",
      "Reviewed UI consistency between apps in the suite.",
      "Adjusted architecture for easier expansion."
    ],
    challengeHeading: "Challenge Intervention",
    challenge: "Balanced flexibility for experiments with a coherent identity across apps.",
    futureHeading: "Future Steps",
    future: [
      "Publish additional suite tools",
      "Expand shared component patterns"
    ],
    href: "https://anthonyasc5.github.io/lallsuite/",
    linkLabel: "Open LALLSUITE",
    linkNote: "Creative suite for active L4 builds.",
    accent: "#ff3b30",
    iconPath: "icons/l4vfx.svg",
    iconAlt: "LALLSUITE icon"
  },
  resume: {
    title: "Resume",
    tag: "PDF",
    subtitle: "Portfolio PDF",
    year: "Current",
    category: "Document",
    role: "Document preview",
    format: "Preview window",
    notes: "Portfolio PDF",
    summary:
      "A document view for the resume download and preview experience.",
    lead: "The current resume PDF is available here for quick review and download.",
    body: "This tab stays simple so the document preview remains the focus.",
    details: [
      { label: "Role", value: "Portfolio Document" },
      { label: "Timeline", value: "Current" },
      { label: "Tools", value: "PDF, Portfolio Layout" }
    ],
    problem: "A resume needs a direct, easy-to-find presentation inside the portfolio.",
    solutionHeading: "Project Solution: Document Preview",
    solutions: [
      { label: "Preview", text: "Loads the resume inside the portfolio interface." },
      { label: "Download", text: "Provides a simple path to save the PDF." },
      { label: "Access", text: "Keeps the document one click away from the site." }
    ],
    benefitsHeading: "Student-Focused Benefits",
    benefits: [
      "Makes the most important career document easy to reach.",
      "Keeps the portfolio and resume visually consistent."
    ],
    monitoringHeading: "Project Monitoring and Control",
    monitoring: [
      "Checked link paths and preview behavior during updates.",
      "Kept the resume tab intentionally lightweight.",
      "Verified the download path after syncing the PDF."
    ],
    challengeHeading: "Challenge Intervention",
    challenge: "Maintained a simple document experience without distracting from the resume itself.",
    futureHeading: "Future Steps",
    future: [
      "Keep the preview synced with the latest resume PDF",
      "Expand with version history if needed"
    ],
    href: "main/resume.pdf",
    linkLabel: "Download Resume",
    linkNote: "Open the current resume PDF.",
    accent: "#0a84ff",
    iconPath: "icons/resume.svg",
    iconAlt: "Resume icon"
  }
};

// Preview videos are optional and only attached to projects that have motion footage available.
const PROJECT_VIDEO_MAP = {
  blobtracker: "assets/videos/blobtracker.mov",
  datamosh: "assets/videos/Datamosh.mov",
  l4vfx: "assets/videos/l4vfx.mov",
  lallsuite: "assets/videos/Lall Suite.mov",
  audiomachine: "assets/videos/audiomachine.mov",
  lanzoid: "assets/videos/lanzoid.mov"
};

// Secondary accents let each project panel mix a second highlight tone into shared UI primitives.
const PROJECT_SECONDARY_ACCENTS = {
  blobtracker: "#ffd6ee",
  datamosh: "#ff9b71",
  l4vfx: "#ff8c66",
  audiomachine: "#c6a4ff",
  lanzoid: "#8be6ff",
  shotbyall: "#ffd84a",
  lallsuite: "#ffc6c2",
  paath: "#ffb15c",
  karebare: "#d7e6ff",
  coala: "#b7f0c3",
  cmp: "#ff8f8f"
};

// School projects and the resume skip autoplay preview media in the shared project window.
const PROJECTS_WITHOUT_PREVIEW = new Set(["paath", "karebare", "coala", "cmp", "resume"]);
const SCHOOL_PROJECT_IDS = new Set(["paath", "karebare", "coala", "cmp"]);
const SCHOOL_PROJECT_CASE_STUDY_MAP = {
  paath: {
    problemPills: ["Meal plans", "Campus spending", "Laundry", "Housing", "Subscriptions"],
    impact: [
      { title: "Financial Literacy", text: "Turns complicated student budgeting into a clearer planning flow." },
      { title: "Budget Awareness", text: "Makes variable spending patterns easier to track across the semester." },
      { title: "Reduced Stress", text: "Helps students feel more confident about daily money decisions." }
    ]
  },
  karebare: {
    problemPills: ["Cyberbullying", "Online etiquette", "Bad actors", "Teen well-being", "Digital safety"],
    impact: [
      { title: "Safer Habits", text: "Guides teenagers toward healthier, more informed online behavior." },
      { title: "Friendly Learning", text: "Uses a gentle tone so complex safety topics stay approachable." },
      { title: "Digital Confidence", text: "Builds awareness around social pressure, risk, and online decision-making." }
    ]
  },
  coala: {
    problemPills: ["Emotional nuance", "Distance", "Passive sharing", "Shared moments", "Customization"],
    impact: [
      { title: "Emotional Clarity", text: "Reduces misunderstanding by giving couples more expressive ways to connect." },
      { title: "Creative Bonding", text: "Moves beyond plain messaging toward richer shared interactions." },
      { title: "Flexible Connection", text: "Supports different communication styles in long-distance relationships." }
    ]
  },
  cmp: {
    problemPills: ["Events", "Artist pages", "Brand rhythm", "Group updates", "Discovery"],
    impact: [
      { title: "Clear Identity", text: "Gives the collective a stronger and more understandable digital presence." },
      { title: "Easier Discovery", text: "Makes updates, music, and community activity easier to find." },
      { title: "Polished Presence", text: "Turns an in-progress concept into a more cohesive web experience." }
    ]
  }
};

const PROJECT_TEXT_TITLE_MAP = {
  "Blob Tracker": "blobtracker",
  Datamosh: "datamosh",
  L4VFX: "l4vfx",
  LALLSUITE: "lallsuite",
  "Audio Machine": "audiomachine",
  Lanzoid: "lanzoid"
};

const SECTION_LABELS = {
  overview: "Overview",
  projects: "Projects",
  "school-projects": "School Projects",
  l4suite: "L4 Suite"
};

const WINDOW_LABELS = {
  finder: "Finder",
  resume: "Resume",
  photoeditor: "Photo Editor",
  about: "About Me",
  contact: "Contact",
  project: "Project"
};

const SINGLE_ACTIVE_WINDOW_NAMES = new Set(["finder", "photoeditor", "resume", "about", "contact"]);
const BACKGROUND_SCROLL_LOCK_WINDOWS = new Set(["finder", "photoeditor", "resume", "about", "contact", "project"]);

const FINDER_TAB_LABELS = {
  overview: "Finder",
  legacy: "Finder · Legacy Visions",
  snapshots: "Finder · Previous Portfolio Snapshot Versions",
  media: "Finder · Media"
};

// Cache the main DOM surfaces once so the rest of the file can stay focused on behavior.
const systemBar = document.querySelector(".system-bar");
const clock = document.getElementById("clock");
const crumb = document.getElementById("system-crumb");
const windowLayer = document.querySelector(".window-layer");
const windows = Array.from(document.querySelectorAll(".window"));
const projectButtons = Array.from(document.querySelectorAll("[data-project]"));
const openWindowButtons = Array.from(document.querySelectorAll("[data-open-window]"));
const scrollButtons = Array.from(document.querySelectorAll("[data-scroll-to]"));
const mobileNavToggleButton = document.querySelector("[data-mobile-nav-toggle]");
const mobileNavCloseButton = document.querySelector("[data-mobile-nav-close]");
const copyButton = document.querySelector("[data-copy-email]");
const projectWindow = document.querySelector('[data-window="project"]');
const photoEditorWindow = document.querySelector('[data-window="photoeditor"]');
const projectTitle = document.querySelector("[data-project-title]");
const projectIcon = document.querySelector("[data-project-icon]");
const projectContent = document.querySelector("[data-project-content]");
const previousProjectButton = document.querySelector("[data-project-prev]");
const nextProjectButton = document.querySelector("[data-project-next]");
const photoEditorFullscreenButton = document.querySelector("[data-photoeditor-fullscreen]");
const photoEditorMinimizeButton = document.querySelector("[data-photoeditor-minimize]");
const finderTabButtons = Array.from(document.querySelectorAll("[data-finder-tab]"));
const finderPanels = Array.from(document.querySelectorAll("[data-finder-panel]"));
const mobileViewport = window.matchMedia("(max-width: 780px)");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const orderedProjectIds = [...new Set(projectButtons.map((button) => button.dataset.project).filter((id) => id && projectData[id]))];

// Keep the desktop state shallow so the window manager stays easy to reason about.
let topWindowZIndex = 20;
let currentProjectId = orderedProjectIds[0] || "";

// The lightweight text file makes it easy to update recurring project content without editing JS objects.
function parseProjectsText(rawText) {
  const lines = rawText.split(/\r?\n/);
  const parsedProjects = {};
  let index = 0;

  while (index < lines.length) {
    const title = lines[index]?.trim();
    const projectId = PROJECT_TEXT_TITLE_MAP[title];

    if (!projectId) {
      index += 1;
      continue;
    }

    index += 1;
    if (lines[index]?.trim() === "Role") index += 1;
    const role = lines[index]?.trim() || "";

    index += 1;
    if (lines[index]?.trim() === "Timeline") index += 1;
    const timeline = lines[index]?.trim() || "";

    index += 1;
    while (index < lines.length && !lines[index].trim()) index += 1;
    if (lines[index]?.trim() === "Tools Used") index += 1;
    while (index < lines.length && !lines[index].trim()) index += 1;

    const tools = [];
    while (index < lines.length) {
      const value = lines[index]?.trim() || "";

      if (!value) {
        index += 1;
        continue;
      }

      if (value === "Summary") {
        index += 1;
        break;
      }

      if (PROJECT_TEXT_TITLE_MAP[value]) break;

      tools.push(value);
      index += 1;
    }

    const summaryParagraphs = [];
    let paragraphLines = [];

    while (index < lines.length) {
      const value = lines[index] || "";
      const trimmed = value.trim();

      if (PROJECT_TEXT_TITLE_MAP[trimmed]) break;

      if (!trimmed) {
        if (paragraphLines.length) {
          summaryParagraphs.push(paragraphLines.join(" "));
          paragraphLines = [];
        }
      } else {
        paragraphLines.push(trimmed);
      }

      index += 1;
    }

    if (paragraphLines.length) {
      summaryParagraphs.push(paragraphLines.join(" "));
    }

    parsedProjects[projectId] = {
      title,
      role,
      timeline,
      tools,
      summaryParagraphs
    };
  }

  return parsedProjects;
}

function hydrateProjectsFromText(rawText) {
  const parsedProjects = parseProjectsText(rawText);

  Object.entries(parsedProjects).forEach(([projectId, parsed]) => {
    const existing = projectData[projectId];
    if (!existing) return;

    const summaryParagraphs = parsed.summaryParagraphs.filter(Boolean);

    projectData[projectId] = {
      ...existing,
      title: parsed.title || existing.title,
      year: parsed.timeline || existing.year,
      role: parsed.role || existing.role,
      details: [
        { label: "Role", value: parsed.role || existing.role || "" },
        { label: "Timeline", value: parsed.timeline || existing.year || "" }
      ].filter((item) => item.value),
      toolList: parsed.tools,
      summaryParagraphs,
      lead: summaryParagraphs[0] || existing.lead || existing.summary || "",
      body: summaryParagraphs.slice(1).join(" "),
      summary: summaryParagraphs.join(" "),
      contentSource: "projects.txt"
    };
  });
}

async function syncProjectsFromText() {
  try {
    const response = await fetch("docs/projects.txt", { cache: "no-store" });
    if (!response.ok) return;

    const rawText = await response.text();
    hydrateProjectsFromText(rawText);
  } catch (error) {
    console.warn("Unable to sync project details from docs/projects.txt.", error);
  }
}

// Basic desktop chrome helpers update the clock and breadcrumb in one place.
// Small utility helpers keep the desktop chrome readable and independent from the window logic below.
function formatClock(date) {
  return date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

function updateClock() {
  if (clock) {
    clock.textContent = formatClock(new Date());
  }
}

function setCrumb(label) {
  if (crumb) {
    crumb.textContent = label;
  }
}

function setCrumbForSection(sectionId) {
  setCrumb(SECTION_LABELS[sectionId] || "Overview");
}

function isMobileViewport() {
  return mobileViewport.matches;
}

function setMobileNavOpen(open) {
  if (!systemBar || !mobileNavToggleButton) return;

  const shouldOpen = Boolean(open) && isMobileViewport();
  systemBar.classList.toggle("is-mobile-nav-open", shouldOpen);
  mobileNavToggleButton.setAttribute("aria-expanded", String(shouldOpen));
}

function closeMobileNav() {
  setMobileNavOpen(false);
}

// Window helpers keep every mac-style panel centered, layered, and easy to reopen.
// Window manager helpers centralize stacking, positioning, and breadcrumb updates for every modal window.
function findWindow(name) {
  return windows.find((node) => node.dataset.window === name) || null;
}

function bringToFront(windowEl) {
  topWindowZIndex += 1;
  windowEl.style.zIndex = String(topWindowZIndex);
}

function positionWindow(windowEl) {
  if (windowEl.classList.contains("is-fullscreen")) {
    windowEl.style.left = "0px";
    windowEl.style.top = "0px";
    windowEl.style.transform = "none";
    return;
  }

  const rect = windowEl.getBoundingClientRect();
  const width = rect.width || windowEl.offsetWidth;
  const height = rect.height || windowEl.offsetHeight;
  const layerWidth = windowLayer?.clientWidth || window.innerWidth;
  const layerHeight = windowLayer?.clientHeight || window.innerHeight;

  windowEl.style.left = `${Math.max(10, (layerWidth - width) / 2)}px`;
  windowEl.style.top = `${Math.max(12, (layerHeight - height) / 2)}px`;
  windowEl.style.transform = "none";
}

function syncPhotoEditorWindowButtons() {
  if (!photoEditorWindow) return;
  const fullscreen = photoEditorWindow.classList.contains("is-fullscreen");
  if (photoEditorFullscreenButton) {
    photoEditorFullscreenButton.hidden = fullscreen;
  }
  if (photoEditorMinimizeButton) {
    photoEditorMinimizeButton.hidden = !fullscreen;
  }
}

function setPhotoEditorFullscreen(enabled) {
  if (!photoEditorWindow) return;

  const shouldFullscreen = Boolean(enabled);
  photoEditorWindow.classList.toggle("is-fullscreen", shouldFullscreen);
  positionWindow(photoEditorWindow);
  syncPhotoEditorWindowButtons();
}

function syncBackgroundScrollLock() {
  const lockBackgroundScroll = windows.some((windowEl) => (
    windowEl.classList.contains("is-open")
    && BACKGROUND_SCROLL_LOCK_WINDOWS.has(windowEl.dataset.window)
  ));

  document.documentElement.classList.toggle("is-window-scroll-locked", lockBackgroundScroll);
  document.body.classList.toggle("is-window-scroll-locked", lockBackgroundScroll);
}

function closeAllWindows(exceptName = "") {
  windows.forEach((windowEl) => {
    if (!windowEl.classList.contains("is-open")) return;
    if (exceptName && windowEl.dataset.window === exceptName) return;
    closeWindow(windowEl, { skipScrollSync: true });
  });

  syncBackgroundScrollLock();
}

function openWindow(name) {
  const windowEl = findWindow(name);
  if (!windowEl) return;

  closeMobileNav();

  if (SINGLE_ACTIVE_WINDOW_NAMES.has(name)) {
    closeAllWindows(name);
  }

  windowEl.classList.add("is-open");
  windowEl.setAttribute("aria-hidden", "false");
  bringToFront(windowEl);
  positionWindow(windowEl);
  syncBackgroundScrollLock();

  if (name === "finder") {
    setFinderTab("overview");
  } else if (WINDOW_LABELS[name] && name !== "project") {
    setCrumb(WINDOW_LABELS[name]);
  }
}

function closeWindow(windowEl, options = {}) {
  if (!windowEl) return;
  if (windowEl.dataset.window === "photoeditor") {
    setPhotoEditorFullscreen(false);
  }
  windowEl.classList.remove("is-open");
  windowEl.setAttribute("aria-hidden", "true");
  if (!options.skipScrollSync) {
    syncBackgroundScrollLock();
  }
}

// Project window rendering stays string-based so each app can open in the shared modal.
// Project window rendering stays string-based so each app can open in the shared modal.
function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderBullets(items, className) {
  if (!items?.length) return "";

  return `
    <ul class="${className}">
      ${items
        .map((item) => (
          typeof item === "string"
            ? `<li>${escapeHtml(item)}</li>`
            : `<li><strong>${escapeHtml(item.label)}:</strong> ${escapeHtml(item.text)}</li>`
        ))
        .join("")}
    </ul>
  `;
}

function renderDetails(details) {
  if (!details?.length) return "";

  return `
    <div class="project-case__details">
      ${details.map((item) => `
        <div class="project-case__detail">
          <span>${escapeHtml(item.label)}</span>
          <strong>${escapeHtml(item.value)}</strong>
        </div>
      `).join("")}
    </div>
  `;
}

function renderSolutions(items) {
  if (!items?.length) return "";

  return `
    <div class="project-case__solutions">
      ${items.map((item) => `
        <div class="project-case__solution">
          <strong>${escapeHtml(item.label)}:</strong>
          <span>${escapeHtml(item.text)}</span>
        </div>
      `).join("")}
    </div>
  `;
}

function getProjectVideoPath(projectId) {
  return PROJECT_VIDEO_MAP[projectId] || "";
}

function renderSignalPills(items) {
  if (!items?.length) return "";

  return `
    <div class="project-case__signals">
      ${items.map((item) => `<span class="project-case__signal">${escapeHtml(item)}</span>`).join("")}
    </div>
  `;
}

function renderProjectNarrative(data) {
  const paragraphs = getProjectNarrativeParagraphs(data);

  return paragraphs
    .map((paragraph, index) => `
      <p class="${index === 0 ? "project-case__lead" : "project-case__body"}">${escapeHtml(paragraph)}</p>
    `)
    .join("");
}

function getProjectNarrativeParagraphs(data) {
  return data.summaryParagraphs?.length
    ? data.summaryParagraphs
    : [data.lead || data.summary || "", data.body || data.notes || ""].filter(Boolean);
}

function getProjectOverviewItems(data) {
  const roleValue = data.role || data.details?.find((item) => item.label === "Role")?.value || "";
  const timelineValue = data.year || data.details?.find((item) => item.label === "Timeline")?.value || "";
  const focusValue = data.linkNote || data.notes || data.category || data.summary || "";

  return [
    { label: "Role", value: roleValue },
    { label: "Timeline", value: timelineValue },
    { label: "Focus", value: focusValue }
  ].filter((item) => item.value);
}

function getProjectFeatureItems(data) {
  if (data.solutions?.length) return data.solutions.slice(0, 6);

  if (data.benefits?.length) {
    return data.benefits.slice(0, 4).map((item, index) => ({
      label: `Feature ${index + 1}`,
      text: item
    }));
  }

  if (data.monitoring?.length) {
    return data.monitoring.slice(0, 4).map((item, index) => ({
      label: `Feature ${index + 1}`,
      text: item
    }));
  }

  return [];
}

function renderProjectOverviewCard(data) {
  const items = getProjectOverviewItems(data);
  if (!items.length) return "";

  return `
    <div class="project-case__overview-list">
      ${items.map((item) => `
        <div class="project-case__overview-item">
          <span class="project-case__overview-label">${escapeHtml(item.label)}</span>
          <p>${escapeHtml(item.value)}</p>
        </div>
      `).join("")}
    </div>
  `;
}

function renderProjectFeatureCard(data) {
  const items = getProjectFeatureItems(data);
  if (!items.length) return "";

  return `
    <div class="project-case__feature-grid">
      ${items.map((item) => `
        <div class="project-case__feature-item">
          <strong>${escapeHtml(item.label)}</strong>
          <p>${escapeHtml(item.text)}</p>
        </div>
      `).join("")}
    </div>
  `;
}

function renderProjectSummaryCard(data) {
  const paragraphs = getProjectNarrativeParagraphs(data);
  if (!paragraphs.length) return "";

  return paragraphs
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join("");
}

// Compact project pages use one spotlight hero plus a dense stats row underneath it.
function renderCompactProjectSpotlight(data, heroMedia, showHeroMedia, linkTarget, linkRel) {
  const spotlightText = data.linkNote || data.notes || data.category || "";
  const spotlightSignals = [data.format, data.linkNote || data.category, "Browser-Based"].filter(Boolean).slice(0, 3);

  return `
    <div class="project-case__spotlight">
      <div class="project-case__spotlight-copy">
        <p class="project-case__spotlight-kicker"><span></span>${escapeHtml(data.title || "Project")}</p>
        <h3 class="project-case__spotlight-title">${escapeHtml((data.title || "Project").toUpperCase())} <span>${escapeHtml((data.tag || data.category || "Project").toUpperCase())}</span></h3>
        ${spotlightText ? `<p class="project-case__spotlight-text">${escapeHtml(spotlightText)}</p>` : ""}
        ${renderSignalPills(spotlightSignals)}
        <div class="project-case__actions project-case__actions--spotlight">
          <a class="project-case__cta project-case__cta--spotlight" href="${escapeHtml(data.href || "#")}" target="${linkTarget}" rel="${linkRel}">${escapeHtml(data.linkLabel || "Try Tool")}</a>
        </div>
      </div>

      <div class="project-case__spotlight-media${showHeroMedia ? "" : " project-case__spotlight-media--fallback"}">
        ${showHeroMedia ? heroMedia : `<div class="project-case__video project-case__video--fallback" aria-hidden="true"></div>`}
        <span class="project-case__video-label">Live Preview // ${escapeHtml((data.tag || data.category || "Project").toUpperCase())}</span>
        <span class="project-case__video-logo">
          <img src="${escapeHtml(data.iconPath)}" alt="${escapeHtml(data.iconAlt)}" loading="lazy">
        </span>
      </div>
    </div>
  `;
}

function renderSchoolStatCards(details) {
  if (!details?.length) return "";

  return `
    <div class="project-case__school-stats">
      ${details.map((item) => `
        <div class="project-case__school-stat">
          <span>${escapeHtml(item.label)}</span>
          <strong>${escapeHtml(item.value)}</strong>
        </div>
      `).join("")}
    </div>
  `;
}

function renderSchoolProblemPills(projectId) {
  const pills = SCHOOL_PROJECT_CASE_STUDY_MAP[projectId]?.problemPills || [];
  if (!pills.length) return "";

  return `
    <div class="project-case__school-pills">
      ${pills.map((pill) => `<span class="project-case__school-pill">${escapeHtml(pill)}</span>`).join("")}
    </div>
  `;
}

function renderSchoolFeatureRows(items) {
  if (!items?.length) return "";

  return `
    <div class="project-case__school-features">
      ${items.map((item) => `
        <div class="project-case__school-feature">
          <span class="project-case__school-feature-icon" aria-hidden="true">&#9632;</span>
          <div class="project-case__school-feature-copy">
            <strong>${escapeHtml(item.label)}</strong>
            <p>${escapeHtml(item.text)}</p>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

function renderSchoolImpactCards(projectId, data) {
  const cards = SCHOOL_PROJECT_CASE_STUDY_MAP[projectId]?.impact
    || (data.benefits || []).map((item, index) => ({
      title: `Impact ${index + 1}`,
      text: item
    }));

  if (!cards.length) return "";

  return `
    <div class="project-case__school-impact-grid">
      ${cards.map((item) => `
        <div class="project-case__school-impact-card">
          <span class="project-case__school-impact-icon" aria-hidden="true">&#10003;</span>
          <strong>${escapeHtml(item.title)}</strong>
          <p>${escapeHtml(item.text)}</p>
        </div>
      `).join("")}
    </div>
  `;
}

function renderSchoolProjectTemplate(projectId, data) {
  const category = data.category || data.tag || "Project";
  const signalItems = [data.format, data.role, data.year].filter(Boolean);
  const paragraphs = data.summaryParagraphs?.length
    ? data.summaryParagraphs
    : [data.lead || data.summary || "", data.body || data.notes || ""].filter(Boolean);
  const heroLead = paragraphs[0] || data.lead || data.summary || "";
  const heroBody = paragraphs.slice(1).join(" ") || data.body || data.notes || "";
  const linkTarget = data.href?.includes("resume.pdf") ? "_self" : "_blank";
  const linkRel = linkTarget === "_blank" ? "noreferrer" : "";

  return `
    <article class="project-case project-case--school">
      <section class="project-case__hero project-case__hero--school">
        <div class="project-case__story project-case__story--school">
          <p class="project-case__eyebrow"><span class="project-case__eyebrow-dot"></span>${escapeHtml(data.tag || category)}</p>
          <h2 class="project-case__headline">
            <span class="project-case__headline-main">${escapeHtml((data.title || "Project").toUpperCase())}</span>
            <span class="project-case__headline-accent">${escapeHtml(category.toUpperCase())}</span>
          </h2>
          <div class="project-case__school-copy">
            <p class="project-case__lead">${escapeHtml(heroLead)}</p>
            ${heroBody ? `<p class="project-case__body">${escapeHtml(heroBody)}</p>` : ""}
          </div>
          <div class="project-case__school-meta">
            ${renderSignalPills(signalItems)}
            <div class="project-case__actions">
              <a class="project-case__cta" href="${escapeHtml(data.href || "#")}" target="${linkTarget}" rel="${linkRel}">${escapeHtml(data.linkLabel || "Open Project")}</a>
            </div>
          </div>
        </div>
      </section>

      <section class="project-case__school-layout">
        <div class="project-case__panel project-case__panel--school-overview">
          <h3>Project Overview</h3>
          ${renderSchoolStatCards(data.details)}
        </div>

        <div class="project-case__school-stack">
          <div class="project-case__panel project-case__panel--school-problem">
            <h3>Problem</h3>
            <p class="project-case__school-problem-statement">${escapeHtml(data.problem || data.notes || "")}</p>
            ${heroBody ? `<p class="project-case__school-problem-support">${escapeHtml(heroBody)}</p>` : ""}
            ${renderSchoolProblemPills(projectId)}
          </div>

          <div class="project-case__panel project-case__panel--highlight project-case__panel--school-solution">
            <h3>Solution</h3>
            ${renderSchoolFeatureRows(data.solutions)}
          </div>

          <div class="project-case__panel project-case__panel--school-impact">
            <h3>Impact</h3>
            ${renderSchoolImpactCards(projectId, data)}
          </div>
        </div>
      </section>
    </article>
  `;
}

function renderProjectInfoGrid(projectId, data) {
  if (SCHOOL_PROJECT_IDS.has(projectId)) {
    return `
      <section class="project-case__info-grid">
        <div class="project-case__panel">
          <h3>Overview</h3>
          ${renderDetails(data.details)}
        </div>

        <div class="project-case__panel project-case__panel--highlight">
          <h3>${escapeHtml(data.solutionHeading || "Solution")}</h3>
          ${renderSolutions(data.solutions)}
        </div>

        <div class="project-case__panel">
          <h3>Problem</h3>
          <p>${escapeHtml(data.problem || data.notes || "")}</p>
        </div>

        <div class="project-case__panel">
          <h3>${escapeHtml(data.benefitsHeading || "Benefits")}</h3>
          ${renderBullets(data.benefits, "project-case__list")}
        </div>
      </section>
    `;
  }

  if (data.contentSource === "projects.txt") {
    const panels = [];

    if (getProjectOverviewItems(data).length) {
      panels.push(`
        <div class="project-case__panel project-case__panel--project-overview">
          <h3>Overview</h3>
          ${renderProjectOverviewCard(data)}
        </div>
      `);
    }

    if (data.toolList?.length) {
      panels.push(`
        <div class="project-case__panel project-case__panel--project-tools">
          <h3>Tools Used</h3>
          ${renderBullets(data.toolList, "project-case__list project-case__list--tools")}
        </div>
      `);
    }

    if (getProjectFeatureItems(data).length) {
      panels.push(`
        <div class="project-case__panel project-case__panel--project-features">
          <h3>Key Features</h3>
          ${renderProjectFeatureCard(data)}
        </div>
      `);
    }

    if (getProjectNarrativeParagraphs(data).length) {
      panels.push(`
        <div class="project-case__panel project-case__panel--project-summary">
          <h3>Summary</h3>
          ${renderProjectSummaryCard(data)}
        </div>
      `);
    }

    if (!panels.length) return "";

    return `
      <section class="project-case__info-grid project-case__info-grid--triple">
        ${panels.join("")}
      </section>
    `;
  }

  return `
    <section class="project-case__info-grid">
      <div class="project-case__panel">
        <h3>Overview</h3>
        ${renderDetails(data.details)}
      </div>

      <div class="project-case__panel project-case__panel--highlight">
        <h3>${escapeHtml(data.solutionHeading || "Solution")}</h3>
        ${renderSolutions(data.solutions)}
      </div>

      <div class="project-case__panel">
        <h3>Problem</h3>
        <p>${escapeHtml(data.problem || data.notes || "")}</p>
      </div>

      <div class="project-case__panel">
        <h3>${escapeHtml(data.benefitsHeading || "Benefits")}</h3>
        ${renderBullets(data.benefits, "project-case__list")}
      </div>

      <div class="project-case__panel">
        <h3>${escapeHtml(data.monitoringHeading || "Monitoring")}</h3>
        ${renderBullets(data.monitoring, "project-case__list")}
      </div>

      <div class="project-case__panel">
        <h3>${escapeHtml(data.futureHeading || "Future Steps")}</h3>
        ${renderBullets(data.future, "project-case__list")}
      </div>

      <div class="project-case__panel project-case__panel--wide">
        <h3>Notes</h3>
        <p>${escapeHtml(data.linkNote || data.notes || data.summary || "")}</p>
        <p><strong>Challenge:</strong> ${escapeHtml(data.challenge || "")}</p>
      </div>
    </section>
  `;
}

function renderProjectTemplate(projectId, data) {
  if (SCHOOL_PROJECT_IDS.has(projectId)) {
    return renderSchoolProjectTemplate(projectId, data);
  }

  const linkTarget = data.href?.includes("resume.pdf") ? "_self" : "_blank";
  const linkRel = linkTarget === "_blank" ? "noreferrer" : "";
  const category = data.category || data.tag || "Project";
  const signalItems = [data.format, data.role, data.year].filter(Boolean);
  const usesSpotlightOnly = data.contentSource === "projects.txt";
  const isCompactProject = data.contentSource === "projects.txt" || PROJECTS_WITHOUT_PREVIEW.has(projectId);
  const videoPath = getProjectVideoPath(projectId);
  const showHeroMedia = !PROJECTS_WITHOUT_PREVIEW.has(projectId);
  const heroMedia = videoPath
    ? `
          <video
            class="project-case__video"
            src="${escapeHtml(videoPath)}"
            autoplay
            muted
            loop
            playsinline
            webkit-playsinline
            disablepictureinpicture
            disableremoteplayback
            preload="auto"
            aria-hidden="true"
            data-project-hero-video
          ></video>
    `
    : `<div class="project-case__video project-case__video--fallback" aria-hidden="true"></div>`;

  return `
    <article class="project-case${isCompactProject ? " project-case--compact" : ""}${showHeroMedia ? "" : " project-case--no-preview"}${SCHOOL_PROJECT_IDS.has(projectId) ? " project-case--school" : ""}">
      <section class="project-case__hero${usesSpotlightOnly ? " project-case__hero--spotlight-only" : ""}">
        ${usesSpotlightOnly ? renderCompactProjectSpotlight(data, heroMedia, showHeroMedia, linkTarget, linkRel) : `
        <div class="project-case__story">
          <p class="project-case__eyebrow"><span class="project-case__eyebrow-dot"></span>${escapeHtml(data.tag || category)}</p>
          <h2 class="project-case__headline">
            <span class="project-case__headline-main">${escapeHtml((data.title || "Project").toUpperCase())}</span>
            <span class="project-case__headline-accent">${escapeHtml(category.toUpperCase())}</span>
          </h2>
          ${isCompactProject ? "" : renderProjectNarrative(data)}
          ${renderSignalPills(signalItems)}
          <div class="project-case__actions">
            <a class="project-case__cta" href="${escapeHtml(data.href || "#")}" target="${linkTarget}" rel="${linkRel}">${escapeHtml(data.linkLabel || "Open Project")}</a>
          </div>
        </div>

        ${showHeroMedia ? `
        <div class="project-case__hero-media">
          ${heroMedia}
          <span class="project-case__video-label">Live Preview // ${escapeHtml((data.tag || category).toUpperCase())}</span>
          <span class="project-case__video-logo">
            <img src="${escapeHtml(data.iconPath)}" alt="${escapeHtml(data.iconAlt)}" loading="lazy">
          </span>
        </div>
        ` : ""}
        `}
      </section>

      ${renderProjectInfoGrid(projectId, data)}
    </article>
  `;
}

function getNextProjectId(projectId) {
  if (!orderedProjectIds.length) return "";

  const currentIndex = orderedProjectIds.indexOf(projectId);
  if (currentIndex < 0) return orderedProjectIds[0];

  return orderedProjectIds[(currentIndex + 1) % orderedProjectIds.length];
}

function getPreviousProjectId(projectId) {
  if (!orderedProjectIds.length) return "";

  const currentIndex = orderedProjectIds.indexOf(projectId);
  if (currentIndex < 0) return orderedProjectIds[orderedProjectIds.length - 1];

  return orderedProjectIds[(currentIndex - 1 + orderedProjectIds.length) % orderedProjectIds.length];
}

function syncProjectNavigationButtons() {
  if (previousProjectButton) {
    const previousProjectId = getPreviousProjectId(currentProjectId);
    const previousProject = projectData[previousProjectId];
    previousProjectButton.disabled = !previousProjectId;
    previousProjectButton.title = previousProject ? `Back: ${previousProject.title}` : "Previous project";
  }

  if (nextProjectButton) {
    const nextProjectId = getNextProjectId(currentProjectId);
    const nextProject = projectData[nextProjectId];
    nextProjectButton.disabled = !nextProjectId;
    nextProjectButton.title = nextProject ? `Next: ${nextProject.title}` : "Next project";
  }
}

// App surfaces inherit their accent color from project data to keep the desktop cohesive.
function applyProjectAccent(target, accent) {
  if (target && accent) {
    target.style.setProperty("--project-accent", accent);
  }
}

function applyProjectTheme(target, key, data) {
  if (!target || !data) return;

  applyProjectAccent(target, data.accent);
  target.style.setProperty("--project-accent-2", PROJECT_SECONDARY_ACCENTS[key] || data.accent || "#ffffff");
}

function syncProjectAccents() {
  Array.from(document.querySelectorAll("[data-project], [data-app-icon]")).forEach((node) => {
    const key = node.dataset.project || node.dataset.appIcon;
    const data = projectData[key];
    if (!data) return;

    const surface = node.closest(".app-tile, .project-preview, .project-window, .window") || node;
    applyProjectTheme(surface, key, data);
  });
}

// Project hydration updates the shared window shell without rebuilding the desktop around it.
function populateProject(projectId) {
  const data = projectData[projectId];
  if (!data || !projectIcon || !projectContent) return;

  currentProjectId = projectId;

  if (projectWindow) {
    applyProjectTheme(projectWindow, projectId, data);
  }

  if (projectTitle) {
    projectTitle.textContent = data.title || "Project";
  }

  projectIcon.innerHTML = `<img src="${data.iconPath}" alt="${data.iconAlt}" loading="lazy">`;
  projectContent.innerHTML = renderProjectTemplate(projectId, data);
  const heroVideo = projectContent.querySelector("[data-project-hero-video]");
  if (heroVideo) {
    ensureAutoplayVideo(heroVideo);
    ["loadeddata", "canplay", "canplaythrough"].forEach((eventName) => {
      heroVideo.addEventListener(eventName, () => ensureAutoplayVideo(heroVideo));
    });
  }
  syncProjectNavigationButtons();
}

function populateAppIcons() {
  Array.from(document.querySelectorAll("[data-app-icon]")).forEach((slot) => {
    const data = projectData[slot.dataset.appIcon];
    if (!data) return;

    const surface = slot.closest(".app-tile, .project-preview, .project-window") || slot;
    applyProjectTheme(surface, slot.dataset.appIcon, data);
    slot.innerHTML = `<img src="${data.iconPath}" alt="${data.iconAlt}" loading="lazy">`;
  });
}

// Desktop tiles are upgraded in-place so the HTML can stay lightweight and content-focused.
function upgradeProjectTiles() {
  const floatingLogoProjects = new Set(["paath", "karebare", "cmp", "coala"]);

  projectButtons.forEach((button) => {
    if (button.hasAttribute("data-static-logo")) return;

    const projectId = button.dataset.project;
    const data = projectData[projectId];
    if (!data) return;

    const mediaTag = data.tag || data.category || "Project";
    const videoPath = getProjectVideoPath(projectId);
    const hasVideo = Boolean(videoPath);

    applyProjectTheme(button, projectId, data);
    button.classList.add(hasVideo ? "app-tile--video" : "app-tile--color");
    if (!hasVideo && floatingLogoProjects.has(projectId)) {
      button.classList.add("app-tile--floating-logo");
    }
    button.setAttribute("aria-label", `${data.title}. Open project details.`);
    button.innerHTML = `
      <span class="app-tile__media ${hasVideo ? "app-tile__media--video" : "app-tile__media--color"}">
        ${hasVideo ? `
        <video
          class="app-tile__video"
          src="${escapeHtml(videoPath)}"
          autoplay
          muted
          loop
          playsinline
          webkit-playsinline
          disablepictureinpicture
          disableremoteplayback
          preload="auto"
          aria-hidden="true"
          data-project-preview
        ></video>` : `<span class="app-tile__color-fill" aria-hidden="true"></span>`}
        <span class="app-tile__badge">${escapeHtml(mediaTag.toUpperCase())}</span>
        <span class="app-tile__logo" data-app-icon="${escapeHtml(projectId)}"></span>
        <span class="app-tile__copy">
          <span class="app-tile__title">${escapeHtml(data.title)}</span>
          <span class="app-tile__meta">${escapeHtml(data.subtitle || data.category || data.tag || "Project preview")}</span>
        </span>
      </span>
    `;
  });
}

function ensureAutoplayVideo(video) {
  if (!video) return;

  video.muted = true;
  video.defaultMuted = true;
  video.volume = 0;
  video.loop = true;
  video.playsInline = true;
  video.autoplay = true;
  video.controls = false;
  video.disablePictureInPicture = true;
  video.disableRemotePlayback = true;
  video.setAttribute("muted", "");
  video.setAttribute("autoplay", "");
  video.setAttribute("loop", "");
  video.setAttribute("playsinline", "");
  video.setAttribute("webkit-playsinline", "");
  video.setAttribute("disablepictureinpicture", "");
  video.setAttribute("disableremoteplayback", "");
  video.setAttribute("preload", "auto");
  video.removeAttribute("controls");
  video.tabIndex = -1;

  const playPromise = video.play();
  if (playPromise?.catch) {
    playPromise.catch(() => {});
  }
}

function bindGlobalAutoplayVideos() {
  const autoplayVideos = Array.from(document.querySelectorAll("video[autoplay]"));

  autoplayVideos.forEach((video) => {
    ensureAutoplayVideo(video);
    ["loadeddata", "canplay", "canplaythrough"].forEach((eventName) => {
      video.addEventListener(eventName, () => ensureAutoplayVideo(video));
    });
  });

  window.addEventListener("load", () => autoplayVideos.forEach((video) => ensureAutoplayVideo(video)));
  window.addEventListener("pageshow", () => autoplayVideos.forEach((video) => ensureAutoplayVideo(video)));
  document.addEventListener("intro:complete", () => autoplayVideos.forEach((video) => ensureAutoplayVideo(video)));
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) return;
    autoplayVideos.forEach((video) => ensureAutoplayVideo(video));
  });
}

// Tile previews stay opt-in and pointer-driven so the main desktop grid feels lightweight on load.
function startProjectTilePreview(button) {
  button.classList.add("is-previewing");
}

function stopProjectTilePreview(button) {
  button.classList.remove("is-previewing");
}

function bindProjectTilePreviews() {
  const allPreviewVideos = [];

  projectButtons.forEach((button) => {
    const video = button.querySelector("[data-project-preview]");
    if (video) {
      allPreviewVideos.push(video);
      ensureAutoplayVideo(video);
      ["loadeddata", "canplay", "canplaythrough"].forEach((eventName) => {
        video.addEventListener(eventName, () => ensureAutoplayVideo(video));
      });
    }

    button.addEventListener("mouseenter", () => startProjectTilePreview(button));
    button.addEventListener("focus", () => startProjectTilePreview(button));
    button.addEventListener("mouseleave", () => stopProjectTilePreview(button));
    button.addEventListener("blur", () => stopProjectTilePreview(button));
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) return;
    allPreviewVideos.forEach((video) => ensureAutoplayVideo(video));
  });

  window.addEventListener("load", () => allPreviewVideos.forEach((video) => ensureAutoplayVideo(video)));
  window.addEventListener("pageshow", () => allPreviewVideos.forEach((video) => ensureAutoplayVideo(video)));
  document.addEventListener("intro:complete", () => allPreviewVideos.forEach((video) => ensureAutoplayVideo(video)));
}

function openProject(projectId) {
  populateProject(projectId);
  openWindow("project");
}

// Navigation helpers support both section scrolling and opening windows from shared buttons.
function scrollToSection(sectionId) {
  closeMobileNav();

  const section = document.getElementById(sectionId);
  if (!section) {
    if (WINDOW_LABELS[sectionId]) openWindow(sectionId);
    return;
  }

  setCrumbForSection(sectionId);
  section.scrollIntoView({
    behavior: reducedMotion ? "auto" : "smooth",
    block: "start"
  });
}

function setFinderTab(tabName) {
  finderTabButtons.forEach((button) => {
    const active = button.dataset.finderTab === tabName;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });

  finderPanels.forEach((panel) => {
    const active = panel.dataset.finderPanel === tabName;
    panel.classList.toggle("is-active", active);
    panel.hidden = !active;
  });

  setCrumb(FINDER_TAB_LABELS[tabName] || WINDOW_LABELS.finder);
}

function getGridColumns(grid) {
  if (!grid) return 1;
  return Math.max(1, window.getComputedStyle(grid).gridTemplateColumns.split(" ").filter(Boolean).length);
}

function moveAppFocus(button, direction) {
  const grid = button.closest(".app-grid");
  if (!grid) return;

  const items = Array.from(grid.querySelectorAll(".app-tile"));
  const currentIndex = items.indexOf(button);
  if (currentIndex < 0) return;

  const columns = getGridColumns(grid);
  const offsetMap = { right: 1, left: -1, down: columns, up: -columns };
  const nextIndex = Math.max(0, Math.min(items.length - 1, currentIndex + (offsetMap[direction] || 0)));

  items[nextIndex]?.focus();
}

// Event wiring is grouped near the end so setup reads top-to-bottom like an app bootstrap.
// Interaction bindings are grouped so the initialization step stays easy to audit later.
function bindProjectButtons() {
  projectButtons.forEach((button) => {
    button.addEventListener("click", () => {
      openProject(button.dataset.project);
      const sectionId = button.closest("section[id]")?.id || "projects";
      setCrumbForSection(sectionId);
    });

    button.addEventListener("keydown", (event) => {
      const keyMap = {
        ArrowRight: "right",
        ArrowLeft: "left",
        ArrowDown: "down",
        ArrowUp: "up"
      };

      const direction = keyMap[event.key];
      if (!direction) return;
      event.preventDefault();
      moveAppFocus(button, direction);
    });
  });
}

function bindNavigationButtons() {
  openWindowButtons.forEach((button) => {
    button.addEventListener("click", () => openWindow(button.dataset.openWindow));
  });

  scrollButtons.forEach((button) => {
    button.addEventListener("click", () => scrollToSection(button.dataset.scrollTo));
  });

  finderTabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setFinderTab(button.dataset.finderTab);
    });
  });

  mobileNavToggleButton?.addEventListener("click", () => {
    const nextOpenState = !systemBar?.classList.contains("is-mobile-nav-open");
    setMobileNavOpen(nextOpenState);
  });

  mobileNavCloseButton?.addEventListener("click", () => {
    closeMobileNav();
  });

  document.addEventListener("click", (event) => {
    if (!isMobileViewport()) return;
    if (!systemBar?.classList.contains("is-mobile-nav-open")) return;
    if (event.target instanceof Node && systemBar.contains(event.target)) return;
    closeMobileNav();
  });
}

function bindDraggableWindows() {
  windows.forEach((windowEl) => {
    windowEl.querySelector("[data-close]")?.addEventListener("click", () => closeWindow(windowEl));
    const titlebar = windowEl.querySelector(".window__bar");
    if (!titlebar) return;

    let dragging = false;
    let startX = 0;
    let startY = 0;
    let originLeft = 0;
    let originTop = 0;

    titlebar.addEventListener("pointerdown", (event) => {
      if (event.target.closest("button") || event.target.closest("a")) return;

      dragging = true;
      bringToFront(windowEl);
      originLeft = Number.parseFloat(windowEl.style.left || "0") || 0;
      originTop = Number.parseFloat(windowEl.style.top || "0") || 0;
      startX = event.clientX;
      startY = event.clientY;
      titlebar.setPointerCapture(event.pointerId);
    });

    titlebar.addEventListener("pointermove", (event) => {
      if (!dragging) return;

      windowEl.style.left = `${Math.max(10, originLeft + (event.clientX - startX))}px`;
      windowEl.style.top = `${Math.max(12, originTop + (event.clientY - startY))}px`;
      windowEl.style.transform = "none";
    });

    titlebar.addEventListener("pointerup", () => {
      dragging = false;
    });

    titlebar.addEventListener("pointercancel", () => {
      dragging = false;
    });

    windowEl.addEventListener("pointerdown", () => bringToFront(windowEl));
  });
}

// Utility actions cover cross-window navigation, clipboard copy, and photo-editor window sizing.
function bindUtilityActions() {
  previousProjectButton?.addEventListener("click", () => {
    const previousProjectId = getPreviousProjectId(currentProjectId);
    if (!previousProjectId) return;

    populateProject(previousProjectId);
    if (projectWindow) bringToFront(projectWindow);
    setCrumbForSection("projects");
  });

  nextProjectButton?.addEventListener("click", () => {
    const nextProjectId = getNextProjectId(currentProjectId);
    if (!nextProjectId) return;

    populateProject(nextProjectId);
    if (projectWindow) bringToFront(projectWindow);
    setCrumbForSection("projects");
  });

  copyButton?.addEventListener("click", async () => {
    const email = "all266@cornell.edu";

    try {
      await navigator.clipboard.writeText(email);
      copyButton.textContent = "Copied";
    } catch {
      copyButton.textContent = email;
    }

    window.setTimeout(() => {
      copyButton.textContent = "Copy Email";
    }, 1600);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;

    if (systemBar?.classList.contains("is-mobile-nav-open")) {
      closeMobileNav();
      return;
    }

    const topOpenWindow = windows
      .filter((windowEl) => windowEl.classList.contains("is-open"))
      .sort((a, b) => Number.parseInt(b.style.zIndex || "0", 10) - Number.parseInt(a.style.zIndex || "0", 10))[0];

    if (topOpenWindow) closeWindow(topOpenWindow);
  });

  window.addEventListener("resize", () => {
    if (!isMobileViewport()) {
      closeMobileNav();
    }

    windows
      .filter((windowEl) => windowEl.classList.contains("is-open"))
      .forEach((windowEl) => positionWindow(windowEl));
  });

  photoEditorFullscreenButton?.addEventListener("click", () => {
    setPhotoEditorFullscreen(true);
    if (photoEditorWindow) bringToFront(photoEditorWindow);
  });

  photoEditorMinimizeButton?.addEventListener("click", () => {
    setPhotoEditorFullscreen(false);
    if (photoEditorWindow) bringToFront(photoEditorWindow);
  });
}

// Initialization wires the desktop in one pass after project text content has been merged in.
async function initializePortfolio() {
  await syncProjectsFromText();

  upgradeProjectTiles();
  populateAppIcons();
  syncProjectAccents();
  bindProjectButtons();
  bindProjectTilePreviews();
  bindGlobalAutoplayVideos();
  bindNavigationButtons();
  bindDraggableWindows();
  bindUtilityActions();
  setFinderTab("overview");
  updateClock();
  setCrumbForSection("overview");
  syncBackgroundScrollLock();
  syncPhotoEditorWindowButtons();
  window.setInterval(updateClock, 30_000);
}

initializePortfolio();

function revealDesktop() {
  document.body.classList.add("is-ready");
}

if (window.__introPending) {
  document.addEventListener("intro:complete", () => {
    window.requestAnimationFrame(revealDesktop);
  }, { once: true });
} else {
  window.requestAnimationFrame(revealDesktop);
}
