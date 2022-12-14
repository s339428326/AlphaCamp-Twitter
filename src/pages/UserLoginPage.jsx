//component
import AuthInput from "../components/AuthInput/AuthInput";
import Logo from "../components/Logo/Logo";
//react-bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//react
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
//context
import { useAuth } from "../contexts/AuthContext";
//plugin
import Swal from "sweetalert2";
//regex
import { validAccount, validPassword } from "../helpers/regex";

const UserLoginPage = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated, currentMember, setIsAuthenticated } =
    useAuth();

  const [loginPage, setLoginPage] = useState({
    account: "",
    password: "",
  });

  const handleInput = (keyName) => (currentValue) => {
    setLoginPage({
      ...loginPage,
      [keyName]: currentValue,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // console
    //空白阻擋
    if (!(loginPage.account && loginPage.password)) {
      Swal.fire({
        position: "top",
        title: "登入失敗！",
        text: "請填妥所有欄位",
        timer: 1000,
        icon: "error",
        showConfirmButton: false,
      });
      return;
    }
    //請求Login api
    const success = await login({
      account: loginPage["account"],
      password: loginPage["password"],
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

    // Swal.fire({
    //   position: "top",
    //   title: "登入失敗！",
    //   timer: 1000,
    //   icon: "error",
    //   showConfirmButton: false,
    // });
  };

  useEffect(() => {
    console.log("[LoginPage useEffect] isAuthenticated:", isAuthenticated);

    if (localStorage.getItem("id") === "4") {
      localStorage.clear();
      setIsAuthenticated(false);
      navigate("/login");
    } else {
      if (isAuthenticated === true) {
        navigate(`/${currentMember.id}`);
      }
    }
  }, [navigate, isAuthenticated, currentMember, setIsAuthenticated]);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <Logo title={"登入 Alphitter"} />
          <form action="">
            <AuthInput
              value={login.account}
              autoComplete="username"
              onChange={handleInput("account")}
              placeholder="請輸入帳號"
              error={
                loginPage.account.match(validAccount)
                  ? ""
                  : "帳號不可含有特殊字元"
              }
            />
            <AuthInput
              label="密碼"
              type="password"
              autoComplete="current-password"
              value={login.password}
              onChange={handleInput("password")}
              placeholder="請輸入密碼"
              error={
                loginPage.password.match(validPassword)
                  ? ""
                  : "密碼不可含有特殊字元"
              }
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
            <Link to="/register">註冊</Link>
            <span className="text-blue">·</span>
            <Link to="/admin">後台登入</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UserLoginPage;
