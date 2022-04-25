import React from 'react'
import { Col, Row } from 'reactstrap'
import './Dashboard.css'
import student from '../images/student.png'
import home from '../images/home.png'
import book from '../images/book.png'
import classs from '../images/class.png'
import report from '../images/report.png'
import { useNavigate } from 'react-router-dom'
export default function Sidebar() {
    const navigate = useNavigate()
    return (
        <div>
            <Row className=''>
                <Col>
                    <ul className='sidebar-items'>
                        <li onClick={() => navigate('/index')}><img style={{width:25, height:25, marginRight:5, marginBottom:5}} src={home} alt='h' />Home</li>
                        <li onClick={() => navigate('/classes')}><img style={{width:25, height:25, marginRight:5, marginBottom:5}} src={classs} alt='h' />Classes</li>
                        <li><img style={{width:25, height:25, marginRight:5, marginBottom:5}} src={book} alt='h' />Subjects/Courses</li>
                        <li><img style={{width:25, height:25, marginRight:5, marginBottom:5}} src={student} alt='h' />Students</li>
                        <li><img style={{width:25, height:25, marginRight:5, marginBottom:5}} src={report} alt='h' />Reports</li>
                    </ul>
                </Col>
            </Row>
        </div>
    )
}
