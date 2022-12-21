import { useEffect, useState } from "react";
import styles from "./FollowButton.module.scss";
import { useAuth } from "../../contexts/AuthContext";
import { Toast } from "../../helpers/sweetalert";
import { deleteFollow, postFollow } from "../../apis/followship";
import { useTweetStatus } from "../../contexts/TweetStatusContext";
//readyOnly(boolean) => 設定只能讀取不能點擊

const FollowButton = ({ userData, readyOnly, isFollowed }) => {
  const [follow, setFollow] = useState(false);
  const [isUserFollowed, setIsUserFollowed] = useState(isFollowed);
  const [disabled, setDisabled] = useState(false);
  const { setIsFollowingUpdate } = useTweetStatus();

  const { currentMember } = useAuth();
  const currentUserId = currentMember.id;

  const handleFollowClick = async (userData, currentUserId, isUserFollowed) => {
    if (currentUserId === userData.id) {
      Toast.fire({
        icon: "error",
        title: "您不可以跟隨自己",
        //willClose: () => setDisabled(false),
      });
      setDisabled(true);
      return;
    }
    try {
      const { id } = userData;
      if (isUserFollowed) {
        await deleteFollow(id);
        Toast.fire({
          icon: "error",
          title: "取消跟隨",
          //willClose: () => setDisabled(false),
        });
      } else {
        await postFollow(id);
        Toast.fire({
          icon: "success",
          title: "成功跟隨",
          //willClose: () => setDisabled(false),
        });
      }
      setIsFollowingUpdate(true);
      //setDisabled(true);
      setFollow((currentValue) => !currentValue);
      setIsUserFollowed(!isUserFollowed)
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
      onClick={() => handleFollowClick(userData, currentUserId, isUserFollowed)}
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
