import React from "react";
import { Card, Col, Row } from "reactstrap";
// // import './record.css'
// import edit from '../../images/edit.png'
// import dlt from '../../images/delete.png'
// import sum from '../../images/sum.png'
import back from "../../images/back.png";
// import view from '../../images/view.png'
// import save from '../../images/save.png'
import { useNavigate } from "react-router-dom";

import RecordTab from "./RecordTab";
import { Search } from "react-feather";
export default function SubjectRecord() {
  const navigate = useNavigate();

  return (
    <div>
      <div style={{ position: "relative" }}>
        <Search
          style={{ position: "absolute", bottom: 10, left: 10, color: "grey" }}
        />
        <input
          type="search"
          placeholder="search students"
          style={{ paddingLeft: 45 }}
        />
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
