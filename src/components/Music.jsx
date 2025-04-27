import React, { useRef, useState } from 'react'
import { IoShareSocial } from "react-icons/io5";
import { IoPlayCircleOutline, IoPauseCircleOutline } from "react-icons/io5";

function Music() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

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
    <>
      <div className='bg-[#181818] grid grid-rows-12 min-h-[90vh]'>
        <div className='row-span-2 pt-[30px] flex justify-center items-center text-[35px] font-bold text-[white] font-serif'>
          <h2>Music</h2>
        </div>
        <div className='row-span-10 gap-[30px] grid grid-rows-2'>
          <div className='bg-[black] border-1 border-white mx-[23%] h-[35vh] mt-[5vh] flex flex-col'>
            {/* Song Info */}
            <div className='border-b-1 border-gray-300 mx-[50px] grid grid-cols-2 h-[18vh]'>
              <div className='flex flex-col justify-center pl-[20px] text-white'>
                <h4 className='text-[23px] font-medium'>PATH</h4>
                <p className='text-[14px]'>Original Song By Triumph Acoustic Band</p>
              </div>
              <div className='flex justify-end pr-[50px] items-center'>
                <IoShareSocial className='text-amber-300' />
              </div>
            </div>
            {/* Play Button and Progress */}
            <div className='h-[12vh] grid grid-cols-2 border-b-1 border-gray-300 mx-[50px]'>
              <div className='flex items-center pl-[20px] gap-[10px]'>
                <button onClick={handlePlayPause}>
                  {isPlaying ? (
                    <IoPauseCircleOutline size={50} className='text-amber-400' />
                  ) : (
                    <IoPlayCircleOutline size={50} className='text-amber-400' />
                  )}
                </button>
                <p className='text-amber-300'>Path</p>
              </div>
              <div className='flex items-center justify-end pr-[20px] text-white'>
                <p>{formatTime(currentTime)} / {formatTime(duration)}</p>
              </div>
            </div>
            {/* Audio Element */}
            <audio
              ref={audioRef}
              src="/src/assets/path.mp3"
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
            />
          </div>
          <div className='bg-[black]  border-1 border-white mx-[23%] h-[35vh] mb-[10vh] flex flex-col'>
            {/* Song Info */}
            <div className='border-b-1 border-gray-300 mx-[50px] grid grid-cols-2 h-[18vh]'>
              <div className='flex flex-col justify-center pl-[20px] text-white'>
                <h4 className='text-[23px] font-medium'>RUNNER</h4>
                <p className='text-[14px]'>Original Song By Triumph Acoustic Band</p>
              </div>
              <div className='flex justify-end pr-[50px] items-center'>
                <IoShareSocial className='text-amber-300' />
              </div>
            </div>
            {/* Play Button and Progress */}
            <div className='h-[12vh] grid grid-cols-2 border-b-1 border-gray-300 mx-[50px]'>
              <div className='flex items-center pl-[20px] gap-[10px]'>
                <button onClick={handlePlayPause}>
                  {isPlaying ? (
                    <IoPauseCircleOutline size={50} className='text-amber-400' />
                  ) : (
                    <IoPlayCircleOutline size={50} className='text-amber-400' />
                  )}
                </button>
                <p className='text-amber-300'>RUNNER</p>
              </div>
              <div className='flex items-center justify-end pr-[20px] text-white'>
                <p>{formatTime(currentTime)} / {formatTime(duration)}</p>
              </div>
            </div>
            {/* Audio Element */}
            <audio
              ref={audioRef}
              src="/src/assets/path2.mp3"
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Music;