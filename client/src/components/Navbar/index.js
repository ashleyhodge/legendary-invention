import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai"
import { FaTiktok, FaPatreon } from "react-icons/fa"
import { BsFacebook, BsInstagram, BsYoutube} from "react-icons/bs"
import logo from "../../assets/images/gingerly_knits_logo.png"
import topNav from '../../assets/images/mobile_nav_1.png'
import bottomNav from '../../assets/images/mobile_nav_2.png'
import emptyCart from '../../assets/images/empty_cart.png'

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <header>
      <nav>
        <div className="flex justify-between text-[20px] lg:justify-evenly items-center m-2 font-bad-script sm:mx-6">
          {/* Desktop Logo */}
          <div className="m-3 hidden sm:flex">
            <img 
              className="h-[130px] w-auto sm:h-[180px]"
              src={logo}
              alt="Logo"
            />
          </div>
          {/* Desktop Navbar */}
          <div className="hidden sm:flex">
            <ul className="flex font-black text-[#412117]">
              <li className="mx-4 hover:text-[#C3706B] cursor-pointer">
                Home
              </li>
              <li className="mx-4 hover:text-[#C3706B] cursor-pointer">
                Blog
              </li>
              <li className="mx-4 hover:text-[#C3706B] cursor-pointer">
                Shop
              </li>
              <li className="mx-4 hover:text-[#C3706B] cursor-pointer">
                Make
              </li>
              <li className=" mx-4 hover:text-[#C3706B] cursor-pointer">
                Contact
              </li>
            </ul>
          </div>
      {/* Mobile Navbar */}
          <div>
            {showNav ? (
              <AiOutlineMenu
                onClick={() => setShowNav(!showNav)}
                className="sm:hidden w-7 h-7 m-3"
              />
              ) : (
              <AiOutlineMenu
                onClick={() => setShowNav(!showNav)}
                className="sm:hidden w-7 h-7 m-3"
              />
            )}
            <div className="text-[20px] text-[#412117]">
              <ul className={
                (showNav ? "left-0" : "-left-full") +
                " absolute transition-all duration-[1.0s] ease-in-out w-full h-full z-10 bg-white sm:hidden"
              }>
                <li className="flex justify-center">
                <img 
                  src={topNav}
                  alt="knit supplies"
                  // cut supplies picture in canva to remove white space
                  className="h-[220px] w-[240px]"
                  />
                </li>
                <li className="flex justify-center p-2 hover:text-[#C3706B]">
                  Home
                </li>
                <li className="flex justify-center p-2 hover:text-[#C3706B]">
                  Shop
                </li>
                <li className="flex justify-center p-2 hover:text-[#C3706B]">
                  Blog
                </li>
                <li className="flex justify-center p-2 hover:text-[#C3706B]">
                  Make
                </li>
                <li className="flex justify-center p-2 hover:text-[#C3706B]">
                  Contact
                </li>
                <li className="flex justify-center">
                <img 
                  src={bottomNav}
                  alt="knit supplies"
                  className="h-[220px] w-[240px] flex items-center"
                  />
                </li>
              </ul>
            </div>
          </div>
      {/* Login and cart elements */}
          <div className="flex items-center">
            <div>
              <img 
                src={emptyCart}
                alt="empty cart"
                className='w-[30px]'
              />
            </div>
            <div className="m-4 font-black text-[#412117] hover:text-[#C3706B]">
              Login
            </div>
          </div>
        </div>
      </nav>
      <ul className="hidden sm:fixed sm:block text-[#6D374E] top-[40%] sm:left-0 text-[20px] sm:text-[30px] z-10">
        <li className='relative transition-all hover:duration-300 hover:ease-in-out p-[10px] hover:px-[25px] sm:hover:px-[30px] opacity-[60%] hover:opacity-[100%]'><a href="#" ><BsFacebook/></a></li>
        <li className='relative transition-all hover:duration-300 hover:ease-in-out p-[10px] hover:px-[25px] sm:hover:px-[30px] opacity-[60%] hover:opacity-[100%]'><a href="#"><BsInstagram/></a></li>
        <li className='relative transition-all hover:duration-300 hover:ease-in-out p-[10px] hover:px-[25px] sm:hover:px-[30px] opacity-[60%] hover:opacity-[100%]'><a href="#"><FaTiktok/></a></li>
        <li className='relative transition-all hover:duration-300 hover:ease-in-out p-[10px] hover:px-[25px] sm:hover:px-[30px] opacity-[60%] hover:opacity-[100%]'><a href="#"><BsYoutube/></a></li>
        <li className='relative transition-all hover:duration-300 hover:ease-in-out p-[10px] hover:px-[25px] sm:hover:px-[30px] opacity-[60%] hover:opacity-[100%]'><a href="#"><FaPatreon /></a></li>
      </ul>
    </header>
  )
}

export default Navbar;