import React from 'react';

const IMAGES = [
  {
    url: 'https://scontent-lga3-2.cdninstagram.com/v/t51.82787-15/608281505_17987505551918845_1770231036508164755_n.jpg?stp=dst-jpg_e35_p1080x1080_tt6&_nc_cat=109&ig_cache_key=MzgwMDgwMDU4OTE1MzAxMzcyMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=bROm9T2L-ykQ7kNvwHNSWA7&_nc_oc=Adl3-inLEE257F0CkKDoIlwakR_tb3J28wUC_vJcYWvIlrFgI9dKkMrbPf2-AsLHJ62_6Zjvhl3EUowfg0vE2Raz&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_gid=woV-BdoIUmTkYnX8gcRWEQ&oh=00_AfokTFUq4k_0d_Y1feUzJhrrpGdrhh_-8HOeuNnpTafxHw&oe=695F878B',
    title: 'KEN CARSON',
    desc: 'SHOTBYALL'
  },
  {
    url: 'https://scontent-lga3-2.cdninstagram.com/v/t51.82787-15/610792224_17987505581918845_1658202134390335514_n.jpg?stp=dst-jpg_e35_p1080x1080_tt6&_nc_cat=105&ig_cache_key=MzgwMDgwMDU4OTEzNjIzMDAyMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkxMS5zZHIuQzMifQ%3D%3D&_nc_ohc=Hyc-iGWdLwcQ7kNvwHZDKSo&_nc_oc=Adm1BA_kBLc-hIZ1h-eG4nNqqSRnpSgN0pubyAUc03n4Z2m0mq0BlqRwSNdB_Rl36KW2vawEuLmsff63_-SAja4E&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_gid=woV-BdoIUmTkYnX8gcRWEQ&oh=00_AfpEJJHk4Z4K5YdX17IHnWAKHEBLoA8iKgo0pjq8QeOZ9A&oe=695FA550',
    title: 'ORANGE EDITORIAL',
    desc: 'SHOTBYALL'
  },
  {
    url: 'https://scontent-lga3-2.cdninstagram.com/v/t51.82787-15/609673258_17987505608918845_4396446358555337327_n.jpg?stp=dst-jpg_e35_p1080x1080_tt6&_nc_cat=105&ig_cache_key=MzgwMDgwMDU4OTEyNzgzMTc5Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkxMS5zZHIuQzMifQ%3D%3D&_nc_ohc=YbtIZw9TK-0Q7kNvwF-rOTv&_nc_oc=AdlNJ31K9c5qiKNm-ZfaXuyUl6sH3PWfzL32_ixVl82qNmA7G92AHnPmVaAOXSxtQ21FtyZfQO011rZHj-n2GuJC&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_gid=woV-BdoIUmTkYnX8gcRWEQ&oh=00_AfrB8Zj26ue8gilFa_jFhBo9yBcHY9b798sF54l0Xu-8lg&oe=695FA73B',
    title: 'NY GOAT PHOTOSHOOT',
    desc: 'SHOTBYALL'
  },
  {
    url: 'https://scontent-lga3-2.cdninstagram.com/v/t51.82787-15/610492243_17987505680918845_626732003796174991_n.jpg?stp=dst-jpg_e35_p1080x1080_tt6&_nc_cat=101&ig_cache_key=MzgwMDgwMDU4OTE5NDk1MTMzMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkxNy5zZHIuQzMifQ%3D%3D&_nc_ohc=hS7Wnaht2oEQ7kNvwFcWm1s&_nc_oc=AdlRcffUW9LOiXtRNXrqY2V0PExA3-gl1p-C1qhn3aWMSYaaMyXFRs8Id5BTedi0M5lY5mBMD7fAtyfert26SbUk&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_gid=woV-BdoIUmTkYnX8gcRWEQ&oh=00_AfrTf3p2Edv2AdGLMuLqfqnkdwPuyi_IKOOEouTXFQxO1A&oe=695FAA15',
    title: 'GET YOUR GRAD SHOOTS TODAY!',
    desc: 'SHOTBYALL'
  }
];

export const Gallery: React.FC = () => {
  return (
    <div className="bg-[#0a0a0a] h-full text-white font-sans flex flex-col overflow-y-auto overflow-x-hidden">
      <header className="px-6 py-6 md:px-8 space-y-1 z-10 shrink-0">
        <h1 className="text-2xl font-black tracking-tighter uppercase italic">ShotByAll</h1>
        <p className="text-white/40 text-[10px] font-bold tracking-widest uppercase">Photography Portfolio • Anthony Lall</p>
      </header>

      <div className="flex-1 px-4 pb-8">
        <div className="grid grid-cols-2 gap-4 h-full content-start">
          {IMAGES.map((img, idx) => (
            <div key={idx} className="relative group aspect-square">
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-zinc-900 border border-white/5 relative">
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                  <h3 className="text-xs font-black tracking-tight uppercase italic mb-0.5">{img.title}</h3>
                  <p className="text-white/40 text-[8px] font-bold tracking-widest uppercase">{img.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="py-4 border-t border-white/5 text-center text-white/10 text-[8px] tracking-[0.3em] uppercase shrink-0">
        © 2025 Anthony Lall
      </footer>
    </div>
  );
};
