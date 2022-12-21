import axios from "axios";
import Swal from "sweetalert2";

const BASE = "https://rocky-sands-70657.herokuapp.com";
// const BASE = "https://shielded-brook-33484.herokuapp.com";

const BASE_URL = BASE + "/api/users/";

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
  if (!userId) {
    console.error("[使用getUserData錯誤]：請帶入使用者id");
    return;
  }
  try {
    const res = await axiosInstance.get(BASE_URL + userId);
    return res.data;
  } catch (error) {
    console.error("[取得使用者資料失敗]", error);
  }
};

//[U_04] put-user-profile 編輯登入使用者的profile
//PUT /api/users/:id
export const putUserProfile = async (userId, data) => {
  if (!userId) {
    console.error("[使用putUserProfile錯誤]：請帶入使用者id");
    return;
  }
  if (!data) {
    console.error("[使用putUserProfile錯誤]：請帶入form-data");
    return;
  }
  try {
    const res = await axiosInstance.put(BASE_URL + userId, data);
    return res;
  } catch (error) {
    console.error(error);
  }
};

//[U_05] get-user-replies 取得指定使用者的所有回覆 GET /api/users/:id/replied_tweets
//GET /api/users/:id/replied_tweets
export const getRepliedTweets = async (userId) => {
  if (!userId) return console.error("[repliedTweets 錯誤]:請帶入使用者id");
  try {
    const res = await axiosInstance.get(BASE_URL + userId + "/replied_tweets");
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

// [U_06] get-user-tweets 取得指定使用者的所有推文 GET /api/users/:id/tweets
//GET /api/users/:id/tweets
export const getUserTweets = async (userId) => {
  if (!userId) return console.error("[getUserTweets 錯誤]:請帶入使用者id");
  try {
    const res = await axiosInstance.get(BASE_URL + userId + "/tweets");
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

//[U_07] get-user-likes 取得指定使用者喜歡的推文
//GET /api/users/:id/likes
export const getUserLikes = async (userId) => {
  if (!userId) return console.error("[getUserLikes錯誤]:請帶入使用者id");
  try {
    const res = await axiosInstance.get(BASE_URL + userId + "/likes");
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

//[U_08] get-user-followings 取得指定使用者的追蹤者 GET /api/users/:id/followings
export const getUserFollowings = async (id) => {
  try {
    const res = await axiosInstance.get(`${BASE_URL}/${id}/followings`);
    return res;
  } catch (error) {
    console.error("[Get User Following Failed]: ", error);
  }
};

//[U_09] get-user-followers 取得指定使用者的追隨者 GET /api/users/:id/followers
export const getUserFollowers = async (id) => {
  try {
    const res = await axiosInstance.get(`${BASE_URL}/${id}/followers`);
    return res;
  } catch (error) {
    console.error("[Get User Follower Failed]: ", error);
  }
};

// [U_10] get-top-users 取得跟隨者數量前10名的推薦名單 GET /api/users/top

export const getTopUsers = async () => {
  try {
    const res = await axiosInstance.get(BASE_URL + "top");
    return res;
  } catch (error) {
    console.error("[Get Top Users Failed]: ", error);
  }
};

//[U_11] put-user-account-setting 編輯登入使用者的設定 PUT /api/users/:id/setting
export const putUserAccountSetting = async ({
  account,
  name,
  email,
  password,
  checkPassword,
  urlUserId,
}) => {
  try {
    const { data } = await axiosInstance.put(
      `${BASE_URL}${urlUserId}/setting`,
      {
        account,
        name,
        email,
        password,
        checkPassword,
      }
    );
    console.log(data);
    return data;
  } catch (error) {
    console.error("[edit Setting failed]: ", error.response.data.message);
    const errorMessage = () => {
      if (error.response.data.message === "All field are required!") {
        return "任一欄位為空";
      }
      if (error.response.data.message === "Cannot edit other user's setting.") {
        return "帳號輸入錯誤";
      }
      if (error.response.data.message === "Email input is invalid!") {
        return "email格式有誤";
      }
      if (
        error.response.data.message ===
        "Name field has max length of 50 characters."
      ) {
        return "名稱超過五十字元";
      }
      if (error.response.data.message === "Email already exists!") {
        return "email已被註冊";
      }
      if (error.response.data.message === "Account name already exists!") {
        return "帳號已被註冊";
      }
      if (
        error.response.data.message ===
        "Password and confirmPassword do not match."
      ) {
        return "密碼與確認密碼不符";
      }
    };

    Swal.fire({
      position: "top",
      title: "修改失敗！",
      text: errorMessage(),
      timer: 1000,
      icon: "error",
      showConfirmButton: false,
    });
  }
};
