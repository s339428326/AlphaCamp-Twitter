//Component
import UserSidebar from "../components/UserSidebar/UserSidebar";
import styles from "../styles/UserMainPage.module.scss";
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
        <Col xs={1} md={2}>
          <UserSidebar />
        </Col>
        <Col xs md={7} className={styles.middle}>
          <PageTitle title={"帳戶設定"} />
          <Setting />
        </Col>
      </Row>
    </Container>
  );
};

export default UserSettingPage;
