import React, { CSSProperties, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { GuildList } from "./components/GuildList";
import { GuildDropdown } from "./components/GuildButton";
import { Login } from "./components/Login";
import "./styles/index.css";
import { GuildContext } from "./utils/context/GuildContext";
import { useFetchUser } from "./utils/hooks/useFetchUser";
import { SyncLoader } from "react-spinners";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

function Index() {
  const [guildId, setGuildId] = useState("");
  const [sidebarState, changeSidebarState] = useState(true);
  const [isGuildListOpen, setGuildListOpen] = useState(false);
  const { user, error, loading } = useFetchUser();

  const handleGuildIdChange = (newGuildId: string) => {
    setGuildId(newGuildId);
  };

  const handleSidebarOpen = () => {
    changeSidebarState(!sidebarState);
  };

  const handleGuildListOpen = (isGuildListOpen: boolean) => {
    setGuildListOpen(isGuildListOpen);
  };

  const smoothResize = {
    width: sidebarState ? "calc(100% - 290px)" : "calc(100% - 100px)",
    marginLeft: sidebarState ? "290px" : "100px",
    transition: "all 0.3s ease 0s",
  };

  const handleUser = (user: any) => {
    if (user) {
      return user;
    } else {
      return null;
    }
  };

  return (
    <React.StrictMode>
      <Router>
        <GuildContext.Provider value={{ guildId, updateGuildId: setGuildId }}>
          <div
            className="spinner-container"
            style={{ display: loading ? "flex" : "none" }}
          >
            <SyncLoader
              color={"#7289da"}
              loading={loading}
              size={30}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
          <div
            className={
              "app-container " + (loading ? "fade-in" : "fade-in loaded")
            }
          >
            <Sidebar
              user={handleUser(user)}
              sidebarState={sidebarState}
              changeSidebarState={handleSidebarOpen}
            />
            <div style={smoothResize}>
              {user ? (
                <App guildId={guildId} setGuildId={handleGuildIdChange} />
              ) : (
                <div
                  className="login-container"
                  style={{
                    width: window.innerWidth - (sidebarState ? 290 : 100),
                    overflow: "hidden",
                  }}
                >
                  <Login />
                </div>
              )}
            </div>
          </div>
          {user ? (
            <>
              <div
                className={
                  "app-topright " + (loading ? "fade-in" : "fade-in loaded")
                }
              >
                <GuildDropdown
                  guildId={guildId}
                  isGuildListOpen={isGuildListOpen}
                  setGuildListOpen={handleGuildListOpen}
                />
              </div>
              <div
                className={
                  "app-popup " + (loading ? "fade-in" : "fade-in loaded")
                }
              >
                <GuildList
                  guildId={guildId}
                  setGuildId={handleGuildIdChange}
                  isGuildListOpen={isGuildListOpen}
                  setGuildListOpen={handleGuildListOpen}
                />
              </div>
            </>
          ) : null}
        </GuildContext.Provider>
      </Router>
    </React.StrictMode>
  );
}

root.render(<Index />);
