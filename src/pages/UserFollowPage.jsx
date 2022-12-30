import UserSidebar from "../components/UserSidebar/UserSidebar";
import PageTitle from "../components/PageTitle/PageTitle";
import UserFollowTabs from "../components/UserFollowTabs/UserFollowTabs";
import TopUserList from "../components/TopUserList/TopUserList";
//import UserFollowPart from "../components/UserFollowPart/UserFollowPart"
//import { FollowItem } from "../components/UserFollowPart/UserFollowPart";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUserData } from "../apis/userData";
import { useAuth } from "../contexts/AuthContext";

// import jwt_decode from "jwt-decode";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const UserFollowPage = () => {
  const [userData, setUserData] = useState();
  const navigate = useNavigate();
  const { currentMember } = useAuth();

  const url = useLocation().pathname.split("/");
  const urlUserId = url[1];
  // const token = localStorage.getItem("token");
  // const decodeData = jwt_decode(token);

  useEffect(() => {
    const userData = async () => {
      try {
        let data;
        if (currentMember.id === urlUserId) {
          data = await getUserData(currentMember.id);
        } else {
          data = await getUserData(urlUserId);
        }
        if (data === undefined) navigate(`/${currentMember.id}`);
        setUserData({
          ...data,
        });
      } catch (error) {
        console.error(error);
      }
    };
    userData();
  }, [currentMember.id, urlUserId, navigate]);

  return (
    <>
      <div className="d-block d-md-none position-fixed bottom-0 w-100 bg-white border">
        <UserSidebar />
      </div>
      <Container>
        <Row>
          <Col xs={0} md={1} lg={2}>
            <div className="d-none d-md-block sticky-top">
              <UserSidebar />
            </div>
          </Col>
          <Col className="px-0 px-sm-12" xs={12} md={11} lg={7}>
            <div>
              <div className="sticky-top">
                <PageTitle
                  title={userData?.name || "讀取中..."}
                  tweetQuantity={userData?.tweetCount}
                />
              </div>
              <UserFollowTabs navigate={navigate} userId={urlUserId} />
              <Outlet />
            </div>
          </Col>
          <Col xs={0} md={0} lg={3}>
            <div className="sticky-top d-none d-md-block">
              <TopUserList />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserFollowPage;
