import React, { useState } from "react";
import { Row, Col, Card, Container } from "reactstrap";
// import './signin.css'
// import { Mail, Unlock } from 'react-feather'
import lb from "../images/sRecord-L&B.png";
import { useNavigate } from "react-router-dom";
// import { AlertCircle } from "react-feather";
import Error from "./Error";
export default function Signin() {
  const navigate = useNavigate();
  let _form = {
    email: "",
    password: "",
  };
  const [formError, setFormError] = useState({});
  const [signin, setSignin] = useState(_form);
  const handleChange = ({ target: { name, value } }) => {
    setSignin((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    let errors = {};
    let emailRe = /\S+@\S+\.\S+/;

    Object.keys(signin).forEach((m) => {
      if (signin[m] === "") {
        errors[m] = m + " cannot be empty";
      } else if (m === "email" && !emailRe.test(signin[m])) {
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
      console.log(signin);
    }
  };
  return (
    <div className="signin-container">
      {/* {JSON.stringify(formError)} */}
      <form onSubmit={handleSubmit}>
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
            <Col lg={5} md={5} className="text-center middle signin-row">
              <div className="sign-right-col">
                <div>

                  <Card className="sign-card shadow text-center">
                    {/* <img class="card-img-top img-circle rounded-circle" src="https://dummyimage.com/100x100/000/fff" /> */}
                    {/* <User className='card-img-top' size='5em' /> */}
                    <div>
                      <img src={lb} className="sign-logo" alt="sRecord Logo" />
                    </div>
                    <div className="input-wrap">
                      <div className="input-group">
                        {/* <div className="input-group-prepend">
                                    <span className="input-group-text span-icon" id=""><Mail /></span>
                                </div> */}
                        <input
                          type="email"
                          className=""
                          placeholder="Email"
                          name="email"
                          value={signin.email}
                          onChange={handleChange}
                        />
                        {formError.email && <Error errorName={formError.email} />}
                      </div>
                      <div className="input-group mt-3">
                        {/* <div className="input-group-prepend">
                                    <span className="input-group-text span-icon" id=""><Unlock /></span>
                                </div> */}
                        <input
                          type="password"
                          className=""
                          placeholder="Password"
                          name="password"
                          value={signin.password}
                          onChange={handleChange}
                          required="required"
                        />
                        {formError.password && (
                          <Error errorName={formError.password} />
                        )}
                      </div>
                    </div>
                    <Row>
                      <Col md={7}>
                        {/* <p className='remember-me'>
                                    <input className="check" type="checkbox" value="" id="" />
                                    Remember Me
                                </p> */}

                        <p
                          className="mt-1"
                          style={{ fontSize: 13, color: "red", float: "left" }}
                        >
                          {/* <AlertCircle size='1em' style={{backgroundColor:'red', color:'white', borderRadius:'50%'}}/>{" "} */}
                          {/* <Error errorName={"email or password not correct"} /> */}
                        </p>
                      </Col>
                      <Col md={5}>
                        <p
                          className="forgot-p"
                          onClick={() => navigate("/forgot-password")}

                        >
                          Forgot Password?
                        </p>
                      </Col>
                    </Row>
                    <hr></hr>
                    <p className="forgot-p">
                      Don't have an account? |{" "}
                      <span className="signup" onClick={() => navigate("/sign-up")}>
                        Sign up
                      </span>
                    </p>

                  </Card>
                  <button
                    className="login-btn"
                    onClick={() => {
                      //
                      handleSubmit();
                      //   validate();
                    }}
                  >
                    Sign in
                  </button>
                </div>
              </div>
            </Col>

          </Row>
        </Container>
      </form>
      <div className="brand-d">
        <p className="brand-info">
          Terms . <span>Privacy . </span>
          sRecord &copy; 2022
        </p>
      </div>
    </div >
  );
}
