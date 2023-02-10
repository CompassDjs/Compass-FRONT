import { useContext } from "react";
import { GuildContext } from "../utils/context/GuildContext";

export const Dashboard = ({ guildId = "" }) => {
  return <div>Dashboard {guildId}</div>;
};
