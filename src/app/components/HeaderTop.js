
import { FaFacebook, FaLinkedin, FaSquareInstagram } from "react-icons/fa6";

export default function HeaderTop() {
  return (
    <div className="border-b border-gray-300 hidden sm:block">
        <div className="container py-4">
            <div className="flex justify-between items-center">
                
                <div className="hidden lg:flex gap-2">
                  <div className="header_top_icon_wrapper"><FaFacebook/></div>
                  <div className="header_top_icon_wrapper"><FaSquareInstagram/></div>
                  <div className="header_top_icon_wrapper"> <FaLinkedin/></div> 
                </div>

                <div className="text-gray-500 text-[14px]">
                  <b>FREE SHIPPING</b>THIS WEEK ORDER OVER-Rs.1000
                </div>

                <div className="flex gap-4">
                  <select name="currency" id="currency">
                    <option value="Rs">Rs</option>
                    <option value="INR">INR</option>
                    <option value="USD">USD</option>
                  </select>

                  <select name="language" id="language">
                    <option value="English">English</option>
                    <option value="Nepali">Nepali</option>
                  </select>
                </div>

            </div>
        </div>
    </div>
  )
}

