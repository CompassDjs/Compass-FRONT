import { Home } from "./Home";
import { Dashboard } from "./Dashboard";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { GuildButton } from "./GuildButton";
import { GuildList } from "./GuildList";
import { useFetchGuilds } from "src/utils/hooks/useFetchGuilds";
import { GuildContext } from "src/utils/context/GuildContext";
import IUser from "src/utils/interfaces/IUser";
import IGuild from "src/utils/interfaces/IGuild";
import "../styles/App.css";

function App({ user = {} as IUser }) {
  const [guild, setGuild] = useState<IGuild>();
  const [isGuildListOpen, setGuildListOpen] = useState(false);

  const updateGuild = (guild: IGuild) => setGuild(guild);
  const { guilds, error, loading } = useFetchGuilds();

  const handleGuildListOpen = (isGuildListOpen: boolean) => {
    setGuildListOpen(isGuildListOpen);
  };

  return (
    <div>
      <GuildContext.Provider value={{ guild, updateGuild }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard/*" element={<Dashboard user={user} />} />
        </Routes>
        <div
          className={"app-topright " + (loading ? "fade-in" : "fade-in loaded")}
        >
          <GuildButton
            isGuildListOpen={isGuildListOpen}
            setGuildListOpen={handleGuildListOpen}
          />
        </div>
        <div
          className={"app-popup " + (loading ? "fade-in" : "fade-in loaded")}
        >
          <GuildList
            user={user}
            guilds={guilds}
            loading={loading}
            isGuildListOpen={isGuildListOpen}
            setGuildListOpen={handleGuildListOpen}
          />
        </div>
      </GuildContext.Provider>
    </div>
  );
}

export default App;
