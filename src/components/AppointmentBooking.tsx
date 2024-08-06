import React from 'react';
// import Header from './Header';
import Sidebar from './Sidebar';
import ServiceList from './ServiceList';
interface AppointmentBookingProps {}
const AppointmentBooking: React.FC<AppointmentBookingProps> = () => {
  return (
    <div className="flex overflow-hidden flex-col justify-center items-center px-20 py-16 shadow-sm bg-neutral-50 max-md:px-5">
      <div className="flex flex-col w-full bg-white rounded-3xl shadow-sm max-w-[1000px] min-h-[780px] max-md:max-w-full">
        <div className="flex flex-col flex-1 w-full max-md:max-w-full">
          {/* <Header /> */}
          <div className="flex flex-wrap flex-1 justify-center size-full max-md:max-w-full">
            <Sidebar />
            <ServiceList />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AppointmentBooking;