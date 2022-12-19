//Component
import UserSidebar from "../components/UserSidebar/UserSidebar";
import TopUser from "../components/TopUser/TopUser";
import UserProfilePart from "../components/UserProfilePart/UserProfilePart";
import UserProfileTabs from "../components/UserProfileTabs/UserProfileTabs";

//react-bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//react-router-dom
import { Outlet, useLocation, useNavigate } from "react-router-dom";

//react
import { useState, useEffect } from "react";

//jwt
import jwt_decode from "jwt-decode";

//api
import { getUserData } from "../apis/userData";
import { useAuth } from "../contexts/AuthContext";

const UserProfilePage = () => {
  ///////////update userData////////////
  //userData狀態
  const [userData, setUserData] = useState();
  const {currentMember} = useAuth()
  
  //分析路由
  const navigate = useNavigate();
  const url = useLocation().pathname.split("/");
  const urlUserId = url[1];

  //解碼(decode) userId
  const token = localStorage.getItem("token");
  const decodeData = jwt_decode(token);

  useEffect(() => {
    const userInfo = async () => {
      //decodeData.id
      try {
        const data = await getUserData(urlUserId);
        //如果為undefined 跳轉首頁
        if (data === undefined) navigate(`/${decodeData.id}`);
        //添加是否訪問別人頁面判斷
        setUserData({
          ...data,
          isVisitOthers: decodeData.id !== Number(urlUserId),
        });
      } catch (error) {
        console.log(error);
      }
    };
    userInfo();
  }, [decodeData.id, urlUserId, navigate]);

  ///////////update userData////////////
  return (
    <Container>
      <Row>
        <Col xs={1} lg={2}>
          <div className="sticky-top">
            <UserSidebar userData={currentMember}/>
          </div>
        </Col>
        <Col xs={7}>
          <UserProfilePart userData={userData} />
          <UserProfileTabs />
          <Outlet />
        </Col>
        <Col xs={3}>
          <div className="sticky-top">
            <TopUser />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfilePage;
