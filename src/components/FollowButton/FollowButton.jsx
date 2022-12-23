import { useEffect, useState } from "react";
import styles from "./FollowButton.module.scss";
import { useAuth } from "../../contexts/AuthContext";
import { Toast } from "../../helpers/sweetalert";
import { deleteFollow, postFollow } from "../../apis/followship";
import { useTweetStatus } from "../../contexts/TweetStatusContext";
//readyOnly(boolean) => 設定只能讀取不能點擊

const FollowButton = ({ userData, readyOnly, isFollowed }) => {
  const [follow, setFollow] = useState(isFollowed);
  const [disabled, setDisabled] = useState(false);
  const { setIsFollowingUpdate } = useTweetStatus();

  const { currentMember } = useAuth();
  const currentUserId = currentMember.id;

  const handleFollowClick = async (userData, currentUserId) => {
    setDisabled(true);

    if (currentUserId === userData.id) {
      Toast.fire({
        icon: "error",
        title: "您不可以跟隨自己",
      });
      return;
    }
    try {
      const { id } = userData;
      let status = "";
      if (follow) {
        status = await deleteFollow(id);
        Toast.fire({
          icon: "error",
          title: "取消跟隨",
          timer: 1000,
        });
      } else {
        status = await postFollow(id);
        Toast.fire({
          icon: "success",
          title: "成功跟隨",
          timer: 1000,
        });
      }
      if (status === "success") {
        setTimeout(() => {
          setDisabled(false);
          setIsFollowingUpdate(true);
          setFollow(!follow);
        }, 1000);
      } else {
        setDisabled(false);
      }
    } catch (error) {
      console.error("Error: ", error);
      setDisabled(false);
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
      ${disabled && `btn`}
  `}
    >
      {disabled ? (
        <>
          <span
            className="spinner-grow spinner-grow-sm btn-primary rounded-pill"
            role="status"
            aria-hidden="true"
          ></span>
          waiting
        </>
      ) : follow ? (
        "正在跟隨"
      ) : (
        "跟隨"
      )}
    </button>
  );
};

export default FollowButton;
