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
  const { isAuthenticated, currentMember } = useAuth();

  const url = useLocation().pathname.split("/");
  const urlUserId = url[1];
  // const token = localStorage.getItem("token");
  // const decodeData = jwt_decode(token);
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [navigate, isAuthenticated]);

  useEffect(() => {
    const userData = async () => {
      try {
        const data = await getUserData(currentMember.id);
        if (data === undefined) navigate(`/${currentMember.id}`);
        setUserData({
          ...data,
        });
      } catch (error) {
        console.error(error);
      }
    };
    userData();
  }, [currentMember.id, navigate]);

  return (
    <Container>
      <Row>
        <Col xs={1} md={2}>
          <div className="sticky-top">
            {" "}
            <UserSidebar userData={userData} />
          </div>
        </Col>
        <Col xs md={7}>
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
        <Col xs={4} md={3}>
          <div className="sticky-top">
            <TopUserList />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UserFollowPage;
