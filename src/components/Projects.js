import React from 'react';
import Mahakala from '../assets/Mahakala.png';
import Gfinder from '../assets/Gfinder.png';
import Dash from '../assets/Dashboard.png';
import DiceRoll from '../assets/DiceRoll.png';
import Implement from '../assets/Implement.png';
import GuessNr from '../assets/GuessNr.png';

const CARDS = 'grid md:grid-cols-2 lg:grid-cols-3 gap-4 z-10';
const CARD = 'group h-64 [perspective:3200px]';
const FLIP_CARD =
  'transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]';

const CARD_FRONT =
  'absolute inset-0 group-hover:opacity-0 duration-300 shadow-md shadow-black/40 group container rounded flex justify-center items-center mx-auto content-div';

const CARD_BACK =
  'absolute inset-0 content-div bg-slate-800 [transform:rotateY(180deg)] [backface-visibility:hidden]';

const CARD_TEXT =
  'flex justify-center items-center text-center text-xl font-light text-white tracking-wider';

const BUTTON_CLASS =
  'text-center rounded px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-slate-900 hover:text-sky-200';

const Projects = () => {
  return (
    <div
      name="projects"
      className="relative w-full  min-h-screen md:flex md:items-center md:h-top text-[#264e86] bg-slate-900/50 py-10"
    >
      <div className="max-w-[400px] sm:max-w-[500px] md:max-w-[720px] lg:max-w-[950px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-elephant font-light text-white text-center">
            Projects
          </p>
          <p className="py-6 font-light text-white text-center">
            Check out some of my projects
          </p>
        </div>

        {/* Container */}
        <div className={CARDS}>
          {/* */}
          {/* Grid Item */}
          <div className={CARD}>
            <div className={FLIP_CARD}>
              <div
                style={{ backgroundImage: `url(${Mahakala})` }}
                className={CARD_FRONT}
              ></div>
              {/* Hover Effects */}
              <div className={CARD_BACK}>
                <span className={CARD_TEXT}>
                  Professional Portfolio, ReactJS, CSS3, JSON, framer-motion
                  animation
                </span>
                <div className="pt-8 text-center">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://mahakala-art.com"
                  >
                    <button className={BUTTON_CLASS}>Web Page</button>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/krisbaranski/mahakala-art"
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
                style={{ backgroundImage: `url(${Gfinder})` }}
                className={CARD_FRONT}
              ></div>
              {/* Hover Effects */}
              <div className={CARD_BACK}>
                <span className={CARD_TEXT}>
                  ReactJS App, user fetch API, Netlify
                </span>
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
                  Dashboard React App, MUI, Yup Validation, Nivo Charts,
                  Calendar
                </span>
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
                style={{ backgroundImage: `url(${DiceRoll})` }}
                className={CARD_FRONT}
              ></div>
              {/* Hover Effects */}
              <div className={CARD_BACK}>
                <span className={CARD_TEXT}>
                  Dice roll game made in JS, CSS3, HTML5
                </span>
                <div className="pt-8 text-center">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://krisbaranski.github.io/diceroll/index.html"
                  >
                    <button className={BUTTON_CLASS}>Demo</button>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/krisbaranski/diceroll/tree/master"
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
                  JavaScript, CSS, HTML implementations
                </span>
                <div className="pt-8 text-center">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/krisbaranski/implementations/blob/main/README.md"
                  >
                    <button className={BUTTON_CLASS}>Demo</button>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/krisbaranski/implementations"
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
                style={{ backgroundImage: `url(${GuessNr})` }}
                className={CARD_FRONT}
              ></div>
              {/* Hover Effects */}
              <div className={CARD_BACK}>
                <span className={CARD_TEXT}>JavaScript Vintage Game</span>
                <div className="pt-8 text-center">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://krisbaranski.github.io/guess_number_game/"
                  >
                    <button className={BUTTON_CLASS}>Demo</button>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/krisbaranski/guess_number_game"
                  >
                    <button className={BUTTON_CLASS}>Code</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
