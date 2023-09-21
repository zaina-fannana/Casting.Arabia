import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.defaults.headers.common["Content-Type"] = "application/json";

export const setAccessToken = (accessToken) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
};
