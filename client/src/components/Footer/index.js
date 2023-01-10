import React from "react";

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
          <li>Follow</li>
          <li>Like</li>
          <li>Subscribe</li>
          <li>Add</li>
          <li>Follow</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;