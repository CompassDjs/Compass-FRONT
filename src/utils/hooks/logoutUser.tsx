import { useEffect, useState } from "react";
import { logout } from "../api";
import { Wait } from "../functions";

export function logoutUser() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    logout()
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        Wait(1000).then(() => {
          setLoading(false);
        });
      });
  }, []);

  return { error, loading };
}
