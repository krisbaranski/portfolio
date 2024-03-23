import React from 'react';
import { motion } from 'framer-motion';
import Mahakala from '../assets/Mahakala.png';
import Binta from '../assets/BINTA.png';
import EK from '../assets/EK.png';
import Gfinder from '../assets/Gfinder.png';
import Dash from '../assets/Dashboard.png';
import DiceRoll from '../assets/DiceRoll.png';
import Implement from '../assets/Implement.png';
import GuessNr from '../assets/GuessNr.png';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import TypeScript from '../assets/typescript.png';
import Angular from '../assets/angular.png';
// import GatsbyImg from '../assets/gatsby.png';
import ReactImg from '../assets/react.png';
import NextImg from '../assets/nextjs.png';
// import Node from '../assets/node.png';
// import GitHub from '../assets/github.png';
import MaterialUI from '../assets/materialui.png';
import Tailwind from '../assets/tailwind.png';
// import Bash from '../assets/bash.png';

const CARDS = 'grid md:grid-cols-2 lg:grid-cols-3 gap-4 z-10';
const CARD = 'group h-64 [perspective:3200px]';
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

const Projects = () => {
  return (
    <motion.div
      className="relative w-full min-h-screen md:flex md:items-center md:h-top text-[#264e86] bg-slate-900/50 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      name="projects"
    >
      <div className="max-w-[400px] sm:max-w-[500px] md:max-w-[720px] lg:max-w-[950px] mx-auto my-24 p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 pl-8 lg:pl-16 mb-24">
          <p className="flex justify-start w-full text-7xl sm:text-8xl font-elephant font-light text-white text-center underline underline-offset-8 decoration-1">
            Projects
          </p>
          <p className="flex justify-start py-6 font-light text-white text-balance text-left">
            Here are some of my projects, which i built and maintain. You can
            see a screenshot of the main page. On card flip you will see short
            description, list of technologies i used and a link to the page.
            Enjoy!
          </p>
        </div>

        <div className="pb-8">
          <p className="py-6 font-elephant font-light text-2xl text-white text-center underline underline-offset-8 decoration-1">
            Webpages
          </p>
        </div>
        {/* Container */}
        <div className={CARDS}>
          {/* Grid Item */}
          <div className={CARD}>
            <div className={FLIP_CARD}>
              <div
                style={{ backgroundImage: `url(${Mahakala})` }}
                className={CARD_FRONT}
              ></div>
              {/* Hover Effects */}
              <div className={CARD_BACK}>
                <span className={CARD_TEXT}>Profesional Artist Portfolio</span>
                <div className="flex justify-center flex-row pt-4">
                  <img
                    className="w-10 mx-auto p-1"
                    src={ReactImg}
                    alt="React icon"
                  />
                  <img className="w-10 mx-auto p-1" src={CSS} alt="CSS icon" />
                  <img
                    className="w-10 mx-auto p-1"
                    src={JavaScript}
                    alt="JS icon"
                  />
                </div>
                <div className="pt-8 text-center">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://mahakala-art.com"
                  >
                    <button className={BUTTON_CLASS}>Web Page</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div className={CARD}>
            <div className={FLIP_CARD}>
              <div
                style={{ backgroundImage: `url(${Binta})` }}
                className={CARD_FRONT + ' bg-stone-900'}
              ></div>
              {/* Hover Effects */}
              <div className={CARD_BACK}>
                <span className={CARD_TEXT}>
                  International Art Institute Webpage
                </span>
                <div className="flex justify-center flex-row pt-4">
                  <img
                    className="w-10 mx-auto p-1"
                    src={NextImg}
                    alt="React icon"
                  />
                  <img
                    className="w-10 mx-auto p-1"
                    src={Tailwind}
                    alt="Tailwind icon"
                  />
                </div>
                <div className="pt-8 text-center">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://diamondway-art.org"
                  >
                    <button className={BUTTON_CLASS}>Web Page</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Grid Item */}
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

        <div className="py-8">
          <p className="py-8 font-elephant font-light text-2xl text-white text-center underline underline-offset-8 decoration-1">
            Diverse projects
          </p>
        </div>
        {/* Container */}
        <div className={CARDS}>
          {/* Grid Item */}
          <div className={CARD}>
            <div className={FLIP_CARD}>
              <div
                style={{ backgroundImage: `url(${Gfinder})` }}
                className={CARD_FRONT}
              ></div>
              {/* Hover Effects */}
              <div className={CARD_BACK}>
                <span className={CARD_TEXT}>User Fetch Github App</span>
                <div className="flex justify-center flex-row pt-4">
                  <img
                    className="w-10 mx-auto p-1"
                    src={ReactImg}
                    alt="React icon"
                  />
                  <img
                    className="w-10 mx-auto p-1"
                    src={MaterialUI}
                    alt="MaterialUI icon"
                  />
                </div>
                <div className="pt-8 text-center">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github-finder041279.netlify.app/"
                  >
                    <button className={BUTTON_CLASS}>Demo</button>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/krisbaranski/github-finder"
                  >
                    <button className={BUTTON_CLASS}>Code</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div className={CARD}>
            <div className={FLIP_CARD}>
              <div
                style={{ backgroundImage: `url(${Dash})` }}
                className={CARD_FRONT}
              ></div>
              <div className={CARD_BACK}>
                <span className={CARD_TEXT}>
                  Dashboard App <br /> Contacts, Validation, Charts, Calendar
                  aso.
                </span>
                <div className="flex justify-center flex-row pt-4">
                  <img
                    className="w-10 mx-auto p-1"
                    src={ReactImg}
                    alt="React icon"
                  />
                  <img
                    className="w-10 mx-auto p-1"
                    src={MaterialUI}
                    alt="MaterialUI icon"
                  />
                </div>
                <div className="pt-8 text-center">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://krisbaranski.github.io/dashboard_react_app/"
                  >
                    <button className={BUTTON_CLASS}>Demo</button>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/krisbaranski/dashboard_react_app"
                  >
                    <button className={BUTTON_CLASS}>Code</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div className={CARD}>
            <div className={FLIP_CARD}>
              <div
                style={{ backgroundImage: `url(${Implement})` }}
                className={CARD_FRONT}
              ></div>
              {/* Hover Effects */}
              <div className={CARD_BACK}>
                <span className={CARD_TEXT}>
                  Implementations <br /> of web functionality
                </span>
                <div className="flex justify-center flex-row pt-4">
                  <img
                    className="w-10 mx-auto p-1"
                    src={HTML}
                    alt="HTML icon"
                  />
                  <img className="w-10 mx-auto p-1" src={CSS} alt="CSS icon" />
                  <img
                    className="w-10 mx-auto p-1"
                    src={JavaScript}
                    alt="JS icon"
                  />
                </div>
                <div className="pt-6 text-center">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/krisbaranski/implementations/blob/main/README.md"
                  >
                    <button className={BUTTON_CLASS}>Demo</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-8">
          <p className="py-8 font-elephant font-light text-2xl text-white text-center underline underline-offset-8 decoration-1">
            Games
          </p>
        </div>
        {/* Container */}
        <div className={CARDS}>
          {/* Grid Item */}
          <div className={CARD}>
            <div className={FLIP_CARD}>
              <div
                style={{ backgroundImage: `url(${DiceRoll})` }}
                className={CARD_FRONT}
              ></div>
              {/* Hover Effects */}
              <div className={CARD_BACK}>
                <span className={CARD_TEXT}>
                  Dice roll <br /> game for two players
                </span>
                <div className="flex justify-center flex-row pt-4">
                  <img
                    className="w-10 mx-auto p-1"
                    src={HTML}
                    alt="HTML icon"
                  />
                  <img className="w-10 mx-auto p-1" src={CSS} alt="CSS icon" />
                  <img
                    className="w-10 mx-auto p-1"
                    src={JavaScript}
                    alt="JS icon"
                  />
                </div>
                <div className="pt-8 text-center">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://krisbaranski.github.io/diceroll/index.html"
                  >
                    <button className={BUTTON_CLASS}>Demo</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div className={CARD}>
            <div className={FLIP_CARD}>
              <div
                style={{ backgroundImage: `url(${GuessNr})` }}
                className={CARD_FRONT}
              ></div>
              {/* Hover Effects */}
              <div className={CARD_BACK}>
                <span className={CARD_TEXT}>
                  Vintage Game <br /> - guess a number -
                </span>
                <div className="flex justify-center flex-row pt-4">
                  <img
                    className="w-10 mx-auto p-1"
                    src={HTML}
                    alt="HTML icon"
                  />
                  <img className="w-10 mx-auto p-1" src={CSS} alt="CSS icon" />
                  <img
                    className="w-10 mx-auto p-1"
                    src={JavaScript}
                    alt="JS icon"
                  />
                </div>
                <div className="pt-8 text-center">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://krisbaranski.github.io/guess_number_game/"
                  >
                    <button className={BUTTON_CLASS}>Demo</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
