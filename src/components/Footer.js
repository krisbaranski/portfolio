import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className="w-full bg-[#1b5f9d] flex justify-center content-end items-center py-10 text-white">
      <Link
        to="home"
        smooth={true}
        duration={500}
        className="px-5 cursor-pointer p-2 rounded hover:bg-white hover:text-[#264e86]"
      >
        Privacy & Imprint
      </Link>
      <p className="px-5">© {new Date().getFullYear()} Berlin</p>
    </div>
  );
};

export default Footer;

// {new Date().toLokaleDateString()}
