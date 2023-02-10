import React from "react";
import "../styles/Sidebar.css";

export const Sidebar = () => {
  return (
    <article className="sidebar-container">
      <header className="sidebar-header">
        <div className="sidebar-logo-container">
          <a href="/">
            <img
              className="sidebar-logo"
              src="https://i.imgur.com/gaBPSWO.png"
              alt="Ironhack logo"
            />
          </a>
          <h1>Compass</h1>
        </div>
        <button className="sidebar-button">
          <svg
            width="13"
            height="8"
            viewBox="0 0 13 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.99192 0.239902L0.830859 3.20495C0.788138 3.24502 0.748735 3.28938 0.713134 3.33746C0.388046 3.77656 0.440753 4.42916 0.830859 4.79507L3.99192 7.76012C4.15716 7.91512 4.36544 8 4.58054 8C5.08834 8 5.5 7.53664 5.5 6.96506V1.03496C5.5 0.792853 5.42459 0.558406 5.28689 0.372412C4.9618 -0.0666874 4.38202 -0.126014 3.99192 0.239902ZM10.9919 0.239902L7.83086 3.20495C7.78814 3.24502 7.74873 3.28938 7.71313 3.33746C7.38805 3.77656 7.44075 4.42916 7.83086 4.79507L10.9919 7.76012C11.1572 7.91512 11.3654 8 11.5805 8C12.0883 8 12.5 7.53664 12.5 6.96506V1.03496C12.5 0.792853 12.4246 0.558406 12.2869 0.372412C11.9618 -0.0666874 11.382 -0.126014 10.9919 0.239902Z"
              fill="#e3e3e3"
              fill-opacity="1"
            ></path>
          </svg>
        </button>
      </header>
      <nav className="sidebar-nav">
        <div className="sidebar-nav-items">
          <div className="sidebar-nav-item">
            <a href="/" className="sidebar-nav-link">
              <span className="sidebar-nav-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 12.8002C17.5523 12.8002 18 13.2479 18 13.8002V17C18 17.5523 17.5523 18 17 18H13.7463C13.194 18 12.7463 17.5523 12.7463 17V13.8002C12.7463 13.2479 13.194 12.8002 13.7463 12.8002H17ZM10.1654 6C10.7177 6 11.1654 6.44772 11.1654 7V10.1733C11.1654 10.7256 10.7177 11.1733 10.1654 11.1733H7C6.44772 11.1733 6 10.7256 6 10.1733V7C6 6.44772 6.44772 6 7 6H10.1654ZM10.1654 12.8267C10.7177 12.8267 11.1654 13.2744 11.1654 13.8267V17C11.1654 17.5523 10.7177 18 10.1654 18H7C6.44772 18 6 17.5523 6 17V13.8267C6 13.2744 6.44772 12.8267 7 12.8267H10.1654ZM17 6C17.5523 6 18 6.44772 18 7V10.1733C18 10.7256 17.5523 11.1733 17 11.1733H13.7463C13.194 11.1733 12.7463 10.7256 12.7463 10.1733V7C12.7463 6.44772 13.194 6 13.7463 6H17Z"
                    fill="#6E7072"
                    fill-opacity="0.5"
                  ></path>
                </svg>
              </span>
              <span className="sidebar-nav-text">Dashboard</span>
            </a>
          </div>
          <div className="sidebar-nav-item">
            <a href="/" className="sidebar-nav-link">
              <span className="sidebar-nav-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 12.8002C17.5523 12.8002 18 13.2479 18 13.8002V17C18 17.5523 17.5523 18 17 18H13.7463C13.194 18 12.7463 17.5523 12.7463 17V13.8002C12.7463 13.2479 13.194 12.8002 13.7463 12.8002H17ZM10.1654 6C10.7177 6 11.1654 6.44772 11.1654 7V10.1733C11.1654 10.7256 10.7177 11.1733 10.1654 11.1733H7C6.44772 11.1733 6 10.7256 6 10.1733V7C6 6.44772 6.44772 6 7 6H10.1654ZM10.1654 12.8267C10.7177 12.8267 11.1654 13.2744 11.1654 13.8267V17C11.1654 17.5523 10.7177 18 10.1654 18H7C6.44772 18 6 17.5523 6 17V13.8267C6 13.2744 6.44772 12.8267 7 12.8267H10.1654ZM17 6C17.5523 6 18 6.44772 18 7V10.1733C18 10.7256 17.5523 11.1733 17 11.1733H13.7463C13.194 11.1733 12.7463 10.7256 12.7463 10.1733V7C12.7463 6.44772 13.194 6 13.7463 6H17Z"
                    fill="#6E7072"
                    fill-opacity="0.5"
                  ></path>
                </svg>
              </span>
              <span className="sidebar-nav-text">Dashboard</span>
            </a>
          </div>
          <div className="sidebar-nav-item">
            <a href="/" className="sidebar-nav-link">
              <span className="sidebar-nav-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 12.8002C17.5523 12.8002 18 13.2479 18 13.8002V17C18 17.5523 17.5523 18 17 18H13.7463C13.194 18 12.7463 17.5523 12.7463 17V13.8002C12.7463 13.2479 13.194 12.8002 13.7463 12.8002H17ZM10.1654 6C10.7177 6 11.1654 6.44772 11.1654 7V10.1733C11.1654 10.7256 10.7177 11.1733 10.1654 11.1733H7C6.44772 11.1733 6 10.7256 6 10.1733V7C6 6.44772 6.44772 6 7 6H10.1654ZM10.1654 12.8267C10.7177 12.8267 11.1654 13.2744 11.1654 13.8267V17C11.1654 17.5523 10.7177 18 10.1654 18H7C6.44772 18 6 17.5523 6 17V13.8267C6 13.2744 6.44772 12.8267 7 12.8267H10.1654ZM17 6C17.5523 6 18 6.44772 18 7V10.1733C18 10.7256 17.5523 11.1733 17 11.1733H13.7463C13.194 11.1733 12.7463 10.7256 12.7463 10.1733V7C12.7463 6.44772 13.194 6 13.7463 6H17Z"
                    fill="#6E7072"
                    fill-opacity="0.5"
                  ></path>
                </svg>
              </span>
              <span className="sidebar-nav-text">Dashboard</span>
            </a>
          </div>
          <div className="sidebar-nav-item">
            <a href="/" className="sidebar-nav-link">
              <span className="sidebar-nav-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 12.8002C17.5523 12.8002 18 13.2479 18 13.8002V17C18 17.5523 17.5523 18 17 18H13.7463C13.194 18 12.7463 17.5523 12.7463 17V13.8002C12.7463 13.2479 13.194 12.8002 13.7463 12.8002H17ZM10.1654 6C10.7177 6 11.1654 6.44772 11.1654 7V10.1733C11.1654 10.7256 10.7177 11.1733 10.1654 11.1733H7C6.44772 11.1733 6 10.7256 6 10.1733V7C6 6.44772 6.44772 6 7 6H10.1654ZM10.1654 12.8267C10.7177 12.8267 11.1654 13.2744 11.1654 13.8267V17C11.1654 17.5523 10.7177 18 10.1654 18H7C6.44772 18 6 17.5523 6 17V13.8267C6 13.2744 6.44772 12.8267 7 12.8267H10.1654ZM17 6C17.5523 6 18 6.44772 18 7V10.1733C18 10.7256 17.5523 11.1733 17 11.1733H13.7463C13.194 11.1733 12.7463 10.7256 12.7463 10.1733V7C12.7463 6.44772 13.194 6 13.7463 6H17Z"
                    fill="#6E7072"
                    fill-opacity="0.5"
                  ></path>
                </svg>
              </span>
              <span className="sidebar-nav-text">Dashboard</span>
            </a>
          </div>
        </div>
        <div className="sidebar-footer">
          <div>
            <div className="sidebar-footer-promo">
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
              <div className="sidebar-footer-button-box">
                <div className="sidebar-footer-button-box-content">
                  <div className="sidebar-footer-button-box-content-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 20.4C7.314 20.4 3.6 16.686 3.6 12C3.6 7.314 7.314 3.6 12 3.6C16.686 3.6 20.4 7.314 20.4 12C20.4 16.686 16.686 20.4 12 20.4Z"
                        fill="#e3e3e3"
                        fill-opacity="0.5"
                      ></path>
                      <path
                        d="M12 7.2C12.5523 7.2 13 7.64772 13 8.2V12.8C13 13.3523 12.5523 13.8 12 13.8C11.4477 13.8 11 13.3523 11 12.8V8.2C11 7.64772 11.4477 7.2 12 7.2Z"
                        fill="#e3e3e3"
                        fill-opacity="0.5"
                      ></path>
                      <path
                        d="M12 14.4C12.5523 14.4 13 14.8477 13 15.4C13 15.9523 12.5523 16.4 12 16.4C11.4477 16.4 11 15.9523 11 15.4C11 14.8477 11.4477 14.4 12 14.4Z"
                        fill="#e3e3e3"
                        fill-opacity="0.5"
                      ></path>
                    </svg>
                  </div>
                  <div className="sidebar-footer-button-box-content-text">
                    <div className="sidebar-footer-button-box-content-text-main">
                      <strong>Pexilo</strong>
                    </div>
                    <p className="sidebar-footer-button-box-content-text-sub">
                      Admin
                    </p>
                  </div>
                </div>
                <div className="sidebar-footer-button-box-content-arrow">
                  <svg
                    width="10"
                    height="5"
                    viewBox="0 0 10 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 0L5 5L10 0H0Z"
                      fill="#e3e3e3"
                      fill-opacity="1"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </article>
  );
};
