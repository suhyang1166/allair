import React from "react";
import "./LoginPage.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="Intro">
      <div className="login_wrap">
        <div className="login_bg"></div>
        <article className="login_main">
          <h1>로그인</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                className="login_box"
                placeholder="아이디"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                className="login_box"
                placeholder="비밀번호"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Link to="/main">
              <Button
                className="login_box login_btn"
                variant="primary"
                type="submit"
              >
                로그인
              </Button>
            </Link>
          </Form>
        </article>
      </div>
    </div>
  );
};

export default LoginPage;
