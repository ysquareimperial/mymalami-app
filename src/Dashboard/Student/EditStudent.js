import React, { useState } from "react";
import { Card, Col, Row } from "reactstrap";
// import './student.css'
import back from "../../images/back.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Multiselect } from "multiselect-react-dropdown";
export default function EditStudent() {
  const notify = () =>
    toast.success(`1 student(s) updated`, {
      position: "bottom-center",
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const navigate = useNavigate();
  const data = [
    { value: "Mathematics", id: 1 },
    { value: "English", id: 2 },
    { value: "Civic Education", id: 3 },
    { value: "Mathesmatics", id: 4 },
    { value: "Englissh", id: 5 },
  ];

  const [options] = useState(data);
  return (
    <div>
      <Card className="table-card shadow py-3 px-4 mt-3">
        <Row>
          <Col md={6}>
            <Row>
              <Col md={1} sm={1} xs={1}>
                <span>
                  <img
                    className="action-img"
                    src={back}
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="back"
                    alt=""
                    onClick={() => navigate("/student")}
                  />
                </span>
              </Col>
              <Col md={10} sm={10} xs={10}>
                <p className="table-card-title">Edit Student</p>
              </Col>
            </Row>
          </Col>
          <Col md={6}></Col>
        </Row>
        <Row>
          <Col md={6} className="mt-3">
            <input placeholder="Student Name" type="text" />
            <input placeholder="Student Class" type="text" />
            <br></br>
            <Multiselect
              options={data}
              displayValue="value"
              showCheckbox={true}
              placeholder="Select subjects to be taken"
              avoidHighlightFirstOption={true}
            />

            <div>
              <button
                className="action-btn"
                onClick={() => {
                  notify();
                  setTimeout(() => {
                  navigate('/student')
                  }, 1000);
                
                }}
              >
                Save
              </button>
              <button
                className="action-cancel-btn"
                style={{ float: "right", marginRight: 0 }}
              >
                Cancel
              </button>
            </div>
          </Col>
        </Row>
      </Card>
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
