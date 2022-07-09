import React from "react";
import { Card, Col, Row } from "reactstrap";
import logo from "../images/logoo.png";
import back from "../images/back.png";
import { useNavigate } from "react-router-dom";
export default function EditSchoolInfo() {
  const navigate = useNavigate();
  return (
    <div className="profile-div home-main-div">
      <Card className="table-card shadow py-3 px-4 mt-3">
        <Row>
          <Col md={6}>
            <Row>
              <Col md={1} sm={1} xs={1}>
                <span>
                  <img
                    className="action-img"
                    src={back}
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="back"
                    alt=""
                    onClick={() => navigate("/profile")}
                  />
                </span>
              </Col>
              <Col md={11} sm={11} xs={11}>
                <h3 className="table-card-title">Edit School Info</h3>
              </Col>
            </Row>
          </Col>
          <Col md={6}></Col>
        </Row>
        <Row className="mt-3">
          <Col md={6}>
            <h5>
              <img src={logo} className="edit-school-pic" alt="" />
              {"  "}
            </h5>
            {/* <input type='file' /> */}
            <input type="file" id="formFile" />
            <input type="text" className="mt-3" />
            <input type="text" className="mt-3" />
            <input type="number" className="mt-3" />
            <input type="email" className="mt-3" />
            <input type="address" className="mt-3" />
            <button className="action-btn">save</button>
          </Col>
          <Col md={6}></Col>
        </Row>
      </Card>
    </div>
  );
}
