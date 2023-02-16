import { useEffect, useState } from "react";
import { Wait } from "../functions";
import { getGuildStats } from "../api";
import IGuildStats from "../interfaces/IGuildStats";

export function useFetchGuildStats(guildId: string) {
  const [gStats, setGuildStats] = useState<IGuildStats>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error>();

  const Fetch = () => {
    setLoading(true);
    getGuildStats(guildId)
      .then((gStats: IGuildStats) => {
        setGuildStats(gStats);
      })
      .catch((err) => {
        setError(err);
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

  return { gStats, error, loading };
}
