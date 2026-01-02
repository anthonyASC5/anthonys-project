
import React, { useState, useEffect, useMemo } from 'react';

/** --- DATA & CONFIG --- **/

// Fix: Define a common interface for project data to resolve property access errors in the detail view
interface ProjectData {
  title: string;
  url: string;
  color: string;
  accent: string;
  border: string;
  subtitle: string;
  description: string;
  role?: string;
  timeline?: string;
  tools?: string;
  problem?: string;
  solution?: string;
  goal?: string;
}

const PROJECTS: Record<string, ProjectData> = {
  paath: { title: 'PAATH', url: 'paath.cornell.edu', color: 'text-blue-600', accent: 'bg-blue-50', border: 'border-blue-100', subtitle: 'Financial App', description: 'The student-centered budgeting app empowering Cornell undergrads to take control of their finances with clarity, customization, and confidence!', role: 'UI/UX Designer', timeline: '1 year (2024–2025)', tools: 'Figma', problem: 'Many Cornell undergraduates struggle with managing day-to-day expenses and long-term budgeting.' },
  slicegeist: { title: 'SliceGeist', url: 'slicegeist.ghost-train.io', color: 'text-purple-600', accent: 'bg-purple-50', border: 'border-purple-100', subtitle: 'Strategy Game', description: 'A suspenseful, pizza-themed strategy game challenging players to outwit opponents in a thrilling battle of haunt or hunt aboard a mysterious ghost train.', role: 'Lead Designer', timeline: 'One Semester Project (2025)', tools: 'Figma, C++' },
  dishcraft: { title: 'Dishcraft', url: 'dishcraft.kitchen.ai', color: 'text-green-600', accent: 'bg-green-50', border: 'border-green-100', subtitle: 'Culinary AI', description: 'The innovative culinary AI assistant that transforms your kitchen experience! Revolutionizing how you cook at home.', role: 'Lead Designer, Project Manager', timeline: '1 year (2024–2025)', tools: 'Figma' },
  karebare: { title: 'KareBare', url: 'karebare.edu', color: 'text-pink-500', accent: 'bg-pink-50', border: 'border-pink-100', subtitle: 'Online Literacy', description: 'A virtual chat box designed to improve social media literacy and promote healthy online interactions for young users.', solution: "Created 'KareBare', a virtual chatbot that educates teens on social media etiquette and safety through literature reviews on online risks and screen addiction.", goal: "To educate teenagers on safely navigating social media interactions crucial for personal development." }
};

/** --- REUSABLE ATOMS --- **/

const WindowControls = ({ onClose }: { onClose?: () => void }) => (
  <div className="flex gap-2 w-24">
    <div onClick={onClose} className="w-3 h-3 rounded-full bg-[#ff5f57] border-[0.5px] border-black/10 cursor-pointer hover:opacity-80" />
    <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border-[0.5px] border-black/10" />
    <div className="w-3 h-3 rounded-full bg-[#28c840] border-[0.5px] border-black/10" />
  </div>
);

const Window = ({ title, children, onClose, type = 'finder', url, width = '800px', height = '85vh' }: any) => (
  <div style={{ width, height }} className="bg-[#f0f0f0] rounded-xl shadow-[0_40px_80px_rgba(0,0,0,0.3)] flex flex-col border border-white/40 overflow-hidden fade-slide-in">
    <div className={`h-12 border-b border-black/10 px-4 flex items-center justify-between ${type === 'safari' ? 'bg-[#f1f1f1]' : 'bg-gradient-to-b from-[#f8f8f8] to-[#e8e8e8]'}`}>
      <WindowControls onClose={onClose} />
      <div className="flex-1 text-center">
        {type === 'safari' ? (
          <div className="max-w-md mx-auto bg-white rounded-md border border-black/5 flex items-center justify-center py-1 gap-2 text-[11px] text-black/60">
            <span className="opacity-30">🔒</span> {url}
          </div>
        ) : <span className="text-[13px] font-bold text-black/70">{title}</span>}
      </div>
      <div className="w-24" />
    </div>
    <div className={`flex-1 overflow-auto ${type === 'preview' ? 'bg-[#525659] p-8' : 'bg-white p-10'}`}>
      {children}
    </div>
  </div>
);

