import { useEffect, useState } from "react";
import { getAuthStatus } from "../api";
import { Wait } from "../functions";
import { AxiosError } from "axios";
import IUser from "../interfaces/IUser";

export function useFetchUser() {
  const [user, setUser] = useState<IUser>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AxiosError>();

  useEffect(() => {
    getAuthStatus()
      .then((data: any) => {
        const user: IUser = data.user;
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
