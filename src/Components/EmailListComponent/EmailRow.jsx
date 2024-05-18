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
      <div className='emailRow__message'></div>

      <div className='emailRow__title'></div>
      <div className='emailRow__description'></div>
    </div>
  );
}

export default EmailRow;
