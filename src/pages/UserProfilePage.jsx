//Component
import UserSidebar from "../components/UserSidebar/UserSidebar";
import TopUser from "../components/TopUser/TopUser";
import PageTitle from "../components/PageTitle/PageTitle";
import UserProfilePart from "../components/UserProfilePart/UserProfilePart";
import UserProfileTabs from "../components/UserProfileTabs/UserProfileTabs";
import Tweet from "../components/Tweet/Tweet";

//react-bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//react-router-dom
// import { useParams } from "react-router-dom";

const UserProfilePage = () => {
  //用來對造是否為本人
  //假設取得帳號自己的userId
  //   const myself = "master";
  return (
    <Container>
      <Row>
        <Col xs={1} md={2}>
          <div className="sticky-top">
            <UserSidebar />
          </div>
        </Col>
        <Col xs={7}>
          <div className="sticky-top">
            <PageTitle title={"UserName"} tweetQuantity={"Quantity"} />
          </div>
          <UserProfilePart />
          <UserProfileTabs />
          <Tweet />
        </Col>
        <Col xs={3}>
          <TopUser />
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfilePage;
