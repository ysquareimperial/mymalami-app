import React, { useEffect, useState } from "react";
import { Card, Col, Modal, ModalBody, Row, Table } from "reactstrap";
// import './student.css'
import edit from "../../images/edit.png";
import dlt from "../../images/delete.png";
import sum from "../../images/sum.png";
import view from "../../images/view.png";
import book from "../../images/book.png";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Search } from "react-feather";
import { studentList } from "./StudentList";

export default function Student() {
  const notify = () =>
    toast.error(`1 student(s) deleted`, {
      position: "bottom-center",
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  const [open1, setOpen1] = useState(false);
  const toggle1 = () => {
    setOpen1(!open1);
  };

  const [result, setResult] = useState(studentList)
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
        -1 && item.class.toLowerCase().indexOf(state.search.toLowerCase()) ===
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
          <td className="">{item.class}</td>
          <td className=''>20</td>
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
      {/* {JSON.stringify(value)} */}
      <span>
        <div style={{ position: "relative" }}>
          <Search
            style={{
              position: "absolute",
              bottom: 10,
              left: 10,
              color: "grey",
            }}
          />
          <input
            className=""
            name="search"
            onChange={handleChanges} 
            placeholder={`search students`}
            type="search"
            style={{ paddingLeft: 45 }}
          /><br/>
        </div>
        {/* <div><button onClick={filterList}>SEARCH</button></div> */}
      </span>

      <Card className="table-card shadow py-3 px-4 mt-3">
        <Row>
          <Col md={6} sm={6} xs={6}>
            <h3>Students</h3>
          </Col>
          <Col md={6} sm={6} xs={6}>
            <div className="d-flex justify-content-end">
              <img
                className="action-img"
                data-toggle="tooltip"
                data-placement="bottom"
                title="add student"
                src={sum}
                alt="s"
                onClick={() => navigate("create-student")}
              />
            </div>
          </Col>
        </Row>
        <div className="mt-4">
          <Table size="sm" className="table" striped hover responsive borderless>
            <thead>
              <tr>
                <th>S/N</th>
                <th>Student Name</th>
                <th>Class</th>
        <th>Subjects</th>
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
          <img src={dlt} alt='' />
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
            <button
              className="action-cancel-btn"
              onClick={() => {
                toggle();
                notify();
              }}
            >
              Delete
            </button>
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
            <br></br>
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
      {/* <button onClick={notify}>Fasdf</button> */}
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