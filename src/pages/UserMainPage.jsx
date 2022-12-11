import styles from "../styles/UserMainPage.module.scss";
import UserSidebar from "../components/UserSidebar/UserSidebar";
import PageTitle from "../components/PageTitle/PageTitle";
import MainCreateTweet from "../components/MainCreateTweet/MainCreateTweet";
import MainTweet from "../components/MainTweet/MainTweet";

const UserMainPage = ({ user }) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <UserSidebar />
      </div>
      <div className={styles.middle}>
        <PageTitle title={"首頁"} tweetQuantity={user} />
        <MainCreateTweet />
        <MainTweet />
      </div>
      <div className={styles.right}>TopUser</div>
    </div>
  );
};

export default UserMainPage;
