
import React, { useState, useEffect } from 'react';
import { 
  KareBareProject, 
  PaathProject, 
  SliceGeistProject, 
  DishcraftProject, 
  CoalaProject, 
  CmpProject 
} from './Projects';

/** --- TYPES --- **/

type ViewType = 'favorites' | 'projects' | 'brand' | 'resume' | 'readme' | 'paath' | 'slicegeist' | 'dishcraft' | 'karebare' | 'coala' | 'cmp';

interface ProjectInfo {
  id: ViewType;
  label: string;
  subLabel: string;
  icon?: React.ReactNode;
  img?: string;
  url: string;
}

const PROJECTS: ProjectInfo[] = [
  { id: 'paath', label: 'Paath', subLabel: 'Financial App', url: 'paath.cornell.edu', icon: <span className="text-3xl">💰</span> },
  { id: 'slicegeist', label: 'SliceGeist', subLabel: 'Strategy Game', url: 'slicegeist.ghost-train.io', img: 'https://minecraft.wiki/images/Ghast_JE2_BE2.png' },
  { id: 'dishcraft', label: 'Dishcraft', subLabel: 'Culinary AI', url: 'dishcraft.kitchen.ai', img: 'https://minecraft.wiki/images/Raw_Beef_JE3_BE2.png' },
  { id: 'karebare', label: 'KareBare', subLabel: 'Online Literacy', url: 'karebare.edu', img: 'https://www.nicepng.com/png/full/190-1905759_minecraft-heart-8-bit-heart-transparent.pngr' },
  { id: 'coala', label: 'Coala', subLabel: 'LDR Project', url: 'coala.ldr', icon: <span className="text-3xl">🐨</span> },
  { id: 'cmp', label: 'Music Prod', subLabel: 'Web Dev', url: 'cornellmusicproduction.com', icon: <span className="text-3xl">💿</span> },
];

/** --- REUSABLE ATOMS --- **/

const Window = ({ title, children, onClose, type = 'finder', url, width = '800px', height = '85vh' }: any) => (
  <div style={{ width, height }} className="bg-[#f0f0f0] rounded-xl shadow-[0_40px_80px_rgba(0,0,0,0.3)] flex flex-col border border-white/40 overflow-hidden fade-slide-in">
    <div className={`h-11 border-b border-black/10 px-4 flex items-center justify-between ${type === 'safari' ? 'bg-[#f1f1f1]' : 'bg-gradient-to-b from-[#f8f8f8] to-[#e8e8e8]'}`}>
      <div className="flex gap-2 w-24">
        <div onClick={onClose} className="w-3.5 h-3.5 rounded-full bg-[#ff5f57] border-[0.5px] border-black/10 cursor-pointer hover:opacity-80 transition-opacity" />
        <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] border-[0.5px] border-black/10" />
        <div className="w-3.5 h-3.5 rounded-full bg-[#28c840] border-[0.5px] border-black/10" />
      </div>
      <div className="flex-1 text-center">
        {type === 'safari' ? (
          <div className="max-w-md mx-auto bg-white rounded-md border border-black/5 flex items-center justify-center py-1 gap-2 text-[11px] text-black/60 shadow-sm">
            <span className="opacity-30">🔒</span> {url}
          </div>
        ) : <span className="text-[13px] font-bold text-black/70 tracking-tight">{title}</span>}
      </div>
      <div className="w-24 flex justify-end">
         {type === 'safari' && <span className="opacity-40 text-[9px] uppercase font-black tracking-widest">Safari</span>}
      </div>
    </div>
    <div className={`flex-1 overflow-auto ${type === 'preview' ? 'bg-[#525659] p-8' : 'bg-white'}`}>
      {children}
    </div>
  </div>
);

