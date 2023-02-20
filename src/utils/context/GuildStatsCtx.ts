import { createContext } from "react";
import IGuildStats from "src/utils/interfaces/IGuildStats";

type GuildStatsContextType = {
  gStats: IGuildStats | undefined;
};

export const GuildStatsContext = createContext<GuildStatsContextType>({
  gStats: undefined,
});
