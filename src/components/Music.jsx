import React, { useRef, useState } from 'react';
import { IoShareSocial } from "react-icons/io5";
import { IoPlayCircleOutline, IoPauseCircleOutline } from "react-icons/io5";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const songVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const SongCard = ({ title, audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <motion.div
      ref={ref}
      variants={songVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className='bg-black border border-white/20 rounded-lg mx-[10%] md:mx-[23%] h-[35vh] my-4 p-6 flex flex-col shadow-xl hover:shadow-2xl transition-shadow'
    >
      {/* Song Info */}
      <div className='border-b border-white/20 pb-4 mb-4 flex justify-between items-center'>
        <div className='flex flex-col'>
          <h4 className='text-xl md:text-2xl font-bold text-white'>{title}</h4>
          <p className='text-sm md:text-base text-white/70'>Original Song By Triumph Acoustic Band</p>
        </div>
        <button className='hover:text-amber-400 transition-colors'>
          <IoShareSocial className='text-2xl' />
        </button>
      </div>

      {/* Play Controls */}
      <div className='flex flex-1 flex-col justify-between'>
        <div className='flex items-center justify-between'>
          <button 
            onClick={handlePlayPause}
            className='hover:scale-105 transition-transform'
          >
            {isPlaying ? (
              <IoPauseCircleOutline className='text-amber-400 text-4xl md:text-5xl' />
            ) : (
              <IoPlayCircleOutline className='text-amber-400 text-4xl md:text-5xl' />
            )}
          </button>
          <span className='text-amber-300 text-lg md:text-xl font-medium'>{title}</span>
        </div>

        {/* Progress Bar */}
        <div className='w-full bg-white/10 h-1 rounded-full mb-2'>
          <motion.div
            className='bg-amber-400 h-full rounded-full'
            animate={{ width: `${(currentTime / duration) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Time Display */}
        <div className='flex justify-between text-white/80 text-sm'>
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />
    </motion.div>
  );
};

function Music() {
  return (
    <div className='bg-[#181818] min-h-screen py-12'>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className='text-4xl md:text-5xl font-bold text-center text-white mb-12 font-serif'
      >
        Music
      </motion.h2>
      
      <div className='space-y-14'>
        <SongCard 
          title="PATH" 
          audioSrc="/src/assets/path.mp3" 
        />
        <SongCard 
          title="RUNNER" 
          audioSrc="/src/assets/path2.mp3" 
        />
      </div>
    </div>
  );
}

export default Music;