const Icon = ({ label, subLabel, icon, onClick, href, isFloating }: any) => {
  const content = (
    <div className="flex flex-col items-center gap-3 group cursor-pointer transition-transform active:scale-95">
      <div className={`${isFloating ? 'float' : 'group-hover:scale-110'} transition-transform duration-300`}>
        {icon}
      </div>
      <div className="bg-white/60 px-4 py-2 rounded-lg backdrop-blur-md shadow-sm border border-white/50 text-center min-w-[110px]">
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
        <div className="grid grid-cols-5 gap-6 h-full items-center place-items-center">
          <Icon label="Projects" icon={<div className="w-16 h-12 relative bg-[#60c5f8] rounded-sm shadow-md"><div className="absolute top-0 left-0 w-6 h-2 bg-[#60c5f8] -translate-y-full rounded-t-sm" /></div>} onClick={() => setView('projects')} />
          <Icon label="readme.md" icon={<div className="w-14 h-18 bg-white border-t-4 border-blue-400 shadow-lg relative overflow-hidden"><div className="p-2 space-y-1 opacity-10"><div className="h-1 bg-black" /><div className="h-1 bg-black" /><div className="h-1 bg-black w-2/3" /></div></div>} onClick={() => setView('readme')} />
          <Icon label="mydigitalmedia" subLabel="brand" icon={<div className="w-16 h-12 relative bg-[#ffaf52] rounded-sm shadow-md"><div className="absolute top-0 left-0 w-6 h-2 bg-[#ffaf52] -translate-y-full rounded-t-sm" /></div>} onClick={() => setView('brand')} />
          <Icon label="Resume.pdf" icon={<div className="w-14 h-18 bg-white border border-black/5 shadow-lg flex items-center justify-center text-red-500 font-bold">PDF</div>} onClick={() => setView('resume')} />
          <Icon label="LinkedIn" icon={<div className="w-16 h-16 bg-[#0a66c2] rounded-xl flex items-center justify-center shadow-lg"><span className="text-white text-3xl font-bold">in</span></div>} href="https://www.linkedin.com/in/anthonylewislall" />
        </div>
      </Window>
    );

    if (view === 'projects') return (
      <Window title="📂 Anthony — Projects" width="880px" height="520px" onClose={onHome}>
        <div className="grid grid-cols-4 gap-12 h-full items-center">
          <Icon label="Paath" subLabel="Financial App" isFloating onClick={() => setView('paath')} icon={<div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg text-white">💰</div>} />
          <Icon label="SliceGeist" subLabel="Strategy Game" isFloating onClick={() => setView('slicegeist')} icon={<img src="https://minecraft.wiki/images/Ghast_JE2_BE2.png" className="w-20 h-20 object-contain drop-shadow-xl" />} />
          <Icon label="Dishcraft" subLabel="Culinary AI" isFloating onClick={() => setView('dishcraft')} icon={<img src="https://minecraft.wiki/images/Raw_Beef_JE3_BE2.png" className="w-20 h-20 object-contain drop-shadow-xl" />} />
          <Icon label="KareBare" subLabel="Online Literacy" isFloating onClick={() => setView('karebare')} icon={<img src="https://minecraft.wiki/images/Heart_JE2_BE2.png" className="w-16 h-16 object-contain drop-shadow-xl" />} />
        </div>
      </Window>
    );

    if (view === 'brand') return (
      <Window title="📂 Anthony — Digital Media" width="500px" height="320px" onClose={onHome}>
        <div className="flex justify-around items-center h-full">
          <Icon label="Gallery" href="https://shotbylall.pixieset.com/" icon={<div className="w-16 h-16 bg-black/5 rounded-xl flex items-center justify-center text-3xl">🖼️</div>} />
          <Icon label="Instagram" href="https://www.instagram.com/shotbyall/?hl=en" icon={<div className="w-16 h-16 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-xl flex items-center justify-center text-white text-3xl">📸</div>} />
        </div>
      </Window>
    );

    if (view === 'readme') return (
      <Window title="📝 readme.md" height="85vh" width="800px" onClose={onHome}>
        <div className="max-w-2xl mx-auto space-y-8 pb-12 font-sans selection:bg-blue-100">
          <header className="border-b pb-6">
            <h1 className="text-3xl font-black mb-2">Anthony Lewis Lall</h1>
            <div className="flex flex-wrap gap-x-3 gap-y-2 text-sm text-black/60 items-center">
              <a href="mailto:all266@cornell.edu" className="hover:text-blue-500 transition-colors">📧 all266@cornell.edu</a>
              <span className="opacity-30">|</span>
              <span>📱 347‑863‑7729</span>
              <span className="opacity-30">|</span>
              <a href="https://www.linkedin.com/in/anthonylewislall" target="_blank" className="hover:text-blue-500 transition-colors">🔗 LinkedIn</a>
              <span className="opacity-30">|</span>
              <button onClick={onHome} className="hover:text-blue-500 transition-colors">💻 Portfolio</button>
            </div>
          </header>

          <section>
            <h3 className="text-xs font-black text-black/30 uppercase tracking-widest mb-4">🎓 Education</h3>
            <div className="space-y-1">
              <p className="font-bold text-lg">Cornell University, College of Engineering</p>
              <p className="text-black/80">B.S. in Information Science, Systems, and Technology (ISST), May 2025</p>
              <p className="text-sm text-black/60 italic">Concentration: Interactive Technologies & UI/UX Design</p>
              <p className="text-sm text-black/60">Member of Der Hexenkreis Senior Honors Society [DH]</p>
            </div>
          </section>

          <section>
            <h3 className="text-xs font-black text-black/30 uppercase tracking-widest mb-4">🧠 Summary</h3>
            <p className="text-[15px] leading-relaxed text-black/80">
              Creative and detail-oriented software developer and UI/UX designer with a passion for building intuitive, scalable interfaces. Skilled in user-centered design, wireframing, prototyping, and cross-functional collaboration. Experienced in leveraging AI tools like GPT-Codex and Google AI Studio to accelerate design workflows, automate layout generation, and build responsive user flows for generative platforms. Known for combining visual storytelling with technical precision to deliver impactful web and mobile experiences.
            </p>
          </section>

          <section>
            <h3 className="text-xs font-black text-black/30 uppercase tracking-widest mb-4">💼 Currently Working At</h3>
            <div className="space-y-1">
              <p className="font-bold">Executive Intern – RM Logitech Inc</p>
              <p className="text-sm text-black/60">(Sep 2024 – Present)</p>
              <p className="text-sm leading-relaxed text-black/80">Collaborating with the executive team on digital operations and IT initiatives, with contributions to automation, internal tooling, and web-based systems.</p>
            </div>
          </section>

          <section>
            <h3 className="text-xs font-black text-black/30 uppercase tracking-widest mb-4">🔧 Currently Working On</h3>
            <div className="space-y-1">
              <p className="font-bold">Creator & Developer – VibeSync</p>
              <p className="text-sm leading-relaxed text-black/80">
                Designed and built an AI-driven audio visualizer app using TypeScript and GPT-Codex, enabling users to generate custom 3D visuals synced to their music. Led UX design, prototyping, and full front-end integration.
              </p>
            </div>
          </section>

          <section className="bg-gray-50 p-8 rounded-2xl border border-black/5">
            <h3 className="text-xs font-black text-black/30 uppercase tracking-widest mb-6">🛠️ Skills/Stack</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[13px] leading-relaxed">
              <div className="space-y-4">
                <div><strong className="block text-black/80 mb-1">Programming</strong> JavaScript, Python, TypeScript, Go, HTML, CSS, SQL, Git, OCaml</div>
                <div><strong className="block text-black/80 mb-1">Frameworks & Libraries</strong> React, D3, P5.js, Next.js, Bootstrap, NumPy, Pandas</div>
                <div><strong className="block text-black/80 mb-1">Web Development</strong> Front-end, Responsive Design, CMS</div>
              </div>
              <div className="space-y-4">
                <div><strong className="block text-black/80 mb-1">UI/UX Design</strong> Figma, Wireframing, Prototyping, Interaction Design, Spline API</div>
                <div><strong className="block text-black/80 mb-1">User Research & Testing</strong> Usability Testing, Surveys, Feedback Analysis</div>
                <div><strong className="block text-black/80 mb-1">Visual Design</strong> Typography, Iconography, Responsive Layouts, Color Theory</div>
                <div><strong className="block text-black/80 mb-1 text-blue-600">AI Tools</strong> Google AI Studio, GPT-Codex, AI-powered platforms, prompt engineering, wireframe automation, generative UI flows</div>
              </div>
            </div>
          </section>
        </div>
      </Window>
    );

    if (view === 'resume') return (
      <Window title="Anthony_Lewis_Lall_Resume.pdf" type="preview" onClose={onHome}>
        <div className="bg-white w-full max-w-[680px] min-h-full shadow-2xl p-12 text-[11px] font-serif mx-auto">
          <div className="text-center mb-6"><h1 className="text-xl font-bold">Anthony Lewis Lall</h1><p>all266@cornell.edu | 347-863-7729</p></div>
          <section className="mb-4"><h2 className="font-bold border-b mb-2 uppercase">Education</h2><p><strong>Cornell University</strong>, B.S. in ISST, May 2025</p></section>
          <section className="mb-4"><h2 className="font-bold border-b mb-2 uppercase">Experience</h2><p><strong>RM Logitech Inc</strong> - Executive Intern (2024-Present)</p><p><strong>Truth In Common</strong> - UI/UX Intern (2024)</p><p><strong>ShotbyALL</strong> - Digital Media Founder (2022-Present)</p></section>
          <section className="mb-4"><h2 className="font-bold border-b mb-2 uppercase">Skills</h2><p>JS, Python, React, Figma, Spline API, User Research</p></section>
        </div>
      </Window>
    );

    const proj = PROJECTS[view as keyof typeof PROJECTS];
    if (proj) return (
      <Window type="safari" url={proj.url} onClose={() => setView('projects')}>
        <div className="max-w-2xl mx-auto space-y-8">
          <h1 className={`text-3xl font-black ${proj.color}`}>Introducing "{proj.title}"</h1>
          <p className="text-lg text-black/60 italic leading-relaxed">{proj.description}</p>
          <div className="space-y-4">
            <h2 className="text-xs font-black uppercase text-black/30">Details</h2>
            <ul className="list-disc ml-4 text-black/70 text-sm space-y-1">
              {/* Fix: Added conditional checks for role, timeline, and tools as they vary per project */}
              {proj.role && <li><strong>Role:</strong> {proj.role}</li>}
              {proj.timeline && <li><strong>Timeline:</strong> {proj.timeline}</li>}
              {proj.tools && <li><strong>Tools:</strong> {proj.tools}</li>}
            </ul>
          </div>
          {/* Fix: Added conditional checks for problem and solution as they are not present on all projects */}
          {proj.problem && <div className={`${proj.accent} p-6 rounded-xl border ${proj.border}`}><p className="text-sm"><strong>Problem:</strong> {proj.problem}</p></div>}
          {proj.solution && <div className={`${proj.accent} p-6 rounded-xl border ${proj.border}`}><p className="text-sm"><strong>Solution:</strong> {proj.solution}</p></div>}
        </div>
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
      <div className="absolute top-0 w-full h-8 flex items-center justify-between px-4 bg-white/20 backdrop-blur-xl border-b border-black/5 text-[12px] font-bold z-50">
        <div className="flex gap-5 items-center"><span></span><span className="uppercase">Anthony Lall</span><button onClick={onHome} className="opacity-70 hover:opacity-100 uppercase">Home</button></div>
        <div className="flex gap-4 opacity-70"><span>{time.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })}</span><span>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span></div>
      </div>
      <div className="h-full flex items-center justify-center p-6 relative z-10">{renderContent()}</div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center p-2 px-6 gap-4 bg-white/20 backdrop-blur-3xl border border-white/40 rounded-2xl shadow-2xl z-40">
        <div onClick={onHome} className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform"><span className="text-white text-2xl">🏠</span></div>
        <div className="w-12 h-12 bg-white/30 rounded-xl opacity-30" /><div className="w-12 h-12 bg-white/30 rounded-xl opacity-30" />
      </div>
      <div className="absolute bottom-4 right-6 text-black/10 text-[10px] font-black uppercase tracking-[0.5em] select-none">Portfolio OS</div>
    </div>
  );
};

export default App;
