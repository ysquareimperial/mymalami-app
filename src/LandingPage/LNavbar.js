import React from "react";
import { Col, Row } from "reactstrap";
import logo from "../images/sRecord-L&B.png";
import { useNavigate } from "react-router-dom";
export default function LNavbar() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="nav-bar">
        <Row className="navbar-row">
          <Col md={2}>
            <img src={logo} alt="sRecord" className="ln-logo" />
          </Col>
          <Col md={7} className="nav-items">
            <ul className="nav-list">
              <a href="#features">
                <li className="l">Features</li>
              </a>
              <a href="#testimonials">
                <li className="l">Testimonials</li>
              </a>
              <a href="#subscribe">
                <li className="l">Subscribe</li>
              </a>
              <a href="#contact">
                <li className="l">Contact</li>
              </a>
            </ul>
          </Col>
          <Col md={3} className="div">
            <button
              className="signup-btn shadow"
              onClick={() => navigate("/sign-in")}
              style={{ float: "right", marginRight: 30 }}
            >
              Sign In
            </button>
          </Col>
        </Row>
      </div>
    </div>
  );
}
