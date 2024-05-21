import React from "react";
import "./EmailRow.css";
import {
  CheckBoxOutlineBlank,
  LabelImportantOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { selectMail } from "../../features/mailSlice";
import { useDispatch } from "react-redux";

function EmailRow({ title, subject, description, time, id }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(selectMail({ title, subject, description, time, id }));
    navigate("/mail");
  };

  return (
    <div onClick={openMail} className='emailRow'>
      <div className='emailRow__options'>
        <CheckBoxOutlineBlank />
        <StarBorderOutlined />
        <LabelImportantOutlined />
      </div>
      <div className='emailRow__title'>
        <h3 className='emailRow__title'>{title}</h3>
      </div>
      <div className='emailRow__message'>
        <h4>
          {subject}
          {" - "} <span className='emailRow__description'>{description}</span>
        </h4>
      </div>
      <p className='emailRow__time'>{time}</p>
    </div>
  );
}

export default EmailRow;
