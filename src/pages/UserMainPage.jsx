import styles from "../styles/UserMainPage.module.scss";
import UserSidebar from "../components/UserSidebar/UserSidebar";
import PageTitle from "../components/PageTitle/PageTitle";
import MainCreateTweet from "../components/MainCreateTweet/MainCreateTweet";
import MainTweet from "../components/MainTweet/MainTweet";
import TopUser from "../components/TopUser/TopUser";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const UserMainPage = ({ user }) => {
  return (
    <Container>
      <Row>
        <Col xs={1} md={2}>
          <UserSidebar />
        </Col>
        <Col xs md={7} className={styles.middle}>
          <PageTitle title={"首頁"} tweetQuantity={user} />
          <MainCreateTweet />
          <MainTweet />
        </Col>
        <Col xs={4} md={3}>
          <div className="border">
            <TopUser />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UserMainPage;
