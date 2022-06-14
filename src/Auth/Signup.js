import React, { useState } from "react";
import { Row, Col, Card } from "reactstrap";
// import { Mail, Phone, Unlock, User } from 'react-feather'
import { useNavigate } from "react-router-dom";
import lb from "../images/sRecord-L&B.png";
import { AlertCircle } from "react-feather";
import Error from "./Error";
// import lb from '../images/s-white.png'

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
                {formError.fullName && <Error errorName={formError.fullName} />}
                {/* <Error errorName={"Enter Phone Number"} /> */}
                <input
                  type="text"
                  placeholder="Full Name"
                  name="fullName"
                  value={signup.fullName}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                {formError.phone && <Error errorName={formError.phone} />}
                {/* <Error errorName={"Enter Phone Number"} /> */}
                <input
                  type="number"
                  placeholder="Phone"
                  name="phone"
                  value={signup.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group mt-3">
                {formError.email && <Error errorName={formError.email} />}
                {/* <Error errorName={"Enter Email"} /> */}
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={signup.email}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group mt-3">
                {formError.password && <Error errorName={formError.password} />}
                {/* <Error errorName={"Enter Password"} /> */}
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={signup.password}
                  onChange={handleChange}
                />
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
          <button className="login-btn" onClick={handleSubmit}>
            Sign up
          </button>
        </Col>
        <Col md={2}></Col>
      </Row>
    </div>
  );
}
