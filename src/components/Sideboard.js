import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import CV from '../assets/Baranski_CV_eng.pdf';

const Sideboard = () => {
  return (
    <div>
      {/* Desktop sideboard */}
      <div className="hidden sm:flex fixed flex-col top-[35%] left-0 z-50">
        <ul>
          <li className="w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-sky-600">
            <a
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/krisbaranski/?locale=en_US"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-stone-800">
            <a
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/krisbaranski"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-lime-700">
            <a
              className="flex justify-between items-center w-full text-white"
              href="mailto:mail@krisbaranski.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-orange-400">
            <a
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noopener noreferrer"
              href={CV}
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile sideboard */}
      <div className="hidden max-sm:flex flex-row fixed w-screen items-end bottom-[-10px] z-50">
        <div className="w-1/4 h-[60px] flex justify-center items-center mb-[-15px] hover:mb-[10px] duration-300  bg-sky-600">
          <a
            className="flex flex-col justify-between items-center w-full text-white"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/krisbaranski/?locale=en_US"
          >
            <FaLinkedin size={30} />
            Linkedin
          </a>
        </div>
        <div className="w-1/4 h-[60px] flex justify-center items-center mb-[-15px] hover:mb-[10px] duration-300 bg-stone-800">
          <a
            className="flex flex-col justify-between items-center w-full py-4 text-white"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/krisbaranski"
          >
            <FaGithub size={30} />
            Github
          </a>
        </div>
        <div className="w-1/4 h-[60px] flex justify-center items-center mb-[-15px] hover:mb-[10px] duration-300 bg-lime-700">
          <a
            className="flex flex-col justify-between items-center w-full text-white"
            href="mailto:mail@krisbaranski.com"
          >
            <HiOutlineMail size={30} /> Email
          </a>
        </div>
        <div className="w-1/4 h-[60px] flex justify-center items-center mb-[-15px] hover:mb-[10px] duration-300  bg-orange-400">
          <a
            className="flex flex-col justify-between items-center w-full text-white"
            target="_blank"
            rel="noopener noreferrer"
            href={CV}
          >
            <BsFillPersonLinesFill size={30} />
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sideboard;
