import { useEffect, useState } from "react";
import styles from "./FollowButton.module.scss";

//[U_08] get-user-followings 取得指定使用者的追蹤者 GET /api/users/:id/followings
//followingId

//readyOnly(boolean) => 設定只能讀取不能點擊

const FollowButton = ({ followingId, isFollow, readyOnly }) => {
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
      onClick={() => {
        //API[U_08]
        if (!readyOnly) setFollow((currentValue) => !currentValue);
      }}
      className={`
      ${styles["btn"]} 
      ${
        follow
          ? `btn btn-primary text-white  ${readyOnly && styles.hover1}`
          : `btn btn-outline-primary ${readyOnly && styles.hover2}`
      } 
      rounded-pill
      `}
    >
      {follow ? "正在跟隨" : "跟隨"}
    </button>
  );
};

export default FollowButton;
