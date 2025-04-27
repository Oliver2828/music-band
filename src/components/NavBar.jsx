import React, { useState, useRef } from 'react';
import { FaPlay, FaPause, FaBars, FaTimes } from "react-icons/fa"; // Correct import
import { FaFacebookF } from "react-icons/fa";
import { motion } from 'framer-motion';

function Navbar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className='hidden md:block relative w-full bg-[#181818] h-[10vh] pt-[25px] grid grid-cols-12 z-50'>
        <div className='col-span-2'></div>
        <div className='col-span-8 grid grid-cols-12'>
          <div className='col-span-3 flex'>
            <div className='w-[70%] flex justify-center items-center'>
              <h1 className='text-white text-sm font-bold hover:text-amber-400 transition-colors'>
                <a href="/">TRIUMPH ACOUSTIC</a>
              </h1>
            </div>
            <div className='w-[30%] pr-5 flex justify-center items-center'>
              <button 
                onClick={handlePlayPause} 
                className='text-white hover:text-amber-400 transition-colors'
              >
                {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
              </button>
              <audio ref={audioRef} src="/src/assets/path.mp3" />
            </div>
          </div>
          <div className='col-span-9 flex'>
            <div className='w-[80%] flex justify-center items-center'>
              <ul className='flex text-white text-sm justify-center font-bold items-center gap-8'>
                {['HOME', 'MUSIC', 'VIDEO', 'UPCOMING SHOWS', 'CONTACT'].map((item) => (
                  <li key={item}>
                    <a href="/" className='hover:text-amber-400 transition-colors'>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='w-[20%] flex justify-center items-center pr-8'>
              <a href="/" className='text-white hover:text-amber-400 transition-colors'>
                <FaFacebookF size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className='col-span-2'></div>
      </div>

      {/* Mobile Navbar */}
      <div className='md:hidden fixed w-full bg-[#181818] h-[10vh] px-4 flex items-center justify-between z-50'>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='text-white hover:text-amber-400 transition-colors'
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        
        <a href="/" className='text-white hover:text-amber-400 transition-colors'>
          <FaFacebookF size={20} />
        </a>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className='absolute top-full left-0 w-full bg-[#181818] shadow-lg'
          >
            <ul className='flex flex-col items-center py-4 gap-4'>
              {['HOME', 'MUSIC', 'VIDEO', 'UPCOMING SHOWS', 'CONTACT'].map((item) => (
                <li key={item}>
                  <a 
                    href="/" 
                    className='text-white text-sm font-bold hover:text-amber-400 transition-colors'
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </>
  );
}

export default Navbar;