import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div name="home" className="w-full h-screen">
      {/* Container */}
      <div className="max-w-[700px] mx-auto p-16 md:p-8 flex flex-col justify-center h-full">
        <h1 className="text-5xl md:text-8xl font-bold text-[#264e86]">
          Kris Baranski
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-[#264e86]">
          FRONTEND WEB DEVELOPER
        </h2>
        <p className="text-[#264e86] py-4 max-w-[700px] font-semibold">
          I’m a frontend developer specializing in building and designing
          exceptional digital experiences. Currently, I’m focused on building
          responsive web applications.
        </p>
        <div>
          <button className="text-[#264e86] group border-2 border-[#264e86] px-6 py-3 my-2 flex items-center hover:bg-[#264e86] hover:border-[#264e86] hover:text-white">
            <Link to="projects" smooth={true} duration={500}>
              View Work
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
