

function Welcome(){
    return(
        <section className="relative text-white h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] flex items-center justify-center ">
        <img
            src="/welcome.jpg" 
            alt="Welcome"
            className="absolute inset-0 w-full h-full object-cover"
          />
        <div className="absolute inset-0  text-center flex flex-col justify-center items-center px-4">
            <div className="relative z-10 text-center px-4 max-w-3xl">
                <p className="uppercase tracking-widest mb-4 text-sm">Let's Begin More</p>
                <h1 className="text-3xl sm:text-4xl font-bold leading-snug mb-4">
                Welcome to Alone NGO Charity Organization Helping Poor Community.
                </h1>
                <p className="text-sm sm:text-lg mb-6 leading-relaxed ">Delivering help and hope to children.</p>
                <div className="space-x-2 flex flex-col lg:flex-row gap-2 items-center justify-center">
                    <button className="bg-[#647955]  text-white px-6 py-3 rounded-md uppercase  tracking-wide
                        border-none hover:bg-orange-500 transition-colors duration-300 cursor-pointer  font-semibold">
                        Donate Now
                    </button>
                    <button className="uppercase bg-transparent border-1 border-white text-white
                     px-6 py-3 rounded-md transition-colors duration-300 cursor-pointer hover:bg-[#647955]">
                        Apply For Volunter
                    </button>
                </div>
            </div>
        </div>

        </section>
        
        
        
        
        
        
        
        
    )
}
export default Welcome;