import styles from "./AdminTweetList.module.scss";
import crossUrl from "../../components/assets/icons/cross.png";

const AdminTweetList = ({ avatarImg }) => {
  return (
    <div className={styles.mainTweet}>
      {/* 圖片 */}
      <div className={styles.replyModalAvatarContainer}>
        <img
          src={
            avatarImg || "https://cdn-icons-png.flaticon.com/512/149/149071.png"
          }
          alt="user-avatar"
          width={50}
          height={50}
        />
      </div>
      {/* 內容 */}
      <div className={styles.tweetInfo}>
        <div className={styles.infoTop}>
          <span className={styles.infoTopPrime}>username</span>
          <span className={styles.infoTopSec}>@test</span>
          <span className={styles.infoTopSec}>．test</span>
          <img src={crossUrl} alt="cross url" className={styles.crossIcon} />
        </div>
        <div className={styles.infoContent}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, ullam
          laboriosam! Libero eos aut nostrum. Tempora, quidem reiciendis!
          Expedita, ea. Nisi impedit voluptates incidunt molestias, soluta modi
          deleniti magnam asperiores?
        </div>
      </div>
    </div>
  );
};
export default AdminTweetList;
