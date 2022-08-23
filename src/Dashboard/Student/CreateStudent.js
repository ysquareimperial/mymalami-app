import React, { useState } from "react";
import { Card, Col, Form, Row, Table } from "reactstrap";
import back from "../../images/back.png";
import { useNavigate } from "react-router-dom";
import sum from "../../images/sum.png";
import { ToastContainer, toast } from "react-toastify";
import dlt from "../../images/delete.png";
import Error from "../../Auth/Error";
export default function CreateStudent() {
  const navigate = useNavigate();

  let _form = {
    student: "",
  };
  const [studentName, setStudentName] = useState(_form);

  const [studentArray, setStudentArray] = useState([]);
  const [formError, setFormError] = useState({});
  const validateForm = () => {
    let errors = {};
    Object.keys(studentName).forEach((m) => {
      if (studentName[m] === "") {
        errors[m] = m + " name cannot be empty";
      }
    });
    return errors;
  };
  const handleAdd = (e) => {
    let errorObj = validateForm();
    if (Object.keys(errorObj).length) {
      setFormError(errorObj);
    } else {
      e.preventDefault();
      setStudentArray((p) => [...p, { ...studentName }]);
      setStudentName(_form);
      setFormError(!errorObj);

    }
  };
  const handleChange = ({ target: { name, value } }) => {
    setStudentName((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    console.log(studentArray);
    // e.preventDefault()
      // notify()
      navigate('/student')
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

  const remove = (itm) => {
    setStudentArray((studentName) =>
      studentName.filter((Onestudent) => Onestudent.student !== itm.student)
    );
  };

  // const remove = (index) => {
  //   setStudentArray([
  //     ...studentName.slice(0, index),
  //     ...studentName.slice(index + 1, studentName.length),
  //   ]);
  // };

  return (
    <div>
      {/* {JSON.stringify(studentArray)} */}
      <Card className="table-card shadow py-3 px-4 mt-3" style={{}}>
        <Row>
          <Col md={6}>
            <div style={{ position: "sticky", top: 0 }}>
              {/* {JSON.stringify(studentArray)} */}
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
                <Col md={11} sm={11} xs={11}>
                  <p className="table-card-title">Create Student</p>
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
                    {formError.student && (
                      <Error errorName={formError.student} />
                    )}
                  </Form>
                </Col>
                <Col md={2}>
                  <img
                    className="action-img mt-3"
                    title="press enter to add student"
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
                    <th style={{ float: "right" }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {studentArray.map((item, index) => (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{item.student}</td>
                      <td>
                        <img
                          src={dlt}
                          alt="dlt"
                          className="action-img d-flex justify-content-end"
                          style={{ float: "right" }}
                          onClick={() => {
                            remove(item);
                          }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <button
                className="action-btn mt-1"
                onClick={() => {
                  notify();
                  setTimeout(() => {
                    handleSubmit();
                    navigate("/student");
                  }, 1000);
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
