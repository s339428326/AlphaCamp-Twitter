//Component
import UserSidebar from "../components/UserSidebar/UserSidebar";
import PageTitle from "../components/PageTitle/PageTitle";
import Setting from "../components/Setting/Setting";
//react-bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";

const UserSettingPage = () => {
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
            <PageTitle title={"帳戶設定"} />
          </div>
          <Setting />
        </Col>
      </Row>
    </Container>
  );
};

export default UserSettingPage;
