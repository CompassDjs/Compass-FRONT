import { useEffect, useState } from "react";
import { getMutualGuilds } from "../api";
import { AxiosError } from "axios";

export function useFetchGuilds() {
  const [guilds, setGuilds] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AxiosError>();

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
