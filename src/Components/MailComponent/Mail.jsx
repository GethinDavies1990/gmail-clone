import React from "react";
import "./Mail.css";
import {
  ArrowBack,
  CheckCircle,
  Delete,
  Email,
  Error,
  LabelImportant,
  MoreVert,
  MoveToInbox,
  WatchLater,
} from "@mui/icons-material";

function Mail() {
  return (
    <div className='mail'>
      <div className='mail__tools'>
        <div className='mail__toolsLeft'>
          <div className='mail__buttonWrapper'>
            <ArrowBack />
          </div>
          <div className='mail__buttonWrapper'>
            <MoveToInbox />
          </div>
          <div className='mail__buttonWrapper'>
            <Error />
          </div>
          <div className='mail__buttonWrapper'>
            <Delete />
          </div>
          <div className='mail__buttonWrapper'>
            <Email />
          </div>
          <div className='mail__buttonWrapper'>
            <WatchLater />
          </div>
          <div className='mail__buttonWrapper'>
            <CheckCircle />
          </div>
          <div className='mail__buttonWrapper'>
            <LabelImportant />
          </div>
          <div className='mail__buttonWrapper'>
            <MoreVert />
          </div>
        </div>
        <div className='mail__tollsRight'></div>
      </div>
      <h1>What up </h1>
    </div>
  );
}

export default Mail;
