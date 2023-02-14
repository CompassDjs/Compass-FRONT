import { useEffect, useState } from "react";
import { getMutualGuilds } from "../api";

export function useFetchGuilds() {
  const [guilds, setGuilds] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    getMutualGuilds()
      .then((data: any) => {
        setGuilds(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { guilds, error, loading };
}
