import React from "react";
import { Col, Row } from "reactstrap";
// import './Dashboard.css'
import student from "../images/student.png";
import home from "../images/home.png";
import book from "../images/book.png";
import classs from "../images/class.png";
import report from "../images/report.png";
import lb from "../images/sRecord-L&B.png";
import record from "../images/record.png";
import { useLocation } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";
export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div style={{ position: "fixed" }}>
      <Row className="">
        <Col>
          <ul className="sidebar-items">
            <li
              onClick={() => navigate("/home")}
              className={`active1 ${
                location.pathname === "/home" && "active_sidebar"
              }`}
            >
              <img
                style={{
                  width: 25,
                  height: 25,
                  marginRight: 5,
                  marginBottom: 5,
                }}
                src={home}
                alt="h"
              />
              Home
            </li>
            <li
              onClick={() => navigate("/student")}
              className={`active1 ${
                location.pathname.includes("/student") && "active_sidebar"
              }`}
            >
              <img
                style={{
                  width: 25,
                  height: 25,
                  marginRight: 5,
                  marginBottom: 5,
                }}
                src={student}
                alt="h"
              />
              Students
            </li>
            <li
              onClick={() => navigate("/subject")}
              className={`active1 ${
                location.pathname.includes("/subject") && "active_sidebar"
              }`}
            >
              <img
                style={{
                  width: 25,
                  height: 25,
                  marginRight: 5,
                  marginBottom: 5,
                }}
                src={book}
                alt="h"
              />
              Subjects
            </li>
            <li
              onClick={() => navigate("/class")}
              className={`active1 ${
                location.pathname.includes("/class") && "active_sidebar"
              }`}
            >
              <img
                style={{
                  width: 25,
                  height: 25,
                  marginRight: 5,
                  marginBottom: 5,
                }}
                src={classs}
                alt="h"
              />
              Classes
            </li>
            <li
              onClick={() => navigate("/record")}
              className={`active1 ${
                location.pathname === "/record" && "active_sidebar"
              }`}
            >
              <img
                style={{
                  width: 25,
                  height: 25,
                  marginRight: 5,
                  marginBottom: 5,
                }}
                src={record}
                alt="h"
              />
              Records
            </li>
            <li
              onClick={() => navigate("/report")}
              className={`active1 ${
                location.pathname === "/report" && "active_sidebar"
              }`}
            >
              <img
                style={{
                  width: 25,
                  height: 25,
                  marginRight: 5,
                  marginBottom: 5,
                }}
                src={report}
                alt="h"
              />
              Reports
            </li>
          </ul>
        </Col>
      </Row>
      <div className="brand">
        <img src={lb} alt="" style={{ width: 150, marginLeft: 1 }} />
        <p
          style={{
            color: "grey",
            fontSize: 12,
            margin: 0,
            padding: 0,
            cursor: "pointer",
            marginLeft: 7,
          }}
        >
          Terms <span>Privacy</span>
        </p>
        <p
          style={{
            color: "grey",
            fontSize: 12,
            margin: 0,
            padding: 0,
            cursor: "pointer",
            marginLeft: 7,
          }}
        >
          sRecord &copy; 2022
        </p>
      </div>
    </div>
  );
}
