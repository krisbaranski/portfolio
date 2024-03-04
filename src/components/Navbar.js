import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/logo-portfolio-blue.png';
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

  const MENU_LINK = 'p-2 rounded hover:bg-[#f0f0f0] hover:text-stone-800';

  return (
    <div
      onScroll={changeColor}
      className={
        color
          ? 'fixed w-full h-[60px] flex justify-between md:justify-center items-center md:px-14 z-20 backdrop-blur bg-[#f0f0f030]ite shadow-md shadow-grey-300'
          : 'fixed w-full h-[60px] flex justify-between md:justify-center items-center md:px-14 z-20 bg-transparent'
      }
    >
      <div className="flex flex-row justify-between items-center ">
        <div className="z-50 pl-8 md:pr-40">
          <img src={Logo} alt="Logo" style={{ width: '65px' }} />
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex text-[#e7e5e4] font-medium">
          <li>
            <Link to="/" smooth={true} duration={500} className={MENU_LINK}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              smooth={true}
              duration={500}
              className={MENU_LINK}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              smooth={true}
              duration={500}
              className={MENU_LINK}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              smooth={true}
              duration={500}
              className={MENU_LINK}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              smooth={true}
              duration={500}
              className={MENU_LINK}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden">
        {!nav ? (
          <FaBars
            className="fixed top-6 right-10 flex flex-col justify-center items-center text-[#e7e5e4] z-30"
            size={20}
          />
        ) : (
          <FaTimes
            className="fixed top-6 right-10 flex flex-col justify-center items-center text-white z-30"
            size={20}
          />
        )}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'fixed top-0 left-0 w-full h-screen bg-slate-900/40 backdrop-blur-md flex flex-col justify-center items-center text-[#f0f0f0] z-20'
        }
      >
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="/"
            smooth={true}
            duration={500}
            className={MENU_LINK}
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {' '}
          <Link
            onClick={handleClick}
            to="/about"
            smooth={true}
            duration={500}
            className={MENU_LINK}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {' '}
          <Link
            onClick={handleClick}
            to="/skills"
            smooth={true}
            duration={500}
            className={MENU_LINK}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {' '}
          <Link
            onClick={handleClick}
            to="/projects"
            smooth={true}
            duration={500}
            className={MENU_LINK}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {' '}
          <Link
            onClick={handleClick}
            to="/contact"
            smooth={true}
            duration={500}
            className={MENU_LINK}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
