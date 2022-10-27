import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import MaterialUI from '../assets/materialui.png';
import Tailwind from '../assets/tailwind.png';

const Skills = () => {
  return (
    <div name="skills" className="w-full min-h-screen py-12 text-[#264e86]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-2 border-[#264e86] ">
            Skills
          </p>
          <p className="py-4">
            These are some of the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 z-10">
          <div className="bg-rose-900 text-white p-2 rounded shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="bg-blue-900 text-white z-10 p-2 rounded shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="bg-amber-500 z-10 p-2 shadow-md rounded shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="bg-sky-800 z-10 text-white p-2 rounded shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="bg-indigo-800 text-white z-10 p-2 rounded shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="my-4">TAILWIND</p>
          </div>
          <div className="bg-sky-200 z-10 p-2 rounded shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 m-auto" src={MaterialUI} alt="HTML icon" />
            <p className="my-4">MATERIALUI</p>
          </div>
          <div className="bg-stone-800 text-white z-10 p-2 rounded shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="bg-green-900 text-white z-10 p-2 rounded shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="HTML icon" />
            <p className="my-4">NODE JS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
