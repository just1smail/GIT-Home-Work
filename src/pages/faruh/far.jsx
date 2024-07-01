import React from 'react'
import Box from '@mui/material/Box';
import { useTranslation } from "react-i18next";
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

const Far = () => {
  const { t, i18n } = useTranslation();
  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <div>

    <div className='flex'>
      <div className='w-[50%] mt-[100px] mb-[100px]'>
        <Link to={"/"}>
          <div>
            <img src="../../../src/assets/img/farruh/Logo (3).png" alt="" />
          </div>
        </Link>
        <div className='w-[50%] m-[auto]'>
          <p className='text-4xl text-center font-[650]'>{t("Sign In To eatly")}</p>
          <div className='flex gap-[30px] mt-[40px]'>
            <img src="../../../src/assets/img/farruh/Google Button.png" alt="" />
            <img src="../../../src/assets/img/farruh/Apple Button.png" alt="" />
          </div>
          <p className='text-[grey] text-3xl text-center mt-[20px]'>{t("OR")}</p>
          <div className='ml-[40px] mt-[20px]'>
            <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '35ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="filled-basic" label="Email" variant="filled" />
        <TextField id="filled-basic" label="Password" variant="filled" />
        <p className='text-[#6C5FBC] text-end'>{t("Forget Password ?")}</p>
        <p className='text-white bg-[#6C5FBC] p-[20px] text-center rounded-2xl'>{t("Sign in")}</p>
      </Box>
        <p className='text-end mr-[30px] mt-[25px]'>{t("Create A New Account?")} <span className='text-[#6C5FBC] font-[700]'>{t("Sign Up")}</span> </p>
          </div>
        </div>
        <div className='flex justify-between mt-[100px] m-[40px]'>
          <p className='text-[grey]'>{t("Privacy Policy")}</p>
          <p className="text-[grey]">{t("Copyright 2022")}</p>
        </div>
      </div>
      <div className='w-[50%] bg-[url("../../../src/assets/img/farruh/background(3).png")]'>
          <img src="../../../src/assets/img/farruh/Group 162806.png" alt="" className='m-auto mt-[100px]' />
          <p className='text-4xl text-center font-[700] text-white'>{t("Find Foods With Love")} </p>
          <p className='w-[50%] text-white text-center m-auto mt-[30px]'>{t("Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes Including Asian, Chinese, Italians And Many More. Our Dashboard Helps You To Manage Orders And Money.")}</p>

      </div>
    </div>
    <div className='flex'>
      <div className='w-[50%] mt-[100px] mb-[100px]'>
        <Link to={"/"}>
          <div>
            <img src="../../../src/assets/img/farruh/Logo (3).png" alt="" />
          </div>
        </Link>
        <div className='w-[50%] m-[auto]'>
          <p className='text-4xl text-center font-[650]'>{t("Sign In To eatly")}</p>
          <div className='flex gap-[30px] mt-[40px]'>
            <img src="../../../src/assets/img/farruh/Google Button.png" alt="" />
            <img src="../../../src/assets/img/farruh/Apple Button.png" alt="" />
          </div>
          <p className='text-[grey] text-3xl text-center mt-[20px]'>{t("OR")}</p>
          <div className='ml-[40px] mt-[20px]'>
            <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '35ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="filled-basic" label="TomHill@mail.com" variant="filled" />
        <TextField id="filled-basic" label="Password" variant="filled" />
        <p className='text-[#6C5FBC] text-end'>{t("Forget Password ?")}</p>
        <p className='text-white bg-[#6C5FBC] p-[20px] text-center rounded-2xl'>{t("Sign in")}</p>
      </Box>
        <p className='text-end mr-[30px] mt-[25px]'>{t("Create A New Account?")} <span className='text-[#6C5FBC] font-[700]'>{t("Sign Up")}</span> </p>
          </div>
        </div>
        <div className='flex justify-between mt-[100px] m-[40px]'>
          <p className='text-[grey]'>{t("Privacy Policy")}</p>
          <p className="text-[grey]">{t("Copyright 2022")}</p>
        </div>
      </div>
      <div className='w-[50%] bg-[url("../../../src/assets/img/farruh/background(3).png")]'>
          <img src="../../../src/assets/img/farruh/Group 162806.png" alt="" className='m-auto mt-[100px]' />
          <p className='text-4xl text-center font-[700] text-white'>{t("Find Foods With Love")} </p>
          <p className='w-[50%] text-white text-center m-auto mt-[30px]'>{t("Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes Including Asian, Chinese, Italians And Many More. Our Dashboard Helps You To Manage Orders And Money.")}</p>

      </div>
    </div>
    <div className='flex'>
      <div className='w-[50%] mt-[100px] mb-[100px]'>
        <Link to={"/"}>
          <div>
            <img src="../../../src/assets/img/farruh/Logo (3).png" alt="" />
          </div>
        </Link>
        <div className='w-[50%] m-[auto]'>
          <p className='text-4xl text-center font-[650]'>{t("Sign In To eatly")}</p>
          <div className='flex gap-[30px] mt-[40px]'>
            <img src="../../../src/assets/img/farruh/Google Button.png" alt="" />
            <img src="../../../src/assets/img/farruh/Apple Button.png" alt="" />
          </div>
          <p className='text-[grey] text-3xl text-center mt-[20px]'>{t("OR")}</p>
          <div className='ml-[40px] mt-[20px]'>
            <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '35ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="filled-basic" label="TomHill@Mail.com" variant="filled" />
        <p className='text-[#6C5FBC] text-end'>{t("Forget Password ?")}</p>
        <p className='text-white bg-[#6C5FBC] p-[20px] text-center rounded-2xl'>{t("Sign in")}</p>
      </Box>
        <p className='text-end mr-[30px] mt-[25px]'>{t("Create A New Account? ")}<span className='text-[#6C5FBC] font-[700]'>{t("Sign Up")}</span> </p>
          </div>
        </div>
        <div className='flex justify-between mt-[100px] m-[40px]'>
          <p className='text-[grey]'>{t("Privacy Policy")}</p>
          <p className="text-[grey]">{t("Copyright 2022")}</p>
        </div>
      </div>
      <div className='w-[50%] bg-[url("../../../src/assets/img/farruh/background(3).png")]'>
          <img src="../../../src/assets/img/farruh/Group 162806.png" alt="" className='m-auto mt-[100px]' />
          <p className='text-4xl text-center font-[700] text-white'>{t("Find Foods With Love")} </p>
          <p className='w-[50%] text-white text-center m-auto mt-[30px]'>{t("Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes Including Asian, Chinese, Italians And Many More. Our Dashboard Helps You To Manage Orders And Money.")}</p>

      </div>
    </div>
    </div>
  )
}

export default Far