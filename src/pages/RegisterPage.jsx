//Component
import Logo from "../components/Logo/Logo";
import AuthInput from "../components/AuthInput/AuthInput";
//react-bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//React
import { Link } from "react-router-dom";
import { useState } from "react";

const RegisterPage = () => {
  const [register, setRegister] = useState({
    account: "",
    name: "",
    email: "",
    password: "",
    checkPassword: "",
  });

  const handleInput = (keyName) => (currentValue) => {
    setRegister({
      ...register,
      [keyName]: currentValue,
    });
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6} xl={8}>
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
              <button className="btn btn-primary w-100 text-white rounded-pill">
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
