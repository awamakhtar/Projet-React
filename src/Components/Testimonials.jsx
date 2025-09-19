import { ChevronLeft, ChevronRight } from "lucide-react";

function Testimonials() {
  return (
    <section className="relative text-[#302f2f] min-h-[70vh] flex items-center justify-center">
        <img
            src="/test.jpg"
            alt="Welcome"
            className="absolute inset-0 w-full h-full object-cover object-center"/>
        <div className="absolute inset-0 "></div>
            <div className="relative z-10 flex flex-col items-center justify-center px-6 md:px-12 w-full">
                <div className="text-center max-w-2xl mb-8">
                    <p className="uppercase tracking-widest mb-3 text-sm">
                    We Are On A Mission
                    </p>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl  font-bold leading-snug">
                    What Clients{" "}
                        <span className="font-normal"><br /> Says About Performance</span>
                    </h1>
                </div>
                <div className="flex items-center space-x-6  p-6 max-w-3xl">
                {/* Témoignage */}
                <div className="flex-1">
                    <p className="italic text-gray-700 mb-4">
                    "This charity is doing amazing work in rural areas where help is <br />
                    often overlooked. I’m proud to support their mission to lift
                    families <br /> out of poverty with dignity and care."
                    </p>
                <div className="flex items-center space-x-4">
                    <img
                    src="/avatar.png"
                    alt="Avatar de Zahid R."
                    className="w-12 h-12 rounded-full border-2 border-[#647955]"/>
                    <div className="space-y-0">
                        <p className="font-bold text-gray-800">— Zahid R.</p>
                        <p className="text-sm text-orange-500">Nairobi</p>
                    </div>
                </div>
            </div>

                <div className="flex flex-col sm:flex-row items-center sm:space-x-3 space-y-3 sm:space-y-0">
                    <button className="bg-[#647955] text-white w-8 h-10 rounded-sm flex items-center justify-center cursor-pointer border-none hover:bg-[#4b5e3d] transition">
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button className="bg-[#647955] text-white w-8 h-10 rounded-sm flex items-center justify-center cursor-pointer border-none hover:bg-[#4b5e3d] transition">
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Testimonials;
