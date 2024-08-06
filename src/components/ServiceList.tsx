import React from 'react';
import ServiceItem from './ServiceItem';
interface ServiceListProps {}
const ServiceList: React.FC<ServiceListProps> = () => {
  const services = [
    { id: 1, name: 'Service 1 [APT X Loc 1]', duration: '60m', price: '₹400.00', icon: 'S' },
    { id: 2, name: 'Service 2 [APT X Loc 1]', duration: '45m', price: '₹300.00', icon: 'S' },
    { id: 3, name: 'Service 2 [APT X Loc 1]', duration: '45m', price: '₹300.00', icon: 'G', isGroup: true }
  ];
  return (
    <section className="flex flex-1 shrink justify-center h-full basis-12 min-w-[240px] max-md:max-w-full">
      <div className="flex flex-col flex-1 shrink justify-center py-4 pr-6 pl-4 w-full basis-0 min-w-[240px] max-md:pr-5 max-md:max-w-full">
        <h2 className="flex flex-col justify-center items-start px-4 py-6 w-full text-sm tracking-normal leading-none text-black text-opacity-90 max-md:max-w-full">
          SELECT SERVICE
        </h2>
        <div className="flex flex-col flex-1 w-full max-md:max-w-full">
          {services.map((service, index) => (
            <React.Fragment key={service.id}>
              <ServiceItem {...service} />
              {index < services.length - 1 && (
                <div className="flex flex-col w-full max-md:max-w-full">
                  <div className="shrink-0 h-px bg-neutral-200 max-md:max-w-full" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServiceList;