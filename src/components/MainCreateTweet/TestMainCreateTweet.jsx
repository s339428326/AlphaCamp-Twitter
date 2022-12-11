import styles from "./MainCreateTweet.module.scss";
import TestTweetModal from "../MainTweetModal/TestTweetModal";

const TestMainCreateTweet = ({ avatarImg }) => {

  return (
    <div className={styles.tweetInput}>
      <div className={styles.inputContainer} >
        <div className={styles.inputAvatar} >
          <TestTweetModal element={<img
            src={
              avatarImg ||
              "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt="user-avatar"
            width={50}
            height={50}
          />} />
          
        </div>
        <TestTweetModal element={<input
          className={styles.inputContent}
          placeholder="有什麼新鮮事？"
        ></input>} />
      </div>
      <div className={styles.modalBtn}>
        <TestTweetModal element={<button className="btn btn-primary text-white rounded-pill">
          推文
      </button>}/>
      </div>
    </div>
  );
};

export default TestMainCreateTweet;
