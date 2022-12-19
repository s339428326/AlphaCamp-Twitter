//components
import Tweet from "../Tweet/Tweet";
import UserLikeTweet from "../UserLikeTweet/UserLikeTweet";
import MainReply from "../MainReply/MainReply";
//apis
//getRepliedTweets
import {
  getUserData,
  getUserTweets,
  getRepliedTweets,
  getUserLikes,
} from "../../apis/userData";
// import { getRepliedTweets } from "../../apis/userData";
//react-router-dom
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

//jwt
import jwt_decode from "jwt-decode";
import { useTweetStatus } from "../../contexts/TweetStatusContext";
import { useAuth } from "../../contexts/AuthContext";

//取得所有推文
const Tweets = () => {
  const urlUserId = useLocation().pathname.split("/")[1];
  const [data, setData] = useState([]);
  const { pathname } = useLocation();
  const { isUserTweetUpdate, setIsUserTweetUpdate } = useTweetStatus();
    const { currentMember } = useAuth();


  useEffect(() => {
    const getTweets = async () => {
      try {
        const userTweets = await getUserTweets(urlUserId);
        setData(userTweets.map((item) => item));
        //setIsUserTweetUpdate(false);
      } catch (error) {
        console.error(error);
      }
    };

    if (
      pathname === `/${currentMember.id}/profile` ||
      pathname === `/${currentMember.id}/profile/tweet` ||
      isUserTweetUpdate
    ) {
      getTweets();
    }
  }, [currentMember.id, pathname, isUserTweetUpdate, setIsUserTweetUpdate, urlUserId]);

  return (
    <ul className="list-unstyled ps-0">
      {data.map((item) => (
        <li key={item.id}>
          <Tweet data={item} />
        </li>
      ))}
    </ul>
  );
};

//讀取所有使用者回覆貼文
const ReplyList = () => {
  const urlUserId = useLocation().pathname.split("/")[1];
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const userRely = await getRepliedTweets(urlUserId);
        setData(userRely.map((item) => item));
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [urlUserId]);
  return (
    <ul className="list-unstyled ps-0">
      {data.map((item) => (
        <li key={item.id}>
          <MainReply data={item} />
        </li>
      ))}
    </ul>
  );
};

const LikeList = () => {
  const urlUserId = useLocation().pathname.split("/")[1];
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const userLikes = await getUserLikes(urlUserId);
        setData(userLikes.map((item) => item));
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [urlUserId]);

  //取得頭像
  const token = localStorage.getItem("token");
  const decodeData = jwt_decode(token);

  const [userAvatar, setUserAvatar] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getUserData(decodeData.id);
        setUserAvatar(res.avatar);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [decodeData.id]);
  return (
    <ul className="list-unstyled ps-0">
      {data.map((item) => (
        <li key={item.TweetId}>
          <UserLikeTweet data={item} userAvatar={userAvatar} />
        </li>
      ))}
    </ul>
  );
};

const UserProfileTweet = ({ router }) => {
  //推文
  if (router === "tweet" || router === "") {
    return (
      <div>
        <Tweets />
      </div>
    );
  }
  //回覆
  if (router === "reply") {
    return (
      <div>
        <ReplyList />
      </div>
    );
  }
  //喜歡內容
  if (router === "like") {
    return (
      <div>
        <LikeList />
      </div>
    );
  }
};

export default UserProfileTweet;
