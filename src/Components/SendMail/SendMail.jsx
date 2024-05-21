import React from "react";
import "./SendMail.css";
import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";

function SendMail() {
  const { register, handleSubmit, watch, errors } = useForm();

  return (
    <div className='sendMail'>
      <div className='sendMail__header'>
        <h3>New Message</h3>
        <Close className='sendMail__close' />
      </div>
      <form>
        <input name='to' type='text' placeholder='To' />
        <input name='subject' type='text' placeholder='Subject' />
        <input
          name='message'
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
