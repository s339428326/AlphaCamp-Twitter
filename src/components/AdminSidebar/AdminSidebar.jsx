import styles from "./AdminSidebar.module.scss";
import logoUrl from "../assets/icons/logo.png";
import homeUrl from "../assets/icons/home.png";
import activeHomeUrl from "../assets/icons/home--active.png";
import profileUrl from "../assets/icons/profile.png";
import activeProfileUrl from "../assets/icons/profile--active.png";
import logoutUrl from "../assets/icons/logout.png";

import { useState } from "react";

export default function AdminSidebar() {
  const [active, setActive] = useState("");
  function handleClick(event) {
    setActive(event.target.id);
  }
  return (
    <nav className={`${styles.adminSidebar}`}>
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
            推文清單
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
            使用者列表
          </p>
        </button>

        <button className={`${styles.navItem} ${styles.logout}`}>
          <img src={logoutUrl} alt="logout-icon" className={styles.navIcon} />
          登出
        </button>
      </div>
    </nav>
  );
}
