import React from 'react';
import { Link } from 'react-scroll';

const Button = props => {
  let tailwindcss;
  if (props.color === 'white') {
    tailwindcss =
      'bg-white z-10 text-[#e7e5e4] group  border-2 border-[#e7e5e4] px-6 py-3 my-2 flex items-center hover:bg-[#e7e5e4] hover:border-[#e7e5e4] hover:text-white';
  } else if (props.color === 'blue') {
    tailwindcss =
      'text-[#f0f0f0] border rounded hover:bg-[#f0f0f0] hover:border-white px-4 py-3 my-8 mx-auto flex items-center hover:text-[#264e86]';
  } else {
    tailwindcss = null;
  }

  return (
    <div>
      <button className={tailwindcss}>
        <Link to={props.link} smooth={true} duration={500}>
          {props.text}
        </Link>
      </button>
    </div>
  );
};

export default Button;
