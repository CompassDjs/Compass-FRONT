import { useContext } from "react";
import { GuildContext } from "src/utils/context/GuildContext";
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useFetchGuildStats } from "src/utils/hooks/useFetchGuildStats";
import { StatsTotal } from "./StatsTotal";
import { GuildStatsContext } from "src/utils/context/GuildStatsContext";
import IUser from "src/utils/interfaces/IUser";
import "../styles/Dashboard.css";

export const Dashboard = ({ user = {} as IUser }) => {
  const { guild } = useContext(GuildContext);
  const { gStats, error, loading } = useFetchGuildStats(guild ? guild.id : "");

  if (error) {
    toast.error(error.message, {
      theme: "dark",
      toastId: "fetchUserError",
    });
    <Navigate replace to="/" />;
  }

  return (
    <div>
      <ToastContainer />
      <GuildStatsContext.Provider value={{ gStats }}>
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
      </GuildStatsContext.Provider>
    </div>
  );
};
