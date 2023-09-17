import axios from "axios";

export const loginFunc = async (body) => {
  return await axios.post("auth/login", body);
};
