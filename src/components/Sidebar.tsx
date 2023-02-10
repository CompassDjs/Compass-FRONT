import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { RiServerFill } from "react-icons/ri";
import { FaHashtag, FaUserAlt, FaUserAltSlash } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { Pacman } from "src/assets/pacman/pacman";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";
import "../styles/Sidebar.css";

export const Sidebar = ({
  userId = "",
  guildId = "",
  sidebarState = true,
  changeSidebarState = () => {},
}) => {
  let navigate = useNavigate();
  const [isFooterOpen, setFooterOpen] = useState(false);
  const [pacman, setPacman] = useState(false);
  const [pacmanEasterEgg, setPacmanEasterEgg] = useState(0);

  const navBar = [
    {
      name: "Dashboard",
      path: "/",
      icon: RxDashboard,
      current: true,
    },
    {
      name: "Server",
      path: "/server",
      icon: RiServerFill,
      current: false,
    },
    {
      name: "Channels",
      path: "/channels",
      icon: FaHashtag,
      current: false,
    },
    {
      name: "Members",
      path: "/members",
      icon: HiUsers,
      current: false,
    },
  ];
  const navFooter = [
    {
      name: "Account",
      icon: FaUserAlt,
    },
    {
      name: "Logout",
      icon: FaUserAltSlash,
    },
  ];

  return (
    <article className={`${sidebarState ? "sidebar-open" : "sidebar-closed"}`}>
      <header className="sidebar-header">
        <div className="sidebar-logo-container">
          <a href="#">
            <div
              className="pacman"
              style={
                !sidebarState && pacman && pacmanEasterEgg === 5
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              <Pacman />
            </div>
            <img
              style={
                !sidebarState && pacman && pacmanEasterEgg === 5
                  ? { display: "none" }
                  : { display: "block" }
              }
              className="sidebar-logo"
              src="https://i.imgur.com/gaBPSWO.png"
              alt="Compass logo"
              onClick={() => {
                setPacmanEasterEgg(pacmanEasterEgg + 1);
                if (pacmanEasterEgg === 4)
                  setTimeout(() => setPacmanEasterEgg(0), 3000);
              }}
            />
          </a>
          <h1 style={sidebarState ? { display: "block" } : { display: "none" }}>
            Compass
          </h1>
        </div>
        <button
          className="sidebar-button"
          onClick={() => {
            changeSidebarState();
            setPacman(!pacman);
          }}
        >
          <svg
            width="13"
            height="8"
            viewBox="0 0 13 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d={
                sidebarState
                  ? "M3.99192 0.239902L0.830859 3.20495C0.788138 3.24502 0.748735 3.28938 0.713134 3.33746C0.388046 3.77656 0.440753 4.42916 0.830859 4.79507L3.99192 7.76012C4.15716 7.91512 4.36544 8 4.58054 8C5.08834 8 5.5 7.53664 5.5 6.96506V1.03496C5.5 0.792853 5.42459 0.558406 5.28689 0.372412C4.9618 -0.0666874 4.38202 -0.126014 3.99192 0.239902ZM10.9919 0.239902L7.83086 3.20495C7.78814 3.24502 7.74873 3.28938 7.71313 3.33746C7.38805 3.77656 7.44075 4.42916 7.83086 4.79507L10.9919 7.76012C11.1572 7.91512 11.3654 8 11.5805 8C12.0883 8 12.5 7.53664 12.5 6.96506V1.03496C12.5 0.792853 12.4246 0.558406 12.2869 0.372412C11.9618 -0.0666874 11.382 -0.126014 10.9919 0.239902Z"
                  : "M9.00808 0.239902L12.1691 3.20495C12.2119 3.24502 12.2513 3.28938 12.2869 3.33746C12.612 3.77656 12.5592 4.42916 12.1691 4.79507L9.00808 7.76012C8.84284 7.91512 8.63456 8 8.41946 8C7.91166 8 7.5 7.53664 7.5 6.96506V1.03496C7.5 0.792853 7.57541 0.558406 7.71311 0.372412C8.0382 -0.0666874 8.61798 -0.126014 9.00808 0.239902ZM2.00808 0.239902L5.16914 3.20495C5.21186 3.24502 5.25127 3.28938 5.28687 3.33746C5.61195 3.77656 5.55925 4.42916 5.16914 4.79507L2.00808 7.76012C1.84284 7.91512 1.63455 8 1.41946 8C0.911656 8 0.5 7.53664 0.5 6.96506V1.03496C0.5 0.792853 0.575411 0.558406 0.713112 0.372412C1.0382 -0.0666874 1.61798 -0.126014 2.00808 0.239902Z"
              }
              fill="#e3e3e3"
              fillOpacity="1"
            ></path>
          </svg>
        </button>
      </header>
      <nav className="sidebar-nav">
        <div className="sidebar-nav-items">
          {navBar.map((item) => (
            <div className="sidebar-nav-item" key={item.name}>
              <div
                onClick={() => {
                  navigate(item.path);
                }}
                className={`${
                  userId ? "sidebar-nav-link" : "sidebar-nav-link-off"
                }`}
              >
                <span className="sidebar-nav-icon">
                  <item.icon />
                </span>
                <span
                  className="sidebar-nav-text"
                  style={
                    sidebarState ? { display: "block" } : { display: "none" }
                  }
                >
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div
          className="sidebar-footer"
          style={sidebarState ? { display: "block" } : { display: "none" }}
        >
          <div>
            <div
              className="sidebar-footer-promo"
              style={
                isFooterOpen
                  ? { opacity: 0, visibility: "hidden" }
                  : { opacity: 1, visibility: "visible" }
              }
            >
              <h2 className="sidebar-footer-promo-title">Compass</h2>
              <div style={{ marginTop: "15px" }}></div>
              <p className="sidebar-footer-promo-text">
                Plenty of stats and charts for your discord server
              </p>
              <div style={{ marginTop: "15px" }}></div>
              <div>
                <button className="sidebar-footer-promo-button">
                  connect me
                </button>
              </div>
            </div>
            <div style={{ marginTop: "15px" }}></div>
            <div className="sidebar-footer-button">
              <div
                className="sidebar-footer-button-box"
                onClick={() => {
                  setFooterOpen(!isFooterOpen);
                }}
              >
                <div className="sidebar-footer-button-box-content">
                  <div className="sidebar-footer-button-box-content-icon">
                    <FaUserAlt />
                  </div>
                  <div className="sidebar-footer-button-box-content-text">
                    <div className="sidebar-footer-button-box-content-text-main">
                      <strong>{userId ? "Pexilo" : "Login"}</strong>
                    </div>
                    <p className="sidebar-footer-button-box-content-text-sub">
                      {userId ? "Role" : ""}
                    </p>
                  </div>
                </div>
                <div className="sidebar-footer-button-box-content-arrow">
                  {isFooterOpen ? (
                    <IoIosArrowDropupCircle />
                  ) : (
                    <IoIosArrowDropdownCircle />
                  )}
                </div>
              </div>
              <div
                className="sidebar-footer-button-dropdown"
                style={
                  isFooterOpen
                    ? { opacity: 1, visibility: "visible" }
                    : { opacity: 0, visibility: "hidden" }
                }
              >
                <div className="sidebar-footer-button-dropdown-content">
                  {navFooter.map((item) => (
                    <div
                      onClick={() => {
                        navigate("/" + item.name, { replace: true });
                      }}
                      className="sidebar-footer-button-dropdown-content-item"
                    >
                      <div className="sidebar-footer-button-dropdown-content-item-text">
                        <span>{item.name}</span>
                      </div>
                      <div className="sidebar-footer-button-dropdown-content-item-icon">
                        <item.icon />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </article>
  );
};
