import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import ysquare from '../images/ysquareimperial.png'
import back from '../images/back.png'
import { useNavigate } from 'react-router-dom'
export default function EditUserInfo() {
    const navigate = useNavigate()
    return (
        <div className='profile-div'>
            <Card className='table-card shadow py-3 px-4 mt-3'>
                <Row>
                    <Col md={6}>
                        <Row>
                            <Col md={1}>
                                <span><img className="action-img" src={back} data-toggle="tooltip" data-placement="bottom" title="back" alt='' onClick={() => navigate('/profile')} /></span>
                            </Col>
                            <Col md={11}>
                                <h3 className='table-card-title'>Edit User Info</h3>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6}></Col>
                </Row>
                <Row className='mt-3'>
                    <Col md={6}>
                        <h5><img src={ysquare} className='edit-profile-pic' alt='' />{"  "}</h5>
                        {/* <input type='file' /> */}
                        <input type="file" />
                        <input type='text' className='mt-3'/>
                        <input type='number' className='mt-3' />
                        <input type='email' className='mt-3' />
                        <input type='address' className='mt-3' />
                        <button className='action-btn'>save</button>
                    </Col>
                    <Col md={6}></Col>
                </Row>
            </Card>
        </div>
    )
}
