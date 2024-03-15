import React from 'react';
import { Link } from 'react-router-dom';

const Button = props => {
  let tailwindcss;
  if (props.color === 'white') {
    tailwindcss =
      'bg-white text-[#e7e5e4] transition-colors duration-300 ease-in-out delay-300 border border-[#e7e5e4] px-6 py-3 m-6 flex items-center hover:bg-[#e7e5e4] hover:border-[#e7e5e4] hover:text-white z-10';
  } else if (props.color === 'blue') {
    tailwindcss =
      'text-[#f0f0f0] transition-colors duration-300 ease-in-out-300 border rounded hover:bg-[#f0f0f0] hover:border-white px-4 py-3 m-6 flex items-center hover:text-[#264e86] z-10';
  } else {
    tailwindcss = null;
  }

  return (
    <div>
      <button className={tailwindcss}>
        <Link to={props.link}>{props.text}</Link>
      </button>
    </div>
  );
};

export default Button;
