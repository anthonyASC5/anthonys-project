import React from 'react';

const ProjectLink = ({ href }: { href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-bold text-sm hover:bg-gray-800 transition-colors shadow-lg"
  >
    LINK TO PROJECT
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </a>
);

export const KareBareProject = () => (
  <div className="bg-white text-gray-900 p-8 md:p-12 leading-relaxed max-w-3xl mx-auto space-y-12">
    <header className="space-y-4">
      <h1 className="text-4xl font-black tracking-tighter text-pink-500 uppercase">KAREBARE (App Development Project) 2024</h1>
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <div className="inline-block px-4 py-2 bg-pink-50 text-pink-600 rounded-full font-bold text-sm">Educational App Development</div>
        <ProjectLink href="https://www.figma.com/proto/UZEY8tk5c8DYBgbSsmPeYU/4125-APP-PROTOTYPE?node-id=2044-217&node-type=canvas&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2044%3A136" />
      </div>
    </header>

    <section className="space-y-4">
      <p className="text-xl font-bold leading-snug">
        KareBare is a virtual chat box designed to improve social media literacy and promote healthy online interactions for young users.
      </p>
      <p className="text-gray-600">
        It features personalized chat interactions, screen time alerts, and provides resources for dealing with online harassment and maintaining a positive self-image.
      </p>
    </section>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t">
      <div className="space-y-4">
        <h3 className="text-xs font-black uppercase tracking-widest text-gray-400">Overview</h3>
        <ul className="space-y-2 text-sm">
          <li><strong>Context:</strong> Academic project (Human Computer Interaction Studio) Cornell University</li>
          <li><strong>Role:</strong> Designer Lead</li>
          <li><strong>Timeline:</strong> 8 months (2023-2024)</li>
          <li><strong>Team:</strong> 4 students</li>
          <li><strong>Tools Used:</strong> Figma</li>
        </ul>
      </div>
      <div className="space-y-4">
        <h3 className="text-xs font-black uppercase tracking-widest text-gray-400">Design Problem</h3>
        <p className="text-sm text-gray-600">
          Young users need help learning social media literacy because knowing how to navigate online interactions is crucial for their personal development, but lack a proper support system to deal with online harms such as harassment, cyberbullying, and avoiding bad actors.
        </p>
      </div>
    </div>

    <section className="bg-pink-50 p-8 rounded-3xl border border-pink-100 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 className="text-xs font-black uppercase tracking-widest text-pink-400 mb-2">Goal</h3>
        <p className="text-sm font-bold text-gray-800">To educate teenagers on safely navigating social media.</p>
      </div>
      <div>
        <h3 className="text-xs font-black uppercase tracking-widest text-pink-400 mb-2">Audience</h3>
        <p className="text-sm font-bold text-gray-800">Teenagers and young adults.</p>
      </div>
      <div className="md:col-span-2 pt-4 border-t border-pink-200">
        <h3 className="text-xs font-black uppercase tracking-widest text-pink-400 mb-2">Solution</h3>
        <p className="text-gray-800 italic">Created <strong>'KareBare,'</strong> a virtual chatbot that educates teens on social media etiquette and safety.</p>
      </div>
    </section>

    <section className="space-y-4">
      <h3 className="text-xs font-black uppercase tracking-widest text-gray-400">User Research</h3>
      <p className="text-sm text-gray-600">
        Conducted literature review on online risks, social media impacts on youth, and government policies, identifying insights into mental health challenges, harassment, cyberbullying, and screen addiction affecting young adults.
      </p>
    </section>
  </div>
);

export const PaathProject = () => (
  <div className="bg-white text-gray-900 p-8 md:p-12 leading-relaxed max-w-3xl mx-auto space-y-12">
    <header className="space-y-4">
      <h1 className="text-5xl font-black tracking-tighter text-blue-600 uppercase">PAATH</h1>
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <p className="text-xl text-gray-400 font-medium">Student Budgeting Solution • 2024</p>
        <ProjectLink href="https://www.figma.com/proto/UZEY8tk5c8DYBgbSsmPeYU/4125-APP-PROTOTYPE?node-id=2044-217&node-type=canvas&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2044%3A136" />
      </div>
      <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full font-bold text-sm">Financial Technology</div>
    </header>
    <section className="space-y-4">
      <p className="text-2xl font-bold leading-snug">Paath is a student-centered budgeting app empowering Cornell undergraduates to take control of their finances with clarity and confidence.</p>
      <p className="text-gray-600">Tailored for the unique financial lifestyle of college students, Paath simplifies expense tracking and provides campus-specific savings insights.</p>
    </section>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t">
      <div className="space-y-4">
        <h3 className="text-xs font-black uppercase tracking-widest text-gray-400">Details</h3>
        <p className="text-sm"><strong>Role:</strong> UI/UX Designer</p>
        <p className="text-sm"><strong>Timeline:</strong> 1 Year (2024-2025)</p>
        <p className="text-sm"><strong>Tools:</strong> Figma, Adobe XD</p>
      </div>
      <div className="space-y-4">
        <h3 className="text-xs font-black uppercase tracking-widest text-gray-400">The Problem</h3>
        <p className="text-sm text-gray-600">Standard banking apps don't account for variable student expenses like meal plans, laundry, and campus-related discretionary spending.</p>
      </div>
    </div>

    <section className="bg-blue-50 p-8 rounded-3xl border border-blue-100 space-y-8">
      <div>
        <h3 className="text-xs font-black uppercase tracking-widest text-blue-500 mb-4">Project Solution: Financial Management App</h3>
        <ul className="space-y-3 text-sm text-gray-800 list-none">
          <li className="flex gap-3"><span className="text-blue-500 font-bold">•</span> <strong>Unified Dashboard:</strong> Effortless tracking of income, expenses, and budgets in a single interface.</li>
          <li className="flex gap-3"><span className="text-blue-500 font-bold">•</span> <strong>Transaction & Portfolio:</strong> Detailed transaction history and income tracking with integrated investment overview.</li>
          <li className="flex gap-3"><span className="text-blue-500 font-bold">•</span> <strong>Education:</strong> Tax preparation information and curated resources to build smart financial habits.</li>
        </ul>
      </div>

      <div className="pt-6 border-t border-blue-200">
        <h3 className="text-xs font-black uppercase tracking-widest text-blue-500 mb-4">Student-focused Benefits</h3>
        <ul className="space-y-3 text-sm text-gray-800 list-none">
          <li className="flex gap-3"><span className="text-blue-500 font-bold">•</span> Promotes clear financial literacy by simplifying complex planning for students.</li>
          <li className="flex gap-3"><span className="text-blue-500 font-bold">•</span> Reduces financial stress and saves time, helping build a secure, debt-free future.</li>
        </ul>
      </div>
    </section>

    <section className="space-y-8">
      <div>
        <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Project Monitoring and Control</h3>
        <ul className="space-y-3 text-sm text-gray-600 list-none">
          <li className="flex gap-3"><span className="opacity-40 font-bold">•</span> Utilized Gantt charts to visualize progress, identify dependencies, and manage deadlines across all phases.</li>
          <li className="flex gap-3"><span className="opacity-40 font-bold">•</span> Conducted frequent team check-ins to address challenges and maintain alignment on tasks.</li>
          <li className="flex gap-3"><span className="opacity-40 font-bold">•</span> Regularly reviewed the Work Breakdown Structure (WBS) to ensure consistency with objectives.</li>
        </ul>
        <div className="mt-6 p-5 bg-gray-50 rounded-2xl border border-gray-100 text-[13px] text-gray-600 leading-relaxed italic">
          <span className="font-black text-gray-400 uppercase tracking-widest block text-[10px] mb-1">Challenge Intervention</span>
          Proposed and implemented a shared project log and brief daily updates to increase team transparency and responsiveness.
        </div>
      </div>

      <div className="pt-8 border-t border-gray-100">
        <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Future Steps</h3>
        <p className="text-lg font-bold text-gray-800">Conducting User Testing + In-depth Research</p>
      </div>

      <div className="pt-4 flex flex-col items-center">
        <a
          href="https://docs.google.com/presentation/d/1wtLbWRHrQRlIqy-R-7XxKGRDW8IpezLiyv5nU2Cf4Sg/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-sm transition-all hover:bg-blue-700 hover:shadow-2xl hover:scale-[1.02] active:scale-95 shadow-xl"
        >
          UX Research + Final Product Shipout

          <span className="absolute -top-2 -right-2 bg-red-500 text-[10px] px-2 py-0.5 rounded-full animate-pulse">
            Update
          </span>
        </a>
      </div>
    </section>
  </div>
);

export const SliceGeistProject = () => (
  <div className="bg-white text-gray-900 p-8 md:p-12 leading-relaxed max-w-3xl mx-auto min-h-full space-y-12">
    <header className="space-y-4">
      <h1 className="text-6xl font-black tracking-tighter text-purple-600 uppercase">SLICEGEIST</h1>
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <p className="text-xl text-gray-400 font-medium">Ghost Train Strategy Game • 2025</p>
        <ProjectLink href="https://gdiac.cs.cornell.edu/gdiac/showcase/gallery/slicegeist/" />
      </div>
      <div className="inline-block px-4 py-2 bg-purple-50 text-purple-600 rounded-full font-bold text-sm">Strategy & Suspense</div>
    </header>
    <section className="space-y-4">
      <p className="text-2xl font-bold leading-snug">A suspenseful, pizza-themed strategy game challenging players to outwit opponents aboard a mysterious ghost train.</p>
      <p className="text-gray-600 italic">Manage resources and navigate a shifting train environment to deliver "spectral slices" while avoiding phantom conductors.</p>
    </section>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-gray-100">
      <div className="space-y-4">
        <h3 className="text-xs font-black uppercase tracking-widest text-purple-600">Specs</h3>
        <ul className="text-sm text-gray-600">
          <li><strong>Role:</strong> Lead Designer</li>
          <li><strong>Tools:</strong> Figma, C++</li>
        </ul>
      </div>
      <div className="space-y-4">
        <h3 className="text-xs font-black uppercase tracking-widest text-purple-600">Gameplay</h3>
        <p className="text-sm text-gray-600">Balancing fast-paced movement with deep strategic resource management in a tabletop-inspired digital format.</p>
      </div>
    </div>
  </div>
);

export const DishcraftProject = () => (
  <div className="bg-stone-50 text-gray-900 p-8 md:p-12 leading-relaxed max-w-3xl mx-auto space-y-12">
    <header className="space-y-4">
      <h1 className="text-5xl font-black tracking-tighter text-emerald-600 uppercase">DISHCRAFT (COOKING APP)</h1>
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full font-bold text-sm">App Development</div>
        <ProjectLink href="https://www.figma.com/proto/YFtwBeITjWu9LrALLBuNkw/DISHCRAFT?node-id=29-255&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=29%3A255" />
      </div>
    </header>

    <section className="space-y-6">
      <p className="text-xl font-bold leading-snug">
        Introducing "Dishcraft"—the innovative culinary assistant that transforms your kitchen experience!
        Still in production, with full details coming soon, Dishcraft is designed to revolutionize how you cook at home.
      </p>
      <p className="text-gray-600">
        Whether you're a seasoned chef looking for new inspiration or a beginner unsure about combining flavors,
        Dishcraft makes meal planning effortless and exciting. Stay tuned for more information as we prepare to launch
        Dishcraft and change the way you think about cooking!
      </p>
    </section>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-stone-200">
      <div className="space-y-4">
        <h3 className="text-xs font-black uppercase tracking-widest text-stone-400">Overview</h3>
        <ul className="space-y-2 text-sm">
          <li><strong>Role:</strong> Lead Designer, Project Manager</li>
          <li><strong>Timeline/Duration:</strong> 1 year (2024-2025)</li>
          <li><strong>Project Type:</strong> App Development</li>
          <li><strong>Tools Used:</strong> Figma</li>
        </ul>
      </div>
      <div className="space-y-4">
        <h3 className="text-xs font-black uppercase tracking-widest text-stone-400">Context</h3>
        <p className="text-sm text-gray-600">
          <strong>Problem:</strong> Home cooks find meal planning time-consuming and often struggle with inspiration.<br /><br />
          <strong>Goal:</strong> To simplify the meal planning process and inspire users with recipe suggestions.
        </p>
      </div>
    </div>

    <section className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
      <h3 className="text-xs font-black uppercase tracking-widest text-emerald-500 mb-2">Solution</h3>
      <p className="text-gray-700">
        Designed <strong>'Dishcraft,'</strong> an app that uses AI to suggest recipes based on user preferences and pantry inventory.
      </p>
    </section>
  </div>
);

export const CoalaProject = () => (
  <div className="bg-white text-gray-900 p-8 md:p-12 leading-relaxed max-w-3xl mx-auto space-y-12">
    <header className="space-y-4">
      <h1 className="text-5xl font-black tracking-tighter text-amber-600 uppercase">COALA (LDR PROJECT)</h1>
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <p className="text-xl text-gray-400 font-medium">Long Distance Relationship App • 2024</p>
        <ProjectLink href="https://www.figma.com/proto/9CHpMrXa2iunMF2O5GmseS/3450-Design-Final?node-id=1-55&starting-point-node-id=1%3A55&mode=design" />
      </div>
      <div className="inline-block px-4 py-2 bg-amber-50 text-amber-600 rounded-full font-bold text-sm">Interactive Technologies</div>
    </header>
    <section className="space-y-4">
      <p className="text-2xl font-bold leading-snug">Bridging the distance through intentional digital touchpoints and shared virtual spaces.</p>
      <p className="text-gray-600 italic">Coala reimagines how couples in long-distance relationships maintain intimacy through asynchronous play and synchronized emotional check-ins.</p>
    </section>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t">
      <div className="space-y-4">
        <h3 className="text-xs font-black uppercase tracking-widest text-amber-500">Overview</h3>
        <ul className="space-y-2 text-sm text-gray-600">
          <li><strong>Role:</strong> Lead UX Designer</li>
          <li><strong>Timeline:</strong> 4 Months</li>
          <li><strong>Tools:</strong> Figma, Prototyping</li>
        </ul>
      </div>
      <div className="space-y-4">
        <h3 className="text-xs font-black uppercase tracking-widest text-amber-500">The Problem</h3>
        <p className="text-sm text-gray-600">Traditional messaging apps fail to capture the nuances of physical presence, leading to "digital fatigue" in long-distance connections.</p>
      </div>
    </div>
  </div>
);

export const CmpProject = () => (
  <div className="bg-[#121212] text-white p-8 md:p-12 leading-relaxed max-w-3xl mx-auto space-y-12">
    <header className="space-y-4">
      <h1 className="text-5xl font-black tracking-tighter text-white uppercase">CORNELL MUSIC PRODUCTION</h1>
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <p className="text-xl text-gray-400 font-medium">Web Development & Maintenance</p>
        <ProjectLink href="https://cornellmusicproduction.com/" />
      </div>
      <div className="inline-block px-4 py-2 bg-white/10 text-white rounded-full font-bold text-sm border border-white/20">Front-end Development</div>
    </header>
    <section className="space-y-4">
      <p className="text-2xl font-bold leading-snug">The digital hub for Cornell's premier music production community.</p>
      <p className="text-gray-400 italic">Maintained and improved the Cornell Music Production Club’s website using PHP, HTML, JavaScript, and CSS to provide a seamless experience for artists and producers.</p>
    </section>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-white/10">
      <div className="space-y-4">
        <h3 className="text-xs font-black uppercase tracking-widest text-gray-500">Tech Stack</h3>
        <div className="flex flex-wrap gap-2">
          {['PHP', 'HTML5', 'CSS3', 'JavaScript', 'Git'].map(tool => (
            <span key={tool} className="px-3 py-1 bg-white/5 rounded text-xs font-mono">{tool}</span>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-xs font-black uppercase tracking-widest text-gray-500">Responsibilities</h3>
        <p className="text-sm text-gray-400">Regular maintenance of performance metrics, updating event rosters, and refining responsive UI components for mobile users.</p>
      </div>
    </div>
  </div>
);