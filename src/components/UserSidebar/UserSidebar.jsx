// styles
import styles from "./UserSidebar.module.scss";
// icons
import logoUrl from "../assets/icons/logo.png";
import homeUrl from "../assets/icons/home.png";
import activeHomeUrl from "../assets/icons/home--active.png";
import profileUrl from "../assets/icons/profile.png";
import activeProfileUrl from "../assets/icons/profile--active.png";
import settingUrl from "../assets/icons/setting.png";
import activeSettingUrl from "../assets/icons/setting--active.png";
import tweetUrl from "../assets/icons/tweet.svg";
import logoutUrl from "../assets/icons/logout.png";
// Tweet
import MainTweetModal from "../MainTweetModal/MainTweetModal";
// React
import { useState } from "react";
// Router

export default function UserSidebar() {
  const [active, setActive] = useState("");

  function handleClick(event) {
    setActive(event.target.id);
  }

  return (
    <nav className={`${styles.userSidebar}`}>
      <img src={logoUrl} alt="logo-icon" className={styles.logo} />
      <div className={styles.navList}>
        <button
          key={1}
          id={"1"}
          onClick={handleClick}
          className={styles.navItem}
        >
          <img
            src={active === "1" ? activeHomeUrl : homeUrl}
            alt="home-icon"
            className={styles.navIcon}
            id={"1"}
          />
          <p className={active === "1" ? `${styles.activeText}` : ""} id={"1"}>
            首頁
          </p>
        </button>

        <button
          key={2}
          id={"2"}
          onClick={handleClick}
          className={styles.navItem}
        >
          <img
            src={active === "2" ? activeProfileUrl : profileUrl}
            alt="profile-icon"
            className={styles.navIcon}
            id={"2"}
          />
          <p className={active === "2" ? `${styles.activeText}` : ""} id={"2"}>
            個人資料
          </p>
        </button>

        <button
          key={3}
          id={"3"}
          onClick={handleClick}
          className={styles.navItem}
        >
          <img
            src={active === "3" ? activeSettingUrl : settingUrl}
            alt="setting-icon"
            className={styles.navIcon}
            id={"3"}
          />
          <p className={active === "3" ? `${styles.activeText}` : ""} id={"3"}>
            設定
          </p>
        </button>
        <MainTweetModal
          element={
            <>
              <button
                className={`${styles.tweetBtn} btn btn-primary text-white rounded-pill`}
              >
                推文
              </button>
              <div className={styles.tweetBtnContainer}>
                <img
                  src={tweetUrl}
                  alt="tweet icon"
                  className={styles.tweetBtnRwd}
                />
              </div>
            </>
          }
        />
        <button className={`${styles.navItem} ${styles.logout}`}>
          <img src={logoutUrl} alt="logout-icon" className={styles.navIcon} />
          <p>登出</p>
        </button>
      </div>
    </nav>
  );
}
