import React from 'react'
import { Book, BookOpen, FileText, StopCircle, Users } from 'react-feather'
import { Card, Row, Col } from 'reactstrap'
import './Dashboard.css'
import student from '../images/student.png'
import book from '../images/book.png'
import classs from '../images/class.png'
import report from '../images/report.png'

export default function Home() {
    const indexActions = [
        {
            // icon: <classs size='4rem' style={{backgroundColor:'#1B7B4D', padding:14, borderRadius:50}} />,
            img: <img src={classs}/>,
            name: 'Classes',
            total: '3',
        },
        {
            // icon: <book size='4rem' style={{backgroundColor:'#1B7B4D', padding:14, borderRadius:50}} />,
            img: <img src={book}/>,
            name: 'Subjects',
            total: '6',
        },
        {
            // icon: <student size='4rem' style={{backgroundColor:'#1B7B4D', padding:14, borderRadius:50}} />,
            img: <img src={student}/>,
            name: 'Students',
            total: '12',
        },
        {
            // icon: <report size='4rem' style={{backgroundColor:'#1B7B4D', padding:14, borderRadius:50}} />,
            img: <img src={report}/>,
            name: 'Reports',
            total: '12',
        }
    ]
    return (
        <div>
            <Row>
                {indexActions.map((item, index) => (
                    <Col md={3}>
                        <Card className='shadow px-4 py-3 index-card'>
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
