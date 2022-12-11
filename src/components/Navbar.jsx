import React, { useState} from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
  FaBars,
} from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="w-full min-h-[50px] flex justify-between items-cecnter fixed mt-[3.6rem] z-10 text-white bg-gray-700/95 ">
        <ul className="hidden sm:flex px-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#deals">Deals</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="flex justify-between py-4">
          <FaFacebookF className="mx-4" />
          <FaTwitter className="mx-4" />
          <FaGooglePlusG className="mx-4" />
          <FaInstagram className="mx-4" />
        </div>
        {/*Hamgurger Icon*/}
        <div onClick={handleNav} className="sm:hidden z-10">
          <FaBars size={20} className="mt-3 mr-4 cursor-pointer" />
        </div>
        {/*Mobile Menu*/}
        <div
            onClick={handleNav}
          className={
            nav
                ? "md:hidden fixed left-0 top-0  w-[100%] sm:w-[60%] h-screen md:w-[45%] z-50 bg-black p-10 ease-in duration-500"
            //   ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col"
            //   : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 h-screen ease-in duration-500"
          }
        >
          <ul className="h-full w-full text-center pt-12">
            <li className="text-2xl py-8">
              <a href="/">Home</a>
            </li>
            <li className="text-2xl py-8">
              <a href="#gallery">Gallery</a>
            </li>
            <li className="text-2xl py-8">
              <a href="#deals">Deals</a>
            </li>
            <li className="text-2xl py-8">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
