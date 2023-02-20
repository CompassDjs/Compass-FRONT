import { useEffect, useState } from "react";
import { getGuildStatsByUser } from "../api";
import { Wait } from "../functions";
import { AxiosError } from "axios";
import IGuildUserStats from "../interfaces/IGuildUserStats";

export function useFetchGuildUserStats(guildId: string) {
  const [uStats, setUStats] = useState<IGuildUserStats>();
  const [loading, setLoading] = useState(true);
  const [guildUserStatsErr, setGuildUserStatsErr] = useState<AxiosError>();

  const Fetch = () => {
    setLoading(true);
    getGuildStatsByUser(guildId)
      .then((data: IGuildUserStats) => {
        setUStats(data);
      })
      .catch((err) => {
        setGuildUserStatsErr(err);
      })
      .finally(() => {
        Wait(1000).then(() => {
          setLoading(false);
        });
      });
  };

  useEffect(() => {
    Fetch();
  }, [guildId]);

  return { uStats, guildUserStatsErr, loading };
}
