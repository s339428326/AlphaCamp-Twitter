// import { Outlet } from "react-router-dom";
import UserSidebar from "../components/UserSidebar/UserSidebar";
import PageTitle from "../components/PageTitle/PageTitle";
import UserFollowTabs from "../components/UserFollowTabs/UserFollowTabs";
import TopUser from "../components/TopUser/TopUser";
//import UserFollowPart from "../components/UserFollowPart/UserFollowPart"
import { FollowItem } from "../components/UserFollowPart/UserFollowPart";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const UserFollowPage = ({ user }) => {
  const navigate = useNavigate();
  // const OutletContainer = () => {
  //   return (
  //     <div>
  //       <Outlet />
  //     </div>
  //   );
  // };
  return (
    <Container>
      <Row>
        <Col xs={1} md={2}>
          <div className="sticky-top">
            {" "}
            <UserSidebar />
          </div>
        </Col>
        <Col xs md={7}>
          <div>
            <div className="sticky-top">
              <PageTitle title={user} tweetQuantity={user} />
            </div>
            <UserFollowTabs navigate={navigate} />
            {/*先用 followItem，followpart要等功能實作 然後要設定條件，如果沒有追蹤者就顯示提示，有的話再render出來*/}
            <div>
              <FollowItem />
            </div>
            {/*<div><OutletContainer /></div>*/}
          </div>
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

export default UserFollowPage;
