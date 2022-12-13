import styles from "./AdminSidebar.module.scss";
import logoUrl from "../assets/icons/logo.png";
import homeUrl from "../assets/icons/home.png";
import profileUrl from "../assets/icons/profile.png";
import logoutUrl from "../assets/icons/logout.png";

export default function AdminSidebar() {
  return (
    <nav className={`${styles.adminSidebar}`}>
      <img src={logoUrl} alt="logo-icon" className={styles.logo} />
      <div className={styles.navList}>
        <button className={styles.navItem}>
          <img src={homeUrl} alt="home-icon" className={styles.navIcon} />
          推文清單
        </button>
        <button className={styles.navItem}>
          <img src={profileUrl} alt="profile-icon" className={styles.navIcon} />
          使用者列表
        </button>

        <button className={`${styles.navItem} ${styles.logout}`}>
          <img src={logoutUrl} alt="logout-icon" className={styles.navIcon} />
          登出
        </button>
      </div>
    </nav>
  );
}
