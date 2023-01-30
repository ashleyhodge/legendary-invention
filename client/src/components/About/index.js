import React from "react";
import Frame from '../../assets/images/frame.png';

const About = () => {
  return (
    <div className="mt-[50px]">
      <h1 className="flex justify-center font-bad-script font-black text-[28px] text-[#412117] ">
        All About Ashley
      </h1>
      <div className="flex justify-center mt-[21px]">
        <img src={Frame} alt='profile' className=" w-[250px]"/>
      </div>
      <p className="flex text-center font-bad-script font-light mx-6 sm:mx-[144px] mt-[42px] text-[20px] text-[#412117]">
        Hi, my name is Ashley! Thanks for visiting my website! I’ve been knitting since I was about nine years old, but I only started getting really into learning new patterns and stitches around 2020. Since then I’ve been working hard to not only find patterns and stitches I love, but to start making my own patterns as well. <br />
        When I’m not knitting, I also develop websites (hints the reason for this blog lol). 
        I love both my hobbies and couldn’t think of a better way of combining the two things I’m most passionate about than a knitting blog! <br />
        That being said, I’m still a little new to both making websites and running a blog, so if you notice something is messed up please let me know! <br />
        Thanks again and happy knitting!
      </p>
    </div>
  )
}

export default About;