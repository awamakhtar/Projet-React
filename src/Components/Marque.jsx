function Marque() {
  const images = [
    { src: "/marque2.png" },
    { src: "/marque4.png" },
    { src: "/marque3.png" },
    { src: "/marque5.png" },
    { src: "/marque1.png" }


  ];

  return (
    <section className="bg-[#e6f5db] py-16 flex items-center justify-center  ">
      <div className=" flex flex-wrap justify-center gap-12 sm:gap-16 ">
        {images.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            <img 
              src={item.src} 
              alt={`marque-${index}`} 
              className="h-20 w-auto object-contain" 
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Marque;
