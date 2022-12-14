import styles from "./MainCreateTweet.module.scss";
import MainTweetModal from "../MainTweetModal/MainTweetModal";
import { useAuth } from "../../contexts/AuthContext";

const MainCreateTweet = ({ userData }) => {
  const { avatar } = useAuth();
  const localAvatar = localStorage.getItem("avatar");
  return (
    <div className={styles.tweetInput}>
      <div className={styles.inputContainer}>
        <div className={styles.inputAvatar}>
          <MainTweetModal
            userData={userData}
            element={
              <img
                className="rounded-circle"
                src={
                  (userData?.avatar === null &&
                    "https://cdn-icons-png.flaticon.com/512/149/149071.png") ||
                  avatar ||
                  userData?.avatar ||
                  localAvatar ||
                  "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
                alt="user-avatar"
                width={50}
                height={50}
              />
            }
          />
        </div>
        <MainTweetModal
          userData={userData}
          element={
            <input
              className={styles.inputContent}
              placeholder="有什麼新鮮事？"
            ></input>
          }
        />
      </div>
      <div className={styles.modalBtn}>
        <MainTweetModal
          userData={userData}
          element={
            <button className="btn btn-primary text-white rounded-pill">
              推文
            </button>
          }
        />
      </div>
    </div>
  );
};

export default MainCreateTweet;
