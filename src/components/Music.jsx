import React from 'react'

function Music() {
  return (
    <>
    <div className=' bg-[#181818] grid  grid-rows-12 min-h-[90vh]'>
      <div className=' row-span-2 pt-[30px] flex justify-center items-center text-[35px] font-bold text-[white] font-serif '>
        <h2>Music</h2>
      </div>
      <div className=' bg-orange-500 row-span-10 gap-[30px] grid grid-rows-3'>
        <div className=' bg-[red] mx-[23%] h-[35vh] mt-[5vh] grid grid-rows-3'>
          <div className=' bg-[ grene] grid grid-cols-2'>
            <div></div>
            <div></div>
          </div>
          <div></div>
          <div></div>
        </div>
        <div className=' bg-[blue] mx-[23%] h-[35vh] mt-[5vh]'></div>
        <div className=' bg-[purple] mb-[5vh] mx-[23%] h-[35vh] mt-[5vh]'></div>
      </div>
    </div>
    </>
  )
}

export default Music