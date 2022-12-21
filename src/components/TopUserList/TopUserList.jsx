import FollowButton from "../FollowButton/FollowButton";
import styles from "./TopUserList.module.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTopUsers } from "../../apis/userData";

export const TopUser = ({ user }) => {
  const name = user.name;
  const shortName = name.substring(0, 6);

  return (
    <Link to={`/${user.id}/profile`}>
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

          <div className={styles.account}>@{user.account}</div>
        </div>
        <div className={styles.btn}>
          <Link>
            <FollowButton
              className={styles.followBtn}
              userData={user}
              isFollowed={user.isFollowed}
            />
          </Link>
        </div>
      </div>
    </Link>
  );
};

const TopUserList = () => {
  const [topUsers, setTopUsers] = useState();
  useEffect(() => {
    const topUsers = async () => {
      try {
        const { data } = await getTopUsers();
        setTopUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    topUsers();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.title}>推薦跟隨</div>
      <ul className="list-unstyled ps-0">
        {topUsers?.map((user) => (
          <li key={user.id}>
            <TopUser user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopUserList;
