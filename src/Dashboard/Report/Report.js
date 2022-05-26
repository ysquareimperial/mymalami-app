import React from 'react'
import { Card, Col, Row } from 'reactstrap'
// import './report.css'
import report from '../../images/report.png'
import { tableHeading } from './StudentsReports'
import { students } from './StudentsReports'
export default function Report() {

    return (
        <div>
            <Card className='report-card shadow py-3 px-4 mt-3'>
                <h3 className=''>
                    {/* <span>
                        <img src={report} alt='a' />
                    </span> */}
                    Reports
                </h3>
                <div className='t-d'>
                    <table className='report-t'>
                        {tableHeading.map((item, index) => (
                            <thead>
                                <tr>
                                    <th className='report-th'>#</th>
                                    <th className='report-th'>{item.name}</th>
                                    <th className='report-th'>{item.subject1}</th>
                                    <th className='report-th'>{item.subject2}</th>
                                    <th className='report-th'>{item.subject3}</th>
                                    <th className='report-th'>{item.subject4}</th>
                                    <th className='report-th'>{item.subject5}</th>
                                    <th className='report-th'>{item.subject6}</th>
                                    <th className='report-th'>{item.subject7}</th>
                                    <th className='report-th'>{item.subject8}</th>
                                    <th className='report-th'>{item.subject9}</th>
                                    <th className='report-th'>{item.subject10}</th>
                                    <th className='report-th'>{item.subject11}</th>
                                    <th className='report-th'>{item.subject12}</th>
                                    <th className='report-th'>{item.total}</th>
                                    <th className='report-th'>{item.average}</th>
                                    <th className='report-th'>{item.position}</th>
                                </tr>
                            </thead>
                        ))}
                        {students.map((item, index) => (
                            <tbody>
                                <tr>
                                    <td className='report-td'>1</td>
                                    <td className='report-td'>{item.studentName}</td>
                                    <td className='report-th'>{item.subject1}</td>
                                    <td className='report-th'>{item.subject2}</td>
                                    <td className='report-th'>{item.subject3}</td>
                                    <td className='report-th'>{item.subject4}</td>
                                    <td className='report-th'>{item.subject5}</td>
                                    <td className='report-th'>{item.subject6}</td>
                                    <td className='report-th'>{item.subject7}</td>
                                    <td className='report-th'>{item.subject8}</td>
                                    <td className='report-th'>{item.subject9}</td>
                                    <td className='report-th'>{item.subject10}</td>
                                    <td className='report-th'>{item.subject11}</td>
                                    <td className='report-th'>{item.subject12}</td>
                                    <td className='report-th'>{item.total}</td>
                                    {/* <td className='report-th'>{(item.subject1) + (item.subject2) + (item.subject3)}</td> */}
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
                <Row>
                    <Col md={6}></Col>
                    <Col md={6}>
                        <button className='action-btn' style={{float:'right', marginRight:0}}>Generate Reports</button>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}
