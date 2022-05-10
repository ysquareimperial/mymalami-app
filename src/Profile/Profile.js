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
// import './profile.css'
export default function Profile() {
    const navigate = useNavigate()
    return (
        <div className='py-3 px-3'>
                <Row>
                    <Col md={6}>
                        <h3>
                            <span>
                                <img className="action-img" src={profile}
                                     alt='' />
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
                                         onClick={() => navigate('/edit-user-info')}/>
                                </Col>
                            </Row>
                            <h5><img src={ysquare} alt=''  />{"  "}Yasir Ado Hassan</h5>
                            <p><span><img src={iphone} alt=''
                                /></span> +234 030033003</p>
                            <p><span><img src={email} alt=''
                                /></span> abcde@aaa.com</p>
                            <p><span><img src={address} alt=''
                                /></span> Airport Road, Kano, Nigeria</p>
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
                                         onClick={() => navigate('/edit-school-info')} />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <img src={logo} alt='' />{"  "}
                                </Col>
                                <Col md={8}><h5>sRecord Primary School</h5></Col>
                            </Row>
                            <p><span><img src={motto} alt=''
                                /></span> Knowledge is Power</p>
                            <p><span><img src={iphone} alt=''
                                /></span> +234 030033003</p>
                            <p><span><img src={email} alt=''
                                /></span> abcde@aaa.com</p>
                            <p><span><img src={address} alt=''
                                /></span> Airport Road, Kano, Nigeria</p>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='text-center settings-card shadow py-3 px-4 mt-3'>
                        </Card>
                    </Col>
                </Row> 
        </div>
    )
}
