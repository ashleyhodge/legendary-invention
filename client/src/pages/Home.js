import React from "react";
import { Link } from 'react-router-dom';
import HeroCarousel from "../components/Carousel";
import logo from "../assets/images/gingerly_knits_logo.png"
import VideoPlayer from "../components/VideoPlayer";
import About from "../components/About";

const Home = () => {
  return (
    <main>
      {/* Mobile Logo */}
      <Link to='/'>
        <div className="m-3 flex items-center justify-center sm:hidden">
          <img 
            className="h-[160px] w-auto sm:h-[180px]"
            src={logo}
            alt="Logo"
          />
        </div>
      </Link>
      {/* Hero */}
      <div>
        <HeroCarousel />
      </div>
      {/* Video Tutorials */}
      <div className="mt-[50px] sm:mt-[100px] font-bad-script font-black text-center">
        <h2 className="text-[25px] sm:text-[28px] text-[#412117]">
          Favorite Video Tutorials
        </h2>
        <p className="mx-[20px] mt-[10px] sm:text-[20px] sm:mx-[200px] text-[#8e4a45] font-light">
          These are simply videos on how to work cool stitches, learn new techniques and find new project ideas. If you have a video you'd like me to share, let me know!
        </p>
        <div className="mt-[20px]">
          <VideoPlayer />
        </div>
      </div>
      {/* Bio */}
      <div>
        <About />
      </div>
    </main>
  )
}

export default Home; 