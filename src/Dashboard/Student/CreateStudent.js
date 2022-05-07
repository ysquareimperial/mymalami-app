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
            <Card className='classes-card shadow py-3 px-4 mt-3'>
                <Row>
                    <Col md={6}>
                        <h3><span><img className="action-img" src={back} style={{ width: 35, height: 35, cursor: 'pointer' }} data-toggle="tooltip" data-placement="bottom" title="back" akt='' onClick={() => navigate('/class')} /></span>Create Students</h3>
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

                        <div>
                            <button className='create-btn'>Create</button>
                            <button className='create-btn'>Cancel</button>
                        </div>
                    </Col>
                </Row>
            </Card> 
        </div>

    )
}
