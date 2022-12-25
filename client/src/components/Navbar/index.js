import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai"
import logo from "../../assets/images/gingerly_knits_logo.png"
import topNav from '../../assets/images/mobile_nav_1.png'
import bottomNav from '../../assets/images/mobile_nav_2.png'
import emptyCart from '../../assets/images/empty_cart.png'

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <header>
      <nav>
        <div className="flex justify-between items-center m-2 sm:mx-6">
          {/* Logo */}
          <div className="m-3 hidden sm:flex">
            <img 
              className="h-[130px] w-auto sm:h-[180px]"
              src={logo}
              alt="Logo"
            />
          </div>
          {/* Desktop Navbar */}
          <div className="hidden sm:flex">
            <ul className="flex">
              <li className="mr-4">
                Home
              </li>
              <li className="mr-4">
                Shop
              </li>
              <li className="mr-4">
                Blog
              </li>
              <li className="mr-4">
                Make
              </li>
              <li>
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
        <div className="">
          <ul className={
            (showNav ? "left-0" : "-left-full") +
            " absolute transition-all duration-[1.0s] ease-in-out w-full h-full"
          }>
            <li className="flex justify-center">
            <img 
              src={topNav}
              alt="knit supplies"
              className="h-[220px] w-[240px]"
              />
            </li>
            <li className="flex justify-center">
              Home
            </li>
            <li className="flex justify-center">
              Shop
            </li>
            <li className="flex justify-center">
              Blog
            </li>
            <li className="flex justify-center">
              Make
            </li>
            <li className="flex justify-center">
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
            <div className="m-4">
              Login
            </div>
          </div>

      </div>
      </nav>
    </header>
  )
}

export default Navbar;