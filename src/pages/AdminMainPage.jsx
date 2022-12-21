import { useState, useEffect } from "react";
//Component
import AdminSidebar from "../components/AdminSidebar/AdminSidebar";
import PageTitle from "../components/PageTitle/PageTitle";
import AdminTweetList from "../components/AdminTweetList/AdminTweetList";
//react-bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//API
import { getAllTweets, deleteTweet } from "../apis/admin";
//plugin
import Swal from "sweetalert2";

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
      Swal.fire({
        position: "top",
        title: "您確定嗎?",
        text: "刪除的推文是回不來的喔!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#555",
        confirmButtonText: "確認",
      }).then((result) => {
        if (result.isConfirmed) {
          setAllTweets((prevTweets) =>
            prevTweets.filter((tweet) => tweet.id !== id)
          );
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
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
