import React from "react";
import { Card, Col, Row } from "reactstrap";
import profile from "../images/profile.png";
// import user from '../images/user.png'
import email from "../images/email.png";
import iphone from "../images/iphone.png";
import address from "../images/address.png";
import pen from "../images/pen.png";
import ysquare from "../images/ysquareimperial.png";
import logo from "../images/sRecord.png";
import motto from "../images/motto.png";
import camera from "../images/camera.png";
import { useNavigate } from "react-router-dom";
// import './profile.css'
export default function Profile() {
  const navigate = useNavigate();
  return (
    <div className="py-3 px-3 home-main-div">
      <Row>
        <Col md={6}>
          <h3>
            {/* <span>
                            <img className="action-img" src={profile}
                                alt='' />
                        </span> */}
            Profile
          </h3>
        </Col>
        <Col md={6}></Col>
      </Row>
      <Row className="profile-row">
        <Col md={4}>
          <Card className="profile-card shadow py-3 px-4 mt-3">
            <Row>
              <Col md={10} sm={10} xs={10} lg={10}>
                <h5>User Information</h5>
              </Col>
              <Col md={2} sm={2} xs={2} lg={2}>
                <img
                  src={pen}
                  alt=""
                  className="profile-pen"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="edit user info"
                  onClick={() => navigate("/edit-user-info")}
                />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col md={2} sm={2} xs={2} lg={2}>
                <img src={ysquare} alt="" className="profile-pic" />
              </Col>
              <Col md={10} sm={10} xs={10} lg={10}>
                <div className="profile-flex-container">
                  <div>
                    <h6>{"  "}Yasir Ado Hassan</h6>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="profile-details">
              <p className="dlt-details">
                <span>
                  <img className="" style={{ width: 20 }} src={iphone} alt="" />
                </span>{" "}
                +234 030033003
              </p>
              <p className="dlt-details">
                <span>
                  <img className="" style={{ width: 20 }} src={email} alt="" />
                </span>{" "}
                abcde@aaa.com
              </p>
              <p className="dlt-details">
                <span>
                  <img
                    className=""
                    style={{ width: 20 }}
                    src={address}
                    alt=""
                  />
                </span>{" "}
                Airport Road, Kano, Nigeria
              </p>
            </div>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="profile-card shadow py-3 px-4 mt-3">
            <Row>
              <Col md={10} sm={10} xs={10} lg={10}>
                <h5>School Information</h5>
              </Col>
              <Col md={2} sm={2} xs={2} lg={2}>
                <img
                  src={pen}
                  alt=""
                  className="profile-pen"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="edit school info"
                  onClick={() => navigate("/edit-school-info")}
                />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col md={2} sm={2} xs={2} lg={2}>
                <img src={logo} className="scl-pic" alt="" />
                {"  "}
              </Col>
              <Col md={10} sm={10} xs={10} lg={10}>
                <div className="profile-flex-container">
                  <div>
                    <h6>sRecord Primary School</h6>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="profile-details">
              <p className="dlt-details">
                <span>
                  <img style={{ width: 20 }} src={motto} alt="" />
                </span>{" "}
                Knowledge is Power
              </p>
              <p className="dlt-details">
                <span>
                  <img style={{ width: 20 }} src={iphone} alt="" />
                </span>{" "}
                +234 030033003
              </p>
              <p className="dlt-details">
                <span>
                  <img style={{ width: 20 }} src={email} alt="" />
                </span>{" "}
                abcde@aaa.com
              </p>
              <p className="dlt-details">
                <span>
                  <img style={{ width: 20 }} src={address} alt="" />
                </span>{" "}
                Airport Road, Kano, Nigeria
              </p>
            </div>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="profile-card shadow py-3 px-4 mt-3"></Card>
        </Col>
      </Row>
    </div>
  );
}
