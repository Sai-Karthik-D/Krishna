import React from 'react';
import { motion } from 'framer-motion'; 
import MainBanner from '../assets/swami1.jpg';
import littleKrishnaImg from "../assets/littlek1.jpeg";

const NavBar = () => {
  return (
    <div>
      {/* Top Bar with Logo + Text */}
      <div className="w-full py-2 font-bold text-sm text-white text-center bg-gradient-to-r from-violet-500 via-[#9938CA] to-[#E0724A] flex items-center justify-center gap-2">
        
        <motion.p
          className="motion-safe:animate-pulse"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          Happy Sri Krishna Janmashtami
        </motion.p>
      </div>

      {/* Main Banner */}
      <motion.div
        className="relative h-[600px] bg-cover bg-center flex items-center justify-start"
        style={{ backgroundImage: `url(${MainBanner})` }}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="p-10 max-w-lg">
          <motion.h1
            className="text-3xl font-bold text-blue-700 drop-shadow-lg"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Happy Krishna Janmashtami!
          </motion.h1>

          <motion.p
            className="mt-4 text-xl text-violet-300 drop-shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            May the flute of Lord Krishna fill your life with melody, joy, and blessings.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default NavBar;
