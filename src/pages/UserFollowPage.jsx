import styles from "../styles/UserFollowPage.module.scss";
import { Outlet } from "react-router-dom";
import UserSidebar from "../components/UserSidebar/UserSidebar";
import PageTitle from "../components/PageTitle/PageTitle";
import UserFollowTabs from "../components/UserFollowTabs/UserFollowTabs";
//import UserFollowPart from "../components/UserFollowPart/UserFollowPart"
import { FollowItem } from "../components/UserFollowPart/UserFollowPart";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const UserFollowPage = ({ user }) => {
  const navigate = useNavigate();
  const OutletContainer = () => {
    return (
      <div>
        <Outlet />
      </div>
    );
  };
  return (
    <Container>
      <Row>
        <Col xs={1} md={2}>
          <UserSidebar />
        </Col>
        <Col xs md={7}>
          <div className={styles.middle}>
            <PageTitle title={user} tweetQuantity={user} />
            <UserFollowTabs navigate={navigate} />
            {/*先用 followItem，followpart要等功能實作 然後要設定條件，如果沒有追蹤者就顯示提示，有的話再render出來*/}
            <div className={styles.followList}>
              <FollowItem />              
            </div>
            {/*<div><OutletContainer /></div>*/}
          </div>
        </Col>
        <Col xs={4} md={3}>
          <div className={styles.right}>TopUser</div>
        </Col>
      </Row>
    </Container>
  );
};

export default UserFollowPage;