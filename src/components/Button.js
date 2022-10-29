import React from 'react';
import { Link } from 'react-scroll';

const Button = () => {
  return (
    <div className="">
      <button className=" bg-white z-10 text-[#264e86] group  border-2 border-[#264e86] px-6 py-3 my-2 flex items-center hover:bg-[#264e86] hover:border-[#264e86] hover:text-white">
        <Link to="projects" smooth={true} duration={500}>
          View Work
        </Link>
      </button>
    </div>
  );
};

export default Button;
