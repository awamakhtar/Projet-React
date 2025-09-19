function Product() {
  const ProductShop = [
    { 
      title: "Reusable Collection", 
      price: "£15.00-£20.00", 
      img: "/product1.jpg",
      button: ["Handmade"] // boutons spécifiques
    },
    { 
      title: "Fair-Trade Coffee Beans", 
      price: "£20.00 £18.00", 
      img: "/product2.jpg",
      button: ["Eco-Friendly"]
    },
    { 
      title: "Aloe Vera Face Soap", 
      price: "£5.00", 
      img: "/product3.jpg",
      button: ["Natural"]
    },
    { 
      title: "Hammam Life Balm", 
      price: "£7.00", 
      img: "/product4.jpg",
      button: ["Natural"]
    },
  ];

  return (
    <section className="py-16 max-w-6xl mx-auto px-8 md:px-28">
      <p className="uppercase text-gray-600 text-center text-sm tracking-wide mb-2">
        We Are In A Mission
      </p>
      <h2 className="text-2xl font-bold text-center mb-10 text-[#302f2f]">
        Product <span className="font-normal">Shop</span>
      </h2>

      <div className="grid md:grid-cols-4 gap-6 cursor-pointer">
        {ProductShop.map((item, i) => (
          <div key={i} className="bg-white border-4 border-[#647955] shadow rounded-sm overflow-hidden hover:shadow-md transition">
            <div className="relative h-48 w-full">
              <img
                src={item.img}
                alt={item.title}
                className="h-48 w-full object-cover"
              />
              {i === 0 && (
                <div className="absolute top-3 left-3 bg-orange-500 p-2 rounded-full text-white text-sm">Sale</div>
              )}
              {i === 1 && (
                <div className="absolute top-3 left-3 bg-orange-500 p-2 rounded-full text-white text-sm">Sale</div>
              )}
            </div>
            <div className="p-4 text-center ">
              <h3 className="font-bold mb-0 text-ms text-[#302f2f]">{item.title}</h3>
              <div className="flex items-center justify-center mb-3">
                {i === 1 ? (
                  <p className="text-orange-500 font-bold text-md">
                    <span className="line-through text-black">£20.00</span> £18.00
                  </p>
                ) : (
                  <p className="text-orange-500 font-bold text-md">{item.price}</p>
                )}
              </div>
              {/* Boutons dynamiques */}
              <div className=" flex justify-center gap-2 mt-8 ">
                {item.button.map((label, index) => (
                  <button
                    key={index}
                    className=" text-[#647955] border-2 border-[#647955] cursor-pointer  px-3 py-1 rounded  transition"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Product;
