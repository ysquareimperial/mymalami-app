import React, { useState, useCallback } from "react";
import { Card, Col, Row } from "reactstrap";
// import './class.css'
import back from "../../images/back.png";
import { useNavigate } from "react-router-dom";
// import Multiselect from 'multiselect-react-dropdown'
import CreatableSelect from "react-select/creatable";
import makeAnimated from "react-select/animated";
import subject from "../Subject/ClassSubjects";
import { ToastContainer, toast } from "react-toastify";

export default function CreateClass() {
  const notify = () =>
    toast.success(`Class created`, {
      position: "bottom-center",
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const navigate = useNavigate();
  // const data = [
  //     { value: 'Mathematics', id: 1 },
  //     { value: 'English', id: 2 },
  //     { value: 'Civic Education', id: 3 },
  //     { value: 'Mathesmatics', id: 4 },
  //     { value: 'Englissh', id: 5 }
  // ]
  const [value, setValue] = useState();
  const [options, setOptions] = useState(subject);

  const [data2, setData2] = useState([
    { value: "Adamu Abdullahi", label: "Adamu Abdullahi" },
    { value: "Aisha Sule", label: "Aisha Sule" },
    { value: "Murtala Muhammed", label: "Murtala Muhammed" },
    { value: "Yasir Ado Hassan", label: "Yasir Ado Hassan" },
    { value: "Wanka Zaharaddeen", label: "Wanka Zaharaddeen" },
  ]);

  const animatedComponents = makeAnimated();

  const handleChange = useCallback((inputValue) => setValue(inputValue), []);

  const handleCreate = useCallback(
    (inputValue) => {
      const newValue = { value: inputValue.toLowerCase(), label: inputValue };
      setOptions([...subject, newValue]);
      setValue(newValue);
    },
    [subject]
  );

  const handleCreate2 = useCallback(
    (inputValue) => {
      const newValue = { value: inputValue.toLowerCase(), label: inputValue };
      setData2([...data2, newValue]);
      setValue(newValue);
    },
    [subject]
  );
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
                    akt=""
                    onClick={() => navigate("/class")}
                  />
                </span>
              </Col>
              <Col md={11} sm={11} xs={11}>
                <p className="table-card-title">Create Class</p>
              </Col>
            </Row>
          </Col>
          <Col md={6}></Col>
        </Row>
        <Row>
          <Col md={6} className="mt-3">
            <input placeholder="Class Name" type="text" />

            <br></br>
            <CreatableSelect
              options={options}
              isMulti
              components={animatedComponents}
              closeMenuOnSelect={false}
              onChange={handleChange}
              onCreateOption={handleCreate}
              placeholder="Select Subjects"
            />
            <br />
            <CreatableSelect
              options={data2}
              isMulti
              components={animatedComponents}
              closeMenuOnSelect={false}
              onChange={handleChange}
              onCreateOption={handleCreate2}
              placeholder="Select Students"
            />
            <div>
              <button
                className="action-btn"
                onClick={() => {
                  notify();
                  setTimeout(() => {
                    // handleSubmit();
                    navigate("/class");
                  }, 1000);
                }}
              >
                Create
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
