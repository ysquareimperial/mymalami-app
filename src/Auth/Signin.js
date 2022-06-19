import React, { useState } from "react";
import { Row, Col, Card } from "reactstrap";
// import './signin.css'
// import { Mail, Unlock } from 'react-feather'
import lb from "../images/sRecord-L&B.png";
import { useNavigate } from "react-router-dom";
import { AlertCircle } from "react-feather";
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
      <Row className="m-0 p-0">
        <Col lg={1} md={1}></Col>
        <Col md={5} className="signin-row" style={{position:'relative'}}>
          <div className="sign-left-col" style={{position:'absolute', top:50}}>
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
        </Col>
        <Col lg={4} md={4} className="text-center middle signin-row">
          {/* <h1 className='brand-name'>sRecord</h1> */}
          <Card className="sign-card shadow text-center">
            {/* <img class="card-img-top img-circle rounded-circle" src="https://dummyimage.com/100x100/000/fff" /> */}
            {/* <User className='card-img-top' size='5em' /> */}
            <div>
              <img src={lb} className="sign-logo" alt="sRecord Logo" />
            </div>
            <form onSubmit={handleSubmit}>
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
            </form>
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
                  style={{ cursor: "pointer" }}
                >
                  Forgot Password?
                </p>
              </Col>
            </Row>
            <hr></hr>
            <p className="dont-have-account">
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
        </Col>
        <Col md={2}></Col>
      </Row>
    </div>
  );
}
