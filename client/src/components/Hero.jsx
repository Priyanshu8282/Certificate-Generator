import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import '../../public/fonts.css';
import { template_1 } from '../assets';

function Hero() {
  return (
    <Parallax bgImage={template_1} strength={500}>
      <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-20 font-raleway">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <motion.h1
              className="text-3xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Create Your Certificates Effortlessly
            </motion.h1>
            <motion.p
              className="text-lg md:text-2xl mb-8"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Generate professional certificates in just a few clicks. Customize templates to suit your needs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="#create"
                className="bg-white text-black px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-200 transition-colors transform hover:scale-105 duration-300"
              >
                Create Certificate Now
              </a>
            </motion.div>
          </div>
          <motion.div
            className="md:w-1/2 mt-8 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <img src={template_1} alt="Certificate Template" className="w-full h-auto rounded-lg shadow-lg" />
          </motion.div>
        </div>
      </div>
    </Parallax>
  );
}

export default Hero;