import { useState, useEffect } from "react";
//Component
import AdminSidebar from "../components/AdminSidebar/AdminSidebar";
import PageTitle from "../components/PageTitle/PageTitle";
import AdminUserList from "../components/AdminUserList/AdminUserList";
//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//API
import { getAllUsers } from "../apis/admin";

const AdminUserPage = ({ user }) => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const getAllUsersAsync = async () => {
      try {
        const users = await getAllUsers();
        console.log(users);
        setAllUsers(users);
      } catch (error) {
        console.log(error);
      }
    };
    getAllUsersAsync();
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={1} md={2} lg={2}>
          <div className="sticky-top">
            <AdminSidebar />
          </div>
        </Col>
        <Col xs={11} md={10} lg={10}>
          <div className="sticky-top">
            <PageTitle title={"使用者列表"} tweetQuantity={user} />
          </div>
          <AdminUserList users={allUsers} />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminUserPage;
