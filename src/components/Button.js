import React from 'react';
import { Link } from 'react-scroll';

const Button = props => {
  let tailwindcss;
  if (props.color === 'white') {
    tailwindcss =
      'bg-white text-[#e7e5e4] group  border border-[#e7e5e4] px-6 py-3 my-2 flex items-center hover:bg-[#e7e5e4] hover:border-[#e7e5e4] hover:text-white z-10';
  } else if (props.color === 'blue') {
    tailwindcss =
      'text-[#f0f0f0] border rounded hover:bg-[#f0f0f0] hover:border-white px-4 py-3 m-4 mx-auto flex items-center hover:text-[#264e86] z-10';
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
