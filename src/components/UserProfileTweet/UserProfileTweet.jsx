//components
import Tweet from "../Tweet/Tweet";
import UserLikeTweet from "../UserLikeTweet/UserLikeTweet";
import MainReply from "../MainReply/MainReply";
//apis
//getRepliedTweets
import {
  getUserTweets,
  getRepliedTweets,
  getUserLikes,
} from "../../apis/userData";
// import { getRepliedTweets } from "../../apis/userData";
//react-router-dom
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { useTweetStatus } from "../../contexts/TweetStatusContext";
import { useAuth } from "../../contexts/AuthContext";

const Tweets = () => {
  const urlUserId = useLocation().pathname.split("/")[1];
  const [data, setData] = useState([]);
  const { pathname } = useLocation();
  const { isUserTweetUpdate, setIsUserTweetUpdate } = useTweetStatus();
  const { currentMember } = useAuth();

  useEffect(() => {
    const getTweets = async () => {
      try {
        let userId = urlUserId;
        if (pathname.startsWith(`/${currentMember.id}/`)) {
          userId = currentMember.id;
        }
        const userTweets = await getUserTweets(userId);
        setData(userTweets.map((item) => item));
        setIsUserTweetUpdate(false);
      } catch (error) {
        console.error(error);
      }
    };
    if (
      pathname === `/${currentMember.id}/profile` ||
      pathname === `/${currentMember.id}/profile/tweet` ||
      pathname === `/${urlUserId}/profile` ||
      pathname === `/${urlUserId}/profile/tweet` ||
      isUserTweetUpdate
    ) {
      getTweets();
    }
  }, [
    currentMember.id,
    pathname,
    isUserTweetUpdate,
    setIsUserTweetUpdate,
    urlUserId,
  ]);

  return (
    <ul className="list-unstyled ps-0 mb-5 mb-md-0">
      {data.map((item) => (
        <li key={`tweet-${item.id}`}>
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
    <ul className="list-unstyled ps-0 mb-5 mb-md-0">
      {data.map((item) => (
        <li key={`reply-${item.id}`}>
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

  return (
    <ul className="list-unstyled ps-0 mb-5 mb-md-0">
      {data.map((item, index) => {
        return (
          <li key={`like-${item.TweetId}-${index}`}>
            <UserLikeTweet data={item} />
          </li>
        );
      })}
    </ul>
  );
};

const UserProfileTweet = ({ router }) => {
  return (
    <>
      <div className={router === "tweet" || router === "" ? "" : "d-none"}>
        <Tweets />
      </div>
      <div className={router === "reply" ? "" : "d-none"}>
        <ReplyList />
      </div>
      <div className={router === "like" ? "" : "d-none"}>
        <LikeList />
      </div>
    </>
  );
};

export default UserProfileTweet;
