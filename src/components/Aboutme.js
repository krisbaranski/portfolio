import React from 'react';

export const Aboutme = () => {
  return (
    <div name="about" className="w-full  text-white ">
      <div className="flex flex-col justify-center items-center w-full py-20 bg-[#264e86]">
        <div className="py-8">
          <p className="text-4xl font-bold text-left inline border-b-2 border-white">
            About me
          </p>
        </div>
        <div className="max-w-[400px] sm:max-w-[500px] md:max-w-[720px] lg:max-w-[950px] w-full grid sm:grid-cols-3 gap-8 px-6 pb-8 font-semibold tracking-wide">
          <div>
            <p>Hi. I'm Kris, nice to meet you. Let me introduce myself.</p>
            <p>
              I am passionate about building software that improves the lives of
              those around me. I specialize in creating software for clients
              ranging from individuals to small-businesses.
            </p>
          </div>
          <div>
            <p>
              My journey began with fine art, went through handicrafts into
              programing. It was always my greatest pleasure and satisfaction to
              create something exeptional. Programing gives me unlimited
              potential to do so.
            </p>
          </div>
          <div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
              maxime excepturi quidem aut ullam eius pariatur ad repudiandae
              recusandae doloribus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
