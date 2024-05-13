import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src='https://image.similarpng.com/very-thumbnail/2020/12/Gmail-logo-design-on-transparent-background-PNG.png'
          alt='gmail-logo'
        ></img>
      </div>
      <div className='header__middle'>
        <SearchIcon />
        <input type='text' placeholder='Search mail' />
        <ArrowDropDownIcon className='header__inputCaret' />
      </div>
      <div className='header__right'></div>
    </div>
  );
}

export default Header;
