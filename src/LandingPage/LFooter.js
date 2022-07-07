import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "react-feather";
import logo2 from "../images/s-white.png";

import { Col, Row } from "reactstrap";
export default function LFooter() {
  const navigate = useNavigate();

  return (
    <div className="section-5" id="contact">
      <Row className="m-0 p-3 pt-5">
        <Col md={4} sm={12} xs={12} className="">
          <img src={logo2} alt="sRecord-logo" className="footer-logo" />
          <div className="footer-left">
            <p className="footer-p">
              ...Creating High Quality and Accurate Reports!
            </p>
            <p className="footer-p1">
              Copyrights &copy; 2022 sRecord - All Rights Reserved
            </p>
            <p className="footer-p1">
              Terms - Privacy - Cookies -{" "}
              <span
                onClick={() => navigate("/sign-in")}
                style={{ cursor: "pointer" }}
              >
                Sign in
              </span>{" "}
              -{" "}
              <span
                onClick={() => navigate("/sign-up")}
                style={{ cursor: "pointer" }}
              >
                Sign up
              </span>
            </p>
          </div>
        </Col>
        <Col md={4} sm={12} xs={12} className="">
          <h4 className="address">Address</h4>
          <div className="">
            <Row>
              <Col md={1}>
                {" "}
                <MapPin style={{ color: "white" }} />
              </Col>
              <Col md={11}>
                <p className="icon-p">
                  Office: Floor 1, African Alliance Building, No 1 Sani Abacha
                  Way, Kano, Nigeria
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={1}>
                <Phone style={{ color: "white" }} />
              </Col>
              <Col md={11}>
                <p className="icon-p">
                  Phone: +234 000 0000 0000 +234 000 0000 0000
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={1}>
                <Mail style={{ color: "white" }} />
              </Col>
              <Col md={11}>
                <p className="icon-p">Email: support@srecord.com</p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col md={4} sm={12} xs={12} className="">
          <h4 className="address">Contact Us</h4>
          <p className="icon-p">Follow us on our social media platforms:</p>
          <div className="">
            <Row>
              <Col md={1}>
                {" "}
                <Facebook className="social" size="1.5em" />
              </Col>
              <Col md={1}>
                {" "}
                <Instagram className="social" size="1.5em" />
              </Col>
              <Col md={1}>
                {" "}
                <Twitter className="social" size="1.5em" />
              </Col>
              <Col md={9}>
                {" "}
                <Linkedin className="social" size="1.5em" />
              </Col>
            </Row>
          </div>
          <div>
            <p className="text-white">
              Subscribe to our news letter:
            </p>
            <input
              type="text"
              placeholder="email"
              className=""
              style={{ width: 200 }}
            />
            <button className="sub-btn shadow">Subscribe</button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
