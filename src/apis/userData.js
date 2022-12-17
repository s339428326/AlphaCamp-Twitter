import axios from "axios";
const BASE_URL = "https://rocky-sands-70657.herokuapp.com/api/users/";

//攔截器設定
//https://github.com/axios/axios#request-config
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// 新增axios 攔截器(Instance)
//https://ithelp.ithome.com.tw/articles/10230336
axiosInstance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    const token = localStorage.getItem("token");
    if (token) config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    // Do something with request error
    console.log(error);
  }
);

//[U_03] get-user-profile 取得指定使用者
//GET /api/users/:id
export const getUserData = async (userId) => {
  console.log("[API URL:] :", BASE_URL + `${userId}`);
  if (!userId) {
    console.log("[使用getUserData錯誤]：請帶入使用者id");
    return;
  }
  try {
    const res = await axiosInstance.get(BASE_URL + userId);
    console.log("[取得使用者資料成功]", res.data);
    return res.data;
  } catch (error) {
    console.error("[取得使用者資料失敗]", error);
  }
};

// [U_06] get-user-tweets 取得指定使用者的所有推文 GET /api/users/:id/tweets
//GET /api/users/:id/tweets
export const getUserTweets = async (userId) => {
  if (!userId) return console.error("[getUserTweets 錯誤]:請帶入使用者id");
  try {
    console.log(`${BASE_URL}${userId}/tweets`);
    const res = await axiosInstance.get(BASE_URL + userId + "/tweets");
    console.log("[getUserTweets 成功]:", res);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
