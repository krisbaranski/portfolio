import React from 'react';
import { Link } from 'react-router-dom';
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
          <p className="text-7xl sm:text-8xl mb-24 font-elephant underline underline-offset-8 decoration-1">
            About me
          </p>
        </div>
        <div className="xsm:max-w-[350px] sm:max-w-[500px] md:max-w-[680px] lg:max-w-[950px] w-full flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 px-2 pb-8 font-thin tracking-wide">
          <div className="md:col-span-2 md:mr-8 md:justify-self-end sm:w-[250px]">
            <img
              src={Me}
              alt="Thats me"
              className="opacity-100 rounded shadow-md shadow-[#040c16]"
            />
          </div>
          <div
            className="flex flex-col justify-center items-start h-[180px] sm:h-[250px] lg:max-w-[320px] list-disc pl-8 md:ml-[-16px] md:col-span-2
          rounded-md backdrop-blur-sm bg-[#f0f0f010] border border-orange-200/20"
          >
            <li className="py-1 text-balance">
              Master of education [MA, art teacher]
            </li>
            <li className="py-4 text-balance">
              Artist [painter, printmaker, sculptor]
            </li>
            <li className="py-1 text-balance">Frontend web developer</li>
          </div>
          <div className="sm:col-span-2">
            <p className="py-2 text-balance">
              Hi, my name is Kris. I'm polish and german citizen, husband and
              father, currently living in Berlin, Germany.
            </p>
            <p className="py-2">
              I have a master degree [MA] in Fine Arts and Art Education. At the
              moment i study CS50's introduction to computer science and python
              on Harvard edX Platform.
            </p>
            <p className="py-2">
              My interests in programming started couple of years ago with html
              and css. After short time i've got curious about programming, in
              particular JavaScript and DOM.
            </p>
            <p className="py-2">
              Meanwhile i gained much more knowledge and experience of
              programming technologies
              <span>
                <Link
                  to={'/skills'}
                  className="text-bold px-1 text-sky-400 hover:text-sky-200"
                >
                  [see: Skills]
                </Link>
              </span>
              and use them to build{' '}
              <span>
                <Link
                  to={'/projects'}
                  className="text-bold px-1 text-sky-400 hover:text-sky-200"
                >
                  projects
                </Link>
              </span>{' '}
              for my clients.
            </p>
          </div>
          <div className="sm:col-span-2">
            <p className="py-2 text-balance">
              I prefere to focus on visual and functional aspects of building a
              webpage, with passion to detail, precision and playfullness. I
              love to figure out and realize my tasks exactly as my client wants
              it.
            </p>
            <p className="py-2">Nothing is impossible!</p>
            <p className="py-2 text-balance">
              It is a great pleasure to create something exeptional. Thats why i
              research in wide spectrum of creative and technical fields to find
              out the best solutions.
            </p>
            <p className="py-2">
              Programming gives me limitless potential to be creative. That is
              why as an artist i'm so passionate about web development and
              building software.
            </p>
          </div>
        </div>
        <p className="p-2 mb-12">
          I'm excited to contribute to your project. If you are interested,{' '}
          <span>
            <Link
              to={'/contact'}
              className="text-bold px-1 text-sky-400 hover:text-sky-200"
            >
              contact me
            </Link>
          </span>
        </p>
      </div>
    </motion.div>
  );
};

export default Aboutme;
