import React, { useState } from "react";
import styles from "./UserProfileTabs.module.scss";

//Tweet
export const Tweet = ({
  userName,
  userId,
  createTime,
  tweetId,
  tweetContent,
  replyQuantity,
  likeQuantity,
}) => {
  return <div className="border-start border-end border-bottom">Tweet</div>;
};

const UserProfileTabs = () => {
  //get Location to change active
  //這裡暫時使用useState代替
  const [activeList, setActiveList] = useState({
    tweet: true,
    reply: false,
    like: false,
  });

  const handleActive = (e) => {
    const buttonName = e.target.innerText;

    switch (buttonName) {
      case "回覆":
        setActiveList({
          tweet: false,
          reply: true,
          like: false,
        });
        break;
      case "喜歡的內容":
        setActiveList({
          tweet: false,
          reply: false,
          like: true,
        });
        break;

      default:
        setActiveList({
          tweet: true,
          reply: false,
          like: false,
        });
        break;
    }
  };

  return (
    <div>
      <ul className="list-unstyled d-flex flex-wrap mb-0 border-start border-end border-bottom">
        <li>
          <button
            className={`${styles["btn"]} ${
              activeList.tweet && styles["active"]
            }`}
            onClick={handleActive}
          >
            推文
          </button>
        </li>
        <li>
          <button
            className={`${styles["btn"]} ${
              activeList.reply && styles["active"]
            }`}
            onClick={handleActive}
          >
            回覆
          </button>
        </li>
        <li>
          <button
            className={`${styles["btn"]} ${
              activeList.like && styles["active"]
            }`}
            onClick={handleActive}
          >
            喜歡的內容
          </button>
        </li>
      </ul>
      <Tweet />
    </div>
  );
};

export default UserProfileTabs;
