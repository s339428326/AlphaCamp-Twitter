import styles from "./UserFollowPart.module.scss";
import FollowButton from "../FollowButton/FollowButton";
import { getUserFollowers, getUserFollowings } from "../../apis/userData";
import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const FollowItem = ({ userData }) => {
  const { name, avatar, introduction, isFollowed, id } = userData;
  return (
    <div className={`${styles.followItem} d-flex`}>
      <div>
        <Link to={`/${id}/profile`} className={styles.link}>
          <img
            className="rounded-circle"
            src={
              avatar || "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt="user-avatar"
            width={50}
            height={50}
          />
        </Link>
      </div>
      {/* 內容 */}
      <div className={styles.followInfo}>
        <div className={styles.followName}>
          <Link to={`/${id}/profile`} className={styles.link}>
            {name}{" "}
          </Link>
        </div>
        {/*<div className={styles.followAcount}>@test</div>*/}
        <div className={styles.followDescription}>{introduction}</div>
      </div>
      <div className={styles.followBtn}>
        <FollowButton isFollow={isFollowed} />
      </div>
    </div>
  );
};

const UserFollowPart = () => {
  const urlUserId = useLocation().pathname.split("/")[1];
  const [followerData, setFollowerData] = useState([]);
  const [followingData, setFollowingData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getFollowers = async () => {
      try {
        setIsLoading(true);
        const userFollowers = await getUserFollowers(urlUserId);
        setFollowerData(userFollowers.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getFollowers();
  }, [urlUserId]);

  useEffect(() => {
    const getFollowings = async () => {
      try {
        setIsLoading(true);
        const userFollowings = await getUserFollowings(urlUserId);
        setFollowingData(userFollowings.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getFollowings();
  }, [urlUserId]);

  const location = useLocation();
  const followType = location.pathname.split("/")[3];
  let data;
  if (followType === undefined) {
    data = followerData;
  } else {
    switch (followType) {
      case "follower":
        data = followerData;
        break;
      case "following":
        data = followingData;
        break;
      default:
        data = [];
    }
  }

  return (
    <div>
      {isLoading ? (
        <div className={styles.alert}>Loading...</div>
      ) : data.length === 0 ? (
        <div className={styles.alert}>
          {followType === "following" ? "No followings" : "No followers"}
        </div>
      ) : (
        data.map((item, index) => {
          return (
            <FollowItem
              key={
                `follower-${index}-${item.followerId}` ||
                `following-${index}-${item.followingId}`
              }
              userData={item.Followings || item.Followers}
            />
          );
        })
      )}
    </div>
  );
};

export default UserFollowPart;
