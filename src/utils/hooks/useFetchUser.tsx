import { useEffect, useState } from "react";
import { getAuthStatus } from "../api";
import { IUser } from "../interfaces/IUser";
import { Wait } from "../functions";

export function useFetchUser() {
  const [user, setUser] = useState<IUser>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    getAuthStatus()
      .then((user) => {
        setUser(user);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        Wait(1000).then(() => {
          setLoading(false);
        });
      });
  }, []);

  return { user, error, loading };
}
