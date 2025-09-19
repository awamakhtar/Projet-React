
import { ShoppingCart } from 'lucide-react';
function Footer2() {
    return(
       <div className="flex flex-col sm:flex-row lg:flex-row justify-between items-center  p-4 bg-white">
            <div className="footer-bottom flex-1 text-center">
                <p>&copy; All right reserved 2025 Alone</p>
            </div>
            <div className="">
                <button className="flex items-center gap-1 bg-black text-sm text-white p-1 rounded-full border-none cursor-pointer ">
                    <ShoppingCart className="w-5 h-5"/>
                  <span className="italic">Buy</span>   Alone  <span className="italic">on</span>  <img src="/Zenvento.svg" alt="" className="w-12 h-12"/> </button>
                
            </div>
       </div>
       
       
    )
}
export default Footer2;