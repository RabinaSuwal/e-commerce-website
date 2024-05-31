import { FaRegHeart, FaSearch, FaShoppingBag } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";

export default function HeaderMain() {
  return (
    <div className='border-b border-gray-300 py-6'>
        <div className="container sm:flex justify-between items-center">
            <div className="font-bold text-4xl text-center pb-4 sm:pb-0 text-blacklish">Logo</div>

            <div className="w-full sm:w-[300px] md:w-[70%] relative">
                <input className="border-gray-300 border p-2 px-4 rounded-lg w-full" 
                type="text" placeholder="Enter any product name..." />
            <FaSearch className="absolute right-0 top-0 mr-3 mt-3 "/>
            </div>
            
            <div className="hidden lg:flex gap-4 text-[30px]">
             <div>
                <FaRegUser/>
              </div>

              <div className="relative">
                <FaRegHeart/>
                <div className="bg-red-500 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px]
                 text-white grid place-items-center translate-x-1 translate-y-1">0
                </div>
              </div>

              <div className="relative">
              <FaShoppingBag/>
              <div className="bg-red-500 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px]
                 text-white grid place-items-center translate-x-1 translate-y-1">0
                </div>
              </div>
            </div>
              
        </div>   
    </div>
  )
}
