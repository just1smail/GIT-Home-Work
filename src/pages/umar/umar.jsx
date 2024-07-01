import React from 'react'

const Umar = () => {
  return (
    <div>
      <div className="line">
        <hr className='mt-[40px] w-[80%] mx-[auto]' />

      </div>
      <header className='flex mt-[200px] justify-between'>
        <div className='bg-[#6C5FBC] w-[40%] h-[800px]'>
        <h1 className='text-[#F9F9F9] text-[48px] font-[600] text-center mt-[80px]'>Just Contact</h1>
        <img className='flex m-auto' src="../../../src/pages/umar/image/Arrow 8.svg" alt="" />
        <img src="../../../src/pages/umar/image/Mobile Screen (1).svg" className='absolute left-[28%]' alt="" />
        </div>
        <div className='w-[40%]'>
          <h1 className='text-[40px] font-[600] text-[#252525] '>Customer <span className='text-[#6C5FBC] '>Support</span></h1>
          <input placeholder='FULL NAME' type="text" className='border-[2px] border-[#6C5FBC] py-[20px] w-[70%] px-[20px] rounded-[16px] mb-[26px]' />

          <input placeholder='ENTER YOUR EMAIL' type="text" className='border-[2px] border-[#6C5FBC] py-[20px] w-[70%] px-[20px] rounded-[16px] mb-[50px]' />
          <input placeholder='ENTER YOUR PROBLEM OR QUERY' type="text" className='border-[2px] border-[#6C5FBC] pt-[20px] w-[70%] px-[20px] pb-[300px] rounded-[16px]' /> 
          <button className='text-[white] bg-[#6C5FBC] border-none rounded-[15px] w-[70%] mt-[50px] h-[70px]'>Send Now</button>
        </div>
      
      </header>
      <footer className='mt-[500px] bg-[#EAEAEA]'>
        <div className="w-[85%] mx-auto flex items-center justify-between pt-[100px]">
          <div>
            <img src="../../../src/assets/img/Logo.svg" alt="" />
          </div>
          <div className='flex justify-between w-[30%]'>
            <p className='text-[#999999] text-[18px]'>Blog</p>
            <p className='text-[#999999] text-[18px]'>Blog</p>
            <p className='text-[#999999] text-[18px]'>About Us</p>
            <p className='text-[#999999] text-[18px]'>Contact</p>
          </div>
        </div>
        <div>
          <div className='flex justify-between w-[85%] mx-auto mt-[200px]'>
            <p className='text-[#999999] font-[600] text-[17px]'>© 2023 EATLY All Rights Reserved.</p>
            <div className='flex justify-between w-[20%]'>
              <img src="../../../src/pages/umar/image/Group 888.png" alt="" />
              <img src="../../../src/pages/umar/image/Path 7.png" alt="" />
              <img src="../../../src/pages/umar/image/Path 13.png" alt="" />
              <img src="../../../src/pages/umar/image/Path 6.png" alt="" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Umar