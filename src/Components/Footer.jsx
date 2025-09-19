const images = [
  "/imgFooter1.png",
  "/imgFooter2.png",
  "/imgFooter3.png",
  "/imgFooter4.png",
  "/imgFooter5.png",
  "/imgFooter6.png"
];

function Footer() {
  return (
    <footer className="w-full "> 
    {/* newsletter */}
    <div className="bg-[#e6f5db] mt-12 w-full py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <h2 className="text-xl font-bold mb-4 md:mb-0">
            SUBSCRIBE FOR NEWSLETTER
          </h2>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email here..."
              className="px-4 py-2 border border-[#4B5563] focus:outline-none w-72"
            />
            <button className="bg-orange-500 text-white px-4 py-2 border-none cursor-pointer rounded-r-md">
              Subscribe
            </button>
          </div>
        </div>
      </div> 
    {/* info */}
        <div className="bg-[#647955] w-full text-white py-8">
        <div className="  sm:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 ">
            <div className="infos">
                <h4 className="uppercase text-lg">Information</h4>
                <p className=" leading-relaxed max-w-sm"> Dedicated to making a difference, provides essential support, 
                  resources, and hope to vulnerable communities around the world.</p>
                <a href="" className="uppercase underline text-white text-sm hover:text-orange-500">Read More</a>
            </div>
            <div className="contact">
                <h4 className="uppercase text-lg mb-4">Contact Us</h4>
                <p>Elliott Ave, Parkville VIC 3052, Melbourne Canada</p>
                <p>Phone: (+42) 348 952 11</p>
                <p>Email: info@domain.com</p>
                <button className="text-white uppercase bg-orange-500 p-2 rounded-md cursor-pointer border-none ">Contact Us</button>
            </div>
            <div className="links">
                 <h4 className="uppercase text-lg mb-2">QUICK LINKS</h4>
                 <ul className="space-y-3  ">
                    <li className="list-none"><a href="#" className="text-white no-underline hover:text-orange-500">Get Involved</a></li>
                    <li className="list-none"><a href="#" className="text-white no-underline hover:text-orange-500">Donate Now</a></li>
                    <li className="list-none"><a href="#" className="text-white no-underline hover:text-orange-500">Careers</a></li>
                    <li className="list-none"><a href="#" className="text-white no-underline hover:text-orange-500">Site Map</a></li>
                 </ul>
            </div>
            <div className="HIGHLIGHTS">
                <h4 className="uppercase text-lg mb-4">HIGHLIGHTS</h4>
               
                <div className="grid grid-cols-2 sm:grid-cols-3  gap-2 ">
                {images.map((src, i) => (
                     <img
                     key={i} 
                    src={src}    
                    alt={`highlight-${i}`} 
                     className="w-full h-32 sm:h-20 lg:h-30 aspect-square object-cover rounded-sm" 
                 /> 
                ))} 
                </div> 
               
           
            </div>
        </div>
                </div>
        
    </footer>

    
  )
    

}
export default Footer;
                        