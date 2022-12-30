import styles from "./MainReply.module.scss";
import momentFormat from "../../helpers/moment";

import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const MainReply = ({ data }) => {
  const { currentMember, userName, avatar } = useAuth();
  const localAvatar = localStorage.getItem("avatar");
  return (
    <div className={styles.replyModalTweet}>
      {/* 圖片 */}
      <div className={styles.replyModalAvatarContainer}>
        <Link to={`/${data?.User.id}/profile`}>
          {currentMember.id !== data?.User.id ? (
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
          ) : (
            <img
              className="rounded-circle"
              src={
                (localAvatar === "undefined" &&
                  "https://cdn-icons-png.flaticon.com/512/149/149071.png") ||
                (localAvatar === "null" &&
                  "https://cdn-icons-png.flaticon.com/512/149/149071.png") ||
                avatar ||
                localAvatar ||
                "https://cdn-icons-png.flaticon.com/512/149/149071.png"
              }
              alt="user-avatar"
              width={50}
              height={50}
            />
          )}
        </Link>
      </div>
      {/* 內容 */}
      <div className={styles.tweetInfo}>
        <div className={styles.infoTop}>
          <Link to={`/${data?.User.id}/profile`}>
            {currentMember.id !== data?.User.id ? (
              <span className={styles.infoTopPrime}>{data?.User.name}</span>
            ) : (
              <span className={styles.infoTopPrime}>
                {userName || data?.User.name}
              </span>
            )}
            <span
              className={styles.infoTopSec}
            >{`@${data?.User.account}`}</span>
          </Link>
          <span className={styles.infoTopSec}>{`．${momentFormat(
            data?.createdAt
          )}`}</span>
        </div>
        <div className={styles.tweetReplyTo}>
          <Link to={`/${data?.Tweet.User.id}/profile`}>
            <span className={styles.tweetReplyToSec}>回覆給 </span>
            <span
              className={styles.tweetReplyToPrime}
            >{`@${data?.Tweet.User.account}`}</span>
          </Link>
        </div>
        <Link to={`/${data?.User.id}/reply/${data?.Tweet.id}`}>
          <div className={styles.infoContent}>
            <p>{data?.comment}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MainReply;
