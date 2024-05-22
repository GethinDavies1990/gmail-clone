import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import whailLogo from "../../whail.png";
import { useSelector } from "react-redux";
import { selectUser, logout } from "../../features/userSlice";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  console.log(user.photoUrl);

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div className='header'>
      <div className='header__left'>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src={whailLogo} alt='gmail-logo' />
      </div>
      <div className='header__middle'>
        <SearchIcon />
        <input type='text' placeholder='Search mail' />
        <ArrowDropDownIcon className='header__inputCaret' />
      </div>
      <div className='header__right'>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar
          onClick={signOut}
          src={user?.photoUrl}
          className='header__rightAvatar'
          alt='user avatar'
        />
      </div>
    </div>
  );
}

export default Header;
