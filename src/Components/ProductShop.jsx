import { CalendarCheck, Heart } from "lucide-react";

function ProductShop() {
  const ProductShop = [
    { title: "Your Small Donation Can  Change a Life", price: "$120,000", img: "/donate1.jpg" },
    { title: "New Album by Mirace Help Poor People", price: "$50,000", img: "/donate2.jpg" },
    { title: "South African Pre-Primary School", price: "$32,000", img: "/donate3.jpg" },
  ];

  return (
    <section className="py-16 max-w-6xl mx-auto px-8 md:px-28">
        <p className="uppercase text-gray-600 text-center text-sm tracking-wide mb-2">
            We Are In A Mission
        </p>
        <h2 className="text-2xl font-bold text-center mb-10 text-[#302f2f]">
            Explore Our <span className="font-normal">Latest Causes</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6 cursor-pointer">
            {ProductShop.map((item, i) => (
            <div key={i} className="bg-white shadow rounded-sm overflow-hidden hover:shadow-md transition">
                <div className="relative h-48 w-full">
                    <img
                        src={item.img}
                        alt={item.title}
                        className="h-48 w-full object-cover"
                    />
                <div className="absolute inset-0 bg-blue-800 bg-opacity-40"></div>
                
            </div>
            <div className="p-4 space-y-0">
                <h3 className="font-normal mb-2 text-md text-[#302f2f]">{item.title}</h3>
                <p className="flex items-center gap-2 text-sm text-orange-500">
                    <CalendarCheck className="w-4 h-4"/> February 14, 2025
                </p>
                <div className="flex items-center justify-between">
                    <p className="text-[#302f2f] font-bold text-xl">{item.price}</p>
                    <Heart className="text-white w-5 h-5 p-1 rounded-sm bg-orange-500 cursor-pointer hover:scale-110 transition-transform" />
                </div>
                <a href="#" className="no-underline text-sm text-blue-800 hover:underline">
                    Donate Needed
                </a>
            </div>
          </div>
          
        ))}
      </div>
      <div className="text-center mt-4">
        <button className="bg-[#647955] text-white px-6 uppercase py-3 cursor-pointer border-none rounded shadow hover:bg-orange-500 transition">
          More Causes
        </button>
      </div>
    </section>
  );
}

export default ProductShop;
