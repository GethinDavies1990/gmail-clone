import React from "react";
import "./EmailRow.css";
import {
  CheckBoxOutlineBlank,
  LabelImportantOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";

function EmailRow({ title, subject, description, time, id }) {
  return (
    <div className='emailRow'>
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
          <span className='emailRow__description'>{description}</span>
        </h4>
      </div>
      <div className='emailRow__description'>{time}</div>
    </div>
  );
}

export default EmailRow;
