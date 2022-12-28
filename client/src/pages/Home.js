import React from "react";
import HeroCarousel from "../components/Carousel";
import logo from "../assets/images/gingerly_knits_logo.png"
import VideoPlayer from "../components/VideoPlayer";

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
      <div className="sm:mt-[100px] font-bad-script font-black text-center">
        <h2 className="sm:text-[32px] text-[#412117]">
          Favorite Video Tutorials
        </h2>
        <p className="sm:text-[24px] sm:mx-[200px] text-[#8e4a45]">
          These are simply videos on how to work cool stitches, learn new techniques and find new project ideas. If you have a video you'd like me to share, let me know!
        </p>
        <div className="mt-[20px]">
          <VideoPlayer />
        </div>
      </div>
      
    </main>
  )
}

export default Home;