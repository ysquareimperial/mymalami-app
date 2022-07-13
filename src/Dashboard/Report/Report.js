import React from "react";
import { Card, Col, Row, Table } from "reactstrap";
import { Search } from 'react-feather'
import { tableHeading } from "./StudentsReports";
import { students } from "./StudentsReports";
import { PDFDownloadLink } from '@react-pdf/renderer'
import ReportCard from "./ReportCard";
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Report() {
  const navigate = useNavigate()
  return (
    <div>
      <div style={{ position: "relative" }}>
        <Search
          style={{ position: "absolute", bottom: 10, left: 10, color: "grey" }}
        />
        <input
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
          <Table striped className="" size="sm">
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
              {students.map((item, index) => (
                <tr>
                  <td className="">{index + 1}</td>
                  <td className="">
                    <div style={{ width: 220 }}>{item.studentName}</div>
                  </td>
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
                  {/* <td className=''>{(item.subject1) + (item.subject2) + (item.subject3)}</td> */}
                </tr>
              ))}
            </tbody>
          </Table>
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
