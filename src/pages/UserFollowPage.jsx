import styles from "../styles/UserFollowPage.module.scss";
import { Outlet } from "react-router-dom";
import UserSidebar from "../components/UserSidebar/UserSidebar";
import PageTitle from "../components/PageTitle/PageTitle";
import UserFollowTabs from "../components/UserFollowTabs/UserFollowTabs";
//import UserFollowPart from "../components/UserFollowPart/UserFollowPart"
import { FollowItem } from "../components/UserFollowPart/UserFollowPart";
import { useNavigate } from "react-router-dom";

const UserFollowPage = ({ user }) => {
  const navigate = useNavigate();
  const Container = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <UserSidebar />
      </div>
      <div className={styles.middle}>
        <PageTitle title={user} tweetQuantity={user} />
        <UserFollowTabs navigate={navigate} />
        {/*先用 followItem，followpart要等功能實作 然後要設定條件，如果沒有追蹤者就顯示提示，有的話再render出來*/}
        <div className={styles.followList}>
          <FollowItem />
        </div>
        {/*<div><Container /></div>*/}
      </div>
      <div className={styles.right}>TopUser</div>
    </div>
  );
};

export default UserFollowPage;
