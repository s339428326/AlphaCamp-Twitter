import styles from "../styles/UserMainPage.module.scss";
import UserSidebar from "../components/UserSidebar/UserSidebar";
import PageTitle from "../components/PageTitle/PageTitle";
import MainReply from "../components/MainReply/MainReply";
import MainReplyTweet from "../components/MainReplyTweet/MainReplyTweet";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const UserMainReplyPage = ({ user }) => {
  return (
    <Container>
      <Row>
        <Col xs={1} md={2}>
          <UserSidebar />
        </Col>
        <Col xs md={7} className={styles.middle}>
          <PageTitle title={"推文"} tweetQuantity={user} />
          <MainReplyTweet />
          <MainReply />
        </Col>
        <Col xs={4} md={3}>
          <div>TopUsers</div>
        </Col>
      </Row>
    </Container>
  );
};

export default UserMainReplyPage;
