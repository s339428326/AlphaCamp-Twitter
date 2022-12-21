//Component
import Logo from "../components/Logo/Logo";
import AuthInput from "../components/AuthInput/AuthInput";
//react-bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//React
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Swal from "sweetalert2";

import { useAuth } from "../contexts/AuthContext";

import { validAccount, validPassword, validEmail } from "../helpers/regex";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { register, isAuthenticated, currentMember } = useAuth();

  const [registerPage, setRegisterPage] = useState({
    account: "",
    name: "",
    email: "",
    password: "",
    checkPassword: "",
  });

  const handleInput = (keyName) => (currentValue) => {
    setRegisterPage({
      ...registerPage,
      [keyName]: currentValue,
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();

    //空白阻擋
    if (
      !(
        registerPage.account &&
        registerPage.name &&
        registerPage.email &&
        registerPage.password &&
        registerPage.checkPassword
      )
    ) {
      Swal.fire({
        position: "top",
        title: "註冊失敗！",
        text: "請填妥所有欄位",
        timer: 1000,
        icon: "error",
        showConfirmButton: false,
      });
      return;
    }

    if (
      !(
        registerPage.account.match(validAccount) &&
        registerPage.password.match(validPassword)
      )
    ) {
      Swal.fire({
        position: "top",
        title: "註冊失敗！",
        text: "帳號或密碼不可含有特殊字元",
        timer: 1000,
        icon: "error",
        showConfirmButton: false,
      });
      return;
    }

    if (!registerPage.email.match(validEmail)) {
      Swal.fire({
        position: "top",
        title: "註冊失敗！",
        text: "Email格式不正確",
        timer: 1000,
        icon: "error",
        showConfirmButton: false,
      });
      return;
    }

    const success = await register({
      account: registerPage["account"],
      name: registerPage["name"],
      email: registerPage["email"],
      password: registerPage["password"],
      checkPassword: registerPage["checkPassword"],
    });

    if (success) {
      Swal.fire({
        position: "top",
        title: "註冊成功！",
        timer: 1000,
        icon: "success",
        showConfirmButton: false,
      });
      return;
    }
    // Swal.fire({
    //   position: "top",
    //   title: "註冊失敗！",
    //   timer: 1000,
    //   icon: "error",
    //   showConfirmButton: false,
    // });
  };

  useEffect(() => {
    console.log("[Signup useEffect] isAuthenticated:", isAuthenticated);
    if (isAuthenticated) {
      navigate(`/${currentMember.id}`);
    }
  }, [navigate, isAuthenticated, currentMember]);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <Logo title="建立你的帳號" />
          <form action="">
            <AuthInput
              value={register.account}
              onChange={handleInput("account")}
              placeholder="請輸入帳號"
            />
            <AuthInput
              label="名稱"
              value={register.name}
              onChange={handleInput("name")}
              placeholder="請輸入使用者名稱"
            />
            <AuthInput
              label="Email"
              type="email"
              value={register.email}
              onChange={handleInput("email")}
              placeholder="請輸入Email"
            />
            <AuthInput
              label="密碼"
              type="password"
              autoComplete="new-password"
              value={register.password}
              onChange={handleInput("password")}
              placeholder="請輸入密碼"
            />
            <AuthInput
              label="密碼確認"
              type="password"
              autoComplete="new-password"
              value={register.checkPassword}
              onChange={handleInput("checkPassword")}
              placeholder="請輸入密碼再次輸入密碼"
            />
            <div className="mb-3">
              <button
                onClick={handleClick}
                className="btn btn-primary w-100 text-white rounded-pill"
              >
                註冊
              </button>
            </div>
          </form>

          <div className="d-flex justify-content-center">
            <Link to="/login">取消</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