const DesktopIcon = ({ label, subLabel, icon, onClick, href, img, isFloating }: any) => {
  const content = (
    <div className="flex flex-col items-center gap-3 group cursor-pointer transition-transform active:scale-95">
      <div className={`${isFloating ? 'float' : 'group-hover:scale-110'} transition-transform duration-300`}>
        {img ? <img src={img} className="w-16 h-16 object-contain drop-shadow-xl" alt={label} /> : 
               <div className="w-16 h-16 bg-white/40 backdrop-blur-md rounded-xl border border-white/50 flex items-center justify-center shadow-lg">{icon}</div>}
      </div>
      <div className="bg-white/70 px-4 py-1.5 rounded-lg backdrop-blur-md shadow-sm border border-white/50 text-center min-w-[110px]">
        <div className="text-[13px] font-bold text-black/80">{label}</div>
        {subLabel && <div className="text-[9px] text-black/40 uppercase tracking-widest font-black mt-0.5">{subLabel}</div>}
      </div>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noopener" className="no-underline">{content}</a> : <div onClick={onClick}>{content}</div>;
};

/** --- MAIN APP --- **/

const App: React.FC = () => {
  const [view, setView] = useState<string>('favorites');
  const [time, setTime] = useState(new Date());

  useEffect(() => { const t = setInterval(() => setTime(new Date()), 1000); return () => clearInterval(t); }, []);
  const onHome = () => setView('favorites');

  const renderContent = () => {
    if (view === 'favorites') return (
      <Window title="Anthony Lall Website" width="800px" height="420px" onClose={onHome}>
        <div className="grid grid-cols-5 gap-6 h-full items-center place-items-center p-8">
          <DesktopIcon label="Projects" icon={<div className="w-12 h-10 relative bg-[#60c5f8] rounded-sm"><div className="absolute top-0 left-0 w-5 h-2 bg-[#60c5f8] -translate-y-full rounded-t-sm" /></div>} onClick={() => setView('projects')} />
          <DesktopIcon label="readme.md" icon={<div className="w-10 h-14 bg-white border-t-4 border-blue-400 shadow-md" />} onClick={() => setView('readme')} />
          <DesktopIcon label="mydigitalmedia" subLabel="brand" icon={<div className="w-12 h-10 relative bg-[#ffaf52] rounded-sm"><div className="absolute top-0 left-0 w-5 h-2 bg-[#ffaf52] -translate-y-full rounded-t-sm" /></div>} onClick={() => setView('brand')} />
          <DesktopIcon label="Resume.pdf" icon={<span className="text-red-500 font-black text-xl">PDF</span>} onClick={() => setView('resume')} />
          <DesktopIcon label="LinkedIn" icon={<span className="text-blue-600 font-bold text-2xl">in</span>} href="https://www.linkedin.com/in/anthonylewislall" />
        </div>
      </Window>
    );

    if (view === 'projects') return (
      <Window title="📂 Anthony — Projects" width="880px" height="520px" onClose={onHome}>
        <div className="grid grid-cols-3 md:grid-cols-3 gap-y-12 gap-x-6 h-full items-center p-12 overflow-y-auto">
          {PROJECTS.map(p => (
            <DesktopIcon key={p.id} {...p} isFloating onClick={() => setView(p.id)} />
          ))}
        </div>
      </Window>
    );

    if (view === 'readme') return (
      <Window title="📝 readme.md" height="85vh" width="800px" onClose={onHome}>
        <div className="max-w-2xl mx-auto p-12 space-y-8 font-sans selection:bg-blue-100">
          <header className="border-b pb-8">
            <h1 className="text-4xl font-black mb-4 tracking-tight">Anthony Lewis Lall</h1>
            <div className="flex flex-wrap gap-x-3 gap-y-2 text-sm text-black/60 items-center font-medium">
              <a href="mailto:all266@cornell.edu" className="hover:text-blue-500 transition-colors">📧 all266@cornell.edu</a>
              <span className="opacity-30">|</span>
              <span>📱 347‑863‑7729</span>
              <span className="opacity-30">|</span>
              <a href="https://www.linkedin.com/in/anthonylewislall" target="_blank" className="hover:text-blue-500 transition-colors">🔗 LinkedIn</a>
              <span className="opacity-30">|</span>
              <button onClick={onHome} className="hover:text-blue-500 transition-colors font-bold">💻 Portfolio</button>
            </div>
          </header>

          <section>
            <h3 className="text-[11px] font-black text-black/30 uppercase tracking-[0.2em] mb-4">🎓 Education</h3>
            <div className="space-y-1">
              <p className="font-bold text-lg">Cornell University, College of Engineering</p>
              <p className="text-black/80">B.S. in Information Science, Systems, and Technology (ISST), May 2025</p>
              <p className="text-sm text-black/60 italic">Concentration: Interactive Technologies & UI/UX Design</p>
              <p className="text-sm text-black/60">Member of Der Hexenkreis Senior Honors Society [DH]</p>
            </div>
          </section>

          <section>
            <h3 className="text-[11px] font-black text-black/30 uppercase tracking-[0.2em] mb-4">🧠 Summary</h3>
            <p className="text-[15px] leading-relaxed text-black/80 font-medium">
              Creative and detail-oriented software developer and UI/UX designer with a passion for building intuitive, scalable interfaces. Skilled in user-centered design, wireframing, prototyping, and cross-functional collaboration. Experienced in leveraging AI tools like GPT-Codex and Google AI Studio to accelerate design workflows, automate layout generation, and build responsive user flows for generative platforms. Known for combining visual storytelling with technical precision to deliver impactful web and mobile experiences.
            </p>
          </section>

          <section>
            <h3 className="text-[11px] font-black text-black/30 uppercase tracking-[0.2em] mb-4">💼 Currently Working At</h3>
            <div className="space-y-2">
              <p className="font-bold text-lg">Executive Intern – RM Logitech Inc</p>
              <p className="text-sm text-black/40 font-bold">(Sep 2024 – Present)</p>
              <p className="text-sm leading-relaxed text-black/70">Collaborating with the executive team on digital operations and IT initiatives, with contributions to automation, internal tooling, and web-based systems.</p>
            </div>
          </section>

          <section>
            <h3 className="text-[11px] font-black text-black/30 uppercase tracking-[0.2em] mb-4">🔧 Currently Working On</h3>
            <div className="space-y-2">
              <p className="font-bold text-lg">Creator & Developer – VibeSync</p>
              <p className="text-sm leading-relaxed text-black/70">
                Designed and built an AI-driven audio visualizer app using TypeScript and GPT-Codex, enabling users to generate custom 3D visuals synced to their music. Led UX design, prototyping, and full front-end integration.
              </p>
            </div>
          </section>

          <section className="bg-gray-50 p-8 rounded-3xl border border-black/5">
            <h3 className="text-[11px] font-black text-black/30 uppercase tracking-[0.2em] mb-8">🛠️ Skills/Stack</h3>
            <div className="grid grid-cols-1 gap-8 text-[13px] leading-relaxed">
              <div className="space-y-6">
                <div><strong className="block text-black/80 mb-1 uppercase text-[10px] tracking-wider">Programming</strong> <span className="text-black/60">JavaScript, Python, TypeScript, Go, HTML, CSS, SQL, Git, OCaml</span></div>
                <div><strong className="block text-black/80 mb-1 uppercase text-[10px] tracking-wider">Frameworks & Libraries</strong> <span className="text-black/60">React, D3, P5.js, Next.js, Bootstrap, NumPy, Pandas</span></div>
                <div><strong className="block text-black/80 mb-1 uppercase text-[10px] tracking-wider">Web Development</strong> <span className="text-black/60">Front-end, Responsive Design, CMS</span></div>
                <div><strong className="block text-black/80 mb-1 uppercase text-[10px] tracking-wider">UI/UX Design</strong> <span className="text-black/60">Figma, Wireframing, Prototyping, Interaction Design, Spline API</span></div>
                <div><strong className="block text-black/80 mb-1 uppercase text-[10px] tracking-wider">User Research & Testing</strong> <span className="text-black/60">Usability Testing, Surveys, Feedback Analysis</span></div>
                <div><strong className="block text-black/80 mb-1 uppercase text-[10px] tracking-wider">Visual Design</strong> <span className="text-black/60">Typography, Iconography, Responsive Layouts, Color Theory</span></div>
                <div><strong className="block text-blue-600 mb-1 uppercase text-[10px] tracking-wider">AI Tools</strong> <span className="text-black/60">Google AI Studio, GPT-Codex, AI-powered platforms, prompt engineering, wireframe automation, generative UI flows</span></div>
              </div>
            </div>
          </section>
        </div>
      </Window>
    );

    if (view === 'resume') return (
      <Window title="Anthony_Lewis_Lall_Resume.pdf" type="preview" onClose={onHome}>
  <div className="bg-white w-full max-w-[720px] min-h-full shadow-2xl p-12 text-[11px] font-serif mx-auto leading-relaxed">
    
    {/* Header */}
    <div className="text-center mb-6">
      <h1 className="text-xl font-bold">Anthony Lewis Lall</h1>
      <p>
        all266@cornell.edu | 347-863-7729 <br />
        <a href="https://www.linkedin.com/in/anthonylewislall" className="underline">LinkedIn</a>
      </p>
    </div>

    {/* Education */}
    <section className="mb-4">
      <h2 className="font-bold border-b mb-2 uppercase">Education</h2>
      <p><strong>Cornell University, College of Engineering</strong></p>
      <p>B.S. in Information Science, Systems, and Technology (ISST), May 2025</p>
      <p className="italic">Concentration: Interactive Technologies & UI/UX Design</p>
      <p>Member of Der Hexenkreis Senior Honors Society (DH)</p>
    </section>

    {/* Technical Skills */}
    <section className="mb-4">
      <h2 className="font-bold border-b mb-2 uppercase">Technical Skills</h2>
      <p><strong>Programming:</strong> JavaScript, Python, TypeScript, Go, HTML, CSS, SQL, Git, OCaml</p>
      <p><strong>Frameworks & Libraries:</strong> React, D3, P5.js, Next.js, Bootstrap, NumPy, Pandas</p>
      <p><strong>Web Development:</strong> Front-end Development, Responsive Design, CMS</p>
    </section>

    {/* Design Skills */}
    <section className="mb-4">
      <h2 className="font-bold border-b mb-2 uppercase">Design Skills</h2>
      <p><strong>UI/UX Design:</strong> Wireframing, Prototyping (Figma), Interaction Design, Gaming Design, Spline API</p>
      <p><strong>User Research & Testing:</strong> Usability Testing, User Surveys, Feedback Analysis</p>
      <p><strong>Visual Design:</strong> Typography, Iconography, Responsive Design, Color Theory</p>
    </section>

    {/* Work Experience */}
    <section className="mb-4">
      <h2 className="font-bold border-b mb-2 uppercase">Work Experience</h2>

      <p><strong>Executive Intern</strong>, RM Logitech Inc (Sep 2024 – Present)</p>
      <ul className="list-disc ml-4 mb-2">
        <li>Collaborated directly with the executive team on digital project support and IT initiatives.</li>
        <li>Assisted in modernizing internal workflows through research, documentation, and tool integration.</li>
        <li>Applied technical skills to support operations, product insights, and internal systems.</li>
      </ul>

      <p><strong>UI/UX Intern</strong>, Truth In Common (Jun – Sep 2024)</p>
      <ul className="list-disc ml-4 mb-2">
        <li>Refined website navigation and layout using UX principles, improving usability and SEO.</li>
        <li>Produced 5+ wireframes based on competitor research and user feedback.</li>
      </ul>

      <p><strong>Founder</strong>, ShotbyALL (Jan 2022 – Present)</p>
      <ul className="list-disc ml-4 mb-2">
        <li>Launched and scaled a digital media startup from $500 in 2022 to $5,000+ in early 2025.</li>
        <li>Completed 200+ paid photography sessions across graduation, portrait, and event projects.</li>
      </ul>

      <p><strong>Teaching Fellow</strong>, All Star Code (Jun – Aug 2020)</p>
      <ul className="list-disc ml-4">
        <li>Coached students in web animation, game design, and front-end languages including JS, HTML, and CSS.</li>
      </ul>
    </section>

    {/* Projects */}
    <section className="mb-4">
      <h2 className="font-bold border-b mb-2 uppercase">Projects</h2>
      <ul className="list-disc ml-4">
        <li><strong>UI/UX Designer, Paath:</strong> Led UI/UX and wireframing for a student budgeting app.</li>
        <li><strong>UI/UX Designer, KareBare:</strong> Designed chatbot experience to improve social media literacy.</li>
        <li><strong>Front-end Developer, Cornell Music Production:</strong> Maintained and enhanced club website using PHP, HTML, CSS, and JavaScript.</li>
      </ul>
    </section>

    {/* Leadership */}
    <section className="mb-4">
      <h2 className="font-bold border-b mb-2 uppercase">Leadership & Professional Development</h2>
      <p><strong>Management Leadership for Tomorrow Fellow</strong> (Mar 2023 – Present)</p>
      <p className="mb-2">Career preparation fellowship focused on professional development.</p>

      <p><strong>CSMORE Summer Program</strong>, Cornell University (Jul – Aug 2022)</p>
      <p>Completed coursework in Discrete Structures, Programming, and Data Structures.</p>
    </section>

    {/* Honors */}
    <section>
      <h2 className="font-bold border-b mb-2 uppercase">Honors & Awards</h2>
      <ul className="list-disc ml-4">
        <li><strong>Human Spirit Award</strong> (Cornell University): Recognized for entrepreneurial impact through ShotbyALL.</li>
        <li><strong>Cornell Traditions Fellow:</strong> Four-year fellow with 1000+ hours of paid work and service.</li>
      </ul>
    </section>

  </div>
</Window>

    );

    if (view === 'brand') return (
        <Window title="📂 Anthony — Digital Media" width="500px" height="320px" onClose={onHome}>
          <div className="flex justify-around items-center h-full p-8">
            <DesktopIcon label="Gallery" href="https://shotbylall.pixieset.com/" icon={<span className="text-2xl">🖼️</span>} />
            <DesktopIcon label="Instagram" href="https://www.instagram.com/shotbyall/?hl=en" icon={<span className="text-2xl">📸</span>} />
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
        .wall { background: linear-gradient(135deg, #fce7f3 0%, #e0e7ff 50%, #d1fae5 100%); transition: transform 0.6s ease; }
        .fade-slide-in { animation: fadeSlideIn 0.4s ease-out forwards; }
        @keyframes fadeSlideIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
      <div className={`absolute inset-0 wall ${view !== 'favorites' ? 'scale-105' : 'scale-1'}`} />
      <div className="absolute top-0 w-full h-8 flex items-center justify-between px-4 bg-white/20 backdrop-blur-xl border-b border-black/5 text-[12px] font-bold z-50 select-none">
        <div className="flex gap-5 items-center"><span></span><span className="uppercase tracking-wide">Anthony Lall</span><button onClick={onHome} className="opacity-70 hover:opacity-100 uppercase font-medium">Home</button></div>
        <div className="flex gap-4 opacity-70"><span>{time.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })}</span><span>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span></div>
      </div>
      <div className="h-full flex items-center justify-center p-6 relative z-10">{renderContent()}</div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center p-2 px-6 gap-4 bg-white/20 backdrop-blur-3xl border border-white/40 rounded-3xl shadow-2xl z-40">
        <div onClick={onHome} className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform active:scale-90"><span className="text-white text-2xl">🏠</span></div>
        <div className="w-12 h-12 bg-white/30 rounded-xl opacity-30 shadow-inner" /><div className="w-12 h-12 bg-white/30 rounded-xl opacity-30 shadow-inner" />
      </div>
      <div className="absolute bottom-4 right-6 text-black/10 text-[10px] font-black uppercase tracking-[0.5em] select-none pointer-events-none">Portfolio OS</div>
    </div>
  );
};

export default App;
