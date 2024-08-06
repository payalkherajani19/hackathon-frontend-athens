import React from 'react';
interface SidebarProps {}
const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <aside className="flex overflow-hidden flex-col pt-4 pr-4 pl-8 bg-white min-w-[240px] w-[324px] max-md:pl-5">
      <div className="flex flex-col py-4 w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/92c95b1aa3a9249c17089929f19807902d2bb5fb02e743631dcdab64de4101a6?apiKey=cc0087ff930d487fa3515ff1c7bb9bf7&&apiKey=cc0087ff930d487fa3515ff1c7bb9bf7" className="object-contain self-center aspect-[1.23] w-[76px]" alt="Company Logo" />
        <h1 className="flex flex-col mt-6 w-full text-xl font-medium tracking-normal leading-8 text-center rounded-lg text-black text-opacity-90">
          <div className="w-full">[1st Location][1st Company][Appointy X]</div>
        </h1>
        <p className="mt-6 text-xs tracking-wide leading-5 text-black text-opacity-60">
          Seeking public trust is a major part of Wikipedia's publication philosophy.[4] Various reader polls and studies have reported public trust in Wikipedia's process for quality control.[4][5]
        </p>
        <div className="flex mt-6 w-full">
          <div className="flex flex-col items-start pt-1 pr-3 w-8">
            <div className="flex items-start w-5">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0bc397a4439fbad5a70e46f2355f8b777f043bc45026c7f42533a1c07303147c?apiKey=cc0087ff930d487fa3515ff1c7bb9bf7&&apiKey=cc0087ff930d487fa3515ff1c7bb9bf7" className="object-contain w-5 aspect-square" alt="" />
            </div>
          </div>
          <address className="flex-1 shrink py-1 my-auto text-xs tracking-wide leading-loose basis-3 min-w-[240px] text-black text-opacity-90">
            Location 1 Company 1 Address
          </address>
        </div>
      </div>
      <a href="#" className="self-start mt-6 text-xs tracking-wide leading-loose text-blue-500">Looking for another location?</a>
    </aside>
  );
};
export default Sidebar;