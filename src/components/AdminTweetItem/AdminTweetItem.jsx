import React from "react";
import CloseButton from "react-bootstrap/CloseButton";

import styles from "./AdminTweetItem.module.scss";
import useMoment from "../../hooks/useMoment";

export default function AdminTweetItem({ tweet, onDelete }) {
  return (
    <div className={`${styles["tweet-item"]}  d-flex `}>
      <img
        className={`${styles["tweet-avatar"]} rounded-circle`}
        src={
          tweet.User.avatar ||
          "https://cdn-icons-png.flaticon.com/512/149/149071.png"
        }
        alt="user-avatar"
        width={50}
        height={50}
      />
      <div>
        <div
          className={`${styles["tweet-header"]} d-flex align-items-center gap-2`}
        >
          <strong>{tweet.User.name || "無讀取資料"}</strong>
          <small className="text-light mb-0">
            @{tweet.User.account || "無讀取資料"}・
            {useMoment(tweet.createdAt) || "無讀取資料"}
          </small>
          <div className="ms-auto">
            <CloseButton
              className={styles["tweet-closeButton"]}
              onClick={() => onDelete?.(tweet.id)}
            />
          </div>
        </div>
        <p className={`${styles["tweet-content"]} mb-0`}>
          {tweet.description || "無讀取資料"}
        </p>
      </div>
    </div>
  );
}
