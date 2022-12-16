//Component
import UserSidebar from "../components/UserSidebar/UserSidebar";
import TopUser from "../components/TopUser/TopUser";
import PageTitle from "../components/PageTitle/PageTitle";
import UserProfilePart from "../components/UserProfilePart/UserProfilePart";
import UserProfileTabs from "../components/UserProfileTabs/UserProfileTabs";

//react-bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//react-router-dom
import { Outlet } from "react-router-dom";

//react
import { useState, useEffect } from "react";

//jwt
import jwt_decode from "jwt-decode";

//api
import { getUserData } from "../apis/userData";

const UserProfilePage = () => {
  //用來對造是否為本人
  //假設取得帳號自己的userId

  ///////////update userData////////////
  const [userData, setUserData] = useState();

  //decode userId
  const token = localStorage.getItem("token");
  const decodeData = jwt_decode(token);

  //get userData
  useEffect(() => {
    const userInfo = async () => {
      try {
        const data = await getUserData(decodeData.id);
        setUserData({ ...data });
      } catch (error) {
        console.log(error);
      }
    };
    ///是否為本人
    userInfo();
  }, [decodeData.id]);

  console.log("get Data", userData);
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
            <PageTitle
              title={userData?.name || "讀取中..."}
              tweetQuantity={userData?.replyCount || "讀取中..."}
            />
          </div>
          <UserProfilePart userData={userData} />
          <UserProfileTabs />
          <Outlet />
        </Col>
        <Col xs={3}>
          <TopUser />
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfilePage;
