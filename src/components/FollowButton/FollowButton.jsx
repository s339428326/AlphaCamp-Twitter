import { useEffect, useState } from "react";
import styles from "./FollowButton.module.scss";
import { useAuth } from "../../contexts/AuthContext";
import { Toast } from "../../helpers/Toast";
import { deleteFollow, postFollow } from "../../apis/followship";
//readyOnly(boolean) => 設定只能讀取不能點擊

const FollowButton = ({ userData, readyOnly, isFollowed }) => {
  const [follow, setFollow] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const { currentMember } = useAuth();
  const currentUserId = currentMember.id;

  const handleFollowClick = async (userData, currentUserId) => {
    if (currentUserId === userData.id) {
      Toast.fire({
        icon: "error",
        title: "不要這麼喜歡自己",
        willClose: () => setDisabled(false)
      });     
       setDisabled(true)
      return;
    }
    try {
      const { isFollowed, id } = userData;
      if (isFollowed) {
        await deleteFollow(id);
        Toast.fire({
          icon: "error",
          title: "取消追隨",
          willClose: () => setDisabled(false)
        });
      } else {
        await postFollow(id);
        Toast.fire({
          icon: "success",
          title: "成功追隨",
          willClose: () => setDisabled(false)
        });
      }
      setDisabled(true)
      setFollow((currentValue) => !currentValue);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  useEffect(() => {
    setFollow(isFollowed);
  }, [isFollowed]);
  
 
  return (
    <button
      disabled={disabled}
      onClick={() => handleFollowClick(userData, currentUserId)}
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
