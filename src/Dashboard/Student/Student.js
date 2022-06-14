import React, { useState } from "react";
import { Card, Col, Modal, ModalBody, Row, Table } from "reactstrap";
// import './student.css'
import edit from "../../images/edit.png";
import dlt from "../../images/delete.png";
import sum from "../../images/sum.png";
import view from "../../images/view.png";
import book from "../../images/book.png";
import { useNavigate } from "react-router-dom";
import { Search } from "react-feather";

export default function Student() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  const [open1, setOpen1] = useState(false);
  const toggle1 = () => {
    setOpen1(!open1);
  };
  const student = [
    {
      sn: "1",
      name: "Quavo Huncho",
      className: "JSS 1",
      subject: "Mathddnndn kk ",
      teacherName: "Future Hndrxx",
    },
    {
      sn: "2",
      name: "Quavo Huncho",
      className: "JSS 1",
      subject: "Math",
      teacherName: "Future Hndrxx",
    },
    {
      sn: "3",
      name: "Quavo Huncho",
      className: "JSS 1",
      subject: "Math",
      teacherName: "Future Hndrxx",
    },
    {
      sn: "1",
      name: "Quavo Huncho",
      className: "JSS 1",
      subject: "Mathddnndn kk ",
      teacherName: "Future Hndrxx",
    }
  ];

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
            <h3>Students</h3>
          </Col>
          <Col md={6}>
            <div className="d-flex justify-content-end">
              <img
                className="action-img"
                data-toggle="tooltip"
                data-placement="bottom"
                title="add student"
                src={sum}
                alt="s"
                onClick={() => navigate("/create-student")}
              />
            </div>
          </Col>
        </Row>

        <div className="mt-4">
          <Table size="sm" className="table" striped>
            <thead>
              <tr>
                <th>S/N</th>
                <th>Student Name</th>
                <th>Class Name</th>
                {/* <th>Class Teacher Name</th> */}
                <th>Subjects/Courses</th>
                <th className="d-flex justify-content-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              {student.map((item, index) => (
                <tr>
                  <th className="" scope="row">
                    {item.sn}
                  </th>
                  <td className="">{item.name}</td>
                  <td className="">{item.className}</td>
                  {/* <td className=''>{item.teacherName}</td> */}
                  <td className="">
                    <img
                      src={view}
                      alt=""
                      className="action-img"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="view subjects/courses"
                      onClick={toggle1}
                    />
                  </td>
                  {/* <td className=''>20</td> */}
                  <td className="d-flex justify-content-end">
                    <img
                      className="action-img"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="edit student"
                      src={edit}
                      alt="s"
                      onClick={() => navigate("/edit-student")}
                    />
                    <img
                      className="action-img"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="delete student"
                      src={dlt}
                      alt="s"
                      onClick={toggle}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Card>
      <Modal isOpen={open} toggle={toggle} className="dlt-modal">
        <ModalBody className="modal-body">
          <img src={dlt} />
          <p className="dlt-warning">
            Are you sure you want to delete this Student?
          </p>
          <div>
            <p className="dlt-details">
              Student Name: <span>JSS One</span>
            </p>
            <p className="dlt-details">
              Class Name: <span>Quavo Hunchox</span>
            </p>
            <p className="dlt-details">
              Class Teacher Name: <span>30</span>
            </p>
          </div>
          <div className="dlt-modal-action-div">
            <button className="action-btn" onClick={toggle}>
              Cancel
            </button>
            <button className="action-cancel-btn">Delete</button>
          </div>
        </ModalBody>
      </Modal>
      <Modal isOpen={open1} toggle={toggle1} className="dlt-modal">
        <ModalBody className="modal-body">
          <img src={book} alt="" />
          <p className="students">Subjects/Courses</p>
          <div>
            <p className="std-details">
              Student Name: <span>Quavo Huncho</span>
            </p>
            {/* <br></br> */}
            <p className="dlt-details">Mathematics</p>
            <p className="dlt-details">English</p>
          </div>
          <div className="">
            <button className="action-btn" onClick={toggle1}>
              Close
            </button>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}
