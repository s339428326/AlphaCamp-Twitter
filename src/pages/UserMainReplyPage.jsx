import UserSidebar from "../components/UserSidebar/UserSidebar";
import PageTitle from "../components/PageTitle/PageTitle";
import MainReply from "../components/MainReply/MainReply";
import MainReplyTweet from "../components/MainReplyTweet/MainReplyTweet";
import TopUser from "../components/TopUser/TopUser";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getOneTweet, getTweetReplies } from "../apis/tweets";

const UserMainReplyPage = ({ user }) => {
  const { pathname } = useLocation();
  const tweetId = pathname.split("/")[3];
  const [replyData, setReplyData] = useState();
  const [replyList, setReplyList] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getOneTweet(tweetId);
        setReplyData({ ...res });
        console.log("getOneTweet", res);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [tweetId]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getTweetReplies(tweetId);
        setReplyList([...res]);
        console.log("getTweetReplies", res);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [tweetId]);

  return (
    <Container>
      <Row>
        <Col xs={1} md={2}>
          <div className="sticky-top">
            <UserSidebar />
          </div>
        </Col>
        <Col xs md={7}>
          <div className="sticky-top">
            <PageTitle title={"推文"} tweetQuantity={user} />
          </div>
          <MainReplyTweet data={replyData} />
          {replyList && (
            <ul className="list-unstyled ps-0">
              {replyList.map((item) => (
                <li>
                  <MainReply data={item} />
                </li>
              ))}
            </ul>
          )}
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

export default UserMainReplyPage;
