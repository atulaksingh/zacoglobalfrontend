import { loginWrapper } from "@/data/loginWrapper";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const { bg, logo, logoTitle, year, author, inputs, forgotText } = loginWrapper;

const LoginWrapper = ({ register = false, forgot = false }) => {
  const newInputs = inputs.slice(
    register ? 0 : 1,
    register ? undefined : forgot ? 2 : 3
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    newInputs.forEach(({ name }) => (data[name] = formData.get(name)));
    console.log(data);
  };

  return (
    <div className="login-wrapper">
      <div
        className="login-bg"
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
      <div className="login-content">
        <div className="login-content__inner">
          <div className="logo-box">
            <div className="logo text-center">
              <Link href="/" passHref>
                <div title={logoTitle}>
                  <Image
                    src={logo.src}
                    width={134}
                    id="dLogo"
                    className="main-logo"
                    alt={logoTitle}
                    title={logoTitle}
                  />
                </div>
              </Link>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <Row>
              {newInputs.map(({ name, type, placeholder, required }) => (
                <Col key={name} md={12}>
                  <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    required={required}
                  />
                </Col>
              ))}
            </Row>
            {!register && (
              <div className="text-right">
                {forgot ? (
                  <TextSplit text={forgotText} />
                ) : (
                  <Link href="/forgot-password" passHref>Forgot your password?</Link>
                )}
              </div>
            )}
            <button type="submit" className="theme-btn btn-style-one">
              <i className="btn-curve"></i>
              <span className="btn-title">
                {register
                  ? "Register Now"
                  : forgot
                  ? "Reset Password"
                  : "Sign in"}
              </span>
            </button>
          </form>
          <div className="signup-link">
            {register ? "Already have an Account?" : "New to linoor?"}{" "}
            <Link href={register ? "/login" : "/register"} passHref>
              {register ? "Login Here" : "Signup"}
            </Link>
          </div>
          <div className="copyright-text">
            © copyright {year} by {author}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginWrapper;
