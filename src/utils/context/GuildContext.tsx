import { createContext } from "react";
import IGuild from "src/utils/interfaces/IGuild";

type GuildContextType = {
  guild?: IGuild;
  updateGuild: (guild: IGuild) => void;
};

export const GuildContext = createContext<GuildContextType>({
  updateGuild: () => {},
});
