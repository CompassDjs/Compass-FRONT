import { createContext } from "react";

type GuildContextType = {
  guildId: string;
  updateGuildId: (guildId: string) => void;
};

export const GuildContext = createContext<GuildContextType>({
  guildId: "",
  updateGuildId: () => {},
});
