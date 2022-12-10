import styles from "./MainCreateTweet.module.scss";
import MainTweetModal from "../MainTweetModal/MainTweetModal";

const MainCreateTweet = ({ avatarImg }) => {

  return (
    <div className={styles.tweetInput}>
      <div className={styles.inputContainer} >
        <div className={styles.inputAvatar} >
          <img
            src={
              avatarImg ||
              "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt="user-avatar"
            width={50}
            height={50}
          />
        </div>
        <input
          className={styles.inputContent}
          placeholder="有什麼新鮮事？"
        ></input>
      </div>
      <div className={styles.modalBtn}>
        <MainTweetModal />
      </div>
    </div>
  );
};

export default MainCreateTweet;
