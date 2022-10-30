import React from 'react';
import Button from './Button';

const Header = () => {
  return (
    <div name="home" className="w-full h-screen">
      {/* Container */}
      <div className="max-w-[700px] mx-auto p-16 md:p-8 flex flex-col justify-center h-full">
        <h1 className="text-5xl md:text-8xl font-bold text-center text-[#264e86]">
          Kris Baranski
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#264e86]">
          FRONTEND WEB DEVELOPER
        </h2>
        <p className="text-[#264e86] py-4 max-w-[700px] font-semibold">
          I’m specializing in building and designing exceptional digital
          experiences. Currently, I’m focused on building responsive web
          applications and continously learning new technologies.
        </p>
        <div className="w-full py-4 flex flex-row justify-between z-20">
          <Button text="my skills" link="skills" color="white" />
          <Button text="view work" link="projects" color="white" />
          <Button text="contact me" link="contact" color="white" />
        </div>
      </div>
    </div>
  );
};

export default Header;
