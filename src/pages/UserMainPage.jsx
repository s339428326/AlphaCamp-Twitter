import UserSidebar from "../components/UserSidebar/UserSidebar";
import PageTitle from "../components/PageTitle/PageTitle";
import MainCreateTweet from "../components/MainCreateTweet/MainCreateTweet";
import Tweet from "../components/Tweet/Tweet";
import TopUser from "../components/TopUser/TopUser";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const UserMainPage = ({ user }) => {
  return (
    <Container>
      <Row>
        <Col xs={1} lg={2}>
          <div className="sticky-top">
            <UserSidebar />
          </div>
        </Col>
        <Col xs={7}>
          <div className="sticky-top">
            <PageTitle title={"首頁"} tweetQuantity={user} />
          </div>
          <MainCreateTweet />
          <Tweet />
        </Col>
        <Col xs={4} lg={3}>
          <div className="sticky-top ">
            <TopUser />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UserMainPage;
