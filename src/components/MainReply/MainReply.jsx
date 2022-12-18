import styles from "./MainReply.module.scss";
import useMoment from "../../hooks/useMoment";

const MainReply = ({ data }) => {
  return (
    <div className={styles.replyModalTweet}>
      {/* 圖片 */}
      <div className={styles.replyModalAvatarContainer}>
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
      {/* 內容 */}
      <div className={styles.tweetInfo}>
        <div className={styles.infoTop}>
          <span className={styles.infoTopPrime}>{data?.User.name}</span>
          <span className={styles.infoTopSec}>{`@${data?.User.account}`}</span>
          <span className={styles.infoTopSec}>{`．${useMoment(
            data?.createdAt
          )}`}</span>
        </div>
        <div className={styles.tweetReplyTo}>
          <span className={styles.tweetReplyToSec}>回覆給 </span>
          <span
            className={styles.tweetReplyToPrime}
          >{`@${data?.Tweet.User.account}`}</span>
        </div>
        <div className={styles.infoContent}>
          <p>{data?.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default MainReply;
