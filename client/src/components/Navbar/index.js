import React, { useState } from "react";
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

import { AiOutlineMenu } from "react-icons/ai"
import { FaTiktok, FaPatreon, FaUserAlt } from "react-icons/fa"
import { BsFacebook, BsInstagram, BsYoutube} from "react-icons/bs"
import logo from "../../assets/images/gingerly_knits_logo.png"
import topNav from '../../assets/images/mobile_nav_1.png'
import bottomNav from '../../assets/images/mobile_nav_2.png'
import emptyCart from '../../assets/images/empty_cart.png'


const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const navToggle = () => setShowNav(!showNav);
  const [showDropdown, setShowDropdown] = useState(false);
  const toggle = () => setShowDropdown(!showDropdown);
  
  const logout = event => {
    event.preventDefault();
    Auth.logout()
  }

  return (
    <header>
      <nav>
        <div className="flex justify-between text-[20px] lg:justify-evenly items-center m-2 font-bad-script sm:mx-6">
          {/* Desktop Logo */}
          <Link className="hidden sm:block" to='/'>
            <div className="m-3 hidden sm:flex">
              <img 
                className="h-[130px] w-auto sm:h-[180px]"
                src={logo}
                alt="Logo"
              />
            </div>
          </Link>
          {/* Desktop Navbar */}
          <div className="hidden sm:flex">
            
            <ul className="flex text-[22px] font-black text-[#412117]">
              <li className="mx-4  hover:text-[#C3706B] cursor-pointer">
                <Link to='/'>
                  home
                </Link>
              </li>
              <li className="mx-4 hover:text-[#C3706B] cursor-pointer">
                <Link to='/blog'>
                  blog
                </Link>
              </li>
              <li className="mx-4 hover:text-[#C3706B] cursor-pointer">
                <Link to='/shop'>
                  shop
                </Link>
              </li>
              <li className="mx-4 hover:text-[#C3706B] cursor-pointer">
                <Link to='/make'>
                  make
                </Link>
              </li>
              <li className=" mx-4 hover:text-[#C3706B] cursor-pointer">
                <Link to='/'>
                  contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Mobile Navbar */}
          <div>
              <AiOutlineMenu
                onClick={navToggle}
                className="sm:hidden w-7 h-7 m-3"
              />
            <div className="text-[20px] text-[#412117]">
              <ul className={
                (showNav ? "left-0" : "-left-full") +
                " absolute transition-all duration-[1.0s] ease-in-out w-full h-full z-10 bg-white sm:hidden"
              }>
                <li className="flex justify-center">
                <img 
                  src={topNav}
                  alt="knit supplies"
                  // cut supplies picture in canva to remove white space
                  className="h-[220px] w-[240px]"
                  />
                </li>
                <Link to='/' onClick={navToggle} className="flex justify-center p-2 hover:text-[#C3706B]">
                  Home
                </Link>
                <li className="flex justify-center p-2 hover:text-[#C3706B]">
                  Shop
                </li>
                <Link to='/blog' onClick={navToggle} className="flex justify-center p-2 hover:text-[#C3706B]">
                  Blog
                </Link>
                <li className="flex justify-center p-2 hover:text-[#C3706B]">
                  Make
                </li>
                <li className="flex justify-center p-2 hover:text-[#C3706B]">
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
          <div className="flex items-center">

            {/* if logged in show dropdown menu, if not link to login page */}
            {Auth.loggedIn() ? (
              <>
              <FaUserAlt onClick={toggle}
                className="mr-4 mb-2 opacity-[50%] text-[#415C6B] cursor-pointer"
                />
              <ul className={
                (showDropdown ? "absolute" : "hidden") +
                " mt-[140px] border py-2 px-4 text-[16px] rounded"
              }>
                <Link onClick={toggle} to='/profile'>Profile</Link>
                <li>Saves</li>
                <Link to="/login" onClick={logout}>Log out</Link>
              </ul>
              </>
            ): (
              <Link to='/login'>
              <FaUserAlt className="mr-4 mb-2 opacity-[50%] text-[#415C6B]" />
              </Link>
            )}
            
            <Link to='/cart'>
              <img 
                src={emptyCart}
                alt="empty cart"
                className='w-[30px] mb-3'
              />
            </Link>
          </div>
        </div>
      </nav>
      {/* Social icons */}
      <ul className="hidden sm:fixed sm:block text-[#CB9B92] top-[40%] sm:left-0 text-[20px] sm:text-[30px] z-10">
        <li className='relative transition-all hover:duration-300 hover:ease-in-out p-[10px] hover:px-[25px] sm:hover:px-[20px]'><a href="#" ><BsFacebook/></a></li>
        <li className='relative transition-all hover:duration-300 hover:ease-in-out p-[10px] hover:px-[25px] sm:hover:px-[20px]'><a href="#"><BsInstagram/></a></li>
        <li className='relative transition-all hover:duration-300 hover:ease-in-out p-[10px] hover:px-[25px] sm:hover:px-[20px]'><a href="#"><FaTiktok/></a></li>
        <li className='relative transition-all hover:duration-300 hover:ease-in-out p-[10px] hover:px-[25px] sm:hover:px-[20px]'><a href="#"><BsYoutube/></a></li>
        <li className='relative transition-all hover:duration-300 hover:ease-in-out p-[10px] hover:px-[25px] sm:hover:px-[20px]'><a href="#"><FaPatreon /></a></li>
      </ul>
    </header>
  )
}

export default Navbar;