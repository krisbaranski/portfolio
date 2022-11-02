import React from 'react';
import Mahakala from '../assets/Mahakala.png';
import Gfinder from '../assets/Gfinder.png';
import Calc from '../assets/Calc.png';
import DiceRoll from '../assets/DiceRoll.png';
import Implement from '../assets/Implement.png';
import GuessNr from '../assets/GuessNr.png';

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-top text-[#264e86] bg-gradient-to-b from-transparent to-[#1b5f9d] py-10"
    >
      <div className="max-w-[400px] sm:max-w-[500px] md:max-w-[720px] lg:max-w-[950px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-2 text-[#264e86] border-[#264e86]">
            Projects
          </p>
          <p className="py-6 font-semibold">Check out some of my projects</p>
        </div>

        {/* Container */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 z-10">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Mahakala})` }}
            className="shadow-lg shadow-[#264e86] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="flex justify-center items-center p-2 text-center text-2xl font-bold text-white tracking-wider">
                Professional Portfolio, ReactJS, CSS3, JSON, framer-motion
                animation
              </span>
              <div className="pt-8 text-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://mahakala-art.com"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Web Page
                  </button>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/krisbaranski/mahakala-art"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Gfinder})` }}
            className="shadow-lg shadow-[#264e86] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="flex justify-center items-center p-2 text-center text-2xl font-bold text-white tracking-wider">
                ReactJS App, user fetch API, Netlify
              </span>
              <div className="pt-8 text-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github-finder041279.netlify.app/"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/krisbaranski/github-finder"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Calc})` }}
            className="shadow-lg shadow-[#264e86] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="flex justify-center items-center p-2 text-center text-2xl font-bold text-white tracking-wider">
                Calculator in JS, CSS3, HTML5
              </span>
              <div className="pt-8 text-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://krisbaranski.github.io/how_much_resin/"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/krisbaranski/how_much_resin"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${DiceRoll})` }}
            className="shadow-lg shadow-[#264e86] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="flex justify-center items-center p-2 text-center text-2xl font-bold text-white tracking-wider">
                Dice roll game made in JS, CSS3, HTML5
              </span>
              <div className="pt-8 text-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://krisbaranski.github.io/diceroll/index.html"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/krisbaranski/diceroll/tree/master"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Implement})` }}
            className="shadow-lg shadow-[#264e86] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="flex justify-center items-center p-2 text-center text-2xl font-bold text-white tracking-wider">
                JavaScript, CSS, HTML implementations
              </span>
              <div className="pt-8 text-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/krisbaranski/implementations/blob/main/README.md"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/krisbaranski/implementations"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${GuessNr})` }}
            className="z-20 shadow-lg shadow-[#264e86] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="flex justify-center items-center p-2 text-center text-2xl font-bold text-white tracking-wider">
                JavaScript Vintage Game
              </span>
              <div className="pt-8 text-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://krisbaranski.github.io/guess_number_game/"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/krisbaranski/guess_number_game"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
