import styles from "../styles/UserMainPage.module.scss";
import AdminSidebar from "../components/AdminSidebar/AdminSidebar";
import PageTitle from "../components/PageTitle/PageTitle";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AdminUserList from "../components/AdminUserList/AdminUserList";
const AdminUserPage = ({ user }) => {
  return (
    <Container>
      <Row>
        <Col xs={1} md={2}>
          <AdminSidebar />
        </Col>
        <Col xs md={10} className={styles.middle}>
          <PageTitle title={"使用者列表"} tweetQuantity={user} />
          <AdminUserList />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminUserPage;
