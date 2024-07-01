import React from 'react'
import './App.css'
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AddIcon from '@mui/icons-material/Add';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from "react-i18next";


const Lut = () => {
  const { t, i18n } = useTranslation();
  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <div>
      
      <div className="container1 flex  justify-around">


      <div className="GlavaLeft1">
      <div  className="left1 w-[798px] h-[251px] bg-[#6C5FBC] flex mt-[100px] ">
        <div className="left1Text ml-[30px] mt-[20px]">
          <p className='text-[75px] text-white font-bold'>{("Off")}</p>
          <p className='text-[87px] text-[#7C6FCD] font-bold mt-[-40px]'>WEEKENDS</p>
        </div>
        <div className="right1 mt-[70px] ml-[20px]">
          <img src="/src/pages/lutfullo/image/Food Image.png" alt="" />
        </div>
        </div>
        <div className="inpSearch mt-[130px]">
          <input className='search w-[797px] h-[75px] bg-[#EDEDED] text-[#AAABBA]' placeholder={t("Search")} type="text" />
        </div>
        <div className="btnFoterCont1Left1 flex mt-[40px]">
        <Button className='btnFood w-[397px] h-[75px]' variant="outlined">{t("Food")}</Button>
        <Button className='btnResturent w-[397px] h-[75px]' variant="contained">{t("Resturent")}</Button>

        </div>
      </div>
      
        <div className="right1 w-[377px] h-[591px] mt-[100px]  ">
        <div className="box">
            <p className='text-[21px] font-bold ml-[13px] text-[#323142] mt-[20px]'>{t("Category")}</p>
        </div>
        <div className="flexFod flex justify-around mt-[20px]">
          <div className="foodItem w-[66px] h-[96px] bg-[#FFDE8A]">
            <img  className='piza m-auto mt-[10px]' src="/src/pages/lutfullo/image/Pizza.png" alt="" />
            <p className='text-[#D69900] text-center mt-[5px] font-bold'>Pizza</p>
          </div>
          <div className="foodItem hotItem w-[66px] h-[96px] bg-[#F7C5BA] ">
          <img  className='piza m-auto mt-[0px]' src="/src/pages/lutfullo/image/Hotdog.png" alt="" />
          <p className='text-[#FB471D] text-center mt-[-4px] font-bold'>Asian</p>
          </div>
            <div className="foodItem w-[66px] h-[96px] bg-[#EDB66B]">
          <img  className='piza m-auto mt-[10px]' src="/src/pages/lutfullo/image/Doughnut.png" alt="" />
          <p className='text-[#D69900] text-center mt-[5px] font-bold'>Donat</p>
          </div>
          <div className="foodItem w-[66px] h-[96px] bg-[#5A85FF] ">
          <img  className='piza m-auto mt-[10px]' src="/src/pages/lutfullo/image/Icecream.png" alt="" />
          <p className='text-[#002073] text-center mt-[-3px] font-bold'>Ice</p>
          </div>
        </div>
        <div className="sortBy flex  mt-[20px]">
          <div className="leftSort ml-[15px]">
            <p className='text-[21px] text-[#323142] font-bold'>{t("Sort By")}</p>
            <p className='text-[#ACADB9] text-[15px] font-bold mt-[15px] '>{t("Recomended")}</p>
            <p className='text-[#ACADB9] text-[15px] font-bold mt-[15px] ' >{t('Most Popular')}</p>
          </div>
          <div className="rightSort mt-[43px] ml-[160px]" >
            <p className='text-[#6C5FBC] text-[15px] font-bold '>{t("Fast Delivery")}</p>
          </div>
        </div>
        <p className='text-[22px] text-[#323142] ml-[15px] font-bold mt-[30px]'>{t("Price")}</p>
        <input className='ml-[13px] mt-[20px]' id='myRange' type="range" />
        <div className="textRange flex mt-[15px]">
          <p className='text-[10px] text-[#C2C3CB] font-bold ml-[15px] '>$0</p>
          <p className='text-[10px] text-[#C2C3CB] font-bold ml-[35px] '>$25</p>
          <p className='text-[10px] text-[#C2C3CB] font-bold ml-[35px] '>$50</p>
          <p className='text-[10px] text-[#C2C3CB] font-bold ml-[35px] '>$100</p>
          <p className='text-[10px] text-[#C2C3CB] font-bold ml-[35px] '>$500</p>
          <p className='text-[10px] text-[#C2C3CB] font-bold ml-[35px] '>$1000</p>
        </div>

        <div className="divBtn m-auto flex justify-center mt-[30px]">
        <Button className='btn w-[313px] h-[60px] bg-[#6C5FBC] font-bold text-white' variant="contained">{t("Apply")}</Button>
        </div>
        </div>
      </div>

      <div className="textCont2 flex mt-[100px]">
        <div className="text2Flex flex ml-[80px]">
          <p className='text-[35px] text-[#323142 font-bold'>{t("Our Top")} </p>
          <p className='text-[#6C5FBC] text-[35px] font-bold ml-[10px]'>{t("Restaurants")}</p>
        </div>
        <div className="rightText2 ml-[910px] mt-[10px]">
            <p className='text-[20px] text-[#ACADB9] font-bold'>{t("View All")} <ArrowForwardIcon/> </p>
        </div>
      </div>

      <div className="container2 flex justify-center mt-[40px]">
        <div className="item2 w-[395px] h-[297px]">
          <div className="topItem2 w-[395px] h-[176px]">
            <img className='w-[100%]' src="/src/pages/lutfullo/image/img1.png" alt="" />
          </div>
          <div className="downItem2">
          <div className="flexMlItem2 ml-[24px]">
          <button className=' btnHealth bg-[#F7EDD0] text-[#DAA31A] w-[65px] h-[24px]'>{t("Healthy")}</button>
          <p className='text-[25px] font-bold text-[#323142]'>{t("The Chicken King")}</p>
          <div className="downFlex flex mt-[10px]">
            <div className="div23min">
            <p className='text-[#8E97A6] text-[19px]'>24min •</p>
            </div>
            <div className="divStar">
            <img className='ml-[20px] ' src="/src/pages/lutfullo/image/Star.png" alt="" />
            </div>
            <div className="div48 ml-[5px] ">
            <p className='text-[#8E97A6] text-[19px]'>4.8</p>
            </div>
            <div className="btnDivCheck ml-[155px] mt-[-12px]">
            <button className='btnCheck bg-[#DBD9EE] w-[40px] h-[40px] '><img className='m-auto' src="/src/pages/lutfullo/image/Book Mark.png" alt="" /></button>
            </div>
          </div>
          </div>
          </div>
        </div>
        <div className="item2 w-[395px] h-[297px] ">
        <div className="topItem2 w-[395px] h-[176px]">
            <img className='w-[100%]' src="/src/pages/lutfullo/image/img2.png" alt="" />
          </div>
          <div className="downItem2">
          <div className="flexMlItem2 ml-[24px]">
          <button className=' btnHealth bg-[#F7C5BA] text-[#FB471D] w-[65px] h-[24px]'>{t("Healthy")}</button>
          <p className='text-[25px] font-bold text-[#323142]'>{t("The Chicken King")}</p>
          <div className="downFlex flex mt-[10px]">
            <div className="div23min">
            <p className='text-[#8E97A6] text-[19px]'>24min •</p>
            </div>
            <div className="divStar">
            <img className='ml-[20px] ' src="/src/pages/lutfullo/image/Star.png" alt="" />
            </div>
            <div className="div48 ml-[5px] ">
            <p className='text-[#8E97A6] text-[19px]'>4.9</p>
            </div>
            <div className="btnDivCheck ml-[155px] mt-[-12px]">
            <button className='btnCheck bg-[#DBD9EE] w-[40px] h-[40px] '><img className='m-auto' src="/src/pages/lutfullo/image/Book Mark.png" alt="" /></button>
            </div>
          </div>
          </div>
          </div>
        </div>
        <div className="item2 w-[395px] h-[297px]">
        <div className="topItem2 w-[395px] h-[176px]">
            <img className='w-[100%]' src="/src/pages/lutfullo/image/img1.png" alt="" />
          </div>
          <div className="downItem2">
          <div className="flexMlItem2 ml-[24px]">
          <button className=' btnHealth bg-[#F7EDD0] text-[#DAA31A] w-[65px] h-[24px]'>{t("Healthy")}</button>
          <p className='text-[25px] font-bold text-[#323142]'>{t("The Chicken King")}</p>
          <div className="downFlex flex mt-[10px]">
            <div className="div23min">
            <p className='text-[#8E97A6] text-[19px]'>24min •</p>
            </div>
            <div className="divStar">
            <img className='ml-[20px] ' src="/src/pages/lutfullo/image/Star.png" alt="" />
            </div>
            <div className="div48 ml-[5px] ">
            <p className='text-[#8E97A6] text-[19px]'>4.8</p>
            </div>
            <div className="btnDivCheck ml-[155px] mt-[-12px]">
            <button className='btnCheck bg-[#DBD9EE] w-[40px] h-[40px] '><img className='m-auto' src="/src/pages/lutfullo/image/Book Mark.png" alt="" /></button>
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>
      
      
      <div className="textCont2 flex mt-[100px]">
        <div className="text2Flex flex ml-[80px]">
          <p className='text-[35px] text-[#323142 font-bold'>Our Top </p>
          <p className='text-[#6C5FBC] text-[35px] font-bold ml-[10px]'> Dishes</p>
        </div>
        <div className="rightText2 ml-[1000px] mt-[10px]">
            <p className='text-[20px] text-[#ACADB9] font-bold'>View All <ArrowForwardIcon/> </p>
        </div>
      </div>

      <div className="container3 flex justify-around mt-[60px]">
        <div className="item3 w-[224px] h-[410px] ">
          <div className="like ml-[180px] mt-[5px]">
          <FavoriteIcon/> 
          </div>
          <div className="foodImg">
            <img className='m-auto' src="/src/pages/lutfullo/image/f1.png" alt="" />
          </div>
          <div className="downItem2">
          <div className="flexMlItem2 ml-[24px]">
          <button className=' btnHealth bg-[#F7EDD0] text-[#DAA31A] w-[65px] h-[24px]'>{t("Healthy")}</button>
          <p className='text-[25px] font-bold text-[#323142]'>{t("Swe Dishes")}</p>
          <div className="downFlex flex mt-[10px]">
            <div className="div23min">
            <p className='text-[#8E97A6] text-[19px]'>24min •</p>
            </div>
            <div className="divStar">
            <img className='ml-[20px] ' src="/src/pages/lutfullo/image/Star.png" alt="" />
            </div>
            <div className="div48 ml-[5px] ">
            <p className='text-[#8E97A6] text-[19px]'>4.8</p>
            </div> 
          </div>
          </div>
          <div className="dolarDiv flex ml-[22px] mt-[5px]">
            <div className="div12 flex">
              <p className='text-[25px] text-[#323142] font-bold'>$12</p>
              <p className='text-[18px] text-[#8E97A6] font-bold mt-[9px] ml-[3px]'>.99</p>
            </div>
            <div className="plusDiv ml-[35px]">
              <button className='btnPlus bg-[#323142] text-white font-bold w-[43px] h-[39px] '><AddIcon/></button>
            </div>
          </div>
          </div>
        </div>
        <div className="item3 w-[224px] h-[410px]">
        <div className="like ml-[180px] mt-[5px]">
          <FavoriteIcon/> 
          </div>
          <div className="foodImg">
            <img className='m-auto' src="/src/pages/lutfullo/image/f2.png" alt="" />
          </div>
          <div className="downItem2 mt-[23px]">
          <div className="flexMlItem2 ml-[24px]">
          <button className=' btnHealth bg-[#F7C5BA] text-[#FB471D] w-[65px] h-[24px]'>Trending</button>
          <p className='text-[25px] font-bold text-[#323142]'>{t("Swe Dishes")}</p>
          <div className="downFlex flex mt-[10px]">
            <div className="div23min">
            <p className='text-[#8E97A6] text-[19px]'>34min •</p>
            </div>
            <div className="divStar">
            <img className='ml-[20px] ' src="/src/pages/lutfullo/image/Star.png" alt="" />
            </div>
            <div className="div48 ml-[5px] ">
            <p className='text-[#8E97A6] text-[19px]'>4.9</p>
            </div> 
          </div>
          </div>
          <div className="dolarDiv flex ml-[22px] mt-[5px]">
            <div className="div12 flex">
              <p className='text-[25px] text-[#323142] font-bold'>$19</p>
              <p className='text-[18px] text-[#8E97A6] font-bold mt-[9px] ml-[3px]'>.99</p>
            </div>
            <div className="plusDiv ml-[35px]">
              <button className='btnPlus bg-[#323142] text-white font-bold w-[43px] h-[39px] '><AddIcon/></button>
            </div>
          </div>
          </div>
        </div>
        <div className="item3 w-[224px] h-[410px] ">
        <div className="like ml-[180px] mt-[5px]">
          <FavoriteIcon/> 
          </div>
          <div className="foodImg">
            <img className='m-auto' src="/src/pages/lutfullo/image/f3.png" alt="" />
          </div>
          <div className="downItem2 mt-[23px]">
          <div className="flexMlItem2 ml-[24px]">
          <button className=' btnHealth bg-[#33AC64] text-[lightgreen] w-[65px] h-[24px]'>Trending</button>
          <p className='text-[25px] font-bold text-[#323142]'>{t("Swe Dishes")}</p>
          <div className="downFlex flex mt-[10px]">
            <div className="div23min">
            <p className='text-[#8E97A6] text-[19px]'>34min •</p>
            </div>
            <div className="divStar">
            <img className='ml-[20px] ' src="/src/pages/lutfullo/image/Star.png" alt="" />
            </div>
            <div className="div48 ml-[5px] ">
            <p className='text-[#8E97A6] text-[19px]'>4.9</p>
            </div> 
          </div>
          </div>
          <div className="dolarDiv flex ml-[22px] mt-[5px]">
            <div className="div12 flex">
              <p className='text-[25px] text-[#323142] font-bold'>$19</p>
              <p className='text-[18px] text-[#8E97A6] font-bold mt-[9px] ml-[3px]'>.99</p>
            </div>
            <div className="plusDiv ml-[35px]">
              <button className='btnPlus bg-[#323142] text-white font-bold w-[43px] h-[39px] '><AddIcon/></button>
            </div>
          </div>
          </div>
        
        </div>
        <div className="item3 w-[224px] h-[410px] ">
        <div className="like ml-[180px] mt-[5px]">
          <FavoriteIcon/> 
          </div>
          <div className="foodImg">
            <img className='m-auto' src="/src/pages/lutfullo/image/f1.png" alt="" />
          </div>
          <div className="downItem2">
          <div className="flexMlItem2 ml-[24px]">
          <button className=' btnHealth bg-[#F7EDD0] text-[#DAA31A] w-[65px] h-[24px]'>{t("Healthy")}</button>
          <p className='text-[25px] font-bold text-[#323142]'>{t("Swe Dishes")}</p>
          <div className="downFlex flex mt-[10px]">
            <div className="div23min">
            <p className='text-[#8E97A6] text-[19px]'>24min •</p>
            </div>
            <div className="divStar">
            <img className='ml-[20px] ' src="/src/pages/lutfullo/image/Star.png" alt="" />
            </div>
            <div className="div48 ml-[5px] ">
            <p className='text-[#8E97A6] text-[19px]'>4.8</p>
            </div> 
          </div>
          </div>
          <div className="dolarDiv flex ml-[22px] mt-[5px]">
            <div className="div12 flex">
              <p className='text-[25px] text-[#323142] font-bold'>$12</p>
              <p className='text-[18px] text-[#8E97A6] font-bold mt-[9px] ml-[3px]'>.99</p>
            </div>
            <div className="plusDiv ml-[35px]">
              <button className='btnPlus bg-[#323142] text-white font-bold w-[43px] h-[39px] '><AddIcon/></button>
            </div>
          </div>
          </div>
        </div>
        <div className="item3 w-[224px] h-[410px] ">
        <div className="like ml-[180px] mt-[5px]">
          <FavoriteIcon/> 
          </div>
          <div className="foodImg">
            <img className='m-auto' src="/src/pages/lutfullo/image/f2.png" alt="" />
          </div>
          <div className="downItem2 mt-[23px]">
          <div className="flexMlItem2 ml-[24px]">
          <button className=' btnHealth bg-[#F7C5BA] text-[#FB471D] w-[65px] h-[24px]'>Trending</button>
          <p className='text-[25px] font-bold text-[#323142]'>{t("Swe Dishes")}</p>
          <div className="downFlex flex mt-[10px]">
            <div className="div23min">
            <p className='text-[#8E97A6] text-[19px]'>34min •</p>
            </div>
            <div className="divStar">
            <img className='ml-[20px] ' src="/src/pages/lutfullo/image/Star.png" alt="" />
            </div>
            <div className="div48 ml-[5px] ">
            <p className='text-[#8E97A6] text-[19px]'>4.9</p>
            </div> 
          </div>
          </div>
          <div className="dolarDiv flex ml-[22px] mt-[5px]">
            <div className="div12 flex">
              <p className='text-[25px] text-[#323142] font-bold'>$19</p>
              <p className='text-[18px] text-[#8E97A6] font-bold mt-[9px] ml-[3px]'>.99</p>
            </div>
            <div className="plusDiv ml-[35px]">
              <button className='btnPlus bg-[#323142] text-white font-bold w-[43px] h-[39px] '><AddIcon/></button>
            </div>
          </div>
          </div>
        </div>
      </div>
      <hr className='bg-[#CBCBCB] mt-[110px]' />  

      <div className="textZb flex justify-center ">
        <p className='text-[#323142] text-[45px] font-bold '>{t("Frequently Asked")} </p>
      </div>
      <div className="textZb1 flex justify-center">
        <p className='text-[#6C5FBC] text-[45px] font-bold '>{t("Questions")}</p>
      </div>

      <div className='w-[1152px] m-auto mt-[50px]'>
      <Accordion>
        <AccordionSummary
          expandIcon={<FavoriteIcon/>}

          aria-controls="panel1-content"
          id="panel1-header"
        >
{t("How long does delivery take?   ")}       </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<FavoriteIcon/>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
How Does It Work ?        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<FavoriteIcon/>}

          aria-controls="panel3-content"
          id="panel3-header"
        >
