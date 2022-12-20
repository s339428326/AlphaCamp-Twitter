import styles from "./MainReplyTweet.module.scss";
import MainReplyModal from "../MainReplyModal/MainReplyModal";
import { useEffect, useState } from "react";
import useMoment from "../../hooks/useMoment";
//api
import { postLike, postUnlike } from "../../apis/tweets";

import { useTweetStatus } from "../../contexts/TweetStatusContext";

export const HeartIcon = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.00005 14.4253H7.99072C6.26872 14.3933 1.30005 9.90398 1.30005 5.65198C1.30005 3.60931 2.98338 1.81598 4.90205 1.81598C6.42872 1.81598 7.45538 2.86931 7.99938 3.63598C8.54205 2.87065 9.56871 1.81598 11.096 1.81598C13.016 1.81598 14.6987 3.60931 14.6987 5.65265C14.6987 9.90331 9.72938 14.3926 8.00738 14.424H8.00005V14.4253ZM4.90272 2.81665C3.51605 2.81665 2.30072 4.14198 2.30072 5.65331C2.30072 9.47998 6.99005 13.384 8.00072 13.4253C9.01272 13.384 13.7007 9.48065 13.7007 5.65331C13.7007 4.14198 12.4854 2.81665 11.0987 2.81665C9.41338 2.81665 8.47205 4.77398 8.46405 4.79331C8.31072 5.16798 7.69338 5.16798 7.53938 4.79331C7.53005 4.77331 6.58938 2.81665 4.90338 2.81665H4.90272Z"
        fill="#6C757D"
      />
    </svg>
  );
};

export const HeartedIcon = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.99999 14.4254H7.99065C6.26865 14.3934 1.29999 9.90404 1.29999 5.65204C1.29999 3.60937 2.98332 1.81604 4.90199 1.81604C6.42865 1.81604 7.45532 2.86937 7.99932 3.63604C8.54199 2.87071 9.56865 1.81604 11.096 1.81604C13.016 1.81604 14.6987 3.60937 14.6987 5.65271C14.6987 9.90337 9.72932 14.3927 8.00732 14.424H7.99999V14.4254Z"
        fill="#FC5A5A"
      />
    </svg>
  );
};

const MainReplyTweet = ({ data }) => {
  // console.log(data);
  //js 原生時間處理
  const date = new Date(data?.createdAt);
  const dateResult = date.toLocaleString().toString().split(" ");
  const resultDate = dateResult[0];
  const resultTime = dateResult[1];
  const [waiting, isWaiting] = useState(false);
  const [likeCount, setLikeCount] = useState();
  const [like, setLike] = useState();
  const [replyCount, setReplyCount] = useState();
  const { isReplyTweetUpdate } = useTweetStatus();

  console.log();

  useEffect(() => {
    setLike(data?.isLiked);
    setLikeCount(data?.likeCount);
    setReplyCount(data?.replyCount);
  }, [data?.isLiked, data?.likeCount, data?.replyCount]);

  useEffect(() => {
    if (isReplyTweetUpdate) setReplyCount((prevValue) => prevValue + 1);
  }, [isReplyTweetUpdate]);

  const handleLike = async () => {
    if (like) {
      //post 取消Like
      setLikeCount((prevValue) => {
        return prevValue - 1;
      });
      const unLike = async () => {
        isWaiting(true);
        const res = await postUnlike(data?.id);
        isWaiting(false);
        console.log("[取消]", res);
      };
      unLike();
    } else {
      //post 新增Like
      setLikeCount((prevValue) => {
        return prevValue + 1;
      });
      const addLike = async () => {
        isWaiting(true);
        const res = await postLike(data?.id);
        isWaiting(false);
        console.log("[新增]", res);
      };
      addLike();
    }
    //渲染頁面
    setLike((prevValue) => !prevValue);
  };

  return (
    <div className={styles.container}>
      <div className="d-flex pb-2">
        <div className={styles.avatarContainer}>
          <img
            className="rounded-circle"
            src={
              data?.User.avatar ||
              "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt="user-avatar"
            width={50}
            height={50}
          />
        </div>
        <div className={styles.tweetInfo}>
          <div className={styles.userName}>{data?.User.name}</div>
          <div className={styles.userAccount}>@{data?.User.account}</div>
        </div>
      </div>
      <div className={styles.infoContent}>{data?.description}</div>
      <div className={styles.time}>{`${resultTime}．${resultDate}`}</div>
      <div className={styles.count}>
        <span className={styles.countNum}>{replyCount}</span>
        <span className={styles.countTitle}>回覆</span>
        <span className={styles.countNum}>{likeCount}</span>
        <span className={styles.countTitle}>喜歡次數</span>
      </div>
      <div className={styles.iconContainer}>
        <div className={styles.msgIcon}>
          <MainReplyModal
            width={26}
            height={26}
            data={{
              name: data?.User.name,
              account: data?.User.account,
              avatar: data?.User.avatar,
              description: data?.description,
              createdAt: useMoment(data?.createdAt),
              replyPageTweetId: data?.id,
            }}
          />
        </div>
        <span>
          <button onClick={handleLike}>
            {waiting ? (
              <div className={styles["spinner"]}>
                <div class=" spinner-grow spinner-grow-sm" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : like ? (
              <HeartedIcon size={40} />
            ) : (
              <HeartIcon size={40} />
            )}
            {}
          </button>
        </span>
      </div>
    </div>
  );
};

export default MainReplyTweet;
