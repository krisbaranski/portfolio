import React from 'react';
import Button from './Button';

const Header = () => {
  return (
    <div name="home" className="relative w-full min-h-screen sm:h-screen">
      {/* Container */}
      <div className="max-w-[700px] mx-auto p-16 md:p-8 flex flex-col justify-center h-full ">
        <h1 className="mt-16 sm:mt-48 text-base sm:text-lg font-bold text-center text-[#e7e5e4] font-light z-10">
          welcome to my
        </h1>
        <h2 className="flex justify-center font-elephant text-6xl xsm:text-8xl sm:text-9xl md:text-10xl lg:text-11xl xl:text-12xl font-thin text-center text-[#e7e5e4] uppercase my-4 z-10">
          portfolio
        </h2>
        <p className="flex justify-center text-[#e7e5e4] py-4 max-w-[700px] font-light text-center z-10">
          My name is Kris and i specialize in frontend web development with
          focus on building responsive web applications and designing
          exceptional digital experiences.
        </p>
        <div className="w-full py-2 grid auto-cols-min justify-center sm:flex sm:flex-row sm:justify-evenly z-10">
          <Button text="my skills" link="skills" color="blue" />
          <Button text="view work" link="projects" color="blue" />
          <Button text="contact me" link="contact" color="blue" />
        </div>
      </div>
    </div>
  );
};

export default Header;
