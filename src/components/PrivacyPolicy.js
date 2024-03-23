import React from 'react';
import SinglePolicy from './SinglePolicy';
import policyData from '../data/policyData';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <motion.div
      name="policy"
      className="relative w-full min-h-screen flex flex-col justify-center items-center py-12 px-4 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <div className="max-w-[400px] sm:max-w-[500px] md:max-w-[640px] lg:max-w-[820px] mx-auto mb-8 mt-24 p-4 px-4 relative flex flex-col justify-center items-center w-full">
        <div className="py-4 mb-12">
          <p className="text-4xl sm:text-5xl font-elephant underline underline-offset-8 decoration-1">
            Privacy Policy
          </p>
        </div>

        {policyData.map(policy => {
          return (
            <SinglePolicy
              title={policy.title}
              content={policy.content}
              address={policy.address}
              key={policy.id}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;
