import axios, { AxiosRequestConfig } from "axios";
import IUser from "./interfaces/IUser";

const CONFIG: AxiosRequestConfig = {
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_URL + "/api",
};

export async function apiPing() {
  let status = false;
  await axios
    .get(`/ping`)
    .then((res) => {
      if (res.status === 200) status = true;
    })
    .catch((_err) => {
      status = false;
    });
  return status;
}

export const getAuthStatus = () =>
  axios.get<IUser>(`/auth/status`, CONFIG).then((res) => {
    return res.data;
  });

export const logout = () =>
  axios.get(`/auth/logout`, CONFIG).then((res) => {
    return res.data;
  });

export const getMutualGuilds = () =>
  axios.get(`/discord/user/mutual-guilds`, CONFIG).then((res) => {
    return res.data;
  });
