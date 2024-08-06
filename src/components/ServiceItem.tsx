import React from 'react';
interface ServiceItemProps {
  name: string;
  duration: string;
  price: string;
  icon: string;
  isGroup?: boolean;
}
const ServiceItem: React.FC<ServiceItemProps> = ({ name, duration, price, icon, isGroup }) => {
  return (
    <div className="flex flex-wrap items-center px-4 pt-2 pb-4 w-full max-md:max-w-full">
      <div className="flex flex-col items-start self-stretch pr-4 my-auto w-14 text-xl tracking-normal leading-5 text-center text-white whitespace-nowrap">
        <div className="overflow-hidden gap-2.5 w-10 h-10 bg-blue-500 rounded min-h-[40px]">
          {icon}
        </div>
      </div>
      <div className="flex flex-col flex-1 shrink self-stretch py-1.5 my-auto basis-4 min-w-[240px] max-md:max-w-full">
        <div className="self-start text-sm tracking-normal leading-none text-black text-opacity-90">{name}</div>
        <div className="flex items-start w-full max-md:max-w-full">
          <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
            <div className="flex flex-wrap gap-4 items-start w-full max-md:max-w-full">
              <div className="flex items-center text-xs tracking-wide leading-loose whitespace-nowrap text-black text-opacity-60">
                <div className="self-stretch my-auto">{duration}</div>
              </div>
              <div className="flex justify-center items-center self-stretch h-full">
                <div className="flex gap-2 self-stretch my-auto min-h-[5px]" />
              </div>
              <div className="flex items-center text-xs tracking-wide leading-loose whitespace-nowrap text-black text-opacity-60">
                <div className="self-stretch my-auto">{price}</div>
              </div>
              {isGroup && (
                <>
                  <div className="flex justify-center items-center self-stretch h-full">
                    <div className="flex gap-2 self-stretch my-auto min-h-[5px]" />
                  </div>
                  <div className="flex items-center text-xs tracking-wide leading-loose text-black text-opacity-60">
                    <div className="self-stretch my-auto">Group service</div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceItem;