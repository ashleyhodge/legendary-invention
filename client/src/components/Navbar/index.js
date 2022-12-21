import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai"
import logo from "../../assets/images/gingerly_knits_logo.png"
import topNav from '../../assets/images/mobile_nav_1.png'
import bottomNav from '../../assets/images/mobile_nav_2.png'

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <header>
      <nav>
        <div>
          {/* Logo */}
          {/* <div>
            <img 
              className="h-[170px] w-auto sm:h-[220px]"
              src={logo}
              alt="Logo"
            />
          </div> */}
          {/* Mobile Navbar */}

          <div>
            {showNav ? (
              <AiOutlineMenu
                onClick={() => setShowNav(!showNav)}
                className="sm:hidden "
              />
              ) : (
              <AiOutlineMenu
                onClick={() => setShowNav(!showNav)}
                className="sm:hidden"
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
                  className="h-[220px] w-[240px] flex items-center"
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
          <div>

          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;