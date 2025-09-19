import React from 'react';

const events = [
  {
    image: '/event1.jpg', 
    category: 'Children, Helping',
    title: 'Use Hashtags To Support Online',
    location: 'United States',
    date: '07 Mar 2026',
  },
  {
    image: '/event2.jpg', 
    category: 'Children, Donation',
    title: 'Use Hashtags To Support Online',
    location: 'United States',
    date: '06 Oct 2025',
  },
];

const EventsSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto px-8 md:px-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
       
        <div className="flex flex-col items-start md:items-start text-left">
          <p className="uppercase  mb-3 text-sm tracking-wide">
            We Are In A Mission
          </p>
          <h2 className="text-4xl sm:text-4xl  leading-tight mt-2 mb-4 text-[#302f2f]">
            Explor Our <span className="font-normal"><br />Upcoming Events</span>
          </h2>
          <button className="bg-[#647955] border-none cursor-pointer text-white px-6 py-3 rounded-md uppercase text-sm font-semibold tracking-wide mt-4  hover:bg-orange-500 transition-colors duration-300">
            More Events
          </button>
        </div>

       
        <div className="space-y-8">
          {events.map((event, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
              
              <div className="flex-shrink-0 text-[#302f2f] w-full sm:w-48 h-48 sm:h-auto overflow-hidden rounded-lg">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-[150px] object-cover"
                />
              </div>

              {/* Détails de l'événement */}
              <div className="flex-1 text-left  space-y-0">
                <p className="text-[#647955] text-sm mb-1">{event.category}</p>
                <h3 className="text-xl font-bold mb-2 text-[#302f2f]">{event.title}</h3>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 
                    text-sm text-gray-600">
                  <div className="block items-center">
                    <p className="text-gray-500 text-sm mb-1 uppercase">Event In:</p>
                    <p className="border-r pr-2 text-orange-500">{event.location}</p>
                  </div>
                  <div className="block items-center text-orange-500">
                    <p className="text-gray-500 text-sm mb-1 uppercase">Date:</p>
                    <p>{event.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;