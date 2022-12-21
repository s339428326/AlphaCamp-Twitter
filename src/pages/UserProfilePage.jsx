//Component
import UserSidebar from "../components/UserSidebar/UserSidebar";
import UserProfilePart from "../components/UserProfilePart/UserProfilePart";
import UserProfileTabs from "../components/UserProfileTabs/UserProfileTabs";
import TopUserList from "../components/TopUserList/TopUserList";

//react-bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//react-router-dom
import { Outlet, useLocation, useNavigate } from "react-router-dom";

//react
import { useState, useEffect } from "react";

//api
import { getUserData } from "../apis/userData";
import { useAuth } from "../contexts/AuthContext";

const UserProfilePage = () => {
  ///////////update userData////////////
  //userData狀態
  const [userData, setUserData] = useState();

  const { currentMember } = useAuth();

  //分析路由
  const navigate = useNavigate();
  const url = useLocation().pathname.split("/");
  const urlUserId = url[1];

  // const userId = localStorage.getItem("id");

  useEffect(() => {
    const userInfo = async () => {
      //decodeData.id
      try {
        const data = await getUserData(urlUserId);
        //如果為undefined 跳轉首頁
        if (data === undefined) navigate(`/${currentMember.id}`);
        //添加是否訪問別人頁面判斷
        setUserData({
          ...data,
          isVisitOthers: currentMember.id !== Number(urlUserId),
        });
      } catch (error) {
        console.log(error);
      }
    };
    userInfo();
  }, [currentMember.id, urlUserId, navigate]);

  ///////////update userData////////////
  return (
    <Container>
      <Row>
        <Col xs={1} md={1} lg={2}>
          <div className="sticky-top">
            <UserSidebar userData={currentMember} />
          </div>
        </Col>
        <Col xs={11} md={11} lg={7}>
          <UserProfilePart userData={userData} />
          <UserProfileTabs />
          <Outlet />
        </Col>
        <Col xs={0} md={0} lg={3}>
          <div className="sticky-top">
            <TopUserList />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfilePage;
