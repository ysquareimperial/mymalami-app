import React, { useState } from "react";
import {
  Button,
  Card,
  CardText,
  CardTitle,
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  Table,
  TabPane,
} from "reactstrap";
// // import './record.css'
// import edit from '../../images/edit.png'
// import dlt from '../../images/delete.png'
// import sum from '../../images/sum.png'
import back from "../../images/back.png";
// import view from '../../images/view.png'
// import save from '../../images/save.png'
import { useNavigate } from "react-router-dom";

import classnames from "classnames";
import Record from "./Record";
import RecordTab from "./RecordTab";
export default function SubjectRecord() {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <input type="search" placeholder="search students" />
      </div>
      <Card className="table-card shadow py-3 px-4 mt-3">
        <Row>
          <Col md={6}>
            <Row>
              <Col md={1}>
                <span>
                  <img
                    className="action-img"
                    alt=""
                    src={back}
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="back"
                    akt=""
                    onClick={() => navigate("/record")}
                  />
                </span>
              </Col>
              <Col md={11}>
                <h3 className="table-card-title">Create Subject Record</h3>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <div className="d-flex justify-content-end">
              {/* <img className='action-img' data-toggle="tooltip" data-placement="bottom" title="add class"  src={sum} alt='s' onClick={() => navigate('/create-student')} /> */}
            </div>
          </Col>
        </Row>
        <RecordTab />
        <div className="mt-4">
          <div className="">
            <button className="action-btn">save</button>
          </div>
        </div>
      </Card>
    </div>
  );
}
