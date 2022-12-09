import styles from "./UserFollowPart.module.scss";
import { useEffect, useState } from "react";

const FollowButton = ({ onClick, isFollow }) => {
  const [follow, setFollow] = useState(false);
  useEffect(() => {
    if (isFollow) {
      setFollow(true);
    } else {
      setFollow(false);
    }
  }, [isFollow]);

  return (
    <button
      onClick={() => setFollow((currentValue) => !currentValue)}
      className={`${styles.btn} btn ${
        follow ? "btn-primary text-white" : "btn-outline-primary"
      } rounded-pill`}
    >
      {follow ? "正在跟隨" : "跟隨"}
    </button>
  );
};

export const FollowItem = ({ avatarImg, isFollow }) => {
  return (
<div className={`${styles.followItem} d-flex`}>
    <div>
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
    <div className={styles.followInfo}>
      <div className={styles.followName}>username</div>
      {/*<div className={styles.followAcount}>@test</div>*/}
      <div className={styles.followDescription}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, ullam
        laboriosam! Libero eos aut nostrum. Tempora, quidem reiciendis!
        Expedita, ea. Nisi impedit voluptates incidunt molestias, soluta modi
        deleniti magnam asperiores?
      </div>
    </div>
    <div className={styles.followBtn}><FollowButton isFollow={isFollow} /></div>
  </div>
  )
};

const UserFollowPart = ({
  follows,
  isFollow,
}) => {
  return (
    <div>
      {follows.map((follow) => {
        return (
          <FollowItem
            key={follow.id}
            avatarImg={follow.img}
            isFollow={isFollow}
          />
        );
      })}
    </div>
  )
};
export default UserFollowPart;
