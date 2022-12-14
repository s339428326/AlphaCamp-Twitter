import AdminSidebar from "../components/AdminSidebar/AdminSidebar";
import PageTitle from "../components/PageTitle/PageTitle";
import AdminTweetList from "../components/AdminTweetList/AdminTweetList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const AdminMainPage = ({ user }) => {
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
          <AdminTweetList />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminMainPage;
