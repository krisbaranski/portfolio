import React from 'react';
import Me from '../assets/portrait.jpg';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import CV from '../assets/Baranski_CV_eng.pdf';

export const Aboutme = () => {
  return (
    <div name="about" className="w-full  text-white py-12  z-50">
      <div className="flex flex-col justify-center items-center w-full py-20 bg-[#1A6CB8] opacity-80">
        <div className="py-8">
          <p className="text-4xl font-bold text-left inline border-b-2 border-white  pb-8">
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
              Originally i come from Poland, where i studied fine arts, worked
              as designer and teacher. Then 2005 i moved to Germany, teached
              fine arts, worked for art galeries and started my own professional
              artist career. Mostly i'm working with classical printing,
              painting and sculpture.
            </p>
          </div>
          <div>
            <p>
              When i say, i am an artist, people wonder how did i get into
              programming. So, how did i get here?
            </p>
            <br />
            <p>
              Its quite simple. Programming means to me a tool, a method, a kind
              of language for creating things on internet for others. To be
              visible, present values, informations etc. So to do it, one needs
              to learn how it works in new technologies. It is not far away from
              another media used in fine arts. There are even many artists
              making professional digital art in programming languages nowadays.
            </p>
            <br />
            <p>
              My journey began with simple html and css. I wanted to make my
              first websites myself, to have full control of structure, design
              and to learn new skills. My preferenences are often to focus on
              technical aspects, to understand which posibilities the technology
              has.
            </p>
            <br />
          </div>
          <div>
            <p>
              It is always my great pleasure and satisfaction to create
              something exeptional. Thats why i'm trying myself in different
              kinds of creative and technical fields to find out the best
              solutions and beauty. Programming gives me unlimited potential to
              be creative. I am passionate about web development and building
              software. Especially with JS libraries like ReactJS and frameworks
              like NextJS and Angular.
            </p>
            <p>
              They are made for different purposes. So, depending on project,
              one can pick fitting technology, build powerful and fast app on
              their basis. I'm excited to contribute to yours :-)
            </p>
            <br />
            <a
              className="w-auto flex flex-col justify-between items-center text-white hover:scale-105 hover:text-[#FB923C]"
              target="_blank"
              rel="noopener noreferrer"
              href={CV}
            >
              <BsFillPersonLinesFill size={30} />
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
