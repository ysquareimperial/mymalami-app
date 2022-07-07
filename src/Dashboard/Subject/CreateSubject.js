import React, { useState, useCallback } from "react";
import { Card, Col, Row } from "reactstrap";
import back from "../../images/back.png";
import { useNavigate } from "react-router-dom";
// import Multiselect from 'multiselect-react-dropdown'
import CreatableSelect from "react-select/creatable";
import makeAnimated from "react-select/animated";
import subject from "./ClassSubjects";
import { ToastContainer, toast } from "react-toastify";
import Subject from "./Subject";

export default function CreateSubject() {
  const [value, setValue] = useState();
  const [options, setOptions] = useState(subject);

  const navigate = useNavigate();
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
  const notify = () =>
    toast.success(`Subject(s) created`, {
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
              <Col md={11}>
                <h3 className="table-card-title">Create Subject</h3>
              </Col>
            </Row>
          </Col>
          <Col md={6}></Col>
        </Row>
        <Row>
          <Col md={6} className="mt-3">
            {/* <input placeholder='Subject Name' type='text' /> */}
            {/* <input placeholder='Teacher Name' type='text' />
            <input placeholder='No of Students' type='number' /> */}
            <CreatableSelect
              options={options}
              isMulti
              components={animatedComponents}
              closeMenuOnSelect={false}
              onChange={handleChange}
              onCreateOption={handleCreate}
              placeholder="Select Subjects"
              style={{}}
            />
            {/* // options={subject} displayValue='value' showCheckbox={true} placeholder='Select subjects' avoidHighlightFirstOption={true} /> */}
            <div>
              <button
                className="action-btn"
                onClick={() => {
                  notify();
                  setTimeout(() => {
                    // handleSubmit();
                    navigate("/subject");
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
          <Col md={6}></Col>
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
