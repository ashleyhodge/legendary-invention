import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai"
import logo from "../../assets/images/gingerly_knits_logo.png"

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
            />
            ) : (
            <AiOutlineMenu
            onClick={() => setShowNav(!showNav)}
            />
          )}
            <div className="flex justify-self-center">
              <ul className={
                (showNav ? "left-0" : "-left-full") +
                " absolute transition-all duration-[0.8s] ease-in-out"
              }>
                <li className="">
                  Home
                </li>
                <li>
                  Shop
                </li>
                <li>
                  Blog
                </li>
                <li>
                  Make
                </li>
                <li>
                  Contact
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