import React, { useState } from "react";
import { Card, Col, Row, Table } from "reactstrap";
// import { useNavigate } from "react-router-dom";
import nosearch from "../../images/search.svg";
import { Search } from "react-feather";
import dlt from "../../images/delete.png";
import { students } from "../Student/StudentList";

export default function SubjectRecord() {
  // const navigate = useNavigate();
  const [subject, setSubject] = useState()
  const [result] = useState(students)
  const [state, setSearch] = useState({
    search: "",
  });
  const handleChanges = ({ target: { name, value } }) => {
    setSearch({ [name]: value });
  };
  let rows = [];
  result &&
    result.forEach((item, index) => {
      if (
        item.studentName.toLowerCase().indexOf(state.search.toLowerCase()) ===
        -1 
      ) {

        return;
      }
      rows.push(
        <tr key={index}>
          <th className="" scope="row">
            {index + 1}
          </th>
          <td className="">{item.studentName}</td>
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
                }}/>
          </td>
        </tr>
      );
    });

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

  return (
    <div>
      <div style={{ position: "relative" }}>
        <Search
          style={{ position: "absolute", bottom: 10, left: 10, color: "grey" }}
        />
        <input name='search' onChange={handleChanges}
          type="search"
          placeholder="search records"
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
          <Table size="sm" 
            className="table"
            striped
            responsive
            borderless
            hover
          >
            <thead>
              <tr>
                <th>
                  S/N
                </th>
                <th>
                  Student Name
                </th>
                <th>
                  {/* {subject} */}
                   CA
                </th>
                <th>
                  {/* {subject} */}
                   Exam
                </th>
                <th style={{ float: 'right' }}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </Table>
          {rows.length === 0 ?
            <div className="text-center mt-5">
              <img src={nosearch} style={{ width: 100 }} alt='' />
              <p className="">No results found for "{state.search}"</p>
            </div>
            : null}
          <div className="">
            <button className="action-btn">save</button>
          </div>
        </div>
      </Card>
    </div>
  );
}
