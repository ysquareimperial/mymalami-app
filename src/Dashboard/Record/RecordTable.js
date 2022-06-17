import React from "react";
import { Table } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";

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
      sn: "1",
      name: "Ali Mike",
      aissignment: "10",
      presentation: "8",
      ca: "10 ",
      exam: "70",
    },
    {
      sn: "1",
      name: "Ali Mike",
      aissignment: "10",
      presentation: "8",
      ca: "10 ",
      exam: "70",
    },
    {
      sn: "1",
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
        <thead style={{ position: "sticky", top: 0, backgroundColor: "white" }}>
          <tr>
            <th>S/N</th>
            <th>Student Name</th>
            <th>English Assignment</th>
            <th>English Presentation</th>
            <th>English CA</th>
            <th>English Exam</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {student.map((item, index) => (
            <tr>
              <th className="" scope="row">
                {item.sn}
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
              <td className="">
                <button
                  className="action-cancel-btn-rcd"
                  onClick={() => {
                    notify();
                  }}
                >
                  Delete
                </button>
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
