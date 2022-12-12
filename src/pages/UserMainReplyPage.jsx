import styles from "../styles/UserMainPage.module.scss";
import UserSidebar from "../components/UserSidebar/UserSidebar";
import PageTitle from "../components/PageTitle/PageTitle";
import MainReply from "../components/MainReply/MainReply";
import MainReplyTweet from "../components/MainReplyTweet/MainReplyTweet";

const UserMainReplyPage = ({ user }) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <UserSidebar />
      </div>
      <div className={styles.middle}>
        <PageTitle title={"推文"} tweetQuantity={user} />
        <MainReplyTweet />
        <MainReply />
      </div>
      <div className={styles.right}>TopUser</div>
    </div>
  );
};

export default UserMainReplyPage;
