
import { CalendarCheck, Heart } from "lucide-react";

function Volunteer() {
  const Volunteer = [
    { title: "Sees boom in younger volunteers following pandemic", price: "$120,000", img: "/volontaire.jpg" },
    { title: "Breaking Barriers: Empovering Women in Sports", price: "$50,000", img: "/volontaire1.jpg" },
    { title: "Summit to focus on responsible use of AI in fundraising", price: "$32,000", img: "/volontaire2.jpg" },
  ];

  return (
    <section className="py-16 max-w-6xl mx-auto px-8 md:px-28">
        <p className="uppercase text-gray-600 text-center text-sm tracking-wide mb-2">
            We Are In A Mission
        </p>
        <h2 className="text-2xl font-bold text-center mb-10 text-[#302f2f]">
            Explore Our <span className="font-normal">News & update</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6 cursor-pointer">
            {Volunteer.map((item, i) => (
            <div key={i} className="bg-white shadow rounded-sm overflow-hidden hover:shadow-md transition">
                <div className="relative h-48 w-full">
                    <img
                        src={item.img}
                        alt={item.title}
                        className="h-48 w-full object-cover"
                    />        
            </div>
            <div className="p-4 items-center flex flex-col space-y-0">
                
                <p className="flex items-center gap-2 text-sm text-orange-500">
                    <CalendarCheck className="w-4 h-4"/> February 14, 2025
                </p>
                <h3 className="font-bold mb-2 text-center text-md text-[#302f2f]">{item.title}</h3> 
                <div className="flex flex-row items-center space-x-4">
                <img
                src="/avatar1.png"
                alt="Avatar de Zahid R."
                className="w-12 h-12 rounded-full border-2 border-[#647955]"/>
                <div className="space-y-0">
                <p className="text-sm text-[#7f7f80]">By Bearsthemes</p>
            </div>
        </div>
            </div>
          </div>
          
        ))}
      </div>
      <div className="text-center mt-4">
        <button className="bg-[#647955] text-white px-6 uppercase py-3 cursor-pointer border-none rounded shadow hover:bg-orange-500 transition">
          More Updates
        </button>
      </div>
    </section>
  );
}

export default Volunteer;
