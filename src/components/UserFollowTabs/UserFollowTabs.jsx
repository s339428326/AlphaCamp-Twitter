import styles from "./UserFollowTabs.module.scss"
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const UserFollowTabs = ({navigate , userId}) => {
  const [active, setActive] = useState ({
  follower: true,
  following: false,
});
const location = useLocation();
useEffect(()=> {
 if (location.pathname.endsWith('/follower')) {
      setActive({
        follower: true,
        following: false,
      });
    } else if (location.pathname.endsWith('/following')) {
      setActive({
        follower: false,
        following: true,
      });
    }
  }, [location]);
  
  const handleActive = (e) => {
    const buttonName = e.target.innerText;
    
    switch (buttonName) {
      case "跟隨者":
        setActive({
          follower: true,
          following: false,
        });
        navigate(`/${userId}/follow/follower`);

        break;
      case "正在跟隨":
        setActive({
          follower: false,
          following: true,
        });
      navigate(`/${userId}/follow/following`);
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