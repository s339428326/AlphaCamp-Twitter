import styles from "./TopUser.module.scss";
import FollowButton from "../FollowButton/FollowButton";

const TopUser = ({ user }) => {
  //const name = user.name
const name = "pizza hut"
const shortName = name.substring(0, 6) + "...";

  return (
    <div className={styles.container}>
      <div className={styles.title}>推薦跟隨</div>
      <div className={styles.userContainer}>
        <div>
          <img
            src={
              user || "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt="user-avatar"
            width={50}
            height={50}
          />
        </div>
        <div className={styles.info}>
          <div className={styles.name}>{shortName}</div>
          <div className={styles.account}>pizza hut</div>
        </div>
        <div className={styles.btn}>
          <FollowButton />
        </div>
      </div>
    </div>
  );
};

export default TopUser;
