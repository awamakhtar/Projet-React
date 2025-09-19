import {Phone,ChevronDown,Menu,Facebook,Linkedin,Youtube,Instagram,ShoppingBag,X,} from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full ">
      {/* 🔹 TopBar */}
      <div className=" flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-gray-200 gap-2 sm:gap-0">
        {/* Phone */}
        <div className="flex items-center gap-2 text-[#647955]">
          <Phone className="text-orange-500 text-xl sm:text-2xl" />
          <span className="text-orange-500 text-sm sm:text-base">Phone No:</span>
          <span className="text-[#647955] text-sm sm:text-base">
            (+221) 77 123 45 67
          </span>
        </div>

        {/* resaux sociaux */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-2 sm:mt-0">
          <span className="text-orange-500 text-sm sm:text-base">
            Follow Us:
          </span>
          <a href="#" className="text-[#647955] text-lg sm:text-xl hover:text-orange-500">
            <Facebook className="w-5 h-5"/>
          </a>
          <a href="#" className="text-[#647955] text-lg sm:text-xl hover:text-orange-500">
            <Linkedin className="w-5 h-5"/>
          </a>
          <a href="#" className="text-[#647955] text-lg sm:text-xl hover:text-orange-500">
            <Youtube className="w-5 h-5"/>
          </a>
          <a href="#" className="text-[#647955] text-lg sm:text-xl hover:text-orange-500">
            <Instagram  className="w-5 h-5"/>
          </a>
        </div>
      </div>

      {/* 🔹 Navbar */}
      <nav className="flex items-center justify-between p-4 relative bg-white shadow-md">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="logo" className="" width={100}/>
        </div>

  
        <div className="hidden md:flex items-center gap-6 text-[#647955] font-medium">
          <ul className="flex gap-6 items-center ">
            {["Home", "Pages", "Blog", "Causes", "Shop", "Contact"].map(
              (item) => (
                <li key={item} className="inline-block">
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="flex items-center gap-1 hover:text-orange-500 text-[#647955] uppercase no-underline"
                  >
                    {item} <ChevronDown className="w-4 h-4" />
                  </a>
                </li>
              )
            )}
          </ul>

          {/* Panier */}
          <div className="relative cursor-pointer">
            <ShoppingBag className="bg-orange-500 text-white p-1 rounded-sm" />
            <span className="absolute -top-2 -right-2 bg-white text-orange-500 rounded-full px-1 text-xs">
              0
            </span>
          </div>
        </div>

        {/*  Icon menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded cursor-pointer border-none"
        >
          {isOpen ? (
            <X size={28} className="text-[#647955]" />
          ) : (
            <Menu size={28} className="text-white bg-[#647955] rounded " />
          )}
        </button>

        {/*Menu Mobile  */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden z-50 overflow-hidden animate-slide-down">
            <ul className="flex flex-col gap-4 p-4 text-[#647955] font-medium text-center justify-center items-center">
              {["Home", "Pages", "Blog", "Causes", "Shop", "Contact"].map(
                (item) => (
                  <li key={item} className="inline-block ">
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="flex items-center gap-1 hover:text-orange-500 text-green-800 text-sm uppercase no-underline"
                    >
                      {item} <ChevronDown className="w-4 h-4" />
                    </a>
                  </li>
                )
              )}

              {/* Panier mobile */}
              <div className="relative flex items-center gap-2 mt-2 cursor-pointer">
                <ShoppingBag className="bg-orange-500 text-white p-1 rounded-sm" />
                <span className="absolute bg-white  text-orange-500 rounded-full px-2 text-xs -top-2 -right-2">
                  0
                </span>
              </div>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
