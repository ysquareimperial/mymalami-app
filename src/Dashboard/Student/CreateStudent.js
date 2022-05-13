import React, { useState } from 'react'
import { Card, Col, Row } from 'reactstrap'
import back from '../../images/back.png'
import { useNavigate } from 'react-router-dom'
export default function CreateStudent() {

    const navigate = useNavigate()
    const data = [
        { value: 'Mathematics', id: 1 },
        { value: 'English', id: 2 },
        { value: 'Civic Education', id: 3 },
        { value: 'Mathesmatics', id: 4 },
        { value: 'Englissh', id: 5 }
    ]

    const [options] = useState(data)
    return (
        <div>
            <Card className='table-card shadow py-3 px-4 mt-3'>
                <Row>
                    <Col md={6}>
                        <Row>
                            <Col md={1}>
                                <span><img className="action-img" src={back} data-toggle="tooltip" data-placement="bottom" title="back" akt='' onClick={() => navigate('/student')} /></span>
                            </Col>
                            <Col md={11}>
                                <h3 className='table-card-title'>Create Student</h3>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6}>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className='mt-3'>
                        <input placeholder='Student Name' type='text' />
                        <br></br>
                        select subjects
                        {/* <input placeholder='Class Name' type='text' />
                        <input placeholder='Class Teacher Name' type='text' /> */}

                        <div className=''>
                            <button className='action-btn'>Create</button>
                            <button className='action-cancel-btn' style={{ float: 'right', marginRight: 0 }}>Cancel</button>
                        </div>
                    </Col>
                </Row>
            </Card>
        </div>

    )
}