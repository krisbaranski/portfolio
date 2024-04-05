import React from 'react';
import { motion } from 'framer-motion';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import C_lang from '../assets/c_lang.png';
import Python from '../assets/python.png';
import JavaScript from '../assets/javascript.png';
import TypeScript from '../assets/typescript.png';
import Angular from '../assets/angular.png';
import ReactImg from '../assets/react.png';
import NextImg from '../assets/nextjs.png';
import Node from '../assets/node.png';
import SQL from '../assets/sql.png';
import GitHub from '../assets/github.png';
import MaterialUI from '../assets/materialui.png';
import Tailwind from '../assets/tailwind.png';
import Bash from '../assets/bash.png';

const BUTTON_CLASS =
  'p-2 rounded shadow-md shadow-[#040c1660] hover:scale-105 duration-200 z-20 text-sm';
const BENTO_GRID =
  'flex flex-col sm:grid sm:grid-flow-col gap-4 bg-[#cffafe20] rounded-xl p-4';

const Skills = () => {
  return (
    <motion.div
      className="relative w-full min-h-screen md:flex md:items-center py-12 text-[#999]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      name="skills"
    >
      {/* Container */}
      <div className="max-w-[400px] sm:max-w-[440px] md:max-w-[620px] lg:max-w-[860px] mx-auto my-24 p-4 flex flex-col justify-center w-full h-full">
        <div className="pl-8 lg:pl-16 mb-24">
          <p className="flex justify-start w-full text-7xl sm:text-8xl font-elephant font-light text-white text-center underline underline-offset-8 decoration-1 z-10">
            Skills
          </p>
          <p className="flex justify-start w-full py-4 font-light text-balance text-white">
            Here i list all programming technologies and languages i'm familiar
            with - from beginner to semi-professional grade. According to
            clients project ideas, i use them to build apps, webpages, games:
          </p>
        </div>

        <div className="w-full flex justify-center flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-2 self-center text-center p-8 mx-auto z-10">
          {/* Bento Grid*/}
          <div className={BENTO_GRID + ' sm:col-span-2 sm:grid-rows-1'}>
            <div className={BUTTON_CLASS + ' bg-rose-900 text-white'}>
              <img className="h-16 mx-auto" src={HTML} alt="HTML icon" />
              <p className="my-4">HTML</p>
            </div>
            <div className={BUTTON_CLASS + ' bg-blue-900 text-white'}>
              <img className="h-16 mx-auto" src={CSS} alt="CSS icon" />
              <p className="m-4">CSS</p>
            </div>
          </div>

          {/* Bento Grid*/}
          <div
            className={
              BENTO_GRID +
              ' sm:col-span-2 sm:grid-rows-2 md:col-span-3 md:grid-rows-1'
            }
          >
            <div className={BUTTON_CLASS + ' bg-red-800 text-white'}>
              <img className="h-16 mx-auto" src={Angular} alt="Angular icon" />
              <p className="my-4">ANGULAR</p>
            </div>

            <div className={BUTTON_CLASS + ' bg-sky-800 text-white'}>
              <img className="h-16 mx-auto" src={ReactImg} alt="React icon" />
              <p className="my-4">REACT</p>
            </div>

            <div className={BUTTON_CLASS + ' bg-slate-600 text-white'}>
              <img className="h-16 mx-auto" src={NextImg} alt="NEXTJS icon" />
              <p className="my-4">NEXTJS</p>
            </div>
          </div>

          {/* Bento Grid*/}
          <div
            className={
              BENTO_GRID +
              ' sm:col-span-2 sm:grid-cols-2 sm:grid-rows-2 lg:col-span-4 lg:grid-cols-4 lg:grid-rows-1 xl:col-span-2 xl:grid-rows-2 xl:grid-cols-2'
            }
          >
            <div className={BUTTON_CLASS + ' bg-cyan-300 text-white'}>
              <img className="h-16 mx-auto" src={C_lang} alt="C icon" />
              <p className="my-4">C</p>
            </div>
            <div className={BUTTON_CLASS + ' bg-lime-600 text-white'}>
              <img className="h-16 mx-auto" src={Python} alt="Python icon" />
              <p className="my-4">PYTHON</p>
            </div>
            <div className={BUTTON_CLASS + ' bg-amber-500 text-white'}>
              <img className="h-16 mx-auto" src={JavaScript} alt="JS icon" />
              <p className="my-4">JAVASCRIPT</p>
            </div>
            <div className={BUTTON_CLASS + ' bg-slate-200 text-blue-400'}>
              <img className="h-16 mx-auto" src={TypeScript} alt="TS icon" />
              <p className="my-4">TYPESCRIPT</p>
            </div>
          </div>

          {/* Bento Grid*/}
          <div
            className={
              BENTO_GRID +
              ' sm:col-span-2 sm:grid-rows-1 md:col-span-1 md:grid-rows-2 lg:grid-rows-1 lg:col-span-2 xl:grid-rows-2 xl:grid-cols-1 xl:col-span-1'
            }
          >
            <div className={BUTTON_CLASS + ' bg-sky-200 text-sky-400'}>
              <img className="h-16 m-auto" src={MaterialUI} alt="MUI icon" />
              <p className="my-4">MATERIALUI</p>
            </div>
            <div className={BUTTON_CLASS + ' bg-indigo-800 text-white'}>
              <img
                className="h-16 mx-auto"
                src={Tailwind}
                alt="Tailwind icon"
              />
              <p className="my-4">TAILWIND</p>
            </div>
          </div>

          {/* Bento Grid*/}
          <div
            className={
              BENTO_GRID +
              ' sm:col-span-2 sm:grid-cols-2 sm:grid-rows-2 lg:col-span-4  lg:grid-cols-4 lg:grid-rows-1 xl:col-span-2 xl:grid-rows-2 xl:grid-cols-2'
            }
          >
            <div className={BUTTON_CLASS + ' bg-green-900 text-lime-400'}>
              <img className="h-16 mx-auto" src={Node} alt="NODE icon" />
              <p className="my-4">NODE JS</p>
            </div>
            <div className={BUTTON_CLASS + ' bg-sky-900 text-white'}>
              <img className="h-16 mx-auto" src={SQL} alt="SQL icon" />
              <p className="my-4">SQL</p>
            </div>
            <div className={BUTTON_CLASS + ' bg-lime-600 text-white'}>
              <img className="h-16 mx-auto" src={Bash} alt="BASH icon" />
              <p className="my-4">BASH</p>
            </div>
            <div className={BUTTON_CLASS + ' bg-slate-800 text-white'}>
              <img className="h-16 mx-auto" src={GitHub} alt="GIT icon" />
              <p className="my-4">GITHUB</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
