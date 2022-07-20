import React, { useState } from "react";
import { Row, Col, Card, Container } from "reactstrap";
import { useNavigate } from "react-router-dom";
import lb from "../images/sRecord-L&B.png";
import Error from "./Error";

export default function Signup() {
  const navigate = useNavigate();
  let _form = {
    fullName: "",
    phone: "",
    email: "",
    password: "",
  };

  const [signup, setSignup] = useState(_form);
  const handleChange = ({ target: { name, value } }) => {
    setSignup((prev) => ({ ...prev, [name]: value }));
  };

  const [formError, setFormError] = useState({});
  const validateForm = () => {
    let errors = {};
    let emailRe = /\S+@\S+\.\S+/;
    Object.keys(signup).forEach((m) => {
      if (signup[m] === "") {
        errors[m] = m + " cannot be empty";
      } else if (m === "email" && !emailRe.test(signup[m])) {
        errors[m] = m + " is not valid";
      }
    });
    return errors;
  };

  const handleSubmit = () => {
    let errorObj = validateForm();
    if (Object.keys(errorObj).length) {
      setFormError(errorObj);
    } else {
      navigate("/home");
      console.log(signup);
    }
  };

  return (
    <div className="signin-container">
      <Container>
        <Row className="m-0 p-0">
          <Col md={7} className="signin-row signin-row-mobile">
            <div
              className="sign-left-col"
            >
              <div>
                <h1 className="sign-heading">
                  One-Click students report generator
                </h1>
                <p className="sign-para">
                  Creating high quality and accurate reports.
                </p>
                <button className="s-btn" onClick={() => navigate("/sign-up")}>
                  Get Started
                </button>
              </div>
            </div>
          </Col>
          <Col md={5} className="text-center middle signin-row">
            <div className="sign-right-col">
              <div>
                <Card className="sign-card shadow text-center">
                  <div>
                    <img src={lb} className="sign-logo" alt="sRecord Logo" />
                  </div>
                  <div className="input-wrap">
                    <div className="input-group">
                      {/* <Error errorName={"Enter Phone Number"} /> */}
                      <input
                        type="text"
                        placeholder="Full Name"
                        name="fullName"
                        value={signup.fullName}
                        onChange={handleChange}
                      />
                      {formError.fullName && <Error errorName={formError.fullName} />}
                    </div>
                    <div className="input-group">
                      {/* <Error errorName={"Enter Phone Number"} /> */}
                      <input
                        type="number"
                        placeholder="Phone"
                        name="phone"
                        value={signup.phone}
                        onChange={handleChange}
                      />
                      {formError.phone && <Error errorName={formError.phone} />}
                    </div>
                    <div className="input-group mt-3">
                      {/* <Error errorName={"Enter Email"} /> */}
                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={signup.email}
                        onChange={handleChange}
                      />
                      {formError.email && <Error errorName={formError.email} />}
                    </div>
                    <div className="input-group mt-3">
                      {/* <Error errorName={"Enter Password"} /> */}
                      <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={signup.password}
                        onChange={handleChange}
                      />
                      {formError.password && <Error errorName={formError.password} />}
                    </div>
                  </div>
                  {/* <Row>
                            <Col md={6}>
                                <p className='remember-me'>
                                    <input className="check" type="checkbox" value="" />
                                    Remember Me
                                    </p>
                                    </Col>
                                    <Col md={6}>
                                    </Col>
                                </Row> */}
                  <Row className="">
                    <Col lg={6} md={6} sm={6} xs={6}>
                      {/* <p className="mt-1" style={{ fontSize: 13, color: "red" }}>
                  All input fields are required
                </p> */}
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={6}></Col>
                  </Row>
                  <hr></hr>
                  <p className="forgot-p">
                    Have an account? |{" "}
                    <span className="signup" onClick={() => navigate("/sign-in")}>
                      Sign in
                    </span>
                  </p>
                </Card>
                <button className="login-btn" onClick={handleSubmit}>
                  Sign up
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="brand-d">
        <p className="brand-info">
          Terms . <span>Privacy . </span>
          sRecord &copy; 2022
        </p>
      </div>
    </div>
  );
}
