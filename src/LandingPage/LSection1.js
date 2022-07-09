import React from "react";
import { Col, Row } from "reactstrap";
import oneclick from "../images/one-click.svg";
import { useNavigate } from "react-router-dom";
export default function LSection1() {
  const navigate = useNavigate();
  return (
    <div className="section-1">
      <Row className="p-5 m-0">
        <Col md={6}>
          <div className="flex-container-1">
            <div>
              <h1 className="l-h1">One-Click Students Reports Generator</h1>
              <p className="l-p">
                sRecord is an application that helps teachers generate students
                reports by creating classes, subjects, students and records.
              </p>
              <div className="get-started-div">
                <button
                  className="sign-up shadow"
                  onClick={() => navigate("/sign-up")}
                >
                  Get stated for free
                </button>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className="flex-container-1-1">
            <div>
              <img src={oneclick} className="shadow section1-img" alt="" />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
