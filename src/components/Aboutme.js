import React from 'react';

export const Aboutme = () => {
  return (
    <div name="about" className="w-full  text-white ">
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
              My journey began with fine arts. It went through handicrafts like
              working with wood into programming. It was always my greatest
              pleasure and satisfaction to create something exeptional. Thats
              why i'm trying myself in different kinds if creative and technical
              fields to find out the best solutions and beauty. Programming
              gives me unlimited potential to be creative.
            </p>
          </div>
          <div>
            <p>
              I am passionate about building software and web development. I
              specialize in creating software for clients ranging from
              individuals to small-businesses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
