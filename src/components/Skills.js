import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import TypeScript from '../assets/typescript.png';
import ReactImg from '../assets/react.png';
import GatsbyImg from '../assets/gatsby.png';
import NextImg from '../assets/nextjs.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import MaterialUI from '../assets/materialui.png';
import Tailwind from '../assets/tailwind.png';

const Skills = () => {
  return (
    <div name="skills" className="w-full min-h-screen py-12 text-[#264e86]">
      {/* Container */}
      <div className="max-w-[400px] sm:max-w-[500px] md:max-w-[720px] lg:max-w-[960px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-2 border-[#264e86] ">
            Skills
          </p>
          <p className="py-4 font-semibold">
            These are some of the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 self-center text-center py-8 z-10">
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
          <div className="bg-white z-10 p-2 shadow-md rounded shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={TypeScript} alt="HTML icon" />
            <p className="my-4">TYPESCRIPT</p>
          </div>
          <div className="bg-sky-800 z-10 text-white p-2 rounded shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="bg-fuchsia-100 z-10 p-2 rounded shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GatsbyImg} alt="HTML icon" />
            <p className="my-4">GATSBY</p>
          </div>
          <div className="bg-slate-700 z-10 text-white p-2 rounded shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={NextImg} alt="HTML icon" />
            <p className="my-4">NEXTJS</p>
          </div>
          <div className="bg-indigo-800 text-white z-10 p-2 rounded shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="my-4">TAILWIND</p>
          </div>
          <div className="bg-sky-200 z-10 p-2 rounded shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 m-auto" src={MaterialUI} alt="HTML icon" />
            <p className="my-4">MATERIALUI</p>
          </div>
          <div className="bg-green-900 text-white z-10 p-2 rounded shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="HTML icon" />
            <p className="my-4">NODE JS</p>
          </div>
          <div className="bg-slate-900 text-white z-10 p-2 rounded shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-4">GITHUB</p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Skills;