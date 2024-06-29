import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link, Outlet, useLocation } from 'react-router-dom'
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from '@mui/material';

const Layout = () => {


  let {pathname} = useLocation();

  const { t, i18n } = useTranslation();
  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }


  return (
    <div>

<header className="w-[100%] flex justify-around items-center pt-[20px]">
        <div>
          <img src="src/assets/img/Logo.svg" alt="" />
        </div>

        <div className="w-[50%] flex justify-around ">
          <Link
            to={"/"}
            className={
              pathname == "/"
                ? "text-[#6C5FBC] text-[18px] font-medium"
                : "text-[#606060] text-[18px] font-medium"
            }
          >
            Home
          </Link>
          <Link
            to={"/abubakrshoh"}
            className={
              pathname == "/abubakrshoh"
                ? "text-[#6C5FBC] text-[18px] font-medium"
                : "text-[#606060] text-[18px] font-medium"
            }
          >
            Abubakrshoh
          </Link>
          <Link
            to={"/bilol"}
            className={
              pathname == "/bilol"
                ? "text-[#6C5FBC] text-[18px] font-medium"
                : "text-[#606060] text-[18px] font-medium"
            }
          >
            Bilol
          </Link>
          <Link
            to={"/faruh"}
            className={
              pathname == "/faruh"
                ? "text-[#6C5FBC] text-[18px] font-medium"
                : "text-[#606060] text-[18px] font-medium"
            }
          >
            Faruh
          </Link>
          <Link
            to={"/ismoil"}
            className={
              pathname == "/ismoil"
                ? "text-[#6C5FBC] text-[18px] font-medium"
                : "text-[#606060] text-[18px] font-medium"
            }
          >
            Ismoil
          </Link>
          <Link
            to={"/lutfullo"}
            className={
              pathname == "/lutfullo"
                ? "text-[#6C5FBC] text-[18px] font-medium"
                : "text-[#606060] text-[18px] font-medium"
            }
          >
            Lutfullo
          </Link>
          <Link
            to={"/maryam"}
            className={
              pathname == "/maryam"
                ? "text-[#6C5FBC] text-[18px] font-medium"
                : "text-[#606060] text-[18px] font-medium"
            }
          >
            Maryam
          </Link>
          <Link
            to={"/safialloh"}
            className={
              pathname == "/safialloh"
                ? "text-[#6C5FBC] text-[18px] font-medium"
                : "text-[#606060] text-[18px] font-medium"
            }
          >
            Safialloh
          </Link>
          <Link
            to={"/umar"}
            className={
              pathname == "/umar"
                ? "text-[#6C5FBC] text-[18px] font-medium"
                : "text-[#606060] text-[18px] font-medium"
            }
          >
            Umar
          </Link>
        </div>

        <div>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Language
            </InputLabel>
            <Select
              onChange={(e) => TranslateClick(e.target.value)}
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              label="Age"
            >
              <MenuItem value={"en"}>EN</MenuItem>
              <MenuItem value={"ru"}>RU</MenuItem>
              <MenuItem value={"tj"}>TJ</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="flex gap-[20px]">
          <Button>
            <Link
              to={"/login"}
              className={
                pathname == "/login"
                  ? "text-[#6C5FBC] text-[18px] font-medium"
                  : "text-[#606060] text-[18px] font-medium"
              }
            >
              {t("Login")}
            </Link>
          </Button>
          <Button sx={{backgroundColor:"#6C5FBC", width:"150px", height:"60px", borderRadius:"20px", color:"white", fontWeight:"500"}}><Link
              to={"/singUp"}
              className={
                pathname == "/singUp"
                  ? "text-[#ffffff] text-[18px] font-medium"
                  : "text-[#ffffff] text-[18px] font-medium"
              }
            >
              {t("Sing Up")}
            </Link></Button>
        </div>
      </header>

        <main>
        <Outlet/>
        </main>
  
    </div>
  )
}

export default Layout