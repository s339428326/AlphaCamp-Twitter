import axios from "axios";

const ADMIN_USERS_URL =
  "https://rocky-sands-70657.herokuapp.com/api/admin/users";
// "https://shielded-brook-33484.herokuapp.com/api/admin/users";

const axiosInstance = axios.create({
  baseURL: ADMIN_USERS_URL,
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
    const res = await axiosInstance.get(ADMIN_USERS_URL);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("[Get All Users failed: ", error);
  }
};
