import React, { useState, useRef } from 'react'
import { FaPlay, FaPause } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";

function Navbar() {
  const [isPlaying, setIsPlaying] = useState(false);
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
      <div className='relative w-full bg-[#181818] h-[10vh] grid grid-cols-12 z-50'>
        <div className='col-span-2'></div>
        <div className='col-span-8 grid grid-cols-12'>
          <div className='col-span-3 flex'>
            <div className='w-[70%] flex justify-center items-center'>
              <h1 className='text-[white] text-[14px] font-bold'><a href="">TRIUMPH ACOUSTIC</a></h1>
            </div>
            <div className='w-[30%] pr-[20px] flex justify-center items-center'>
              <button onClick={handlePlayPause} className='text-[white]'>
                {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
              </button>
              <audio ref={audioRef} src="/path/to/your/music-file.mp3" />
            </div>
          </div>
          <div className='col-span-9 flex'>
            <div className='w-[80%] flex justify-center items-center'>
              <ul className='flex text-[white] text-[13px] justify-center font-bold items-center gap-[30px]'>
                <li><a href="">HOME</a></li>
                <li><a href="">MUSIC</a></li>
                <li><a href="">VIDEO</a></li>
                <li><a href="">UPCOMING SHOWS</a></li>
                <li><a href="">CONTACT</a></li>
              </ul>
            </div>
            <div className='w-[20%] flex justify-center items-center pr-[30px]'>
              <FaFacebookF size={20} className='text-[white]' />
            </div>
          </div>
        </div>
        <div className='col-span-2'></div>
      </div>
    </>
  )
}

export default Navbar