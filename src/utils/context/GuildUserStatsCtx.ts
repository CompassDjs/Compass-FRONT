import { createContext } from "react";
import IGuildUserStats from "src/utils/interfaces/IGuildUserStats";

type GuildUserStatsContextType = {
  uStats: IGuildUserStats | undefined;
};

export const GuildUserStatsContext = createContext<GuildUserStatsContextType>({
  uStats: undefined,
});
