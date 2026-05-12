import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center mx-5'>
      <h1 className='text-4xl font-bold'>EJMA 10th Edition Report
      </h1>
      <div className='flex items-center'>
        <img src="/public/ratnaflex_logo.jpg" alt="no img" className='size-18' />
        <div>
          <span className='text-2xl font-bold text-[#EF6301]'>Ratanaflex</span>
          <p className='font-semibold'>Engineering pvt ltd.</p>
        </div>
      </div>
    </div>
  )
}

export default Header
