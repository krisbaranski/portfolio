import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    window.scrollY >= 50 ? setColor(true) : setColor(false);
  };

  window.addEventListener('scroll', changeColor);

  return (
    <div
      onScroll={changeColor}
      className={
        color
          ? 'fixed w-full bottom-8 py-2 sm:bottom-0 bg-[#f0f0f010] flex justify-between md:justify-center content-between items-center sm:py-2 text-white backdrop-blur-lg z-20'
          : 'fixed w-full bottom-8 py-2 sm:bottom-0 bg-[#0d223b] flex justify-between md:justify-center content-between items-center sm:py-2 mx-auto text-white z-20'
      }
    >
      <div className="w-[700px] flex flex-row justify-between items-center text-xs md:text-sm">
        <div className="m-1">
          <Link
            to="/impressum"
            className="relative left-4 cursor-pointer p-2 rounded hover:bg-white hover:text-[#264e86]"
          >
            Impressum
          </Link>
          <Link
            to="/policy"
            className="relative left-4 cursor-pointer p-2 rounded hover:bg-white hover:text-[#264e86]"
          >
            Privacy
          </Link>
        </div>
        <p className="relative right-10 md:right-4 flex flex-col justify-center items-center text-white z-30">
          © {new Date().getFullYear()} Berlin
        </p>
      </div>
    </div>
  );
};

export default Footer;
