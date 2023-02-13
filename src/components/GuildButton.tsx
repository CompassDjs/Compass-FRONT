import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { GuildContext } from "../utils/context/GuildContext";
import { mockGuilds } from "../datas/guilds";
import { FaDiscord, FaUserAlt } from "react-icons/fa";
import { MdChangeCircle } from "react-icons/md";
import "../styles/GuildButton.css";

export const GuildDropdown = ({
  userId = "",
  guildId = "",
  isGuildListOpen = false,
  setGuildListOpen = (isGuildListOpen: boolean) => {},
}) => {
  const navigate = useNavigate();
  const [isGuildListHover, setGuildListHover] = useState(false);
  const { updateGuildId } = useContext(GuildContext);
  return (
    <div>
      <div className="guild-button">
        <div
          className={
            "guild-button-box " +
            (isGuildListHover ? "guild-button-box-opened" : "")
          }
          onClick={() => {
            isGuildListHover ? setGuildListOpen(true) : setGuildListOpen(false);
          }}
        >
          <div className="guild-button-box-content">
            <div className="guild-button-box-content-text">
              <div
                className="guild-button-box-content-text-main"
                style={{ opacity: isGuildListHover ? 1 : 0 }}
              >
                {guildId
                  ? mockGuilds.find((g) => g.guildId == guildId)?.name
                  : "Discord"}
              </div>
              <div className="guild-button-box-content-text-sub">
                {guildId
                  ? mockGuilds.find((g) => g.guildId == guildId)?.owner
                  : "Discord"}
              </div>
            </div>
          </div>
        </div>
        <div
          className="guild-button-box-content-icon"
          onMouseEnter={() => setGuildListHover(true)}
          onMouseLeave={() => {
            setTimeout(() => {
              setGuildListHover(false);
            }, 2000);
          }}
          onClick={() => {
            isGuildListHover ? setGuildListOpen(true) : setGuildListOpen(false);
          }}
        >
          {guildId ? (
            isGuildListHover ? (
              <MdChangeCircle size={40} />
            ) : (
              <FaDiscord size={40} />
            )
          ) : (
            <FaDiscord size={40} />
          )}
        </div>
      </div>
    </div>
  );
};
