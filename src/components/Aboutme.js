import React from 'react';
import Me from '../assets/portrait.jpg';

export const Aboutme = () => {
  return (
    <div name="about" className="w-full  text-white py-12  z-50">
      <div className="flex flex-col justify-center items-center w-full py-20 bg-[#1A6CB8] opacity-80">
        <div className="py-8">
          <p className="text-4xl font-bold text-left inline border-b-2 border-white">
            About me
          </p>
        </div>
        <div className="max-w-[400px] sm:max-w-[500px] md:max-w-[720px] lg:max-w-[950px] w-full grid md:grid-cols-3 gap-8 px-6 pb-8 font-light tracking-wide">
          <div>
            <img
              src={Me}
              alt="Thats me, my portrait"
              className="opacity-100 rounded shadow-md shadow-[#040c16]"
            />
            <br />
            <p>Hi. I'm Kris, nice to meet you. Let me introduce myself.</p>
            <br />
            <p>
              I'm originally coming from Poland, where i studied fine arts,
              worked as designer and teacher. Then 2005 i moved to Germany,
              teached fine arts, worked for art galeries and started my own
              professional artist career. Mostly i'm working with classical
              printing, painting and sculpture. So, how did i get into
              programming?
            </p>
          </div>
          <div>
            <p>
              My journey began with simple html and css. I wanted to make my
              first websites myself, to have full control of structure, design
              and to learn new skills.
            </p>
            <br />
            <p>
              My preferenences are often to focus on technical aspects, to
              understand which posibilities the technology has. It is always my
              great pleasure and satisfaction to create something exeptional.
              Thats why i'm trying myself in different kinds of creative and
              technical fields to find out the best solutions and beauty.
            </p>
          </div>
          <div>
            <p>
              Programming gives me unlimited potential to be creative. I am
              passionate about web development and building software. Especially
              with JS libraries like ReactJS and frameworks like NextJS and
              Angular.
            </p>
            <br />
            <p>
              They are made for different purposes. So, depending on project,
              one can pick fitting technology, build powerful and fast app on
              their basis. I'm excited to contribute to yours :-)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
