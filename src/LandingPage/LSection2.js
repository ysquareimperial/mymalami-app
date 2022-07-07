import React from "react";
import { Card, Col, Row } from "reactstrap";
import classs from "../images/class.svg";
import report from "../images/report.svg";
import score from "../images/score.svg";

export default function LSection2() {
  return (
    <div className="section-2">
      <div id="features">
        <Row className="m-0 pt-5">
          <Col md={4}></Col>
          <Col md={4} className="text-center features">
            <h1 className="l-h1">How it works</h1>
            <p className="text-white">
              sRecord...Creating High Quality and Accurate Reports
            </p>
          </Col>
          <Col md={4}></Col>
        </Row>
      </div>
      <Row className="m-0 p-5">
        <Col md={3}>
          <Card className="py-2 px-3 f-card shadow text-center">
            <div className="text-center">
              <img src={classs} alt="" className="shadow f-img" />
            </div>
            <h3 className="f-title">Create Classes</h3>
            <p className="f-p">
              This feature is used for creating and assigning class to
              individaul student.
            </p>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="py-2 px-3 f-card shadow text-center">
            <div className="text-center">
              <img src={classs} alt="" className="shadow f-img" />
            </div>
            <h3 className="f-title">Create Subjects</h3>
            <p className="f-p">
              Creating subjects will allow the teacher to assign subjects that
              students undertake.
            </p>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="py-2 px-3 f-card shadow text-center">
            <div className="text-center">
              <img src={score} alt="" className="shadow f-img" />
            </div>
            <h3 className="f-title">Assign Scores</h3>
            <p className="f-p">
              Students scores are recorded and automatically graded.
            </p>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="py-2 px-3 f-card shadow text-center">
            <div className="text-center">
              <img src={report} alt="" className="shadow f-img" />
            </div>
            <h3 className="f-title">Generate Reports</h3>
            <p className="f-p">
              Reports are generated for every automatically student.
            </p>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
