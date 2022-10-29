import React from 'react';

export const Aboutme = () => {
  return (
    <div name="about" className="w-full  text-white ">
      <div className="flex flex-col justify-center items-center w-full py-20 bg-[#264e86]">
        <div className="max-w-[800px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right py-8 pl-4">
            <p className="text-4xl font-bold inline border-b-2 border-white">
              About me
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[600px] md:max-w-[800px] w-full grid sm:grid-cols-2 gap-8 px-6 pb-6">
          <div className="sm:text-right text-2xl md:text-4xl font-bold">
            <p>Hi. I'm Kris, nice to meet you. Let me introduce myself.</p>
          </div>
          <div>
            <p className="font-semibold">
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do, if you
              had a software expert available at your fingertips?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};