import React from 'react';

export const Aboutme = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen md:flex md:items-center text-white py-12 z-50"
    >
      <div className="relative flex flex-col justify-center items-center w-full py-20 bg-sky-900/40">
        <div className="pt-6 pb-12">
          <p className="text-4xl font-elephant inline border-white">About me</p>
        </div>
        <div className="max-w-[400px] sm:max-w-[500px] md:max-w-[720px] lg:max-w-[950px] w-full grid md:grid-cols-3 gap-8 px-6 pb-8 font-thin tracking-wide">
          <div>
            <br />
            <p>
              My name is Kris. I come from Poland, where i studied fine arts and
              worked as designer. Then 2005 i moved to Germany and started my
              own professional artist career, teached fine arts and worked for
              art galeries. Mostly i'm working with classical printing, painting
              and sculpture.
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
              technical aspects, to understand which possibilities the
              technology has.
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
            <br />
            <p>
              They are made for different purposes. So, depending on project,
              one can pick fitting technology, build powerful and fast app on
              their basis.
            </p>
            <br /> <p>I'm excited to contribute to yours :-)</p>
          </div>
        </div>
      </div>
    </div>
  );
};
