import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import CV from '../assets/Baranski_CV_eng.pdf';

const Sideboard = () => {
  return (
    <div>
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
    </div>
  );
};

export default Sideboard;
