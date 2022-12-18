import AdminSidebar from "../components/AdminSidebar/AdminSidebar";
import PageTitle from "../components/PageTitle/PageTitle";
import AdminTweetList from "../components/AdminTweetList/AdminTweetList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useState, useEffect } from "react";
import { getAllTweets, deleteTweet } from "../apis/admin";

const AdminMainPage = ({ user }) => {
  const [allTweets, setAllTweets] = useState([]);

  useEffect(() => {
    const getAllTweetsAsync = async () => {
      try {
        const tweets = await getAllTweets();
        console.log(tweets);
        setAllTweets(tweets);
      } catch (error) {
        console.log(error);
      }
    };
    getAllTweetsAsync();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteTweet(id);
      setAllTweets((prevTweets) =>
        prevTweets.filter((tweet) => tweet.id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Container>
      <Row>
        <Col xs={1} md={2}>
          <div className="sticky-top">
            <AdminSidebar />
          </div>
        </Col>
        <Col xs md={10}>
          <div className="sticky-top">
            <PageTitle title={"推文清單"} tweetQuantity={user} />
          </div>
          <AdminTweetList tweets={allTweets} onDelete={handleDelete} />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminMainPage;
