import { useState, useEffect } from "react";
import FollowButton from "../FollowButton/FollowButton";
import styles from "./TopUserList.module.scss";
//Router
import { Link } from "react-router-dom";
//API
import { getTopUsers } from "../../apis/userData";
//Context
import { useTweetStatus } from "../../contexts/TweetStatusContext";
import { useAuth } from "../../contexts/AuthContext";

export const TopUser = ({ user }) => {
  // const name = user.name;
  // const shortName = name.substring(0, 6);
  const shortName =
    user.name.length > 10 ? `${user.name.substring(0, 6)} ...` : user.name;
  const shortAccount =
    user.account.length > 10
      ? `${user.account.substring(0, 7)} ...`
      : user.account;
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

          <div className={styles.account}>@{shortAccount}</div>
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
  const { currentMember } = useAuth();
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
        {topUsers
          ?.filter((user) => user.id !== currentMember.id)
          .slice(0, 10)
          .map((user) => (
            <li key={`topuser-${user.id}`}>
              <TopUser user={user} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TopUserList;
