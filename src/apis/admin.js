import axios from "axios";

const ADMIN_URL = "https://rocky-sands-70657.herokuapp.com/api/admin";
// const ADMIN_URL = "https://shielded-brook-33484.herokuapp.com/api/admin/users";

const axiosInstance = axios.create({
  baseURL: ADMIN_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log(error);
  }
);

export const getAllUsers = async () => {
  try {
    const res = await axiosInstance.get(ADMIN_URL + "/users");
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("[Get All Users failed: ", error);
  }
};

export const getAllTweets = async () => {
  try {
    const res = await axiosInstance.get(ADMIN_URL + "/tweets");
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("[Get All Tweets failed: ", error);
  }
};

export const deleteTweet = async (id) => {
  try {
    const res = await axiosInstance.delete(`${ADMIN_URL}/tweets/${id}`);
    return res.data;
  } catch (error) {
    console.error("[Delete Todo failed]: ", error);
  }
};