How does your food delivery service work?        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion>
    </div>

      <div className="finish h-[345px] bg-[#EAEAEA] mt-[150px] ">
      <div className="topFinish flex justify-around">
        <div className="leftTL flex">
          <div className="imgEarly mr-[20px]">
          <img src="/src/pages/lutfullo/image/Logo.png" alt="" />
          </div>
          <div className="early">
          <p className='text-[#6C5FBC] text-[28px] font-bold'>eatly</p>
        </div>
        </div>
       
        <div className="rightTR">
        <div className="textrightTR flex">
          <p className='text-[#999999] text-[18px] mr-[30px]'>{t("Blog")}</p>
          <p className='text-[#999999] text-[18px] mr-[30px]'>{t("Pricing")}</p>
          <p className='text-[#999999] text-[18px] mr-[30px]'>{t("About Us")}</p>
          <p className='text-[#999999] text-[18px] mr-[30px]'>{t("Contact")}</p>
        </div>
        </div>
      </div>
      <div className="line h-[1px] bg-[#818181] w-[1245px] flex justify-center ml-[150px] mt-[20px]"></div>
      <div className="diwnifnsfsd flex justify-around my-[100px]">
        <div className="fjee">
            <p className='text-[17px] text-[#999999]'>© 2023 EATLY All Rights Reserved.</p>
        </div>
        <div className="dahdak">
          <img src="/src/pages/lutfullo/image/Socials.png" alt="" />
        </div>
      </div>
      </div>

    </div>
  )
}

export default Lut