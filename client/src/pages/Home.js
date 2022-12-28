import React from "react";
import HeroCarousel from "../components/Carousel";
import logo from "../assets/images/gingerly_knits_logo.png"

const Home = () => {
  return (
    <main>
      {/* Mobile Logo */}
      <div className="m-3 flex items-center justify-center sm:hidden">
        <img 
          className="h-[160px] w-auto sm:h-[180px]"
          src={logo}
          alt="Logo"
        />
      </div>
      {/* Hero */}
      <div>
        <HeroCarousel />
      </div>
    </main>
  )
}

export default Home;