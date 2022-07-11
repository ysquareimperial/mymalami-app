import React from "react";
import { Table } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import dlt from "../../images/delete.png";

export default function RecordTable() {
  const notify = () =>
    toast.error(`Record deleted`, {
      position: "bottom-center",
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const student = [
    {
      name: "Ali Mike",
      aissignment: "10",
      presentation: "8",
      ca: "10 ",
      exam: "70",
    },
    {
      name: "Ali Mike",
      aissignment: "10",
      presentation: "8",
      ca: "10 ",
      exam: "70",
    },
    {
      name: "Ali Mike",
      aissignment: "10",
      presentation: "8",
      ca: "10 ",
      exam: "70",
    },
  ];
  return (
    <div>
      <Table size="sm" className="table">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Student Name</th>
            <th>English Assignment</th>
            <th>English Presentation</th>
            <th>English CA</th>
            <th>English Exam</th>
            <th style={{ float: "right" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {student.map((item, index) => (
            <tr>
              <th className="" scope="row">
                {index + 1}
              </th>
              <td className="">{item.name}</td>
              <td className="">
                <input className="record-input" type="text" />
              </td>
              <td className="">
                <input className="record-input" type="text" />
              </td>
              <td className="">
                <input className="record-input" type="text" />
              </td>
              <td className="">
                <input className="record-input" type="text" />
              </td>
              <td className="" style={{ float: "right" }}>
                <img
                  src={dlt}
                  className="action-img"
                  onClick={() => {
                    notify();
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
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
