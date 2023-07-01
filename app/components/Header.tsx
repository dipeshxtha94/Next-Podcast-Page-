import React from 'react'
import BG from '/public/Bg.png'

const Header = () => {
  return (
    <main style={{backgroundImage: `url(${BG.src})`}} className='w-11/12 h-96 rounded-3xl mt-16 m-auto pt-16 pl-14 text-white flex flex-col align-middle'>
      <p className='text-5xl font-extrabold w-3/4'>Super Excited (aka The Saturday Edition)</p>
      <p className='text-base font-medium text-slate-300 mt-2 ml-2'>Indie Stories · Jan 24 · Episode 234</p>
      <img src="/Player 2.png" alt=""  className='mt-7 w-3/4 h-24'/>
    </main>
  )
}

export default Header