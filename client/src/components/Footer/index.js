import React from "react";
import { BsFacebook, BsInstagram, BsYoutube} from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='text-center text-white font-bad-script bg-[#8e4545] opacity-[80%]'>
      <div className="sm:flex sm:justify-center">
        <div className="sm:w-[50%] px-6">
          <h1 className=" text-center sm:text-left  font-black text-[24px] pt-5">
            Gingerly Knits
          </h1>
          {/* Brand summary */}
          <p className="text-white text-center sm:text-left pt-4 font-bad-script opacity-[80%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
          </p>
        </div>
        {/* Link socials and add icons */}
        <div className="text-white font-bad-script font-black pt-6">
          <h1 className="text-[24px] text-center">
            Stay Connected
          </h1>
          <div className="flex flex-col">
            <ul className="pt-4 opacity-[80%] grid grid-rows-2 grid-cols-2 text-center">
              <div className="flex justify-center m-2"><li>Follow us <a className="flex justify-center" href="#"><BsInstagram/></a></li></div>
              <div className="flex justify-center m-2"><li>Like us <a className="flex justify-center" href="#" ><BsFacebook/></a></li></div>
              <div className="flex justify-center m-2"><li>Subscribe <a className="flex justify-center" href="#"><BsYoutube/></a></li></div>
              <div className="flex justify-center m-2"><li>Follow us <a className="flex justify-center" href="#"><FaTiktok/></a></li></div>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center opacity-[80%] text-[10px] mt-5">
        <p>Copyright 	&copy; 2023 by Gingerly Knits</p>
        <p>All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer;