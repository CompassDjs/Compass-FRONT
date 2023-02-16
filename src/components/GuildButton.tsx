import { useContext, useState } from "react";
import { GuildContext } from "../utils/context/GuildContext";
import { FaDiscord } from "react-icons/fa";
import { MdChangeCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "../styles/GuildButton.css";

export const GuildButton = ({
  isGuildListOpen = false,
  setGuildListOpen = (isGuildListOpen: boolean) => {},
}) => {
  const navigate = useNavigate();
  const [isGuildListHover, setGuildListHover] = useState(false);
  const { guild } = useContext(GuildContext);
  return (
    <div>
      <div className="guild-button">
        <div
          className={
            "guild-button-box " +
            (isGuildListHover ? "guild-button-box-opened" : "")
          }
          onClick={() => {
            guild ? navigate("/dashboard") : setGuildListOpen(true);
          }}
        >
          <div className="guild-button-box-content">
            <div
              className="guild-button-box-content-text"
              style={{ opacity: isGuildListHover ? 1 : 0 }}
            >
              <div className="guild-button-box-content-text-main">
                {guild ? "Server stats" : "Select a guild"}
              </div>
              <div className="guild-button-box-content-text-sub">
                {guild
                  ? guild.owner
                    ? "👑 Owner"
                    : "👥 Member"
                  : "Select a guild"}
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
            }, 5000);
          }}
          onClick={() => {
            isGuildListHover ? setGuildListOpen(true) : setGuildListOpen(false);
          }}
        >
          {guild ? (
            isGuildListHover ? (
              <MdChangeCircle size={40} />
            ) : guild.icon ? (
              <img
                src={guild.icon}
                alt="guild-icon"
                className="guild-list-item-icon-img"
              />
            ) : (
              <div className="guild-list-item-icon-img guild-list-item-icon-letter">
                {guild.name![0].toUpperCase()}
              </div>
            )
          ) : (
            <FaDiscord size={40} />
          )}
        </div>
      </div>
    </div>
  );
};
