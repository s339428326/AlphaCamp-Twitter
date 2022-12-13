import styles from "../styles/UserMainPage.module.scss";
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
          <AdminSidebar />
        </Col>
        <Col xs md={10} className={styles.middle}>
          <PageTitle title={"推文清單"} tweetQuantity={user} />
          <AdminTweetList />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminMainPage;
