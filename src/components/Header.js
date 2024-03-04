import React from 'react';
import Button from './Button';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      name="home"
      className="relative w-full min-h-screen sm:h-screen"
    >
      {/* Container */}
      <div className="relative flex flex-col justify-center items-center min-h-full max-w-[700px] mx-auto md:p-8">
        <h2 className="flex justify-center items-center mt-24 sm:mt-32 text-base sm:text-lg font-light text-center text-[#e7e5e4] font-light mb-6 z-10">
          welcome to my
        </h2>
        <h1 className="flex justify-center items-center font-elephant font-lighter text-6xl xsm:text-7xl sm:text-8xl md:text-9xl lg:text-10xl xl:text-11xl font-thin text-[#e7e5e4] z-10">
          <span className="text-7xl xsm:text-8xl sm:text-9xl md:text-10xl lg:text-11xl xl:text-12xl">
            p
          </span>
          ortfoli
          <span className="text-7xl xsm:text-8xl sm:text-9xl md:text-10xl lg:text-11xl xl:text-12xl">
            o
          </span>
        </h1>
        <p className="max-w-[420px] text-[#e7e5e4] mx-auto p-4 font-lato font-light text-center z-10">
          i specialize in frontend web development with focus on building
          responsive web applications and designing exceptional digital
          experiences.
        </p>
        <div className="w-full flex flex-row flex-wrap mb-4 sm:mb-24 justify-around p-4 text-wrap text-center z-10">
          <Button text="my skills" link="/skills" color="blue" />
          <Button text="view work" link="/projects" color="blue" />
          <Button text="contact me" link="/contact" color="blue" />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
