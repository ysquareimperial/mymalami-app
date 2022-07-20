import React, { useState } from "react";
import { Card, Col, Row, Table } from "reactstrap";
// import { useNavigate } from "react-router-dom";
import { Search } from "react-feather";
import dlt from "../../images/delete.png";

export default function SubjectRecord() {
  // const navigate = useNavigate();
  const [subject, setSubject] = useState()
  const subjects = [{
    subjectName: 'English Language'
  },
  {
    subjectName: 'Mathematics'
  }, {
    subjectName: 'Physics'
  },
  {
    subjectName: 'Chemistry'
  },
  {
    subjectName: 'Biology'
  }

  ]
  console.log(subjects[0])
  const students = [
    { studentName: 'Muhammad Abdul' },
    { studentName: 'Ali Abdul' },
    { studentName: 'Muhammad Ali' },
    { studentName: 'Muhammad Abdul' },
    { studentName: 'Muhammad Abdul' },
    { studentName: 'Muhammad Abdul' },
    { studentName: 'Muhammad Abdul' },
    { studentName: 'Muhammad Abdul' },
    { studentName: 'Muhammad Abdul' },
    { studentName: 'Muhammad Abdul' },
    { studentName: 'Muhammad Abdul' },
    { studentName: 'Muhammad Abdul' },
    { studentName: 'Muhammad Abdul' },
    { studentName: 'Muhammad Abdul' },
    { studentName: 'Muhammad Abdul' },
    { studentName: 'Muhammad Abdul' },
  ]
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
              <Col md={6} sm={6} xs={6}>
                <h3>Records</h3>
              </Col>
              <Col md={6} sm={6} xs={6}>

              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <div className="d-flex justify-content-end">
              {/* <img className='action-img' data-toggle="tooltip" data-placement="bottom" title="add class"  src={sum} alt='s' onClick={() => navigate('/create-student')} /> */}
            </div>
          </Col>
        </Row>
        <div className="mt-4 records-div">
          <div>
            {subjects.map((item, index) => (
              <button className='subject-btn' style={{ display: 'inline-block' }} onClick={() => setSubject(item.subjectName)}>{item.subjectName}</button>
            ))}
          </div>

          <h4 className="mt-3">{subject}</h4>
          <Table size="sm" borderless hover striped responsive='xs'>
            <thead>
              <tr>
                <th>
                  S/N
                </th>
                <th>
                  Student Name
                </th>
                <th>
                  {subject} CA
                </th>
                <th>
                  {subject} Exam
                </th>
                <th style={{ float: 'right' }}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {students.map((item, index) => (
                <tr>
                  <th scope="row">
                    {index + 1}
                  </th>
                  <td>
                    {item.studentName}
                  </td>
                  <td>
                    <input className="record-input" type="text" />
                  </td>
                  <td>
                    <input className="record-input" type="text" />
                  </td>
                  <td className="">
                    <img
                      src={dlt}
                      alt=''
                      className="action-img"
                      style={{ float: 'right' }}
                      onClick={() => {
                        // notify();
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="">
            <button className="action-btn">save</button>
          </div>
        </div>
      </Card>
    </div>
  );
}
