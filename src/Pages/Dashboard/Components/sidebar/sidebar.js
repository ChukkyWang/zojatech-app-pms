import React, { useState } from "react";
import LOGO from "../../../../components/Assets/Images/logo.svg";
import { NavLink, Link, useLocation } from "react-router-dom";
import { HiChevronRight, HiChevronDown } from "react-icons/hi";
import { IoSettingsOutline, IoPersonOutline } from "react-icons/io5";
import "./sidebar.css";
import { DASHBOARD, GENERAL, SETTINGS, SYSTEM } from "../../../../utils/routes";

function Sidebar({ mobile }) {
  const sideMenu = [
    {
      iconIMG: <IoPersonOutline />,
      iconAlt: "I",
      iconTag: "Dashboard",
      iconLink: DASHBOARD,
      linkEnd: true,
    },

    {
      iconIMG: <IoSettingsOutline />,
      iconAlt: "I",
      iconTag: "Settings",
      iconLink: SETTINGS,
      linkEnd: "false",
      subLinks: [
        {
          sublink: "System Settings",
          subUrl: SETTINGS,
        },
        {
          sublink: "General Setting",
          subUrl: SETTINGS + "/" + GENERAL,
        },
      ],
    },
  ];

  return (
    <div className={`sidebar_component ${mobile}`}>
      <div className="dashboard-main-props sidebar-rack">
        <div className="dashboard_fixed">
          <div className="background-color">
            <img src={LOGO} alt="PMS" />
          </div>
          <div className="sidebar-names">
            {sideMenu?.map((sideItem) => (
              <NavLinks
                iconLink={sideItem.iconLink}
                iconTag={sideItem.iconTag}
                linkEnd={sideItem.linkEnd}
                iconIMG={sideItem.iconIMG}
                sideItem={sideItem}
                key={Math.random() * 1000}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

function NavLinks({ iconLink, iconTag, linkEnd, iconIMG, sideItem }) {
  const [mouseOver, setMouseOver] = useState(false);
  const location = useLocation();
  return (
    <div style={{ cursor: "pointer" }}>
      <NavLink
        exact="true"
        as={Link}
        to={iconLink}
        key={Math?.random()}
        className={(navData) =>
          navData.isActive ? "nav_is_active sideBar-Items" : "sideBar-Items"
        }
        end
        onClick={() => setMouseOver(!mouseOver)}
      >
        <p className="iconIMG">{iconIMG}</p>
        <p className="iconTag-SideItem">{iconTag}</p>
        <p className="arrow">
          {sideItem?.subLinks &&
            (mouseOver || location.pathname.includes(iconLink) ? (
              <HiChevronDown />
            ) : (
              <HiChevronRight />
            ))}
        </p>
      </NavLink>
      {(mouseOver || location.pathname.includes(iconLink)) && (
        <div className="sublink">
          {sideItem?.subLinks?.map((sublink) => (
            <NavLink
              exact="true"
              as={Link}
              to={sublink?.subUrl}
              key={Math.random() * 1000}
              className={(navData) =>
                navData.isActive
                  ? "sidebar-sublink nav_is_active_sub "
                  : "sidebar-sublink"
              }
              end
            >
              {sublink?.sublink}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}
