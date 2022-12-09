import styles from "./UserSidebar.module.scss";
import logoUrl from "../assets/icons/logo.png";
import homeUrl from "../assets/icons/home.png";
import profileUrl from "../assets/icons/profile.png";
import settingUrl from "../assets/icons/setting.png";
import logoutUrl from "../assets/icons/logout.png";

export default function UserSidebar() {
  return (
    <nav className={`${styles.userSidebar}`}>
      <img src={logoUrl} alt="logo-icon" className={styles.logo} />
      <div className={styles.navList}>
        <button className={styles.navItem}>
          <img src={homeUrl} alt="home-icon" className={styles.navIcon} />
          首頁
        </button>
        <button className={styles.navItem}>
          <img src={profileUrl} alt="profile-icon" className={styles.navIcon} />
          個人資料
        </button>
        <button className={styles.navItem}>
          <img src={settingUrl} alt="setting-icon" className={styles.navIcon} />
          設定
        </button>
        <button className="btn btn-primary text-white rounded-pill">
          推文
        </button>
        <button className={`${styles.navItem} ${styles.logout}`}>
          <img src={logoutUrl} alt="logout-icon" className={styles.navIcon} />
          登出
        </button>
      </div>
    </nav>
  );
}
