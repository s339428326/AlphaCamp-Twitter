import FollowButton from "../FollowButton/FollowButton";
import styles from "./TopUserList.module.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTopUsers } from "../../apis/userData";
import { useTweetStatus } from "../../contexts/TweetStatusContext";

export const TopUser = ({ user }) => {
  const name = user.name;
  const shortName = name.substring(0, 6);

  return (
    <div className={styles.userContainer}>
      <div>
        <Link to={`/${user.id}/profile`}>
          <img
            src={
              user.avatar ||
              "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt="user-avatar"
            width={50}
            height={50}
            className={styles.avatar}
          />{" "}
        </Link>
      </div>
      <Link to={`/${user.id}/profile`}>
        <div className={styles.info}>
          <div className={styles.name}>{shortName}</div>

          <div className={styles.account}>@{user.account}</div>
        </div>
      </Link>

      <div className={styles.btn}>
        <FollowButton
          className={styles.followBtn}
          userData={user}
          isFollowed={user.isFollowed}
        />
      </div>
    </div>
  );
};

const TopUserList = () => {
  const [topUsers, setTopUsers] = useState();
  const { isFollowingUpdate, setIsFollowingUpdate } = useTweetStatus();
  useEffect(() => {
    const topUsers = async () => {
      try {
        const { data } = await getTopUsers();
        setTopUsers(data);
        if (isFollowingUpdate) {
          setIsFollowingUpdate(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    topUsers();
  }, [setIsFollowingUpdate, isFollowingUpdate]);
  return (
    <div className={styles.container}>
      <div className={styles.title}>推薦跟隨</div>
      <ul className="list-unstyled ps-0">
        {topUsers?.map((user) => (
          <li key={`topuser-${user.id}`}>
            <TopUser user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopUserList;
