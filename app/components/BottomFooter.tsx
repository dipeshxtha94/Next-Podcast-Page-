import React from 'react'
import BG from '/public/Bg1.png'

const BottomFooter = () => {
  return (
    <main style={{ backgroundImage: `url(${BG.src})` }} className='w-11/12 h-72 rounded-3xl mt-8 m-auto pt-16 pl-16 text-white flex align-middle'>
      <div className='w-1/2'>
        <img src="/Learn how to start a.png" alt="" />
        <p className='mt-5 text-neutral-400'>Many desktop publishing packages and web page editors now use lorem as their
          default model </p>
      </div>
      <div className='m-auto'>
        <img src="/CTA (1).png" alt="" />
      </div>
    </main>
  )
}

export default BottomFooter