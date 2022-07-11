import React from "react";
import student from "../images/student.png";
import home from "../images/home.png";
import book from "../images/book.png";
import classs from "../images/class.png";
import report from "../images/report.png";
// import lb from "../images/sRecord-L&B.png";
import record from "../images/record.png";
import { Col, Row } from "reactstrap";
import { useLocation, useNavigate } from "react-router-dom";
export default function MobileFooter() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div>
      <div className="mobile-footer">
        <div>
          <Row>
            <Col sm={2} xs={2} className="text-center">
              <img
                src={home}
                alt=""
                onClick={() => navigate("/home")}
                className={`active1 ${
                  location.pathname === "/home" && "active_footer"
                }`}
              />
            </Col>
            <Col sm={2} xs={2} className="text-center">
              <img
                onClick={() => navigate("/student")}
                className={`active1 ${
                  location.pathname.includes("/student") && "active_footer"
                }`}
                src={student}
                alt=""
              />
            </Col>
            <Col sm={2} xs={2} className="text-center">
              <img
                onClick={() => navigate("/subject")}
                className={`active1 ${
                  location.pathname.includes("/subject") && "active_footer"
                }`}
                src={book}
                alt=""
              />
            </Col>
            <Col sm={2} xs={2} className="text-center">
              <img
                onClick={() => navigate("/class")}
                className={`active1 ${
                  location.pathname.includes("/class") && "active_footer"
                }`}
                src={classs}
                alt=""
              />
            </Col>
            <Col sm={2} xs={2} className="text-center">
              <img
                onClick={() => navigate("/record")}
                className={`active1 ${
                  location.pathname === "/record" && "active_footer"
                }`}
                src={record}
                alt=""
              />
            </Col>
            <Col sm={2} xs={2} className="text-center">
              <img
                onClick={() => navigate("/report")}
                className={`active1 ${
                  location.pathname === "/report" && "active_footer"
                }`}
                src={report}
                alt=""
              />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
