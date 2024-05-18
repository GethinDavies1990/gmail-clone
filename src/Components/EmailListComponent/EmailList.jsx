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
          <div className='emailList__settingsIcon'>
            <ArrowDropDown />
          </div>
          <div className='emailList__settingsIcon'>
            <Redo />
          </div>
          <div className='emailList__settingsIcon'>
            <More />
          </div>
        </div>
        <div className='emailList__settingsRight'>
          <div className='emailList__settingsIcon'>
            <ChevronLeft />
          </div>
          <div className='emailList__settingsIcon'>
            <ChevronRight />
          </div>
          <div className='emailList__settingsIcon'>
            <KeyboardHide />
          </div>
          <div className='emailList__settingsIcon'>
            <Settings />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailList;
