import axios from "axios";

const headers = {
  Accept: "application/json",
  "content-type": "application/json",
  "Cache-control": "no-cache",
  Expires: 0,
};

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers,
  timeout: 30000,
});

instance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (config) => config,
  (error) => Promise.reject(error)
);

export default instance;
