import React from 'react';

export const Aboutme = () => {
  return (
    <div name="about" className="w-full  text-white py-12">
      <div className="flex flex-col justify-center items-center w-full py-20 bg-[#0467ce] opacity-60">
        <div className="py-8">
          <p className="text-4xl font-bold text-left inline border-b-2 border-white">
            About me
          </p>
        </div>
        <div className="max-w-[400px] sm:max-w-[500px] md:max-w-[720px] lg:max-w-[950px] w-full grid md:grid-cols-3 gap-8 px-6 pb-8 font-semibold tracking-wide">
          <div>
            <p>Hi. I'm Kris, nice to meet you. Let me introduce myself.</p>
            <br />
            <p>
              I'm originally coming from Poland, where i studied fine arts,
              worked as designer and teacher. Then 2005 i moved to Germany and
              started my professional artist career. Mostly i'm working with
              classical printing, painting and sculpture. So, how did i get into
              programming?
            </p>
          </div>
          <div>
            <p>
              My journey began with fine arts and creative handicrafts, e.g.
              working with epoxy resin casting mixed with wood. I also wanted to
              make my first websites myself, to have full control of structure,
              design and to learn new skills. My preferenences are often to
              focus on technical aspects and to understand, which posibilities
              the technique has. It is always my greatest pleasure and
              satisfaction to create something exeptional. Thats why i'm trying
              myself in different kinds of creative and technical fields to find
              out the best solutions and beauty.
            </p>
          </div>
          <div>
            <p>
              Programming gives me unlimited potential to be creative. I am
              passionate about web development and building software.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
