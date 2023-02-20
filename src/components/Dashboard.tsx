import { useContext } from "react";
import { GuildContext } from "src/utils/context/GuildCtx";
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useFetchGuildStats } from "src/utils/hooks/useFetchGuildStats";
import { useFetchGuildUserStats } from "src/utils/hooks/useFetchGuildUserStats";
import { StatsTotal } from "./StatsTotal";
import { GuildStatsContext } from "src/utils/context/GuildStatsCtx";
import { GuildUserStatsContext } from "src/utils/context/GuildUserStatsCtx";
import IUser from "src/utils/interfaces/IUser";
import "../styles/Dashboard.css";
import { AxiosError } from "axios";

export const Dashboard = ({ user = {} as IUser }) => {
  const { guild } = useContext(GuildContext);
  const { gStats, guildStatsErr } = useFetchGuildStats(guild ? guild.id : "");
  const { uStats, guildUserStatsErr } = useFetchGuildUserStats(
    guild ? guild.id : ""
  );

  if (guildStatsErr || guildUserStatsErr) {
    const error = guildStatsErr || (guildUserStatsErr as AxiosError);
    toast.error(error.message, {
      theme: "dark",
      toastId: "fetchGuildStatsError",
    });
  }

  return (
    <div>
      <ToastContainer />
      <GuildStatsContext.Provider value={{ gStats }}>
        <GuildUserStatsContext.Provider value={{ uStats }}>
          {guild ? (
            <>
              <h1>Dashboard</h1>
              <p>{guild.name}</p>
            </>
          ) : (
            <Navigate replace to="/" />
          )}
          {gStats && (
            <div className="dashboard-totals-container">
              <StatsTotal user={user} />
            </div>
          )}
        </GuildUserStatsContext.Provider>
      </GuildStatsContext.Provider>
    </div>
  );
};
