import UserSidebar from "../components/UserSidebar/UserSidebar";
import PageTitle from "../components/PageTitle/PageTitle";
import UserFollowTabs from "../components/UserFollowTabs/UserFollowTabs";
import TopUser from "../components/TopUser/TopUser";
//import UserFollowPart from "../components/UserFollowPart/UserFollowPart"
//import { FollowItem } from "../components/UserFollowPart/UserFollowPart";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUserData } from "../apis/userData";
import jwt_decode from "jwt-decode";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const UserFollowPage = () => {
  const [userData, setUserData] = useState();
  const navigate = useNavigate();
  const url = useLocation().pathname.split("/");
  const urlUserId = url[1];
  const token = localStorage.getItem("token");
  const decodeData = jwt_decode(token);

  useEffect(() => {
    const userData = async () => {
      try {
        const data = await getUserData(urlUserId);
        if (data === undefined) navigate(`/${decodeData.id}`);
        setUserData({
          ...data,
          isVisitOthers: decodeData.id !== Number(urlUserId),
        });
      } catch (error) {
        console.error(error);
      }
    };
    userData();
  }, [decodeData.id, urlUserId, navigate]);

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
              <PageTitle
                title={userData?.name || "讀取中..."}
                tweetQuantity={userData?.tweetCount}
              />
            </div>
            <UserFollowTabs navigate={navigate} userId={urlUserId}/>
            <Outlet />
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
