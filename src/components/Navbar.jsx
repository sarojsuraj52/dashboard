import React from "react";
import "../styles/Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import profile from "../assets/profile.png";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="search-bar-container">
        <SearchIcon className="search-icon" />
        <input type="text" placeholder="Search" />
      </div>

      <div className="navbar-tool">
        <div className="message">
          <MailOutlineIcon />
        </div>
        <div className="setting">
          <SettingsOutlinedIcon />
        </div>
        <div className="notification">
          <NotificationsNoneOutlinedIcon />
        </div>
        <div className="account">
          <a href="https://reactjs.org" target="_blank">
            <img src={profile} className="profile" alt="profile image" style={{height:'35px', borderRadius:'100%'}} />
          </a>
        </div>
      </div>
    </div>
  );
}
