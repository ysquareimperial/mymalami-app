import React from 'react'
import { Col, Row } from 'reactstrap'
// import './Dashboard.css'
import student from '../images/student.png'
import home from '../images/home.png'
import book from '../images/book.png'
import classs from '../images/class.png'
import report from '../images/report.png'
import lb from '../images/sRecord-L&B.png'
import record from '../images/record.png'
import { useNavigate } from 'react-router-dom'
export default function Sidebar() {
    const navigate = useNavigate()
    return (
        <div>
            <Row className=''>
                <Col>
                    <ul className='sidebar-items'>
                        <li onClick={() => navigate('/home')}><img style={{ width: 25, height: 25, marginRight: 5, marginBottom: 5 }} src={home} alt='h' />Home</li>
                        <li onClick={() => navigate('/subject')}><img style={{ width: 25, height: 25, marginRight: 5, marginBottom: 5 }} src={book} alt='h' />Subjects/Courses</li>
                        <li onClick={() => navigate('/student')}><img style={{ width: 25, height: 25, marginRight: 5, marginBottom: 5 }} src={student} alt='h' />Students</li>
                        <li onClick={() => navigate('/class')}><img style={{ width: 25, height: 25, marginRight: 5, marginBottom: 5 }} src={classs} alt='h' />Classes</li>
                        <li onClick={() => navigate('/record')}><img style={{ width: 25, height: 25, marginRight: 5, marginBottom: 5 }} src={record} alt='h' />Records</li>
                        <li onClick={() => navigate('/report')}><img style={{ width: 25, height: 25, marginRight: 5, marginBottom: 5 }} src={report} alt='h' />Reports</li>
                    </ul>
                </Col>
            </Row>
            <div className='brand'>
                <img src={lb} alt='' style={{ width: 150, marginLeft:1 }} />
                <p style={{ color: 'grey', fontSize: 12, margin: 0, padding: 0,cursor:'pointer', marginLeft:7 }}>Terms <span>Privacy</span></p>
                <p style={{ color: 'grey', fontSize: 12, margin: 0, padding: 0,cursor:'pointer', marginLeft:7 }}>sRecord &copy; 2022</p>
            </div>
        </div>
    )
}
