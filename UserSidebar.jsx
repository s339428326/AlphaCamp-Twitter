import React from 'react'
import styles from './UserSidebar.module.css'
import logoUrl from '../../icons/logo.png'
import homeUrl from '../../icons/home.png'
import profileUrl from '../../icons/profile.png'
import settingUrl from '../../icons/setting.png'
import logoutUrl from '../../icons/logout.png'

export default function UserSidebar() {
  return (
    <nav className={styles.userSidebar}>
    <img src={logoUrl} alt="logo-icon" className={styles.logo}/>
    <div className={styles.navList}>
    <button className={styles.navItem}>
      <img src={homeUrl}alt="home-icon" className={styles.navIcon}/>
      <p>首頁</p>
    </button>
    <button className={styles.navItem}>
    <img src={profileUrl}alt="profile-icon"className={styles.navIcon}/>
      <p>個人資料</p>
    </button>
    <button className={styles.navItem}>
      <img src={settingUrl} alt="setting-icon"className={styles.navIcon}/>
      <p>設定</p>
    </button>
    <button className={styles.tweetButton}>
      <p>推文</p>
    </button>
    <button className={styles.navItem}>
      <img src={logoutUrl} alt="logout-icon"className={styles.navIcon}/>
      <p>登出</p>
    </button>
    


    </div>

    
    
    </nav>
  )
}
