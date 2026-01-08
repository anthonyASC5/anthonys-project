import React, { useState, useEffect, useRef } from 'react';
import {
  KareBareProject,
  PaathProject,
  SliceGeistProject,
  DishcraftProject,
  CoalaProject,
  CmpProject
} from './Projects';
import { Gallery } from './Gallery';
import { DitherMachine } from './DitherMachine';

/** --- TYPES --- **/

type ViewType = 'favorites' | 'projects' | 'brand' | 'resume' | 'readme' | 'paath' | 'slicegeist' | 'dishcraft' | 'karebare' | 'coala' | 'cmp' | 'me' | 'gallery' | 'dither';

interface ProjectInfo {
  id: ViewType;
  label: string;
  subLabel: string;
  icon?: React.ReactNode;
  img?: string;
  url: string;
  bg?: string;
}

const PROJECTS: ProjectInfo[] = [
  { id: 'paath', label: 'Paath', subLabel: 'App', url: 'paath.cornell.edu', icon: <span className="text-4xl">💵</span>, bg: 'bg-transparent' },
  { id: 'slicegeist', label: 'SliceGeist', subLabel: 'Game', url: 'slicegeist.ghost-train.io', img: 'https://minecraft.wiki/images/Ghast_JE2_BE2.png', bg: 'bg-transparent' },
  { id: 'dishcraft', label: 'Dishcraft', subLabel: 'AI', url: 'dishcraft.kitchen.ai', img: 'https://minecraft.wiki/images/Raw_Beef_JE3_BE2.png', bg: 'bg-transparent' },
  { id: 'karebare', label: 'KareBare', subLabel: 'Edu', url: 'karebare.edu', icon: <span className="text-4xl">🐻</span>, bg: 'bg-transparent' },
  { id: 'coala', label: 'Coala', subLabel: 'LDR', url: 'coala.ldr', icon: <span className="text-4xl">🐨</span>, bg: 'bg-transparent' },
  { id: 'cmp', label: 'Music', subLabel: 'Web', url: 'cornellmusicproduction.com', icon: <span className="text-4xl">💿</span>, bg: 'bg-transparent' },
];

/** --- ICONS --- **/

const FolderIcon = ({ color = "#60c5f8" }: { color?: string }) => (
  <div className="relative w-20 h-16 transition-transform group-hover:scale-105">
    <div className="absolute bottom-0 left-0 w-full h-[85%] rounded-lg shadow-sm" style={{ backgroundColor: color, opacity: 0.8 }}></div>
    <div className="absolute top-0 left-0 w-8 h-4 rounded-t-md" style={{ backgroundColor: color }}></div>
    <div className="absolute bottom-0 left-0 w-full h-[75%] rounded-lg border-t border-white/30 shadow-md" style={{ backgroundColor: color }}></div>
  </div>
);

const LinkedInIcon = () => (
  <div className="w-20 h-20 bg-[#0077b5] rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105">
    <span className="text-white font-bold text-4xl mb-1">in</span>
  </div>
);

const AppIconWrapper = ({ children, bg = "bg-transparent" }: { children: React.ReactNode, bg?: string }) => (
  <div className={`w-20 h-20 ${bg} rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 overflow-hidden`}>
    {children}
  </div>
);

/** --- REUSABLE ATOMS --- **/

interface WindowProps {
  title?: string;
  children: React.ReactNode;
  onClose: () => void;
  type?: 'finder' | 'safari' | 'preview';
  url?: string;
  width?: string;
  height?: string;
  bgOverride?: string;
}

