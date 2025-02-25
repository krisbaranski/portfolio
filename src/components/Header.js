import React from 'react';
import usePageSEO from '../hooks/usePageSEO';
import Button from './Button';
import { motion } from 'framer-motion';

import EK from '../assets/EK.png';

// import HTML from '../assets/HTML.png';
import CSS from '../assets/CSS.png';
// import JavaScript from '../assets/JavaScript.png';
import TypeScript from '../assets/TypeScript.png';
import Angular from '../assets/Angular.png';
// import ReactJS from '../assets/ReactJS.png';
// import NextJS from '../assets/NextJS.png';
// import MaterialUI from '../assets/MaterialUI.png';
// import Tailwind from '../assets/Tailwind.png';

// const CARDS = 'grid md:grid-cols-2 lg:grid-cols-3 gap-4 z-10';
const CARD = 'w-64 h-64 [perspective:3200px]';
const FLIP_CARD =
  'transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]';

const CARD_FRONT =
  'absolute inset-0 content-div group group-hover:opacity-0 duration-300 shadow-md shadow-black/40 container rounded flex justify-center items-center mx-auto';

const CARD_BACK =
  'absolute inset-0 content-div bg-slate-800 rounded [transform:rotateY(180deg)] [backface-visibility:hidden]';

const CARD_TEXT =
  'flex justify-center items-center text-center text-lg font-light text-white tracking-wider';

const BUTTON_CLASS =
  'text-center rounded px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-slate-900 hover:text-sky-200';

const Header = () => {
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
    <motion.div
      className="relative w-full min-h-screen md:flex md:items-center md:h-top text-[#264e86] bg-slate-900/50 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      name="home"
    >
      {/* Container */}
      <div className="flex flex-col justify-start items-start min-h-full max-w-4/5 mx-auto md:p-8">
        {/* Hero */}
        <p className="flex justify-center items-center mt-24 px-6 text-lg sm:text-3xl font-light text-left text-[#e7e5e4] font-light mb-4 z-10">
          i develop responsive web applications and design exceptional digital
          experiences.
        </p>

        {/* CTA */}
        <div className="w-full flex flex-row flex-wrap mb-4 justify-around p-4 text-wrap text-center z-10">
          <Button text="my skills" link="/skills" color="blue" />
          <Button text="view work" link="/projects" color="blue" />
          <Button text="contact me" link="/contact" color="blue" />
        </div>

        <div className="max-w-[400px] sm:max-w-[500px] md:max-w-[720px] lg:max-w-[950px] mx-auto my-24 p-4 flex justify-center items-center w-full h-full">
          {/* Card Item */}
          <div className={CARD}>
            <div className={FLIP_CARD}>
              <div
                style={{ backgroundImage: `url(${EK})` }}
                className={CARD_FRONT}
              ></div>
              {/* Hover Effects */}
              <div className={CARD_BACK}>
                <span className={CARD_TEXT}>Client Webpage</span>
                <div className="flex justify-center flex-row pt-4">
                  <img
                    className="w-10 mx-auto p-1"
                    src={Angular}
                    alt="Angular icon"
                  />
                  <img className="w-10 mx-auto p-1" src={CSS} alt="CSS icon" />
                  <img
                    className="w-10 mx-auto p-1"
                    src={TypeScript}
                    alt="Typescript icon"
                  />
                </div>
                <div className="pt-8 text-center">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://elisabethkoch.eu"
                  >
                    <button className={BUTTON_CLASS}>Web Page</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="w-full border-t border-white-1"></div>
        <div className="bg-[#f0f0f010] rounded mx-auto mt-24 p-2 flex flex-col justify-center w-full h-full">
          <p className="py-6 font-elephant font-light text-xl text-white text-center underline underline-offset-8">
            Credentials
          </p>

          <div className="flex flex-row justify-between flex-wrap max-w-[720px] text-[#e7e5e4] mx-auto my-12 p-4 font-lato font-light text-center z-10">
            <p className="basis-1/3 m-2 p-2 rounded  bg-zink-100/30">
              here i want to put some credentials from my clients and people i
              worked with Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Odio exercitationem ducimus molestias beatae voluptates
              placeat nemo omnis incidunt possimus eos similique itaque vel
              quaerat optio officiis ullam officia quis, doloremque laborum.
              Minima velit libero officia autem asperiores. Repellendus
              laudantium in, illum voluptatem ratione perspiciatis cupiditate,
              consequuntur, maiores mollitia ullam placeat.
            </p>
            <p className="basis-1/3 m-2 p-2 rounded  bg-zink-100/30">
              - here i want to put some credentials from my clients and people i
              worked with
            </p>
            <p className="basis-1/3 m-2 p-2 rounded  bg-zink-100/30">
              - here i want to put some credentials from my clients and people i
              worked with
            </p>
            <p className="basis-1/3 m-2 p-2 rounded  bg-zink-100/30">
              - here i want to put some credentials from my clients and people i
              worked with
            </p>
            <p className="basis-1/3 m-2 p-2 rounded  bg-zink-100/30">
              - here i want to put some credentials from my clients and people i
              worked with
            </p>
            <p className="w-32 m-4 rounded ">
              - here i want to put some credentials from my clients and people i
              worked with
            </p>
            <p>and more ...</p>
          </div>
        </div> */}
      </div>
    </motion.div>
  );
};

export default Header;
