import axios from "axios";

// const BASE = "https://rocky-sands-70657.herokuapp.com";
const BASE = "https://shielded-brook-33484.herokuapp.com";

const TWEET_URL = BASE + "/api/tweets";

const axiosInstance = axios.create({ baseURL: TWEET_URL });

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error(error);
  }
);
//使用者發文
export const postTweet = async (description) => {
  try {
    const res = await axiosInstance.post(`${TWEET_URL}`, {
      description,
    });
    return res.data.status;
  } catch (error) {
    console.error("[Post Tweet Failed]: ", error);
  }
};

//使用者回覆
export const postReply = async (tweet_id, comment) => {
  try {
    const res = await axiosInstance.post(`${TWEET_URL}/${tweet_id}/replies`, {
      comment,
    });
    return res;
  } catch (error) {
    console.error("[Post Reply Failed]: ", error);
  }
};

//取得所有推文
export const getAllTweets = async () => {
  try {
    const res = await axiosInstance.get(`${TWEET_URL}`);
    return res.data;
  } catch (error) {
    console.error("[Get All Tweets Failed]: ", error);
  }
};

//查閱單一推文內容
export const getOneTweet = async (tweet_id) => {
  try {
    const res = await axiosInstance.get(`${TWEET_URL}/${tweet_id}`);
    return res.data;
  } catch (error) {
    console.error("[Get One Tweet Failed]: ", error);
  }
};

//取得特定推文所有回覆
export const getTweetReplies = async (tweet_id) => {
  try {
    const res = await axiosInstance.get(`${TWEET_URL}/${tweet_id}/replies`);
    return res.data;
  } catch (error) {
    console.error("[Get Replies Failed]: ", error);
  }
};

//like推文
export const postLike = async (tweet_id) => {
  try {
    const res = await axiosInstance.post(`${TWEET_URL}/${tweet_id}/like`);
    return res;
  } catch (error) {
    console.error("[Like Failed]: ", error);
  }
};

//unlike推文
export const postUnlike = async (tweet_id) => {
  try {
    const res = await axiosInstance.post(`${TWEET_URL}/${tweet_id}/unlike`);
    return res;
  } catch (error) {
    console.error("[Unlike Failed]: ", error);
  }
};
