import { Home } from "./Home";
import { Dashboard } from "./Dashboard";
import { Route, Routes } from "react-router-dom";
import "../styles/App.css";

function App({ guildId = "", setGuildId = (guildId: string) => {} }) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard guildId={guildId} />} />
      </Routes>
    </div>
  );
}

export default App;
