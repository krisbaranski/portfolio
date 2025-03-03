import React, { useState } from 'react';
import usePageSEO from '../hooks/usePageSEO';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // setting mobile nav
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  // change nav color when scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    window.scrollY >= 50 ? setColor(true) : setColor(false);
  };

  window.addEventListener('scroll', changeColor);

  const MENU_LINK =
    'p-1 border-b border-transparent text-slate-300 hover:border-b hover:border-white hover:text-white transition-colors duration-200 ease-in-out';

  const MOBILE_MENU = 'py-6 text-2xl';

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
    <div
      onScroll={changeColor}
      className={
        color
          ? 'fixed w-full h-[60px] flex justify-between md:justify-center items-center md:px-14 z-20 backdrop-blur-md bg-[#03071250] shadow-md shadow-grey-300 transition-color duration-200 ease-in-out delay-200'
          : 'fixed w-full h-[60px] flex justify-between md:justify-center items-center md:px-14 z-20 bg-transparent transition-color duration-200 ease-in-out'
      }
    >
      <div className="min-w-full flex flex-row justify-between items-center ">
        <div className="z-50 pl-6 transition duration-200 ease-in-out delay-200">
          <Link to={'/'} className="group flex flex-row">
            <p to="/" className={MENU_LINK}>
              Kris Baranski
              <span className="text-white hover:text-slate-50 pl-2 text-xl animate-blink hover:hidden">
                _
              </span>
            </p>
          </Link>
        </div>

        {/* Desktop menu */}
        <div>
          <ul className="hidden md:flex text-[#e7e5e4] font-medium">
            <li>
              <Link to="/about" className={MENU_LINK}>
                About
              </Link>
            </li>
            <li>
              <Link to="/skills" className={MENU_LINK}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="/projects" className={MENU_LINK}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className={MENU_LINK}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden">
        {!nav ? (
          <FaBars
            className="fixed top-6 right-10 flex flex-col justify-center items-center text-[#e7e5e4] z-30"
            size={15}
          />
        ) : (
          <FaTimes
            className="fixed top-6 right-10 flex flex-col justify-center items-center text-white z-30"
            size={15}
          />
        )}
      </div>

      {/* Mobile menu */}
      <div>
        <ul
          className={
            !nav
              ? 'hidden'
              : 'fixed top-0 left-0 w-full h-screen bg-slate-900/80 backdrop-blur-md flex flex-col justify-center items-center text-[#f0f0f0] z-20'
          }
        >
          <li className={MOBILE_MENU}>
            <Link onClick={handleClick} to="/about" className={MENU_LINK}>
              About
            </Link>
          </li>
          <li className={MOBILE_MENU}>
            <Link onClick={handleClick} to="/skills" className={MENU_LINK}>
              Skills
            </Link>
          </li>
          <li className={MOBILE_MENU}>
            <Link onClick={handleClick} to="/projects" className={MENU_LINK}>
              Projects
            </Link>
          </li>
          <li className={MOBILE_MENU}>
            <Link onClick={handleClick} to="/contact" className={MENU_LINK}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
