import React from "react";
import "./Sidebar.css";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import InboxIcon from "@mui/icons-material/Inbox";
import SidebarOption from "./SidebarOption";
import StarIcon from "@mui/icons-material/Star";
import {
  AccessTime,
  ExpandMore,
  LabelImportant,
  NearMe,
  Note,
} from "@mui/icons-material";

function Sidebar() {
  return (
    <div className='sidebar'>
      <Button
        startIcon={<AddIcon fontSize='large' />}
        className='sidebar__compose'
      >
        Compose
      </Button>
      <SidebarOption
        Icon={InboxIcon}
        title='Inbox'
        number={54}
        selected='true'
      />
      <SidebarOption Icon={StarIcon} title='Starred' number={54} />
      <SidebarOption Icon={AccessTime} title='Snoozed' number={54} />
      <SidebarOption Icon={LabelImportant} title='Important' number={54} />
      <SidebarOption Icon={NearMe} title='Sent' number={54} />
      <SidebarOption Icon={Note} title='Drafts' number={54} />
      <SidebarOption Icon={ExpandMore} title='More' number={54} />
    </div>
  );
}

export default Sidebar;
