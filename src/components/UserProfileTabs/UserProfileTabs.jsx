import { useNavigate, useLocation } from "react-router-dom";
import styles from "./UserProfileTabs.module.scss";

const UserProfileTabs = () => {
  //use router navigate
  const navigate = useNavigate();
  //url path
  const url = useLocation();
  const routerName = url.pathname.split("/");
  const userId = routerName[1];
  const item = routerName[3];
  console.log();

  //get Location to change active
  //這裡暫時使用useState代替

  return (
    <div>
      <ul className="list-unstyled d-flex flex-wrap mb-0 border-start border-end border-bottom">
        <li>
          <button
            className={`${styles["btn"]} ${
              (item === "" || item === undefined) && styles["active"]
            }`}
            onClick={() => {
              navigate(`/${userId}/profile/`);
            }}
          >
            推文
          </button>
        </li>
        <li>
          <button
            className={`${styles["btn"]} ${
              item === "reply" && styles["active"]
            }`}
            onClick={() => {
              navigate(`/${userId}/profile/reply`);
            }}
          >
            回覆
          </button>
        </li>
        <li>
          <button
            className={`${styles["btn"]} ${
              item === "like" && styles["active"]
            }`}
            onClick={() => {
              navigate(`/${userId}/profile/like`);
            }}
          >
            喜歡的內容
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserProfileTabs;
