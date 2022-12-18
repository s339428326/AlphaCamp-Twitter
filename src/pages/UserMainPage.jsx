import UserSidebar from "../components/UserSidebar/UserSidebar";
import PageTitle from "../components/PageTitle/PageTitle";
import MainCreateTweet from "../components/MainCreateTweet/MainCreateTweet";
import Tweet from "../components/Tweet/Tweet";
import TopUser from "../components/TopUser/TopUser";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";

import { getUserData } from "../apis/userData";

const UserMainPage = () => {
  // check permission
  const navigate = useNavigate();
  const { isAuthenticated, currentMember } = useAuth();
  const [userData, setUserData] = useState();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    } 
  }, [navigate, isAuthenticated]);

  useEffect(() => {
    const userData = async () => {
      try {
        const data = await getUserData(currentMember.id);
        if (data === undefined) navigate('/login');
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
          <Col xs={1} lg={2}>
            <div className="sticky-top">
              <UserSidebar userData={userData} />
            </div>
          </Col>
          <Col xs={7}>
            <div className="sticky-top">
              <PageTitle title={"首頁"} />
            </div>
            <MainCreateTweet userData={userData} />
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
