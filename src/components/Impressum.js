import React from 'react';
import Button from './Button';
import SingleImpressum from './SingleImpressum';
import impressumData from '../data/impressumData';
import { motion } from 'framer-motion';

const Impressum = () => {
  return (
    <motion.div
      name="impressum"
      className="relative w-full min-h-screen flex flex-col justify-center items-center py-12 px-4 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <div className="max-w-[400px] sm:max-w-[500px] md:max-w-[720px] lg:max-w-[820px] mx-auto my-24 p-4 relative flex flex-col justify-center items-center w-full mt-10 py-12 px-4 ">
        <div className="pb-12">
          <p className="text-4xl sm:text-5xl mb-4 font-elephant underline underline-offset-8 decoration-1">
            Impressum
          </p>
        </div>
        <div className="mb-24 max-w-[350px] sm:max-w-[450px] md:max-w-[600px] lg:max-w-[750px] w-full">
          <p className="list-none justify-center text-center">
            <li>Owner:</li>
            <br />
            <li>Krzysztof Baranski</li>
            <li>Charlottenburger Straße 30</li>
            <li>13086 Berlin</li>
            <li className="flex justify-center">
              <Button
                text="contact me"
                link="/contact"
                color="blue"
                size={120}
              />
            </li>
          </p>
        </div>
        <div className="pb-4">
          <p className="text-3xl sm:text-4xl mb-4 font-elephant underline underline-offset-8 decoration-1">
            Disclaimer
          </p>
        </div>

        {impressumData.map(data => {
          return (
            <SingleImpressum
              title={data.title}
              content={data.content}
              key={data.id}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export default Impressum;
