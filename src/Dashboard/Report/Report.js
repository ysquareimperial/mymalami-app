import React, { useState } from "react";
import { Card, Col, Row, Table } from "reactstrap";
import { Search } from 'react-feather'
import { tableHeading } from "./StudentsReports";
import { students } from "./StudentsReports";
import { PDFDownloadLink } from '@react-pdf/renderer'
import nosearch from "../../images/search.svg";
import ReportCard from "./ReportCard";
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Report() {
  const navigate = useNavigate()

  const [result] = useState(students)
  const [state, setSearch] = useState({
    search: "",
  });
  const handleChanges = ({ target: { name, value } }) => {
    setSearch({ [name]: value });
  };
  let rows = [];
  result &&
    result.forEach((item, index) => {
      if (
        item.studentName.toLowerCase().indexOf(state.search.toLowerCase()) ===
        -1 
      ) {

        return;
      }
      rows.push(
        <tr key={index}>
          <th className="" scope="row">
            {index + 1}
          </th>
          <td className="">{item.studentName}</td>
          <td className="">{item.class}</td>
          <td className="">{item.subject1}</td>
                  <td className="">{item.subject2}</td>
                  <td className="">{item.subject3}</td>
                  <td className="">{item.subject4}</td>
                  <td className="">{item.subject5}</td>
                  <td className="">{item.subject6}</td>
                  <td className="">{item.subject7}</td>
                  <td className="">{item.subject8}</td>
                  <td className="">{item.subject9}</td>
                  <td className="">{item.subject10}</td>
                  <td className="">{item.subject11}</td>
                  <td className="">{item.subject12}</td>
                  <td className="">{item.total}</td>
        </tr>
      );
    });
  return (
    <div>
      <div style={{ position: "relative" }}>
        <Search
          style={{ position: "absolute", bottom: 10, left: 10, color: "grey" }}
        />
        <input
          name="search"
          onChange={handleChanges}
          type="search"
          placeholder="search student reports"
          style={{ paddingLeft: 45 }}
        />
      </div>
      <Card className="table-card shadow py-3 px-4 mt-3">
        <h3 className="">
          {/* <span>
                        <img src={report} alt='a' />
                    </span> */}
          Reports
        </h3>
        <div className="t-d">
          <Table size="sm" className="table" striped hover responsive borderless>
            {tableHeading.map((item, index) => (
              <thead>
                <tr>
                  <th className="">S/N</th>
                  <th className="">{item.name}</th>
                  <th className="">{item.subject1}</th>
                  <th className="">{item.subject2}</th>
                  <th className="">{item.subject3}</th>
                  <th className="">{item.subject4}</th>
                  <th className="">{item.subject5}</th>
                  <th className="">{item.subject6}</th>
                  <th className="">{item.subject7}</th>
                  <th className="">{item.subject8}</th>
                  <th className="">{item.subject9}</th>
                  <th className="">{item.subject10}</th>
                  <th className="">{item.subject11}</th>
                  <th className="">{item.subject12}</th>
                  <th className="">{item.total}</th>
                  <th className="">{item.average}</th>
                  <th className="">{item.position}</th>
                </tr>
              </thead>
            ))}
            <tbody>
              {rows}
            </tbody>
          </Table>
          {rows.length === 0 ?
            <div className="text-center mt-5">
              <img src={nosearch} style={{ width: 100 }} alt='' />
              <p className="">No results found for "{state.search}"</p>
            </div>
            : null}
        </div>
        <Row>
          <Col md={6}></Col>
          <Col md={6}>
            <div style={{ float: 'right' }}>
              <button
                className="action-btn"
                style={{ marginRight: 5 }}
                onClick={() => navigate('/report/report-cards')}
              >
                View Report Cards
              </button>
              <PDFDownloadLink document={<ReportCard />} fileName='ReportCard'>
                {({ loading }) => (loading ? <button style={{ marginRight: 0 }} className="action-btn">Loading Document...</button> : <button style={{ marginRight: 0 }} className="action-btn"> Download Report Cards</button>)}
              </PDFDownloadLink>
            </div>
          </Col>
        </Row>
      </Card>
    </div >
  );
}
