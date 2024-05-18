import React from "react";
import "./EmailList.css";
import Section from "../MailComponent/Section";
import EmailRow from "./EmailRow";
import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  Inbox,
  KeyboardHide,
  LocalOffer,
  More,
  People,
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
      <div className='emailList__sections'>
        <Section Icon={Inbox} title='Primary' color='#5fa8d3' selected />
        <Section Icon={People} title='Social' color='pink' selected />
        <Section
          Icon={LocalOffer}
          title='Promotions'
          color='lightgreen'
          selected
        />
      </div>
      <div className='emailList__list'>
        <EmailRow />
      </div>
    </div>
  );
}

export default EmailList;
