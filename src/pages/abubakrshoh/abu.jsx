import React from "react";
import { useTranslation } from "react-i18next";

const Abu = () => {
    const { t, i18n } = useTranslation();
    function TranslateClick(lang) {
      i18n.changeLanguage(lang);
  }
  return (
    <>
      <img
        className="w-[100%] mt-[40px] h-[600px]"
        src="../../../src/assets/img/Frame 31.png"
        alt=""
      />
      <img
        className="absolute top-[150px] left-[200px]"
        src="../../../src/assets/img/Location.png"
        alt=""
      />

      <div className="w-[420px] h-[370px] bg-[white] shadow-2xl rounded-lg m-[auto] absolute left-[690px] top-[500px] font-mono">
        <div className="flex items-center bg-[#323142] text-[white] rounded-lg py-[20px] px-[15px]">
          <img
            className="mr-[20px]"
            src="../../../src/assets/img/Rectangle 4194.png"
            alt=""
          />
          <div>
            <p>{t(`David Smith`)}</p>
            <p>{t(`Food Rider`)}</p>
          </div>
        </div>

        <div className="flex items-center mt-[30px] px-[20px]">
          <img
            className="mr-[20px]"
            src="../../../src/assets/img/Time.png"
            alt=""
          />
          <div>
            <p>{t(`Email Address`)}</p>
            <p>{t(`15 Minutes`)}</p>
          </div>
        </div>

        <div className="flex items-center  mt-[30px] px-[20px]">
          <img
            className="mr-[20px]"
            src="../../../src/assets/img/Locatin.png"
            alt=""
          />
          <div>
            <p>{t(`Your Address`)}</p>
            <p>{t(`Horizenal Road Stree 1178 California, USA`)}</p>
          </div>
        </div>

        <button className="bg-[#6C5FBC] py-[6px] px-[20px] text-[white] rounded-md ml-[150px] mt-[20px]">
          {t(`Pending`)}
        </button>
      </div>

      <div className="flex items-center justify-between w-[70%] h-[130px] bg-[white] m-auto shadow-2xl mt-[250px] rounded-2xl py-[10px] px-[20px] font-mono">
        <div className="flex items-center">
          <img
            className="w-[110px] mr-[20px]"
            src="../../../src/assets/img/Food Image (4).png"
            alt=""
          />
          <div>
            <p>Chicken Hell</p>
            <p>$12.99</p>
          </div>
        </div>

        <div className="text-center">
          <div className="flex items-center">
            <button className="bg-[red] text-[white] py-[3px] px-[15px]">
              -
            </button>
            <p className="text-[20px] mx-[10px]">03</p>
            <button className="bg-[lightgreen] text-[white] py-[3px] px-[15px]">
              +
            </button>
          </div>

          <p className="mt-[10px] text-[20px]">$38.97</p>
        </div>
      </div>

      <div className="flex items-center justify-between w-[70%] h-[130px] bg-[white] m-auto shadow-2xl mt-[30px] rounded-2xl py-[10px] px-[20px] font-mono">
        <div className="flex items-center">
          <img
            className="w-[110px] mr-[20px]"
            src="../../../src/assets/img/Food Image (4).png"
            alt=""
          />
          <div>
            <p>Chicken Hell</p>
            <p>$17.99</p>
          </div>
        </div>

        <div className="text-center">
          <div className="flex items-center">
            <button className="bg-[red] text-[white] py-[3px] px-[15px]">
              -
            </button>
            <p className="text-[20px] mx-[10px]">05</p>
            <button className="bg-[lightgreen] text-[white] py-[3px] px-[15px]">
              +
            </button>
          </div>

          <p className="mt-[10px] text-[20px]">$49.97</p>
        </div>
      </div>

      <div className="flex items-center justify-center mt-[150px] mb-[50px]">
        <p className="bg-[grey] w-[500px] py-[20px] px-[10px] text-[white] font-mono text-[20px] rounded-md">
          {t(`Apply Caupon`)}
        </p>
        <button className="ml-[20px] bg-[#6C5FBC] py-[20px] px-[25px] text-[white] font-mono rounded-md">
          {t(`Apply`)}
        </button>
      </div>

      <div className="flex items-center justify-center">
        <p className="text-[25px] mr-[430px] font-mono">{t(`Subtotal`)}</p>
        <p className="text-[25px] font-mono">$58.96</p>
      </div>

      <p className="w-[400px] border-[1px] border-[dashed] border-[grey] m-auto"></p>

      <div className="flex items-center justify-center mt-[30px]">
        <p className="text-[25px] mr-[430px] font-mono">{t(`Delivery`)}</p>
        <p className="text-[25px] font-mono">$3.96</p>
      </div>

      <p className="w-[400px] border-[1px] border-[dashed] border-[grey] m-auto"></p>

      <div className="flex items-center justify-center mt-[30px]">
        <p className="text-[25px] mr-[430px] font-mono font-[600]">
          {t(`Total`)}
        </p>
        <p className="text-[25px] font-mono font-[600]">$62,11</p>
      </div>

      <button className="bg-[#6C5FBC] text-[white] py-[15px] w-[35%] text-[30px] font-mono ml-[400px] rounded-md mt-[20px]">
        {t(`Reviev Payment`)}
      </button>

      <footer className="w-[100%] pt-10">
        <div className="w-[80%] m-auto bg-[#6C5FBC] bg-[url('src/components/narased3/Group34844.svg')] text-white rounded-3xl p-10 flex justify-between items-center box-border">
          <div>
            <h2 className="text-4xl font-bold mb-4">GET 50%</h2>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="rounded-l-lg px-4 py-2 w-64 text-gray-700"
              />
              <button className="bg-white text-purple-600 rounded-r-lg px-4 py-2 font-bold">
                {t(`SUBSCRIBE`)}
              </button>
            </div>
          </div>
          <img
            src="src/components/narased3/Food Image (3).svg"
            alt="Food"
            className="w-45 h-15 rounded-full"
          />
        </div>

        <div className="bg-gray-100 text-gray-600 py-10 mt-[100px]">
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center space-x-4">
                <img
                  src="src/components/narased3/Logo.svg"
                  alt="Eatly"
                  className="w-40 h-10"
                />
              </div>
              <div className="flex space-x-4 text-sm">
                <a href="#" className="hover:text-purple-600">
                  Blog
                </a>
                <a href="#" className="hover:text-purple-600">
                  Pricing
                </a>
                <a href="#" className="hover:text-purple-600">
                  About Us
                </a>
                <a href="#" className="hover:text-purple-600">
                  Contact
                </a>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span>© {t(`EATLY All Rights Reserved`)}</span>
              <div className="flex space-x-4">
                <img src="src/components/narased3/Socials.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Abu;
