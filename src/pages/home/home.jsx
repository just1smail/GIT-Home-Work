import React from "react";
import { useTranslation } from "react-i18next";
import TopItems from "../../components/narased1/sec1";
import Dashboard from "../../components/narased2/sec2";
import Footer from "../../components/narased3/foot";

// IJARA NARASEEEEN !!!

const Home = () => {
  const { t, i18n } = useTranslation();
  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <div className="w-[100%] m-auto bg-white">
      <div className="flex mt-[10px] justify-between p-20">
        <div className="w-[41%] mb-10">
          <p className="text-gray-300 text-sm font-medium uppercase">
            -------- {t("Over")}
          </p>
          <h1 className="text-[75px] font-bold mb-4"> {t("Enjoy")}</h1>
          <p className="text-gray-600 mb-6 w-[410px]">
            {t("Eatly")} <span className="text-blue-500">$20 bonus</span>.
          </p>
          <div className="flex gap-4 mb-8">
            <button className="bg-purple-600 text-white py-2 px-4 rounded-lg">
              {t("b1")}
            </button>
            <button className="border border-purple-600 text-purple-600 py-2 px-4 rounded-lg">
              {t("b2")}
            </button>
          </div>
          <div className="flex items-center gap-2">
            <img src="src/pages/home/Trust Reviews.svg" alt="Trustpilot" />
          </div>
        </div>

        <div>
          <img
            src="src/pages/home/Hero.svg"
            alt=""
            className="w-[680px] h-[607px]"
          />
        </div>
      </div>

      <div className="w-[100%] h-[220px] bg-[url('src/pages/home/BG.svg')] flex justify-around items-center mt-[40px]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-[10px]">10K+</h2>
          <p className="text-[#CBD5E1] w-[180px]"> {t("p1")} </p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-[10px]">4M</h2>
          <p className="text-[#CBD5E1] w-[280px]"> {t("p2")} </p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-[10px]">99.99%</h2>
          <p className="text-[#CBD5E1] w-[260px]"> {t("p3")} </p>
        </div>
      </div>

      <div className="mt-[100px] flex justify-center gap-[200px]">
        <div>
          <img src="src/pages/home/Mobile.svg" alt="" />
        </div>
        <div className="w-[31%] mt-[100px]">
          <h1 className="text-[50px] font-bold">{t("prem")}</h1>
          <ul className="list-disc text-[#676767]">
            <li className="mt-[30px] w-[400px]">{t("pre1")}</li>
            <li className="mt-[30px] w-[400px]">{t("pre2")}</li>
          </ul>
          <button className="w-[180px] h-[60px] bg-[#6C5FBC] text-white rounded-xl mt-[50px]">
            {t("dow")}
          </button>
          <img
            className="ml-[200px]"
            src="src/pages/home/Vector 14.svg"
            alt=""
          />
        </div>
      </div>

      <div>
        <TopItems />
      </div>

      <div>
        <Dashboard />
      </div>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default Home;
