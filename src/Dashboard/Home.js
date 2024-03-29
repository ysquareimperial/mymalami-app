import React from "react";
// import { Book, BookOpen, FileText, StopCircle, Users } from 'react-feather'
import { Card, Row, Col } from "reactstrap";
// import './Dashboard.css'
import "../AppStyle/Style.css";
import student from "../images/student.png";
import book from "../images/book.png";
import classs from "../images/class.png";
import report from "../images/report.png";
import sum from "../images/sum.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const indexActions = [
    {
      img: <img alt="a" src={student} />,
      name: "Students",
      total: "12",
      url: "/student",
      nav: "/student/create-student",
    },
    {
      img: <img alt="a" src={book} />,
      name: "Subjects",
      total: "6",
      url: "/subject",
      nav: "/create-subject",
    },
    {
      img: <img alt="a" src={classs} />,
      name: "Classes",
      total: "3",
      url: "/class",
      nav: "/create-class",
    },
    {
      img: <img alt="a" src={report} />,
      name: "Reports",
      total: "12",
      url: "/report",
      nav: "/report",
    },
  ];

  return (
    <div className="home-main-div">
      <Row>
        {indexActions.map((item, index) => (
          <Col md={3}>
            <Card
              className="shadow px-4 py-3 index-card"
              onClick={() => navigate(item.url)}
            >
              <p className="item-name">{item.name}</p>
              <div className="item-icon">{item.img}</div>
              <div className="item-total">
                <Row className="">
                  <Col md={9} sm={9} xs={9}>{item.total}</Col>
                  <Col md={3} sm={3} xs={3}>
                    <div>
                      {/* <a href={item.nav}> */}
                      <img
                        src={sum}
                        className="add-module"
                        title="add"
                        alt=""
                        onClick={() => navigate(item.nav)}
                      />

                      {/* </a> */}
                    </div>
                  </Col>
                </Row>
              </div>
            </Card>
            {/* <button onClick={() => navigate(item.nav)}>cc</button> */}
          </Col>
        ))}
      </Row>
    </div>
  );
}
