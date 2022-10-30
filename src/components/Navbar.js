import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/logo-portfolio-blue.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  // setting mobile nav
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  // change nav color when scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 70) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener('scroll', changeColor);

  return (
    <div>
      <div
        onScroll={changeColor}
        className={
          color
            ? 'fixed w-full h-[60px] flex justify-between items-center md:px-14 z-20 bg-white shadow-md shadow-grey-300'
            : 'fixed w-full h-[60px] flex justify-between items-center md:px-14 z-20 bg-transparent'
        }
      >
        <div className="z-50 px-8">
          <img src={Logo} alt="Logo" style={{ width: '70px' }} />
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex text-[#264e86] font-semibold">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="p-2 rounded hover:bg-[#264e86] hover:text-white"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="p-2 rounded hover:bg-[#264e86] hover:text-white"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="p-2 rounded hover:bg-[#264e86] hover:text-white"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="p-2 rounded hover:bg-[#264e86] hover:text-white"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="p-2 rounded hover:bg-[#264e86] hover:text-white"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden">
        {!nav ? (
          <FaBars className="fixed top-6 right-10 flex flex-col justify-center items-center text-[#264e86] z-30" />
        ) : (
          <FaTimes className="fixed top-6 right-10 flex flex-col justify-center items-center text-white z-30" />
        )}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'fixed top-0 left-0 w-full h-screen bg-[#264e86] flex flex-col justify-center items-center text-white z-20'
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {' '}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {' '}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {' '}
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {' '}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
