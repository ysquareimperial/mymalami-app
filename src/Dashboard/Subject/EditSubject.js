import React from "react";
import { Card, Col, Row } from "reactstrap";
import back from "../../images/back.png";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function EditSubject() {
  const notify = () =>
    toast.success(`Subject(s) updated`, {
      position: "bottom-center",
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const navigate = useNavigate();
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
                    akt=""
                    onClick={() => navigate("/subject")}
                  />
                </span>
              </Col>
              <Col md={10}>
                <h3 className="table-card-title">Edit Subject</h3>
              </Col>
            </Row>
          </Col>
          <Col md={6}></Col>
        </Row>
        <Row>
          <Col md={6} className="mt-3">
            <input placeholder="Subject Name" type="text" />
            {/* <input placeholder='No of Students' type='number' /> */}
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
