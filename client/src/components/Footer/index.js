import React from "react";
import { BsFacebook, BsInstagram, BsYoutube} from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='sm:flex justify-center bg-[#8e4545] mb-0 mt-[50px] pb-[50px] opacity-[80%]'>
      <div className="w-[50%] px-6">
        <h1 className="text-white font-bad-script font-black text-[24px] mt-6">
          Gingerly Knits
        </h1>
        {/* Brand summary */}
        <p className="text-white pt-4 font-bad-script opacity-[80%]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
        </p>
      </div>
      {/* Link socials and add icons */}
      <div className="text-white font-bad-script font-black pt-6 px-6 pl-[100px]">
        <h1 className="text-[24px]">
          Stay Connected
        </h1>
        <ul className="pt-4 opacity-[80%]">
          <li>Follow us <a href="#"><BsInstagram/></a></li>
          <li>Like us <a href="#" ><BsFacebook/></a></li>
          <li>Subscribe <a href="#"><BsYoutube/></a></li>
          <li>Follow us <a href="#"><FaTiktok/></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;