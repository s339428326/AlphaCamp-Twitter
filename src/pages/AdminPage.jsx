//Component
import AuthInput from "../components/AuthInput/AuthInput";
import Logo from "../components/Logo/Logo";
//react-bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//React
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
//context
import { useAuth } from "../contexts/AuthContext";
//plugin
import Swal from "sweetalert2";

const AdminPage = () => {
  const navigate = useNavigate();
  const { adminLogin, isAuthenticated } = useAuth();
  const [adminLoginPage, setAdminLoginPage] = useState({
    account: "",
    password: "",
  });

  const handleInput = (keyName) => (currentValue) => {
    setAdminLoginPage({
      ...adminLoginPage,
      [keyName]: currentValue,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    // console
    //空白阻擋
    if (!(adminLoginPage.account && adminLoginPage.password)) return;
    //請求Login api
    const success = await adminLogin({
      account: adminLoginPage["account"],
      password: adminLoginPage["password"],
    });
    //呼叫sweetAlert
    if (success) {
      // 登入成功訊息
      // navigate("")
      Swal.fire({
        position: "top",
        title: "登入成功！",
        timer: 1000,
        icon: "success",
        showConfirmButton: false,
      });
      return;
    }

    Swal.fire({
      position: "top",
      title: "登入失敗！",
      timer: 1000,
      icon: "error",
      showConfirmButton: false,
    });
  };

  useEffect(() => {
    console.log("[adminLoginPage useEffect] isAuthenticated:", isAuthenticated);
    if (isAuthenticated) {
      navigate("/admin_main");
    }
  }, [navigate, isAuthenticated]);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xl={6} md={8}>
          <Logo title={"後台登入"} />
          <form action="">
            <AuthInput
              value={adminLoginPage.account}
              onChange={handleInput("account")}
              placeholder="請輸入帳號"
            />
            <AuthInput
              label="密碼"
              type="password"
              autoComplete="current-password"
              value={adminLoginPage.password}
              onChange={handleInput("password")}
              placeholder="請輸入密碼"
            />
            <div className="mb-3">
              <button
                onClick={handleLogin}
                className="btn btn-primary w-100 text-white rounded-pill"
              >
                登入
              </button>
            </div>
          </form>
          <div className="d-flex justify-content-end">
            <Link to="/login">前台登入</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminPage;
