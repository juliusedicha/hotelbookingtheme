import React from "react";

import { NavLink } from "react-router-dom";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import PieChartIcon from "@mui/icons-material/PieChart";
import HouseIcon from "@mui/icons-material/House";
import "./Sidebar.css";
import user1 from "./user1.avif";
import user2 from "./user2.jpg";
import user3 from "./user3.jpg";
import user4 from "./user 4.jpg";
import user5 from "./user5.jpg";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top-content">
        <div className="profile">
          <img src="profile.jpg" alt="Profile" />
          <span className="profile-name">ALEX JOHNSON</span>
          <span className="profile-email">alex.johnson@gmail.com</span>
        </div>
      </div>
      <div className="bottom-content">
        <ul>
          <li className="sidebar-item">
            <NavLink to="/dashboard" activeClassName="active">
              <HouseIcon />
              <span className="text">DASHBOARD</span>
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink to="/flight" activeClassName="active">
              <AirplanemodeActiveIcon />
              <span className="text">FLIGHTS</span>
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink to="/wallet" activeClassName="active">
              <AccountBalanceWalletIcon />
              <span className="text">WALLET</span>
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink to="/report" activeClassName="active">
              <ReceiptLongIcon />
              <span className="text">REPORTS</span>
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink to="/statistic" activeClassName="active">
              <PieChartIcon />
              <span className="text">STATISTICS</span>
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink to="/setting" activeClassName="active">
              <SettingsIcon />
              <span className="text">SETTING</span>
            </NavLink>
          </li>
        </ul>
        <div className="active-users">
          <h5>ACTIVE USERS</h5>
          <div className="user-images">
            <img src={user1} alt="User 1" className="user-image1" />
            <img src={user2} alt="User 3" className="user-image2" />
            <img src={user3} alt="User 4" className="user-image3" />
            <img src={user4} alt="User 4" className="user-image3" />
            <img src={user5} alt="User 4" className="user-image3" />

            <div className="user-count-wrapper">
              <p className="user-count">76+</p>
            </div>
          </div>
        </div>
      </div>

      <img src="world-map.png" alt="Globe" className="globe-image" />
    </div>
  );
}

export default Sidebar;
