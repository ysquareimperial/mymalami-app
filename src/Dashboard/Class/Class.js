import { Modal, ModalBody, Table } from "reactstrap";
import React, { useState } from "react";
import { Card, Col, Row } from "reactstrap";
// import './class.css'
import edit from "../../images/edit.png";
import nosearch from "../../images/search.svg";
import dlt from "../../images/delete.png";
import sum from "../../images/sum.png";
// import view from "../../images/view.png";
import student from "../../images/student.png";
import { ToastContainer, toast } from "react-toastify";
// import book from "../../images/book.png";
import { useNavigate } from "react-router-dom";
import { Search } from "react-feather";
import { classs } from "../Student/StudentList";
import _fetchApi from "../api";
import { useEffect } from "react";

export default function Classes() {

  const [result1, setResult1] = useState([])
  const handleFetch = () => {
    _fetchApi(
      `http://localhost:45459/classes/get`,
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
  }, [])

  const notify = () =>
    toast.error(`Class deleted`, {
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
  // const [open1, setOpen1] = useState(false);
  // const toggle1 = () => {
  //   setOpen1(!open1);
  // };
  const [open2, setOpen2] = useState(false);
  const toggle2 = () => {
    setOpen2(!open2);
  };

  const navigate = useNavigate();
  // let form = {
  //   contactName: "",
  //   contactPhone: "",
  //   contactEmail: "",
  //   contactDescription: "",
  // }

  const [result] = useState(classs)
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
        item.class_name.toLowerCase().indexOf(state.search.toLowerCase()) ===
        // -1 && item.students.toLowerCase().indexOf(state.search.toLowerCase()) ===
        -1
      ) {

        return;
      }
      rows.push(
        <tr key={index}>
          <th className="" scope="row">
            {index + 1}
          </th>
          <td className="">{item.class_name.length > 19 ? `${item.class_name.substring(0, 19)}...` : item.class_name}</td>
          <td
            className=""
            ata-toggle="tooltip"
            data-placement="bottom"
            title="click to view students"
          >
            <span className="students-total" onClick={toggle2}>
              {item.create_by}
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
    <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12">
      <div style={{ position: "relative" }}>
        <Search
          style={{ position: "absolute", bottom: 10, left: 10, color: "grey" }}
        />
        <input name='search' onChange={handleChanges}
          type="search"
          placeholder="search classes"
          style={{ paddingLeft: 45 }}
        />
      </div>
      <Card className="table-card shadow py-3 px-4 mt-3">
        {/* {JSON.stringify(result1)} */}
        <Row>
          <Col md={6} sm={6} xs={6}>
            <h3>Classes</h3>
          </Col>
          <Col md={6} sm={6} xs={6}>
            <div className="d-flex justify-content-end">
              <img
                className="action-img"
                data-toggle="tooltip"
                data-placement="bottom"
                title="add class"
                src={sum}
                alt="s"
                onClick={() => navigate("/class/create-class")}
              />
            </div>
          </Col>
        </Row>
        <div className="mt-4">
          <Table
            size="sm"
            className="table table-headd"
            striped
            responsive
            borderless
            hover
          >
            <thead>
              <tr>
                <th>S/N</th>
                <th>Class Name</th>
                {/* <th>Class Teacher Name</th> */}
                {/* <th>Subjects</th> */}
                <th>Students</th>
                <th className="d-flex justify-content-end">Actions</th>
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
        </div>
      </Card>
      <Modal isOpen={open} toggle={toggle} className="dlt-modal">
        <ModalBody className="modal-body">
          <img src={dlt} alt="" />
          <p className="dlt-warning">
            Are you sure you want to delete this class?
          </p>
          <div>
            <p className="dlt-details">
              Class Name: <span>JSS One</span>
            </p>
            <p className="dlt-details">
              Class teacher Name: <span>Quavo Hunchox</span>
            </p>
            <p className="dlt-details">
              Number of Students: <span>30</span>
            </p>
          </div>
          <div className="">
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
      {/* <Modal isOpen={open1} toggle={toggle1} className='dlt-modal'>
        <ModalBody className='modal-body' >
          <img src={book} alt='' /><p>Subjects/Courses</p>
          <div>
            <p className='dlt-details'>Class Name: <span>JSS One</span></p>
            <br></br>
            <p className='dlt-details'>Mathematics</p>
            <p className='dlt-details'>English</p>
          </div>
          <div className=''>
            <button className='action-btn' onClick={toggle1}>Close</button>
          </div>
        </ModalBody>
      </Modal> */}
      <Modal isOpen={open2} toggle={toggle2} className="dlt-modal">
        <ModalBody className="modal-body">
          <img src={student} alt="" />
          <p className="students">Students</p>
          <div>
            <p className="std-details">
              Class Name: <span>JSS One</span>
            </p>

            <p className="dlt-details">Ali</p>
            <p className="dlt-details">Crrrrr</p>
          </div>
          <div className="">
            <button className="action-btn" onClick={toggle2}>
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
