import React, { useState } from "react";
import { Card, Col, Modal, ModalBody, Row, Table } from "reactstrap";
// import './subject.css'
import edit from "../../images/edit.png";
import dlt from "../../images/delete.png";
import sum from "../../images/sum.png";
import student from "../../images/student.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Search } from "react-feather";
import { subject } from "../Student/StudentList";

export default function Subject() {
  const notify = () =>
    toast.error(`Subject(s) deleted`, {
      position: "bottom-center",
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  const [open1, setOpen1] = useState(false);
  const toggle1 = () => {
    setOpen1(!open1);
  };
  const subject = [
    {
      name: "English Language",
      students: "30",
    },
    {
      name: "JS Language",
      students: "40",
    },
    {
      name: "HTM Language",
      students: "50",
    },
  ];
  const navigate = useNavigate();

  const [result, setResult] = useState(subject)
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
        item.name.toLowerCase().indexOf(state.search.toLowerCase()) ===
        -1 && item.students.toLowerCase().indexOf(state.search.toLowerCase()) ===
        -1
      ) {

        return;
      }
      rows.push(
        <tr key={index}>
          <th className="" scope="row">
            {index + 1}
          </th>
          <td className="">{item.name}</td>
          <td
            className=""
            ata-toggle="tooltip"
            data-placement="bottom"
            title="click to view students"
          >
            <span className="students-total" onClick={toggle1}>
              {item.students}
            </span>
          </td>
          <td className="d-flex justify-content-end">
            <img
              className="action-img"
              data-toggle="tooltip"
              data-placement="bottom"
              title="edit subject"
              src={edit}
              alt="s"
              onClick={() => navigate("/subject/edit-subject")}
            />
            <img
              className="action-img"
              data-toggle="tooltip"
              data-placement="bottom"
              title="delete subject"
              src={dlt}
              alt="s"
              onClick={toggle}
            />
          </td>
        </tr>
      );
    });
  return (
    <div>
      <div style={{ position: "relative" }}>
        <Search
          style={{ position: "absolute", bottom: 10, left: 10, color: "grey" }}
        />
        <input
          type='search' name='search' onChange={handleChanges}
          placeholder="search subjects"
          style={{ paddingLeft: 45 }}
        />
      </div>
      <Card className="table-card shadow py-3 px-4 mt-3">
        <Row>
          <Col md={6} sm={6} xs={6}>
            <h3>Subjects</h3>
          </Col>
          <Col md={6} sm={6} xs={6}>
            <div className="d-flex justify-content-end">
              <img
                className="action-img"
                data-toggle="tooltip"
                data-placement="bottom"
                title="create subject"
                src={sum}
                alt="s"
                onClick={() => navigate("/subject/create-subject")}
              />
            </div>
          </Col>
        </Row>
        <div className="mt-4">
          <Table size="sm" striped hover responsive borderless>
            <thead>
              <tr>
                <th>S/N</th>
                <th>Subject Name</th>
                {/* <th>Teacher Name</th> */}
                <th>No of Students</th>
                <th className="d-flex justify-content-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </Table>
          {rows.length === 0 ? <p className="text-center mt-5">No results found for "{state.search}"</p> : null}
        </div>
      </Card>
      <Modal isOpen={open} toggle={toggle} className="dlt-modal">
        <ModalBody className="modal-body">
          <img src={dlt} />
          <p className="dlt-warning">
            Are you sure you want to delete this Subject/Course?
          </p>
          <div>
            <p className="dlt-details">
              Subject Name: <span>JSS One</span>
            </p>
            <p className="dlt-details">
              Number of Students: <span>30</span>
            </p>
          </div>
          <div className="dlt-modal-action-div">
            <button className="action-btn" onClick={toggle}>
              Cancel
            </button>
            <button
              className="action-cancel-btn"
              onClick={() => {
                toggle();
                notify()
              }}
            >
              Delete
            </button>
          </div>
        </ModalBody>
      </Modal>
      <Modal isOpen={open1} toggle={toggle1} className="dlt-modal">
        <ModalBody className="modal-body">
          <img src={student} />
          <p className="students">Students</p>
          <div>
            <p className="std-details">
              Subject Name: <span>Mathematics</span>
            </p>
            {/* <br></br> */}
            <p className="dlt-details">Ali</p>
            <p className="dlt-details">Prince</p>
          </div>
          <div className="dlt-modal-action-div">
            <button className="action-btn" onClick={toggle1}>
              Close
            </button>
          </div>
        </ModalBody>
      </Modal>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
