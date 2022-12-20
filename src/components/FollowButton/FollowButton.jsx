import { useEffect, useState } from "react";
import styles from "./FollowButton.module.scss";
import { useAuth } from "../../contexts/AuthContext";
//readyOnly(boolean) => 設定只能讀取不能點擊

const FollowButton = ({ followingId, isFollow, userData, readyOnly }) => {
  const [follow, setFollow] = useState(false);
  const { currentMember } = useAuth();
  const currentUserId = currentMember.id
  //console.log(currentUserId)
    //console.log('check button', userData)



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
