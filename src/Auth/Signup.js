import React from "react";
import { Row, Col, Card } from "reactstrap";
// import { Mail, Phone, Unlock, User } from 'react-feather'
import { useNavigate } from "react-router-dom";
import lb from "../images/sRecord-L&B.png";
import { AlertCircle } from "react-feather";
import Error from "./Error";
// import lb from '../images/s-white.png'

export default function Signup() {
  const navigate = useNavigate();

  return (
    <div className="signin-container">
      <Row className="m-0 p-0">
        <Col md={1}></Col>
        <Col md={5} className="signin-row">
          <div className="sign-left-col">
            <h1 className="sign-heading">
              One-Click students reports generator
            </h1>
            <p className="sign-para">
              Creating high quality and accurate reports.
            </p>
            <button className="s-btn" onClick={() => navigate("/sign-in")}>
              Sign in
            </button>
          </div>
        </Col>
        <Col md={4} className="text-center middle signin-row">
          {/* <h1 className='brand-name'>sRecord</h1> */}
          <Card className="sign-card shadow text-center">
            <div>
              <img src={lb} className="sign-logo" alt="sRecord Logo" />
            </div>
            <div className="input-wrap">
              <div className="input-group">
                <p
                  className="m-0 p-0 pt-0"
                  style={{ fontSize: 13, color: "red", float: "left" }}
                >
                  <AlertCircle
                    size="1em"
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      borderRadius: "50%",
                    }}
                  />{" "}
                  Enter First Name
                </p>
                <input type="text" placeholder="Full Name" />
              </div>
              <div className="input-group">
                <Error errorName={"Enter Phone Number"} />
                <input type="number" placeholder="Phone" />
              </div>
              <div className="input-group mt-3">
                <Error errorName={"Enter Email"} />

                <input type="email" placeholder="Email" />
              </div>
              <div className="input-group mt-3">
                <Error errorName={"Enter Password"} />

                <input type="password" placeholder="Password" />
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
            <p className="dont-have-account">
              Have an account? |{" "}
              <span className="signup" onClick={() => navigate("/sign-in")}>
                Sign in
              </span>
            </p>
          </Card>
          <button className="login-btn" onClick={() => navigate("/home")}>
            Sign up
          </button>
        </Col>
        <Col md={2}></Col>
      </Row>
    </div>
  );
}
