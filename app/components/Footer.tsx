import React from 'react'

const Footer = () => {
  return (
    <main className='flex justify-between mt-10 mb-6 text-sm'>
      <section className='flex ml-2 md:ml-32 w-3/4'>
        <img src="/Logo.png" alt="" />
        <p className='ml-1'>Copyright © vieweb.co.in All rights reserved.</p>
      </section>
      <section className='mr-2 xl:mr-32 w-1/3'>
        <img src="/Social Icons.png" alt="" />
      </section>
    </main>
  )
}

export default Footer