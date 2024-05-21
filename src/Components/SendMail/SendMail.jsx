import React from "react";
import "./SendMail.css";
import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";

function SendMail() {
  return (
    <div className='sendMail'>
      <div className='sendMail__header'>
        <h3>New Message</h3>
        <Close className='sendMail__close' />
      </div>
      <form>
        <input type='text' placeholder='To' />
        <input type='text' placeholder='Subject' />
        <input
          type='text'
          placeholder='Message..'
          className='sendMail__message'
        />
        <div className='sendMail__options'>
          <Button
            className='sendMail__send'
            variant='contained'
            color='primary'
            type='submit'
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
