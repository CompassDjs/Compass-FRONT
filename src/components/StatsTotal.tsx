import { FaUserAlt } from "react-icons/fa";
import { Card } from "./Card";
import { GuildStatsContext } from "src/utils/context/GuildStatsCtx";
import { useContext } from "react";
import { MdMessage } from "react-icons/md";
import { HiSpeakerphone } from "react-icons/hi";
import { AgeDate, MsToMinutes } from "src/utils/functions";
import { IoLogoGameControllerA } from "react-icons/io";
import { GuildContext } from "src/utils/context/GuildCtx";
import { useNavigate } from "react-router-dom";
import { TbOld } from "react-icons/tb";
import IUser from "src/utils/interfaces/IUser";
import "../styles/StatsTotal.css";
import { GuildUserStatsContext } from "src/utils/context/GuildUserStatsCtx";

export const StatsTotal = ({ user = {} as IUser }) => {
  const navigate = useNavigate();

  const { guild } = useContext(GuildContext);
  const { gStats } = useContext(GuildStatsContext);
  const { uStats } = useContext(GuildUserStatsContext);

  if (!guild) {
    navigate("/");
    return <></>;
  }

  const userAvatar = user.avatarUrl ? user.avatarUrl : FaUserAlt;
  return (
    <div className="total-stats-containter">
      {gStats && uStats && (
        <>
          <Card
            front={{
              title: "Messages",
              value: gStats.totals.totalMsg.toString()!,
              icon: MdMessage,
              color: "#4877E3",
            }}
            back={{
              title: "You",
              value: uStats.totals.totalMsg.toString()!,
              icon: userAvatar,
              color: "#42464d",
            }}
          />
          <Card
            front={{
              title: "Minutes Spoken",
              value: MsToMinutes(gStats.totals.totalVoice).toString(),
              icon: HiSpeakerphone,
              color: "#1d4bb8",
            }}
            back={{
              title: "You",
              value: MsToMinutes(uStats.totals.totalVoice).toString(),
              icon: userAvatar,
              color: "#42464d",
            }}
          />
          <Card
            front={{
              title: "Minutes Played",
              value: MsToMinutes(gStats.totals.totalGames).toString(),
              icon: IoLogoGameControllerA,
              color: "#4877E3",
            }}
            back={{
              title: "You",
              value: MsToMinutes(uStats.totals.totalGames).toString(),
              icon: userAvatar,
              color: "#42464d",
            }}
          />
          <Card
            front={{
              title: "Server Age",
              value: AgeDate(new Date(guild.guildCreatedAt)).toString(),
              icon: TbOld,
              color: "#1d4bb8",
              size: "1.5rem",
            }}
            back={{
              title: "Compass Support",
              value: AgeDate(new Date(guild.createdAt)).toString(),
              icon: "https://i.imgur.com/gaBPSWO.png",
              color: "#42464d",
            }}
          />
        </>
      )}
    </div>
  );
};
