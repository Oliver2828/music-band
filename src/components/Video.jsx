import React from 'react';

function Video() {
  return (
    <div className='bg-[#181818] grid grid-rows-12 max-h-[80vh]'>
      {/* Header Section */}
      <div className='row-span-2 pt-[30px] flex justify-center items-center text-[35px] font-bold text-[white] font-serif'>
        <h3 className='text-white text-[35px]'>Video</h3>
      </div>

      {/* Video Section */}
      <div className='row-span-10 flex justify-center items-center mx-[30%] my-[20px]'>
        <video
          className='w-full h-full max-h-full rounded-lg shadow-lg object-cover'
          autoPlay
          loop
          muted
          preload="metadata"
          poster="/path/to/your-poster-image.jpg" // Replace with your poster image path
        >
          <source src="/src/assets/Triumph1.mp4" type="video/mp4" />
          <source src="/src/assets/Triumph1.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Video;