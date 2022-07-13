import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Col,
  Modal,
  ModalBody,
  Row,
} from "reactstrap";
import settings from "../../images/settings.png";
// import './settings.css'
import email from "../../images/email.png";
import password from "../../images/password.png";
import ysquare from "../../images/ysquareimperial.png";
import dlt from "../../images/delete.png";
export default function Settings() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className="py-3 px-3 home-main-div">
      <Row>
        <Col md={6}>
          <h3>Settings</h3>
        </Col>
        <Col md={6}></Col>
      </Row>
      <Row className="profile-row">
        <Col md={4}>
          <Card className="text-center settings-card shadow py-3 px-4 mt-3">
            <CardBody style={{ height: 20 }}>
              <p>
                <span>
                  <img className="action-img" src={email} alt="" />
                </span>
                Email and Password
              </p>
              <div className="d-flex justify-content-center">
                <input
                  placeholder=""
                  type="email"
                  style={{
                    border: "none",
                    backgroundColor: "rgb(236, 236, 236)",
                  }}
                />
              </div>
              <div className="d-flex justify-content-center mt-3">
                <input placeholder="" type="password" />
              </div>
            </CardBody>
            <CardFooter style={{ backgroundColor: 'white', border: 'none' }}>
              <div className="text-center">
                <button className="settings-btn">Change Email</button>
              </div>
            </CardFooter>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center settings-card shadow py-3 px-4 mt-3">
            <CardBody style={{ height: 20 }}>
              <p>
                <span>
                  <img className="action-img" src={password} alt="" />
                </span>
                Change Password
              </p>
              <div className="d-flex justify-content-center">
                <input placeholder="current password" type="password" />
              </div>
              <div className="d-flex justify-content-center mt-3">
                <input placeholder="new password" type="password" />
              </div>
              <div className="d-flex justify-content-center mt-3">
                <input placeholder="confirm password" type="password" />
              </div>
            </CardBody>
            <CardFooter style={{ backgroundColor: 'white', border: 'none' }}>
              <div className="text-center">
                <button className="settings-btn">Save Password</button>
              </div>
            </CardFooter>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center settings-card shadow py-3 px-4 mt-3">
            <CardBody style={{ height: 20 }}>
              <p style={{}}>
                <span>
                  <img className="action-img" src={dlt} alt="" />
                </span>
                Delete My Account
              </p>
              <p style={{ margin: 0, fontSize: 13 }} className="text-danger">
                Your account will not be recovered once deleted!{" "}
              </p>

              <div className=" justify-content-center">
                <p style={{ fontSize: 13 }}>
                  Please enter your password to confirm the deletion of your
                  account.
                </p>
                <input placeholder="password" type="password" />
              </div>
            </CardBody>
            <CardFooter style={{ backgroundColor: 'white', border: 'none' }}>
              <div className="text-center">
                <button className="settings-dlt-btn" onClick={toggle}>
                  Delete My Account
                </button>
              </div>
            </CardFooter>
          </Card>
        </Col>
      </Row>
      <Modal isOpen={open} toggle={toggle} className="dlt-modal">
        <ModalBody className="modal-body">
          <Row>
            <Col lg={1} md={1} sm={1} xs={1}>
              <img src={dlt} alt="profile-picture" className="" style={{ width: '250%' }} />
            </Col>
            <Col lg={11} md={11} sm={11} xs={11}>
              <p className='mt-2'>Are you sure you want to delete your account?</p>
            </Col>
          </Row>
          <div>
            <h5>
              <img src={ysquare} alt="" className="profile-pic" />
              {"  "}Yasir Ado Hassan
            </h5>
          </div>
          <div className="">
            <button className="action-btn" onClick={toggle}>
              Cancel
            </button>
            <button className="action-cancel-btn">Delete</button>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}
