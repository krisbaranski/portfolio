import React from 'react';
import usePageSEO from '../hooks/usePageSEO';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  usePageSEO({
    title: '404',
    description: 'Page not found',
    keywords: [],
    ogTitle: '404',
    ogDescription: 'Page not found',
    ogImage: '',
    ogUrl: 'https://krisbaranski.com/',
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      name="about"
      className="w-full min-h-screen md:flex md:items-center text-white pt-16 z-50"
    >
      <div className="relative flex flex-col justify-center items-center w-full py-6 px-4">
        <div>
          <p className="text-7xl sm:text-8xl mb-12 font-elephant underline underline-offset-8 decoration-1">
            404
          </p>
        </div>

        <div className="p-2 mb-20 text-center">
          <p className="pb-8">Something went wrong, page not found. </p>
          <p>
            <Link
              to={'/'}
              className="text-bold px-1 text-sky-400 hover:text-sky-200"
            >
              Visit krisbaranski.com
            </Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default NotFound;
