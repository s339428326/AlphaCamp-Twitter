import styles from "./UserFollowTabs.module.scss"
import { useState} from "react";

const UserFollowTabs = () => {
  const [active, setActive] = useState ({
  follower: true,
  following: false,
});
  const handleActive = (e) => {
    const buttonName = e.target.innerText;

    switch (buttonName) {
      case "跟隨者":
        setActive({
          follower: true,
          following: false,
        });
        break;
      case "正在跟隨":
        setActive({
          follower: false,
          following: true,
        });
        break;

      default:
        setActive({
          follower: true,
          following: false,
        });
        break;
    }
  };
return (
  <div>
    <ul className="border-start border-end border-bottom d-flex flex-wrap list-unstyled">
      <li>
        <button className={`${styles.btn} ${active.follower && styles.active}`} onClick={handleActive}>跟隨者</button>
      </li>
      <li>
        <button className={`${styles.btn} ${active.following && styles.active}`} onClick={handleActive}>正在跟隨</button>
      </li>
    </ul>
  </div>
)
}

export default UserFollowTabs