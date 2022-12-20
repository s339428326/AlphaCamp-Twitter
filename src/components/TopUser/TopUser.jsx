import styles from "./TopUser.module.scss";
import FollowButton from "../FollowButton/FollowButton";

const TopUser = ({ user }) => {
  //const name = user.name
  const name = user.name;
  const shortName = name.substring(0, 6);

  return (
    <div className={styles.userContainer}>
      <div>
        <img
          src={
            user.avatar ||
            "https://cdn-icons-png.flaticon.com/512/149/149071.png"
          }
          alt="user-avatar"
          width={50}
          height={50}
          className={styles.avatar}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{shortName}</div>
        <div className={styles.account}>{user.account}</div>
      </div>
      <div className={styles.btn}>
        <FollowButton />
      </div>
    </div>
  );
};

export default TopUser;
