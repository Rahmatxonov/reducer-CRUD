import axios from "axios";

const instance = () => {
  const baseURL = process.env.REACT_APP_API;

  return axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
    timeout: 10000,
  });
};

export default instance;
