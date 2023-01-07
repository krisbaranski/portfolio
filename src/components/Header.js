import React from 'react';
import Button from './Button';

const Header = () => {
  return (
    <div name="home" className="w-full min-h-screen sm:h-screen">
      {/* Container */}
      <div className="max-w-[700px] mx-auto p-16 md:p-8 flex flex-col justify-center h-full">
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-center text-[#264e86]  z-10">
          Kris Baranski
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#264e86] z-10">
          FRONTEND WEB DEVELOPER
        </h2>
        <p className="text-[#264e86] py-4 max-w-[600px] font-semibold text-left z-10">
          I specialize in building and designing exceptional digital
          experiences. Currently, I’m focused on building responsive web
          applications and continously learning new technologies.
        </p>
        <div className="w-full py-2 grid auto-cols-min justify-center sm:flex sm:flex-row sm:justify-evenly z-10">
          <Button text="my skills" link="skills" color="white" />
          <Button text="view work" link="projects" color="white" />
          <Button text="contact me" link="contact" color="white" />
        </div>
      </div>
    </div>
  );
};

export default Header;
