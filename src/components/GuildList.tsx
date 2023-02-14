import { useContext } from "react";
import { GuildContext } from "src/utils/context/GuildContext";
import { FormatDate } from "src/utils/functions";
import { useNavigate } from "react-router-dom";
import IGuild from "src/utils/interfaces/IGuild";
import IUser from "src/utils/interfaces/IUser";
import "../styles/GuildList.css";

export const GuildList = ({
  user = {} as IUser,
  guilds = [] as IGuild[],
  loading = false,
  isGuildListOpen = false,
  setGuildListOpen = (isGuildListOpen: boolean) => {},
}) => {
  const navigate = useNavigate();
  const { updateGuild } = useContext(GuildContext);

  const handleClickGuild = (guild: IGuild) => {
    console.log("Guild clicked: ", guild);
    updateGuild(guild);
    navigate("/dashboard");
  };

  return isGuildListOpen ? (
    <div
      className="guild-list-container"
      onClick={() => setGuildListOpen(false)}
    >
      <div className="guild-list">
        {guilds.map((guild) => (
          <div
            className="guild-list-item"
            key={guild.id}
            onClick={() => {
              handleClickGuild(guild);
            }}
          >
            <div className="guild-list-item-icon">
              {guild.icon ? (
                <img
                  src={guild.icon}
                  alt="guild-icon"
                  className="guild-list-item-icon-img"
                />
              ) : (
                <div className="guild-list-item-icon-img guild-list-item-icon-letter">
                  {guild.name![0].toUpperCase()}
                </div>
              )}
            </div>
            <div className="guild-list-item-text">
              <div className="guild-list-item-text-main">{guild.name}</div>
              <div className="guild-list-item-text-sub">
                Supported since {FormatDate(new Date(guild.createdAt))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : null;
};
