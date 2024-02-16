import React from 'react';

const Footer = () => {
  return (
    <div className="relative w-full bg-[#0d223b] flex justify-center content-end items-center py-8 text-white">
      <a
        href="../pages/imprint.js"
        className="px-5 cursor-pointer p-2 rounded hover:bg-white hover:text-[#264e86]"
      >
        Privacy & Imprint
      </a>
      <p className="px-5">© {new Date().getFullYear()} Berlin</p>
    </div>
  );
};

export default Footer;
