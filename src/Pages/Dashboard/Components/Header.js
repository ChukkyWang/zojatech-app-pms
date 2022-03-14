import React from "react";
import NAV_ICON from "../../../components/Assets/Images/nav-icon.svg";
import { BsSearch, BsFillBellFill, BsFillPersonFill } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";

function Header() {
  return (
    <header>
      <div className="header_props">
        <div className="controls">
          <img src={NAV_ICON} alt="nav_icon" />
          <span className="search_icon">
            <BsSearch />
          </span>
          <h4>Search</h4>
        </div>
      </div>
      <div className="user_controls">
        <span className="bell">
          <BsFillBellFill />
        </span>
        <span className="not_dot">
          <GoPrimitiveDot />
        </span>
        <span className="person">
          <BsFillPersonFill />
        </span>
      </div>
    </header>
  );
}

export default Header;