const Window: React.FC<WindowProps> = ({ title, children, onClose, type = 'finder', url, width = '800px', height = '85vh', bgOverride }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartPos = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    dragStartPos.current = { x: e.clientX - pos.x, y: e.clientY - pos.y };
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      setPos({ x: e.clientX - dragStartPos.current.x, y: e.clientY - dragStartPos.current.y });
    };
    const handleMouseUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      style={{
        width: `min(95vw, ${width})`,
        height,
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        transition: isDragging ? 'none' : 'transform 0.1s ease-out',
        zIndex: isDragging ? 60 : 20
      }}
      className={`${bgOverride || 'bg-[#f0f0f0]'} rounded-xl shadow-[0_40px_80px_rgba(0,0,0,0.3)] flex flex-col border border-white/40 overflow-hidden fade-slide-in mx-auto relative`}
    >
      <div
        onMouseDown={handleMouseDown}
        className={`h-11 border-b border-black/10 px-4 flex items-center justify-between z-10 select-none cursor-grab active:cursor-grabbing ${type === 'safari' ? 'bg-[#f1f1f1]' : (bgOverride ? 'bg-transparent' : 'bg-gradient-to-b from-[#f8f8f8] to-[#e8e8e8]')}`}
      >
        <div className="flex gap-2 w-16 md:w-24 shrink-0" onMouseDown={(e) => e.stopPropagation()}>
          <div onClick={onClose} className="w-3.5 h-3.5 rounded-full bg-[#ff5f57] border-[0.5px] border-black/10 cursor-pointer hover:opacity-80 transition-opacity" />
          <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] border-[0.5px] border-black/10" />
          <div className="w-3.5 h-3.5 rounded-full bg-[#28c840] border-[0.5px] border-black/10" />
        </div>
        <div className="flex-1 text-center min-w-0 px-2 pointer-events-none">
          {type === 'safari' ? (
            <div className="max-w-md mx-auto bg-white rounded-md border border-black/5 flex items-center justify-center py-1 gap-2 text-[10px] md:text-[11px] text-black/60 shadow-sm truncate">
              <span className="opacity-30">🔒</span> {url}
            </div>
          ) : <span className={`text-[12px] md:text-[13px] font-bold tracking-tight truncate ${bgOverride ? 'text-white/70' : 'text-black/70'}`}>{title}</span>}
        </div>
        <div className="w-16 md:w-24 flex justify-end shrink-0 pointer-events-none">
          {type === 'safari' && <span className="opacity-40 text-[9px] uppercase font-black tracking-widest hidden md:inline">Safari</span>}
        </div>
      </div>
      <div className={`flex-1 overflow-auto ${type === 'preview' ? 'bg-[#525659] p-4 md:p-8' : (bgOverride ? 'bg-transparent' : 'bg-white')}`}>
        {children}
      </div>
    </div>
  );
};

