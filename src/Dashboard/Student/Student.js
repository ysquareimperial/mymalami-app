import React, { useEffect, useState } from "react";
import { Card, Col, Modal, ModalBody, Row, Table } from "reactstrap";
// import './student.css'
import '../../AppStyle/MobileStyle.css'
import edit from "../../images/edit.png";
import dlt from "../../images/delete.png";
import sum from "../../images/sum.png";
import nosearch from "../../images/search.svg";
// import view from "../../images/view.png";
import book from "../../images/book.png";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Search } from "react-feather";
import { studentList } from "./StudentList";
import _fetchApi from "../api";

export default function Student() {
  const handleFetch = () => {
    _fetchApi(
      `http://localhost:45459/students/get`,
      (data) => {
        if (data.results && data.results.length) {
          setResult1(data.results[0])
        }
        // console.log(data.results)
      }
    )


  }
  // console.log(Object.keys(result1));

  useEffect(() => {
    handleFetch()
  }, [0])

  
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
  const [result1, setResult1] = useState([])
  const [result] = useState(studentList)
  const [state, setSearch] = useState({
    search: "",
  });
  const handleChanges = ({ target: { name, value } }) => {
    setSearch({ [name]: value });
  };
  let rows = [];
  result1 &&
    result1.forEach((item, index) => {
      if (
        item.first_name.toLowerCase().indexOf(state.search.toLowerCase()) ===
        -1 && item.s_class.toLowerCase().indexOf(state.search.toLowerCase()) ===
        -1
      ) {

        return;
      }
      rows.push(
        <tr key={index}>
          <th className="" scope="row">
            {index + 1}
          </th>
          <td className="">{item.first_name}{' '}{item.last_name}{" "}{item.otherr_name}</td>
          <td className="">{item.s_class}</td>
          {/* <td className=''>20</td> */}
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
      {/* {JSON.stringify(result1)} */}
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
          /><br />
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
          <Table size="sm" className="table table-headd" striped hover responsive borderless >
            <thead>
              <tr className="table-headd">
                <th>S/N</th>
                <th>Student Name</th>
                <th>Class</th>
                {/* <th>Subjects</th> */}
                <th className="d-flex justify-content-end">Actions</th>
              </tr>
            </thead>
              {rows}
            <tbody>
            </tbody>
          </Table>
          {rows.length === 0 ?
            <div className="text-center mt-5">
              <img src={nosearch} style={{ width: 100 }} alt='' />
              <p className="">No results found for "{state.search}"</p>
            </div>
            : null}
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