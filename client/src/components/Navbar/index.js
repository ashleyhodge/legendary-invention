import React from "react";
import logo from "../../assets/images/gingerly_knits_logo.png"

const Navbar = () => {
  return (
    <header>
      <nav>
        <div>
          {/* Logo */}
          <div>
            <img 
              className="h-[170px] w-auto sm:h-[220px]"
              src={logo}
              alt="Logo"
            />
          </div>
          {/* Nav dropdown */}
          <div>

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