
function Hero(){
    return(
        <section className="relative text-white h-[90vh] flex items-center justify-center"
        style={{
        backgroundImage: "url('/hero.jpg')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        }}>
        <div className="absolute inset-0  text-center flex flex-col justify-center items-center px-4">
            <div className="relative z-10 text-center px-4 max-w-3xl">
                <p className="uppercase tracking-widest mb-4 text-sm">Raise Your Hand</p>
                <h1 className="text-3xl sm:text-5xl font-bold leading-snug mb-4">
                We Help All People In Need <br />
                <span className="text-white font-extrabold">
                Around The World
                </span>
                </h1>
                <p className="text-base sm:text-lg mb-6 leading-relaxed">
                From providing food, shelter, and medical aid to supporting education
                and disaster relief, we work tirelessly to uplift lives and restore
                hope across borders.</p>

                <button className="bg-[#647955]  text-white px-6 py-3 rounded-md uppercase  
                border-none hover:bg-orange-500 transition-colors duration-300 cursor-pointer">
                Donate Now
                </button>
            </div>
        </div>

        </section>
        
        
        
        
        
        
        
        
    )
}
export default Hero;