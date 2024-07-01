import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const Maryam = () => {
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();

  const translateClick = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className='bg-zinc-50'>
      <div className='w-[95%] m-auto border-t-2 border-gray-300 mt-5 mb-[60px]'></div>
      <div className='w-[90%] m-auto relative'>
        <img className='w-full' src="/src/assets/photo/Rectangle 4192.png" alt="Background" />
        <h1 className='absolute top-[60px] left-[600px] text-4xl font-semibold text-white'>{t("Our Pricing")}</h1>
        <img className='absolute top-[60px] left-[500px]' src="/src/assets/photo/Vector (8).png" alt="Decoration" />
        <img className='absolute top-[110px] left-[1170px]' src="/src/assets/photo/01.png" alt="Decoration" />
        <img className='absolute top-[90px] left-[158px] w-[80%]' src="/src/assets/photo/17-Home V1 1.png" alt="Decoration" />
        <img className='absolute top-[830px] left-[198px]' src="/src/assets/photo/02.png" alt="Decoration" />
      </div>
      <div className='mt-[600px]'>
        <img className='w-full' src="/src/assets/photo/Price Card.png" alt="Price Card" />
      </div>
      <div className='flex justify-between w-[85%] m-auto pb-[100px] border-b-2 border-gray-300 mb-[30px]'>
        <div className='text-start leading-relaxed'>
          <h1 className='text-6xl font-bold w-[80%]'>{t("Control")} <span className='text-violet-700'>{t("Purchases ")}</span>{t("Via Dashboard")}</h1>
          <div className='w-full mt-[40px]'>
            <img className='ml-[-28px]' src="/src/assets/photo/1st (1).png" alt="Step 1" />
            <img className='mb-[20px] mt-[-26px]' src="/src/assets/photo/2nd.png" alt="Step 2" />
            <img src="/src/assets/photo/3rd (1).png" alt="Step 3" />
          </div>
        </div>
        <div className='w-[70%]'>
          <img className='w-full' src="/src/assets/photo/savings (1).png" alt="Savings" />
        </div>
      </div>
      <div className=''>
        <h1 className='text-6xl font-semibold w-[50%] m-auto mt-[80px]'><span className='text-violet-700'>{t("Customer")}</span> {t("Say")}</h1>
        <div className='flex w-[93%] m-auto relative'>
          <img className='w-[80%]' src="/src/assets/photo/Review 01.png" alt="Review 1" />
          <img className='w-[60%] ml-[-300px]' src="/src/assets/photo/Review 2.png" alt="Review 2" />
          <img className='w-[40%] ml-[-320px]' src="/src/assets/photo/Review 3.png" alt="Review 3" />
        </div>
        <div className='flex absolute top-[4066px] left-[800px]'>
          <div className='z-10 w-[130px] h-[10px] rounded-lg bg-purple-900'></div>
          <div><p className='w-[260px] h-[10px] rounded-lg ml-[-10px] bg-zinc-400'></p></div>
        </div>
      </div>
      <div className='bg-zinc-200'>
        <div className='border-b-2 border-gray-300 w-[80%] m-auto flex justify-between items-center pt-[80px] pb-[25px]'>
          <img src="/src/assets/photo/Logo (7).png" alt="Logo" />
          <div className='flex justify-between items-center w-[40%] text-gray-700'>
            <p>Blog</p>
            <p>Pricing</p>
            <p>About Us</p>
            <p>Contact</p>
          </div>
        </div>
        <div className='flex justify-between items-center w-[80%] m-auto pt-[50px] pb-[80px]'>
          <h1 className='text-gray-700'>© 2023 EATLY All Rights Reserved.</h1>
          <img src="/src/assets/photo/Socials.png" alt="Social Media" />
        </div>
      </div>
    </div>
  );
};

export default Maryam;