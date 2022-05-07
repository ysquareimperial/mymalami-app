import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import profile from '../images/profile.png'
// import user from '../images/user.png'
import email from '../images/email.png'
import iphone from '../images/iphone.png'
import address from '../images/address.png'
import pen from '../images/pen.png'
import ysquare from '../images/ysquareimperial.png'
import logo from '../images/sReord.png'
import motto from '../images/motto.png'
import camera from '../images/camera.png'
import { useNavigate } from 'react-router-dom'
import './profile.css'
export default function Profile() {
    const navigate = useNavigate()
    return (
        <div>
            <Card className='classes-card shadow py-3 px-4 mt-3'>
                <Row>
                    <Col md={6}>
                        <h3>
                            <span>
                                <img className="action-img" src={profile}
                                    style={{ width: 30, height: 30 }} alt='' />
                            </span>
                            Profile
                        </h3>
                    </Col>
                    <Col md={6}>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Card className='settings-card shadow py-3 px-4 mt-3'>
                            <Row>
                                <Col md={10}>
                                    <h5>User Information</h5>
                                </Col>
                                <Col md={2}>
                                    <img src={pen} alt='' className='edit-pen'
                                        data-toggle="tooltip" data-placement="bottom" title="edit user info"
                                        style={{ width: 35, height: 35 }} onClick={() => navigate('/edit-user-info')}/>
                                </Col>
                            </Row>
                            <h5><img src={ysquare} alt='' style={{ width: 80, height: 80, borderRadius: 50 }} />{"  "}Yasir Ado Hassan</h5>
                            <p style={{ margin: 0 }}><span><img src={iphone} alt=''
                                style={{ width: 25, height: 25 }} /></span> +234 030033003</p>
                            <p style={{ margin: 0 }}><span><img src={email} alt=''
                                style={{ width: 25, height: 25 }} /></span> abcde@aaa.com</p>
                            <p style={{ margin: 0 }}><span><img src={address} alt=''
                                style={{ width: 20, height: 20 }} /></span> Airport Road, Kano, Nigeria</p>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='settings-card shadow py-3 px-4 mt-3'>
                            <Row>
                                <Col md={10}>
                                    <h5>School Information</h5>
                                </Col>
                                <Col md={2}>
                                    <img src={pen} alt='' className='edit-pen'
                                        data-toggle="tooltip" data-placement="bottom" title="edit school info"
                                        style={{ width: 35, height: 35 }} onClick={() => navigate('/edit-school-info')} />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <img src={logo} alt='' style={{ width: 80, height: 80, borderRadius: "" }} />{"  "}
                                </Col>
                                <Col md={8}><h5 style={{ marginTop: 30 }}>sRecord Primary School</h5></Col>
                            </Row>
                            <p style={{ margin: 0 }}><span><img src={motto} alt=''
                                style={{ width: 25, height: 25 }} /></span> Knowledge is Power</p>
                            <p style={{ margin: 0 }}><span><img src={iphone} alt=''
                                style={{ width: 25, height: 25 }} /></span> +234 030033003</p>
                            <p style={{ margin: 0 }}><span><img src={email} alt=''
                                style={{ width: 25, height: 25 }} /></span> abcde@aaa.com</p>
                            <p style={{ margin: 0 }}><span><img src={address} alt=''
                                style={{ width: 20, height: 20 }} /></span> Airport Road, Kano, Nigeria</p>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='text-center settings-card shadow py-3 px-4 mt-3'>
                        </Card>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}
