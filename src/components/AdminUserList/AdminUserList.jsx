import React from "react";
import styles from "./AdminUserList.module.scss";
import MessageIcon from "../../components/assets/icons/comment.png";
import HeartIcon from "../../components/assets/icons/like.png";

export function AdminUserCard() {
  return (
    <div className={styles.userCard}>
      <div className={styles.backgroundImg}>
        <img
          src="https://img.freepik.com/free-photo/beautiful-scenery-phragmites-plants-by-sea-with-swimming-pelican-sunset_181624-37787.jpg"
          className={styles.cardImgTop}
          alt=""
        />
      </div>
      <div className={styles.avatar}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          className={styles.cardImgTop}
          alt=""
        />
      </div>
      <div className={styles.cardBody}>
        <h5 className={styles.cardTitle}>John</h5>
        <p className={styles.cardText}>@john123</p>
        <div class={`${styles.reply} ${styles.row}`}>
          <div class={styles.replyCount}>
            <img src={MessageIcon} alt="message-icon" /> 1.5k
          </div>
          <div class={styles.likeCount}>
            <img src={HeartIcon} alt="heart-icon" /> 20k
          </div>
        </div>
        <div class={`${styles.follow} ${styles.row}`}>
          <div class={styles.followingCount}>
            <p>
              <span>5個</span>跟隨中
            </p>
          </div>
          <div class={styles.followerCount}>
            <p>
              <span>3位</span>跟隨者
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AdminUserList() {
  return (
    <div className={styles.userListContainer}>
      <AdminUserCard />
      <AdminUserCard />
      <AdminUserCard />
      <AdminUserCard />
      <AdminUserCard />
      <AdminUserCard />
      <AdminUserCard />
      <AdminUserCard />
    </div>
  );
}
