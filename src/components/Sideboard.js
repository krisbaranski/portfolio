import React from 'react';
import usePageSEO from '../hooks/usePageSEO';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import CV from '../assets/Baranski_CV_eng.pdf';

const DESKTOP_LIST =
  'w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 rounded';
const DESKTOP_LINK = 'flex justify-between items-center w-full text-white';

const MOBILE_LIST =
  'w-1/4 h-[60px] flex justify-center items-center mb-[-15px] hover:mb-[10px] duration-300';
const MOBILE_LINK =
  'flex flex-col justify-between items-center w-full text-white';

const Sideboard = () => {
  usePageSEO({
    title: 'Kris Baranski | Web developer',
    description:
      'I specialize in frontend web development with focus on building responsive web applications and designing exceptional digital experiences.',
    keywords: [
      'portfolio',
      'frontend',
      'web',
      'development',
      'react',
      'UX/UI',
      'framer-motion',
      'Java Script',
      'Tailwind',
    ],
    ogTitle: 'Kris Baranski | Web developer',
    ogDescription:
      'I specialize in frontend web development with focus on building responsive web applications and designing exceptional digital experiences.',
    ogImage:
      'https://www.krisbaranski.com/static/media/portrait.b27d02955d8b412c45d5.jpg',
    ogUrl: 'https://krisbaranski.com/',
  });
  return (
    <div className="relative">
      {/* Desktop sideboard */}
      <div className="hidden sm:flex fixed flex-col top-[35%] left-0 z-50">
        <ul>
          <li className={DESKTOP_LIST + ' hover:bg-sky-800'}>
            <a
              className={DESKTOP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/krisbaranski/?locale=en_US"
            >
              Linkedin <FaLinkedin size={20} />
            </a>
          </li>
          <li className={DESKTOP_LIST + ' hover:bg-stone-700'}>
            <a
              className={DESKTOP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/krisbaranski"
            >
              Github <FaGithub size={20} />
            </a>
          </li>
          <li className={DESKTOP_LIST + ' hover:bg-emerald-900'}>
            <a className={DESKTOP_LINK} href="mailto:mail@krisbaranski.com">
              Email <HiOutlineMail size={20} />
            </a>
          </li>
          <li className={DESKTOP_LIST + ' hover:bg-yellow-900'}>
            <a
              className={DESKTOP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              href={CV}
            >
              Resume <BsFillPersonLinesFill size={20} />
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile sideboard */}
      <div className="hidden max-sm:flex flex-row fixed w-screen items-end bottom-[-12px] z-50">
        <div className={MOBILE_LIST + ' bg-sky-900'}>
          <a
            className={MOBILE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/krisbaranski/?locale=en_US"
          >
            <FaLinkedin size={20} />
            Linkedin
          </a>
        </div>
        <div className={MOBILE_LIST + ' bg-stone-900'}>
          <a
            className={MOBILE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/krisbaranski"
          >
            <FaGithub size={20} />
            Github
          </a>
        </div>
        <div className={MOBILE_LIST + ' bg-emerald-900'}>
          <a className={MOBILE_LINK} href="mailto:mail@krisbaranski.com">
            <HiOutlineMail size={20} /> Email
          </a>
        </div>
        <div className={MOBILE_LIST + ' bg-yellow-900'}>
          <a
            className={MOBILE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            href={CV}
          >
            <BsFillPersonLinesFill size={20} />
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sideboard;
