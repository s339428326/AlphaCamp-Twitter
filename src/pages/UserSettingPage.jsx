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
    <>
      <div className="d-block d-md-none position-fixed bottom-0 w-100 bg-white border">
        <UserSidebar />
      </div>
      <Container>
        <Row>
          <Col xs={0} md={1} lg={2}>
            <div className="d-none d-md-block sticky-top">
              <UserSidebar />
            </div>
          </Col>
          <Col className="px-0 px-sm-12" xs={12} md={11} lg={7}>
            <div className="sticky-top">
              <PageTitle title={"帳戶設定"} />
            </div>
            <Setting />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserSettingPage;
