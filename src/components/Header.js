import React from 'react';
import usePageSEO from '../hooks/usePageSEO';
import Button from './Button';
import { motion } from 'framer-motion';

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
      <div className="flex flex-col justify-center items-center min-h-full max-w-[700px] mx-auto md:p-8">
        <p className="flex justify-center items-center mt-24 sm:text-lg font-light text-center text-[#e7e5e4] font-light mb-6 z-10">
          welcome to my
        </p>
        <p className="flex justify-center items-center font-elephant font-lighter text-6xl xsm:text-7xl sm:text-8xl md:text-9xl lg:text-10xl xl:text-11xl font-thin text-[#e7e5e4] z-10 border-b border-white">
          <span className="text-7xl xsm:text-8xl sm:text-9xl md:text-10xl lg:text-11xl xl:text-12xl">
            p
          </span>
          ortfoli
          <span className="text-7xl xsm:text-8xl sm:text-9xl md:text-10xl lg:text-11xl xl:text-12xl">
            o
          </span>
        </p>
        <p className="max-w-[420px] text-[#e7e5e4] mx-auto my-12 p-4 font-lato font-light text-center z-10">
          i specialize in frontend web development with focus on building
          responsive web applications and designing exceptional digital
          experiences.
        </p>
        <div className="w-full flex flex-row flex-wrap mb-4 justify-around p-4 text-wrap text-center z-10">
          <Button text="my skills" link="/skills" color="blue" />
          <Button text="view work" link="/projects" color="blue" />
          <Button text="contact me" link="/contact" color="blue" />
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
