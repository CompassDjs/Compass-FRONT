import { useState } from "react";
import { GuildContext } from "../utils/context/GuildContext";
import { Home } from "./Home";
import { Menu } from "./Menu";
import "../styles/App.css";
import { Dashboard } from "./Dashboard";
import { Route, Routes } from "react-router-dom";

function App({
  guildId = "",
  setGuildId = (guildId: string) => {},
  userId = "",
  setUserId = (userId: string) => {},
}) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard guildId={guildId} />} />
        <Route
          path="/menu"
          element={<Menu guildId={guildId} setGuildId={setGuildId} />}
        />
      </Routes>
    </div>
  );
}

export default App;
