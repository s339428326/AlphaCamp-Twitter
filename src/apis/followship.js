import axios from "axios";

const FOLLOW_URL = "https://rocky-sands-70657.herokuapp.com/api/followships";

const axiosInstance = axios.create({ baseURL: FOLLOW_URL });

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error(error);
  }
);

export const follow = async (id) => {
  try {
    const res = await axiosInstance.post(`${FOLLOW_URL}`, { id });
    return res;
  } catch (error) {
    console.error("[Follow Failed]: ", error);
  }
};

export const unfollow = async (id) => {
  try {
    const res = await axiosInstance.delete(`${FOLLOW_URL}/${id}`, { id });
    return res;
  } catch (error) {
    console.error("[Unfollow Failed]: ", error);
  }
};
