import React from "react";
import "./Mail.css";
import {
  ArrowBack,
  CheckCircle,
  Delete,
  Email,
  Error,
  ExitToApp,
  LabelImportant,
  MoreVert,
  MoveToInbox,
  Print,
  UnfoldMore,
  WatchLater,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectOpenMail } from "../../features/mailSlice";

function Mail() {
  const navigate = useNavigate();
  const selectedMail = useSelector(selectOpenMail);

  return (
    <div className='mail'>
      <div className='mail__tools'>
        <div className='mail__toolsLeft'>
          <div onClick={() => navigate("/")} className='mail__buttonWrapper'>
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
        <div className='mail__toolsRight'>
          <div className='mail__buttonWrapper'>
            <UnfoldMore />
          </div>
          <div className='mail__buttonWrapper'>
            <Print />
          </div>
          <div className='mail__buttonWrapper'>
            <ExitToApp />
          </div>
        </div>
      </div>
      <div className='mail__body'>
        <div className='mail__bodyHeader'>
          <h2>{selectedMail?.subject}</h2>
          <LabelImportant className='mail__important' />
          <p>{selectedMail?.title}</p>
          <p className='mail__time'>{selectedMail?.time}</p>
        </div>
        <div className='mail__message'>
          <p>{selectedMail?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Mail;
