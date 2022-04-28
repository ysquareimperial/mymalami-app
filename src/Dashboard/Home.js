import React from 'react'
// import { Book, BookOpen, FileText, StopCircle, Users } from 'react-feather'
import { Card, Row, Col } from 'reactstrap'
import './Dashboard.css'
import student from '../images/student.png'
import book from '../images/book.png'
import classs from '../images/class.png'
import report from '../images/report.png'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()
    const indexActions = [
        {
            // icon: <classs size='4rem' style={{backgroundColor:'#1B7B4D', padding:14, borderRadius:50}} />,
            img: <img alt='a' src={classs} />,
            name: 'Classes',
            total: '3',
            url: '/class'
        },
        {
            // icon: <book size='4rem' style={{backgroundColor:'#1B7B4D', padding:14, borderRadius:50}} />,
            img: <img alt='a' src={book} />,
            name: 'Subjects',
            total: '6',
            url: '/subject'
        },
        {
            // icon: <student size='4rem' style={{backgroundColor:'#1B7B4D', padding:14, borderRadius:50}} />,
            img: <img alt='a' src={student} />,
            name: 'Students',
            total: '12',
            url: '/student'
        },
        {
            // icon: <report size='4rem' style={{backgroundColor:'#1B7B4D', padding:14, borderRadius:50}} />,
            img: <img alt='a' src={report} />,
            name: 'Reports',
            total: '12',
            url: '/report'
        }
    ]
    return (
        <div>
            <Row>
                {indexActions.map((item, index) => (
                    <Col md={3}>
                        <Card className='shadow px-4 py-3 index-card' onClick={() => navigate(item.url)}>
                            <p className='item-name'>{item.name}</p>
                            <div className='item-icon'>
                                {item.img}
                            </div>
                            <div className='item-total'>
                                {item.total}
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}
