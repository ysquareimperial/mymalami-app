import React, { useState } from 'react'
import { Card, Col, Row } from 'reactstrap'
// import './student.css'
import back from '../../images/back.png'
import { useNavigate } from 'react-router-dom'
import { Multiselect } from 'multiselect-react-dropdown'
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
                        <input placeholder='Class Name' type='text' />
                        <input placeholder='Class Teacher Name' type='text' />

                        <Multiselect options={options} displayValue='value' className='select' />
                        <div>
                            <button className='create-btn'>Create</button>
                            <button className='create-btn'>Cancel</button>
                        </div>
                    </Col>
                </Row>
            </Card>

            <select className="select" multiple>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
                <option value="5">Five</option>
                <option value="6">Six</option>
                <option value="7">Seven</option>
                <option value="8">Eight</option>
            </select>
        </div>

    )
}
