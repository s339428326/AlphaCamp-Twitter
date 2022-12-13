import UserSidebar from "../components/UserSidebar/UserSidebar";
import PageTitle from "../components/PageTitle/PageTitle";
import MainReply from "../components/MainReply/MainReply";
import MainReplyTweet from "../components/MainReplyTweet/MainReplyTweet";
import TopUser from "../components/TopUser/TopUser";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const UserMainReplyPage = ({ user }) => {
  return (
    <Container>
      <Row>
        <Col xs={1} md={2}>
          <div className="sticky-top">
            <UserSidebar />
          </div>
        </Col>
        <Col xs md={7}>
          <div className="sticky-top">
            <PageTitle title={"推文"} tweetQuantity={user} />
          </div>
          <MainReplyTweet />
          <MainReply />      
        </Col>
        <Col xs={4} md={3}>
          <div className="sticky-top">
            <TopUser />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UserMainReplyPage;
