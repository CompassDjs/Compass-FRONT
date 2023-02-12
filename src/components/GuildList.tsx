import { useContext, useEffect, useState } from "react";
import { FaDiscord } from "react-icons/fa";
import { mockGuilds } from "src/datas/guilds";
import { GuildContext } from "src/utils/context/GuildContext";
import "../styles/GuildList.css";

export const GuildList = ({
  userId = "",
  guildId = "",
  setGuildId = (guildId: string) => {},
  isGuildListOpen = false,
  setGuildListOpen = (isGuildListOpen: boolean) => {},
}) => {
  const [isGuildListHover, setGuildListHover] = useState(false);
  const { updateGuildId } = useContext(GuildContext);

  return isGuildListOpen ? (
    <div
      className="guild-list-container"
      onClick={() => setGuildListOpen(false)}
    >
      <div className="guild-list">
        {mockGuilds.map((guild) => (
          <div
            className="guild-list-item"
            onClick={() => {
              updateGuildId(guild.guildId);
              setGuildId(guild.guildId);
            }}
          >
            <div className="guild-list-item-icon">
              <FaDiscord size={40} />
            </div>
            <div className="guild-list-item-text">
              <div className="guild-list-item-text-main">{guild.name}</div>
              <div className="guild-list-item-text-sub">{guild.owner}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : null;
};
