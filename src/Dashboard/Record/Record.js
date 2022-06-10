import React from 'react'
// import { Book, BookOpen, FileText, StopCircle, Users } from 'react-feather'
import { Card, Row, Col } from 'reactstrap'
import student from '../../images/student.png'
import book from '../../images/book.png'
import classs from '../../images/class.png'
import { useNavigate } from 'react-router-dom'
// import './record.css'

export default function Record() {
    const navigate = useNavigate()
    const indexActions = [
        {

            img: <img alt='a' src={student} />,
            name: 'Mtics',
            total: '6',
            url: '/subject-record'
        },
        {

            img: <img alt='a' src={student} />,
            name: 'Mathematics',
            total: '6',
            url: '/subject-record'
        },
        {

            img: <img alt='a' src={student} />,
            name: 'Mathematics',
            total: '6',
            url: '/subject-record'
        },
        {

            img: <img alt='a' src={student} />,
            name: 'Mathematics',
            total: '6',
            url: '/subject-record'
        },
        {

            img: <img alt='a' src={student} />,
            name: 'English Language',
            total: '120',
            url: '/subject-record'
        },
        {

            img: <img alt='a' src={student} />,
            name: 'Social Studies',
            total: '3',
            url: '/subject-record'
        }
    ]
    return (
        <div>
            <Row>
                <h3 className='record-heading'>Records</h3>
                {indexActions.map((item, index) => (
                    <Col md={2}>
                        <Card className='shadow px-1 py-3 index-card' onClick={() => navigate(item.url)}>
                            <Row>
                                <Col md={2} className='record-col'>
                                    <img className='action-img' src={book} />
                                </Col>
                                <Col md={10}>
                                    <p className='subject-name'>{item.name}</p>
                                </Col>
                            </Row>
                            
                            <Row>
                                <Col md={2} className='record-col'>
                                    <img className='action-img' src={student} />
                                </Col>
                                <Col md={10}>
                                    <p className=''>Students: <b>{item.total}</b></p>
                                </Col>
                            </Row>
                            {/* <div className=''>
                                <img src={student} /><p className='std-enrolled'>Students Enrolled: <span className='std-total'>{item.total}</span></p>
                            </div> */}
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}