interface DesktopIconProps {
  label: string;
  subLabel?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  img?: string;
  isFloating?: boolean;
  bg?: string;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ label, subLabel, icon, onClick, href, img, isFloating, bg }) => {
  const content = (
    <div className="flex flex-col items-center gap-2 group cursor-pointer transition-transform active:scale-95">
      <div className={`${isFloating ? 'float' : ''} transition-transform duration-300`}>
        {img ? (
          <AppIconWrapper bg={bg || "bg-transparent"}>
            <img src={img} className="w-14 h-14 object-contain" alt={label} />
          </AppIconWrapper>
        ) : (
          <div className="flex items-center justify-center">
            {icon}
          </div>
        )}
      </div>
      <div className="px-2 py-0.5 mt-1 text-center">
        <div className="text-[12px] md:text-[13px] font-bold text-slate-800 truncate max-w-[120px]">{label}</div>
        {subLabel && <div className="text-[9px] text-slate-500 uppercase tracking-widest font-black truncate">{subLabel}</div>}
      </div>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noopener noreferrer" className="no-underline">{content}</a> : <div onClick={onClick}>{content}</div>;
};

/** --- MAIN APP --- **/

const App: React.FC = () => {
  const [view, setView] = useState<string>('favorites');
  const [time, setTime] = useState(new Date());
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  useEffect(() => { const t = setInterval(() => setTime(new Date()), 1000); return () => clearInterval(t); }, []);
  const onHome = () => setView('favorites');

  const renderContent = () => {
    if (view === 'favorites') return (
      <Window title="Anthony Lall Website" width="850px" height="auto" onClose={onHome}>
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-y-12 gap-x-6 h-full items-center place-items-center p-8 md:p-12">
          <DesktopIcon
            label="readme.md"
            isFloating
            icon={<AppIconWrapper bg="bg-transparent"><div className="w-10 h-14 bg-white border-t-[6px] border-blue-400 shadow-sm" /></AppIconWrapper>}
            onClick={() => setView('readme')}
          />
          <DesktopIcon
            label="myresume.pdf"
            isFloating
            icon={<AppIconWrapper bg="bg-gradient-to-br from-red-500 to-red-600"><span className="text-white font-black text-xl">PDF</span></AppIconWrapper>}
            onClick={() => setView('resume')}
          />
          <DesktopIcon
            label="Projects"
            isFloating
            icon={<FolderIcon color="#60c5f8" />}
            onClick={() => setView('projects')}
          />
          <DesktopIcon
            label="LinkedIn"
            isFloating
            icon={<LinkedInIcon />}
            href="https://www.linkedin.com/in/anthonylewislall"
          />
          <DesktopIcon
            label="mydigitalmedia"
            subLabel="brand"
            isFloating
            icon={<FolderIcon color="#ffaf52" />}
            onClick={() => setView('brand')}
          />
          <DesktopIcon
            label="Me"
            subLabel="About"
            isFloating
            img="https://api.dicebear.com/9.x/pixel-art/svg?seed=Anthony&backgroundColor=b6e3f4"
            onClick={() => setView('me')}
          />
        </div>
      </Window>
    );

    if (view === 'me') return (
      <Window title="About This Anthony" width="380px" height="520px" bgOverride="bg-[#515a61]" onClose={onHome}>
        <div className="flex flex-col items-center p-8 text-white font-sans h-full">
          <div className="w-32 h-32 rounded-full border-4 border-white/20 shadow-2xl overflow-hidden mb-6 bg-gray-700">
            <img src="https://api.dicebear.com/9.x/pixel-art/svg?seed=Anthony&backgroundColor=313131" alt="Anthony Lall" className="w-full h-full object-cover pixel-art scale-110" />
          </div>
          <h2 className="text-3xl font-bold mb-0.5">Anthony Lall</h2>
          <p className="text-white/40 text-[13px] mb-8 font-medium">2025</p>
          <div className="w-full space-y-3 px-2">
            <div className="flex justify-center gap-4 text-[13px]"><span className="text-white/60 font-bold w-20 text-right">Major</span><span className="text-white font-medium flex-1">ISST @ Cornell</span></div>
            <div className="flex justify-center gap-4 text-[13px]"><span className="text-white/60 font-bold w-20 text-right">Memory</span><span className="text-white font-medium flex-1">UI/UX Design</span></div>
            <div className="flex justify-center gap-4 text-[13px]"><span className="text-white/60 font-bold w-20 text-right">Serial</span><span className="text-white font-medium flex-1 uppercase tracking-tight">V4VW-DH2025</span></div>
            <div className="flex justify-center gap-4 text-[13px]"><span className="text-white/60 font-bold w-20 text-right">System</span><span className="text-white font-medium flex-1">Sequoia 15.1</span></div>
          </div>
          <div className="mt-auto pb-4 w-full flex flex-col items-center gap-4">
            <button onClick={() => setView('readme')} className="px-5 py-1.5 bg-white/20 hover:bg-white/30 transition-colors border border-white/10 rounded-md text-[13px] font-bold">More Info...</button>
            <div className="text-[10px] text-white/30 text-center leading-tight">Regulatory Certification<br />™ and © 1983-2025 Anthony Inc.<br />All Rights Reserved.</div>
          </div>
        </div>
      </Window>
    );

    if (view === 'projects') return (
      <Window title="📂 Anthony — Projects" width="880px" height="520px" onClose={onHome}>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-12 gap-x-6 h-full items-start p-8 md:p-12 overflow-y-auto">
          {PROJECTS.map(p => (
            <DesktopIcon key={p.id} label={p.label} subLabel={p.subLabel} icon={p.icon ? <AppIconWrapper bg={p.bg}>{p.icon}</AppIconWrapper> : null} img={p.img} bg={p.bg} onClick={() => setView(p.id)} />
          ))}
        </div>
      </Window>
    );

    if (view === 'gallery') return (
      <Window title="🖼️ ShotByAll — Gallery" width="700px" height="600px" onClose={onHome} bgOverride="bg-[#0a0a0a]">
        <Gallery />
      </Window>
    );

    if (view === 'dither') return (
      <Window title="🕹️ DitherMachine v1.0" width="800px" height="85vh" onClose={onHome} bgOverride="bg-[#0f0f0f]">
        <DitherMachine />
      </Window>
    );

    if (view === 'readme') return (
      <Window title="📝 readme.md" height="85vh" width="800px" onClose={onHome}>
        <div className="max-w-2xl mx-auto p-6 md:p-12 space-y-8 font-sans selection:bg-blue-100 text-gray-800">
          <header className="border-b pb-8">
            <h1 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">Anthony Lewis Lall</h1>
            <div className="flex flex-wrap gap-x-3 gap-y-2 text-xs md:text-sm text-black/60 items-center font-medium">
              <a href="mailto:all266@cornell.edu" className="hover:text-blue-500 transition-colors">📧 all266@cornell.edu</a>
              <span className="opacity-30">|</span>
              <span className="opacity-30">|</span>
              <a href="https://www.linkedin.com/in/anthonylewislall" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">🔗 LinkedIn</a>
              <span className="opacity-30">|</span>
              <button onClick={onHome} className="hover:text-blue-500 transition-colors font-bold">💻 Portfolio</button>
            </div>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-[11px] font-black text-black/30 uppercase tracking-[0.2em] mb-4">🛠️ Programming</h3>
              <p className="text-sm text-black/70 font-mono">JavaScript, Python, TypeScript, Go, HTML, CSS, SQL, Git, OCaml</p>
            </div>
            <div>
              <h3 className="text-[11px] font-black text-black/30 uppercase tracking-[0.2em] mb-4">📦 Frameworks</h3>
              <p className="text-sm text-black/70 font-mono">React, D3, P5.js, Next.js, Bootstrap, NumPy, Pandas</p>
            </div>
            <div>
              <h3 className="text-[11px] font-black text-black/30 uppercase tracking-[0.2em] mb-4">🎨 UI/UX Design</h3>
              <p className="text-sm text-black/70 font-mono">Figma, Wireframing, Prototyping, Interaction Design, Gaming Design, Spline API</p>
            </div>
            <div>
              <h3 className="text-[11px] font-black text-black/30 uppercase tracking-[0.2em] mb-4">🤖 AI Tools</h3>
              <p className="text-sm text-black/70 font-mono">Google AI Studio, GPT-Codex, AI-powered platforms, prompt engineering, generative UI flows</p>
            </div>
          </section>


          <section>
            <h3 className="text-[11px] font-black text-black/30 uppercase tracking-[0.2em] mb-4">🎓 Education</h3>
            <div className="space-y-2">
              <p className="font-bold text-lg">Cornell University, College of Engineering</p>

              <p className="text-black/60 text-sm">
                Human Spirit Award Winner (2024)
              </p>
              <p className="text-black/60 text-sm">
                Funded Pre-Seed Digital Media Company by eCornell
              </p>
               <p className="text-black/60 text-sm">
                Member of Der Hexenkreis Senior Honors Society [DH]
              </p>
              <p className="text-black/60 text-sm">
                Graduated May 2025
              </p>
            </div>
          </section>


          <section>
            <h3 className="text-[11px] font-black text-black/30 uppercase tracking-[0.2em] mb-4">🧠 Summary</h3>
            <p className="text-[14px] md:text-[15px] leading-relaxed text-black/80 font-medium">
              Creative and detail-oriented software developer and UI/UX designer with a passion for building intuitive, scalable interfaces. Skilled in user-centered design, wireframing, prototyping, and cross-functional collaboration. Experienced in leveraging AI tools like GPT-Codex and Google AI Studio to accelerate design workflows, automate layout generation, and build responsive user flows for generative platforms. Known for combining visual storytelling with technical precision to deliver impactful web and mobile experiences.
            </p>
          </section>
          <section>
            <h3 className="text-[11px] font-black text-black/30 uppercase tracking-[0.2em] mb-4">
              💼 Currently Working At
            </h3>

            <div className="space-y-1 mb-6">
              <p className="font-bold">Executive Intern – RM Logitech Inc</p>
              <p className="text-black/50 text-xs uppercase tracking-widest font-bold">
                (Sep 2024 – Present)
              </p>
              <p className="text-sm text-black/70 mt-2 leading-relaxed">
                Collaborating with the executive team on digital operations and IT initiatives, with contributions to automation, internal tooling, and web-based systems.
              </p>
            </div>

            <h3 className="text-[11px] font-black text-black/30 uppercase tracking-[0.2em] mb-4">
              🎧 Currently Working On
            </h3>

            <div className="space-y-1">
              <p className="font-bold">VYBESYNC</p>
              <p className="text-sm text-black/70 mt-2 leading-relaxed">
                An AI-powered music visualization app that transforms user-uploaded audio into dynamic, designer-grade visual experiences. Built to let creators generate reactive visuals that sync precisely to sound, with a focus on real-time rendering, customization, and share-ready outputs.
              </p>
            </div>
          </section>

        </div>
      </Window>
    );

    if (view === 'resume') return (
      <Window title="myresume.pdf" type="preview" onClose={onHome}>
        <div className="bg-white w-full max-w-[800px] shadow-2xl p-8 md:p-14 text-[10px] md:text-[11px] font-sans mx-auto min-h-[1056px] text-[#222] leading-tight selection:bg-blue-100">
          <header className="text-center mb-8 border-b-2 border-black pb-4">
            <h1 className="text-2xl font-black mb-1 tracking-tight">Anthony Lewis Lall</h1>
            <p className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-gray-700 font-medium">
              <span>all266@cornell.edu</span>  <span>www.linkedin.com/in/anthonylewislall</span>
            </p>
          </header>

          <section className="mb-6">
            <h2 className="font-black bg-gray-100 px-2 py-0.5 text-xs uppercase mb-2 tracking-widest inline-block">Education</h2>
            <div className="flex justify-between font-bold text-[12px]"><span>Cornell University, College of Engineering</span><span>2021 - 2025</span></div>
            <p className="font-bold text-gray-700 italic mb-1">Bachelor of Science, Information Science, Systems, and Technology (ISST), May 2025</p>
            <p className="text-gray-600">Concentration: Interactive Technologies & UI/UX Design</p>
            <p className="text-gray-600">Member of Der Hexenkreis Senior Honors Society [DH]</p>
          </section>

          <section className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h2 className="font-black border-b border-black/20 text-[10px] uppercase mb-1.5 tracking-wider text-gray-400">Technical Skills</h2>
              <ul className="list-disc ml-4 space-y-0.5 text-gray-700">
                <li><strong className="text-black">Programming:</strong> JS, Python, TS, Go, HTML/CSS, SQL, Git, OCaml</li>
                <li><strong className="text-black">Frameworks:</strong> React, D3, P5.js, Next.js, Bootstrap, NumPy, Pandas</li>
                <li><strong className="text-black">Web Dev:</strong> Front-end Dev, Responsive Design, CMS</li>
              </ul>
            </div>
            <div>
              <h2 className="font-black border-b border-black/20 text-[10px] uppercase mb-1.5 tracking-wider text-gray-400">Design Skills</h2>
              <ul className="list-disc ml-4 space-y-0.5 text-gray-700">
                <li><strong className="text-black">UI/UX:</strong> Wireframing, Figma Prototyping, Interaction, Game Design, Spline</li>
                <li><strong className="text-black">User Research:</strong> Usability Testing, Surveys, Feedback Analysis</li>
                <li><strong className="text-black">Visual:</strong> Typography, Iconography, Color Theory</li>
              </ul>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="font-black bg-gray-100 px-2 py-0.5 text-xs uppercase mb-2 tracking-widest inline-block">Work Experience</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between font-bold"><span>Executive Intern • RM Logitech Inc</span><span>Sep 2024 - Present</span></div>
                <p className="text-[10px] text-gray-500 italic mb-1">Boynton Beach, FL</p>
                <ul className="list-disc ml-4 text-gray-700 space-y-0.5">
                  <li>Collaborated directly with the executive team on digital project support.</li>
                  <li>Assisted in modernizing internal workflows through research, documentation, and digital tool integration.</li>
                  <li>Applied technical skills to support ongoing IT initiatives, product insights, and operations.</li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between font-bold"><span>UI/UX Intern • Truth In Common</span><span>Jun - Sep 2024</span></div>
                <p className="text-[10px] text-gray-500 italic mb-1">Washington, D.C.</p>
                <ul className="list-disc ml-4 text-gray-700 space-y-0.5">
                  <li>Refined website navigation using UX principles to optimize content placement and page layout.</li>
                  <li>Generated 5+ high-fidelity wireframes based on competitor research and user feedback.</li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between font-bold"><span>Founder • ShotbyALL (Digital Media Startup)</span><span>Jan 2022 - Present</span></div>
                <p className="text-[10px] text-gray-500 italic mb-1">Ithaca and New York City, NY</p>
                <ul className="list-disc ml-4 text-gray-700 space-y-0.5">
                  <li>Launched "ShotbyALL", scaling revenue from $500 in 2022 to $5,000+ in early 2025.</li>
                  <li>Completed 200+ paid sessions across graduation, portrait, and event photography projects.</li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between font-bold"><span>Teaching Fellow • All Star Code</span><span>Jun - Aug 2020</span></div>
                <p className="text-[10px] text-gray-500 italic mb-1">New York, NY</p>
                <ul className="list-disc ml-4 text-gray-700 space-y-0.5">
                  <li>Coached students in web animation, game design, and core front-end languages like JavaScript, CSS, and HTML.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="font-black bg-gray-100 px-2 py-0.5 text-xs uppercase mb-2 tracking-widest inline-block">Projects</h2>
            <div className="space-y-2 text-gray-700">
              <p>● <strong className="text-black underline">Paath:</strong> Led UI/UX and wireframing for a budgeting app helping students track expenses and build financial literacy.</p>
              <p>● <strong className="text-black underline">KareBare:</strong> Led UI/UX of virtual chatbot to improve social media literacy and promote healthy online interactions for youth.</p>
              <p>● <strong className="text-black underline">Cornell Music Production:</strong> Maintained and improved club's website using PHP, HTML, JS, and CSS.</p>
            </div>
          </section>

          <section>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h2 className="font-black border-b border-black text-[10px] uppercase mb-2 tracking-wider">Leadership</h2>
                <div className="text-[9px] space-y-1">
                  <p><strong className="text-black uppercase tracking-tight">MLT Fellow</strong> • Mar 2023 - Present</p>
                  <p><strong className="text-black uppercase tracking-tight">CSMORE Fellow (Cornell)</strong> • Jul - Aug 2022</p>
                </div>
              </div>
              <div>
                <h2 className="font-black border-b border-black text-[10px] uppercase mb-2 tracking-wider">Honors</h2>
                <div className="text-[9px] space-y-1">
                  <p><strong className="text-black uppercase tracking-tight">Human Spirit Award</strong> • 2024</p>
                  <p><strong className="text-black uppercase tracking-tight">Traditions Fellow</strong> • 2021 - 2025</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Window>
    );

    if (view === 'brand') return (
      <Window title="📂 Anthony — Digital Media" width="300px" height="320px" onClose={onHome}>
        <div className="flex justify-around items-center h-full p-8">
          <DesktopIcon label="Gallery" onClick={() => setView('gallery')} icon={<AppIconWrapper bg="bg-transparent"><span className="text-4xl">🖼️</span></AppIconWrapper>} />
        </div>
      </Window>
    );

    const proj = PROJECTS.find(p => p.id === view);
    if (proj) return (
      <Window type="safari" url={proj.url} onClose={() => setView('projects')}>
        {view === 'karebare' && <KareBareProject />}
        {view === 'paath' && <PaathProject />}
        {view === 'slicegeist' && <SliceGeistProject />}
        {view === 'dishcraft' && <DishcraftProject />}
        {view === 'coala' && <CoalaProject />}
        {view === 'cmp' && <CmpProject />}
      </Window>
    );
    return null;
  };

  return (
    <div className="fixed inset-0 overflow-hidden font-sans text-[#1d1d1f] selection:bg-blue-100">
      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .float { animation: float 4s ease-in-out infinite; }
        .wall {
          background-image: url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=3540&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .fade-slide-in { animation: fadeSlideIn 1.5s ease-out forwards; }
        @keyframes fadeSlideIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .pixel-art { image-rendering: pixelated; }
      `}</style>
      <div className={`absolute inset-0 wall ${view !== 'favorites' ? 'scale-110 blur-sm' : 'scale-100 blur-0'}`} />

      {/* Top Bar */}
      <div className="absolute top-0 w-full h-8 flex items-center justify-between px-4 bg-white/20 backdrop-blur-xl border-b border-black/5 text-[12px] font-bold z-50 select-none">
        <div className="flex gap-5 items-center">
          <span className="text-[14px]"></span>
          <span className="uppercase tracking-wide">Anthony Lall</span>
          <button onClick={onHome} className="opacity-70 hover:opacity-100 uppercase font-medium">Home</button>
        </div>
        <div
          onMouseEnter={() => setShowEasterEgg(true)}
          onMouseLeave={() => setShowEasterEgg(false)}
          className="flex gap-4 opacity-70 cursor-pointer hover:opacity-100 transition-opacity relative h-full items-center"
        >
          <span>{time.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })}</span>
          <span>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          {showEasterEgg && (
            <div className="absolute top-full mt-0 right-0 w-80 bg-white/70 backdrop-blur-2xl rounded-xl shadow-2xl border border-white/40 p-3 z-[60] flex flex-col gap-1 fade-slide-in pointer-events-none">
              <div className="text-[10px] text-black/40 uppercase tracking-widest mb-1 px-1">
                Formerly known as
              </div>

              <div className="text-[12px] font-medium text-black/70 px-1 py-0.5 leading-relaxed space-y-1">
                <div>Gorak (2015)</div>
                <div>Enragedice (Nov 16, 2016)</div>
                <div>R2Suppressor</div>
                <div className="font-bold text-red-600">Sentrinity (Mar 15, 2017)</div>
                <div>ALLFXDESIGN (2018)</div>
                <div>ShotbyALL (2/14/23)</div>
                <div>PRODBYRUULA (1/01/25)</div>
              </div>


            </div>
          )}
        </div>
      </div>

      <div className="h-full flex items-center justify-center p-4 md:p-6 relative z-10">{renderContent()}</div>

      {/* Dock Bar */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center p-2 px-6 gap-4 bg-white/20 backdrop-blur-3xl border border-white/40 rounded-3xl shadow-2xl z-40">
        <div onClick={onHome} className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform active:scale-90" title="Home">
          <span className="text-white text-2xl">🏠</span>
        </div>
        <div
          onClick={() => setView('gallery')}
          className="w-12 h-12 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform active:scale-90"
          title="Photos"
        >
          {/* Camera Icon */}
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-lg">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
            <circle cx="12" cy="13" r="4"></circle>
          </svg>
        </div>
        <div
          onClick={() => setView('dither')}
          className="w-12 h-12 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform active:scale-90 group"
          title="DitherMachine"
        >
          {/* DitherMachine Icon */}
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-lg group-hover:rotate-12 transition-transform">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeOpacity="0.5"></rect>
            <circle cx="7" cy="7" r="1" fill="white"></circle>
            <circle cx="17" cy="17" r="1" fill="white"></circle>
            <circle cx="12" cy="12" r="1" fill="white"></circle>
            <circle cx="7" cy="17" r="1" fill="white"></circle>
            <circle cx="17" cy="7" r="1" fill="white"></circle>
            <circle cx="12" cy="7" r="0.5" fill="white" opacity="0.5"></circle>
            <circle cx="7" cy="12" r="0.5" fill="white" opacity="0.5"></circle>
            <circle cx="17" cy="12" r="0.5" fill="white" opacity="0.5"></circle>
            <circle cx="12" cy="17" r="0.5" fill="white" opacity="0.5"></circle>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default App;
