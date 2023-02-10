import { useContext } from "react";
import { useNavigate } from "react-router";
import { GuildContext } from "../utils/context/GuildContext";
import { mockGuilds } from "../datas/guilds";

export const Menu = ({ guildId = "", setGuildId = (guildId: "") => {} }) => {
  const navigate = useNavigate();
  const { updateGuildId } = useContext(GuildContext);
  return (
    <div>
      <ul>
        {mockGuilds.map((guild: any) => {
          return (
            <li key={guild.guildId}>
              <button
                onClick={() => {
                  setGuildId(guild.guildId);
                }}
              >
                {guild.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
