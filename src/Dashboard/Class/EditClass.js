import React from "react";
import { Card, Col, Row } from "reactstrap";
// import './class.css'
import Multiselect from "multiselect-react-dropdown";
import back from "../../images/back.png";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function EditClass() {
  const notify = () =>
    toast.success(`Class updated`, {
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
  const data2 = [
    { value: "Adamu Abdullahi", id: 1 },
    { value: "Aisha Sule", id: 2 },
    { value: "Murtala Muhammed", id: 3 },
    { value: "Yasir Ado Hassan", id: 4 },
    { value: "Wanka Zaharaddeen", id: 5 },
  ];
  return (
    <div>
      <Card className="table-card shadow py-3 px-4 mt-3">
        <Row>
          <Col md={6}>
            <Row>
              <Col md={1}>
                <span>
                  <img
                    className="action-img"
                    src={back}
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="back"
                    alt=""
                    onClick={() => navigate("/class")}
                  />
                </span>
              </Col>
              <Col md={10}>
                <h3 className="table-card-title">Edit Class</h3>
              </Col>
            </Row>{" "}
          </Col>
          <Col md={6}></Col>
        </Row>
        <Row>
          <Col md={6} className="mt-3">
            <input placeholder="Class Name" type="text" />

            <br></br>
            <Multiselect
              options={data}
              displayValue="value"
              showCheckbox={true}
              placeholder="Select subjects for class"
              avoidHighlightFirstOption={true}
            />
            <br />
            <Multiselect
              options={data2}
              displayValue="value"
              showCheckbox={true}
              placeholder="Select students in class"
              avoidHighlightFirstOption={true}
            />

            <div>
              <button
                className="action-btn"
                onClick={() => {
                  notify();
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
        {/* <img className="action-img" src={back} style={{ width: 35, height: 35, cursor: 'pointer' }} data-toggle="tooltip" data-placement="bottom" title="back" akt='' onClick={() => navigate('/class')} /> */}
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
