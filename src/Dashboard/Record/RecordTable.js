import React from "react";
import { Table } from "reactstrap";

export default function RecordTable() {
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
      <Table size="sm"  className="table">
        <thead  style={{ position: "sticky", top:0, backgroundColor:'white'}}>
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
                <button className="action-cancel-btn-rcd">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
