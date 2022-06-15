import React, { useState } from "react";
import { Card, Col, Form, Row, Table } from "reactstrap";
import back from "../../images/back.png";
import { useNavigate } from "react-router-dom";
import sum from "../../images/sum.png";
import { ToastContainer, toast } from "react-toastify";

export default function CreateStudent() {
  const navigate = useNavigate();

  let _form = {
    student: "",
  };
  const [studentName, setStudentName] = useState(_form);

  const [studentArray, setStudentArray] = useState([]);
  const handleAdd = (e) => {
    e.preventDefault();
    setStudentArray((p) => [...p, { ...studentName }]);
    setStudentName(_form);
  };
  const handleChange = ({ target: { name, value } }) => {
    setStudentName((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = () => {
    console.log(studentArray);
  };
  const notify = () =>
    toast.success(`${studentArray.length} student(s) created`, {
      position: "bottom-center",
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <div>
      <Card className="table-card shadow py-3 px-4 mt-3" style={{}}>
        <Row>
          <Col md={6}>
            <div style={{ position: "sticky", top: 0 }}>
              {/* {JSON.stringify(studentArray)} */}
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
                      onClick={() => navigate("/student")}
                    />
                  </span>
                </Col>
                <Col md={11}>
                  <h3 className="table-card-title">Create Student</h3>
                </Col>
              </Row>
              <Row>
                <Col md={10}>
                  <Form onSubmit={handleAdd}>
                    <input
                      placeholder="Student Name"
                      className="mt-3"
                      type="text"
                      name="student"
                      value={studentName.student}
                      onChange={handleChange}
                    />
                  </Form>
                </Col>
                <Col md={2}>
                  <img
                    className="action-img mt-3"
                    title="add student"
                    src={sum}
                    alt="s"
                    onClick={handleAdd}
                  />
                </Col>
              </Row>
            </div>
          </Col>
          <Col md={6}>
            <div className="display-studentList">
              <Table striped>
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Students Name</th>
                  </tr>
                </thead>
                <tbody>
                  {studentArray.map((item, index) => (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{item.student}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <button
                className="action-btn mt-1"
                onClick={() => {
                  handleSubmit();
                  notify();
                }}
              >
                Save
              </button>
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
          </Col>
        </Row>
      </Card>
    </div>
  );
}
