import React from 'react';
import { motion } from 'framer-motion';
import Me from '../assets/portrait.jpg';

const Aboutme = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      name="about"
      className="w-full min-h-screen md:flex md:items-center text-white pt-16 z-50"
    >
      <div className="relative flex flex-col justify-center items-center w-full mt-10 py-12 px-4 bg-sky-900/10">
        <div className="pb-12">
          <p className="text-4xl font-elephant inline border-white">About me</p>
        </div>
        <div className="xsm:max-w-[350px] sm:max-w-[500px] md:max-w-[680px] lg:max-w-[950px] w-full flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 px-2 pb-8 font-thin tracking-wide">
          <div className="md:col-span-2 md:mr-8 md:justify-self-end sm:w-[250px]">
            <img
              src={Me}
              alt="Thats me"
              className="opacity-100 rounded shadow-md shadow-[#040c16]"
            />
          </div>
          <div
            className="flex flex-col justify-center items-start h-[180px] sm:h-[250px] list-none md:ml-[-16px] md:col-span-2
          rounded-md bg-sky-900/40"
          >
            <li className="py-1 text-balance">
              Master of Education [Art Teacher]
            </li>
            <li className="py-4 text-balance">
              Artist [Painter, Printer, Sculptor]
            </li>
            <li className="py-1 text-balance">Frontend web developer</li>
          </div>
          <div className="sm:col-span-2">
            <p className="py-2">
              Hi, my name is Kris. I'm polish and german citizen, husband and
              father, currently living in Berlin, Germany. I have a master
              degree in Fine Arts and Art Education. At the moment i'm studying
              CS50 on Harvard edX Platform.
            </p>
            <p className="py-2">
              My programming journey started some years ago with html and css.
              Meanwhile i gained much more knowledge and experience of
              programming technologies
              <span className="text-bold text-indigo-400">
                <a href="/skills"> [see: Skills] </a>
              </span>
              and use them to build new projects.
            </p>
            <p className="sm:py-2">
              I prefere to focus on functional and desing aspects of web, with
              passion to detail and precision. I love to figure out and realize
              my tasks exactly as my customer wants it. Nothing is impossible!
            </p>
          </div>
          <div className="sm:col-span-2">
            <p className="sm:py-2">
              It is always my great pleasure to create something exeptional.
              Thats why i'm trying myself in different kinds of creative and
              technical fields to find out the best solutions and beauty.
              Programming gives me unlimited potential to be creative. I'm
              passionate about web development and building software.
            </p>
            <p className="py-2">I'm excited to contribute to your project.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Aboutme;
