import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className="w-full h-[40px] bg-[#1b5f9d] flex justify-center items-center py-10 text-white">
      <Link className="px-5">Privacy & Imprint</Link>
      <p className="px-5">© 2022 Berlin</p>
    </div>
  );
};

export default Footer;
