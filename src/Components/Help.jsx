import { Play } from 'lucide-react';

function Help(){
    return(
       
        <section className=" py-16 px-4 sm:px-6 lg:px-8 ">
            <div className="max-w-7xl px-8 md:px-28 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* la Carte  */}
                <div className="bg-[#e6f5db] p-8 sm:p-12 border border-green-200">
                    <h2 className="text-4xl font-normal leading-tight mb-4">
                    Help is <span className="font-bold"><br />Our Goal</span> 
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                    At the heart of everything we do is a simple mission: to help those in need. Whether it's providing food, shelter, education, or emergency aid, we strive to bring relief, hope, and lasting change to individuals and communities around the world.
                    </p>
                    <button className="bg-[#647955] border-none cursor-pointer text-white px-6 py-3 rounded-md uppercase text-sm font-semibold tracking-wide mt-4  transition">
                    More About
                    </button>
                </div>
        
                <div className="mt-16 md:text-left">
                    <p className="uppercase text-gray-600 tracking-wide mb-2">
                    We Are In A Mission
                    </p>
                    <h2 className="text-3xl font-bold mb-6 text-[#302f2f]">
                    To Help The Helpless
                    </h2>

                    <div className="relative ">
                        <img 
                        src="/vidéo.jpg" 
                        alt="Helping people" 
                        className="w-full object-cover md:-ml-16" 
                        />
                        {/* Bouton play centré */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button className="w-16 h-16 border-none rounded-full bg-orange-500 text-white flex items-center justify-center shadow-lg hover:bg-orange-600">
                           <Play />
                        </button>
                        </div>
                    </div>
                </div>
       
            </div>
      </section>
    )
}

export default Help;
 
 
