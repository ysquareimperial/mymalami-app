import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PDFViewer } from '@react-pdf/renderer';
import back from "../../images/back.png";
import ReportCard from './ReportCard'
import { Col, Row } from 'reactstrap';
export default function ViewReportCard() {
    const navigate = useNavigate()
    return (
        <div>
            <Row className='mt-3'>
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
                                    onClick={() => navigate("/report")}
                                />
                            </span>
                        </Col>
                        <Col md={11} sm={11} xs={11}>
                            <p className="table-card-title">Students Report Cards</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <PDFViewer style={{ width: '100%', height: '100vh' }}>
                <ReportCard />
            </PDFViewer>
        </div>
    )
}
