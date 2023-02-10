import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { GuildContext } from "../utils/context/GuildContext";
import { Home } from "./Home";
import { Sidebar } from "./Sidebar";
import { Menu } from "./Menu";
import "../styles/App.css";
import { Dashboard } from "./Dashboard";

function App() {
  const [guildId, setGuildId] = useState("");
  return (
    <div>
      <div className="app-container">
        <div className="app-sidebar">
          <Sidebar />
        </div>
        <div className="app-content">
          <Home />
          <Menu guildId={guildId} setGuildId={setGuildId}></Menu>
          <Dashboard guildId={guildId}></Dashboard>
        </div>
      </div>
    </div>
  );
}

export default App;
