import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./styles/index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

function Index() {
  const [guildId, setGuildId] = useState("");
  const [userId, setUserId] = useState("1");
  const [sidebarState, changeSidebarState] = useState(true);

  const handleUserIdChange = (newUserId: string) => {
    setUserId(newUserId);
  };

  const handleGuildIdChange = (newGuildId: string) => {
    setGuildId(newGuildId);
  };

  const handleSidebarOpen = () => {
    changeSidebarState(!sidebarState);
  };

  return (
    <React.StrictMode>
      <Router>
        <div className="app-container">
          <Sidebar
            userId={userId}
            setUserId={handleUserIdChange}
            sidebarState={sidebarState}
            changeSidebarState={handleSidebarOpen}
          />
          <div
            style={
              sidebarState ? { marginLeft: "290px" } : { marginLeft: "100px" }
            }
          >
            <App
              userId={userId}
              setUserId={handleUserIdChange}
              guildId={guildId}
              setGuildId={handleGuildIdChange}
            />
          </div>
        </div>
      </Router>
    </React.StrictMode>
  );
}

root.render(<Index />);
