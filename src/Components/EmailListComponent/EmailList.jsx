import React from "react";
import "./EmailList.css";
import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  KeyboardHide,
  More,
  Redo,
  Settings,
} from "@mui/icons-material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

function EmailList() {
  return (
    <div className='emailList'>
      <div className='emailList__settings'>
        <div className='emailList__settingsLeft'>
          <CheckBoxOutlineBlankIcon />
          <ArrowDropDown />
          <Redo />
          <More />
        </div>
        <div className='emailList__settingsRight'>
          <ChevronLeft />
          <ChevronRight />
          <KeyboardHide />
          <Settings />
        </div>
      </div>
      <div className='emailList__sections'></div>
    </div>
  );
}

export default EmailList;
