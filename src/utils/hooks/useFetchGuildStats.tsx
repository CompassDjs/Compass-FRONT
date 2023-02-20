import { useEffect, useState } from "react";
import { Wait } from "../functions";
import { getGuildStats } from "../api";
import { AxiosError } from "axios";
import IGuildStats from "../interfaces/IGuildStats";

export function useFetchGuildStats(guildId: string) {
  const [gStats, setGuildStats] = useState<IGuildStats>();
  const [loading, setLoading] = useState(true);
  const [guildStatsErr, setGuildStatsErr] = useState<AxiosError>();

  const Fetch = () => {
    setLoading(true);
    getGuildStats(guildId)
      .then((gStats: IGuildStats) => {
        setGuildStats(gStats);
      })
      .catch((err) => {
        setGuildStatsErr(err);
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

  return { gStats, guildStatsErr, loading };
}
