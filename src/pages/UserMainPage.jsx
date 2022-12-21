import UserSidebar from "../components/UserSidebar/UserSidebar";
import PageTitle from "../components/PageTitle/PageTitle";
import MainCreateTweet from "../components/MainCreateTweet/MainCreateTweet";
import Tweet from "../components/Tweet/Tweet";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";

import { getUserData } from "../apis/userData";
import { getAllTweets } from "../apis/tweets";
import { useTweetStatus } from "../contexts/TweetStatusContext";
import { useLocation } from "react-router-dom";
import TopUserList from "../components/TopUserList/TopUserList";

const Tweets = ({ userId }) => {
  const [allTweets, setAllTweets] = useState([]);
  const { pathname } = useLocation();
  const { isGlobalTweetUpdate, setIsGlobalTweetUpdate } = useTweetStatus();

  useEffect(() => {
    const updateAllTweets = async () => {
      try {
        const tweets = await getAllTweets();
        setAllTweets(tweets);
        setIsGlobalTweetUpdate(false);
      } catch (error) {
        console.error(error);
      }
    };

    if (pathname === `/${userId}` || isGlobalTweetUpdate) {
      updateAllTweets();
    }
  }, [pathname, isGlobalTweetUpdate, setIsGlobalTweetUpdate, userId]);
  // console.log('check', allTweets)
  return (
    <ul className="list-unstyled ps-0">
      {allTweets.map((tweet) => (
        <li key={tweet.id}>
          <Tweet data={tweet} />
        </li>
      ))}
    </ul>
  );
};

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
        if (data === undefined) navigate("/login");
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
        <Col xs={1} md={1} lg={2}>
          <div className="sticky-top">
            <UserSidebar userData={userData} />
          </div>
        </Col>
        <Col xs={11} md={11} lg={7}>
          <div className="sticky-top">
            <PageTitle title={"首頁"} />
          </div>
          <MainCreateTweet userData={userData} />
          <Tweets userId={currentMember.id} />
        </Col>
        <Col xs={0} md={0} lg={3}>
          <div className="sticky-top ">
            <TopUserList />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UserMainPage;
