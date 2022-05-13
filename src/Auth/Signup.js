import React from 'react'
import { Row, Col, Card } from 'reactstrap'
import { Mail, Phone, Unlock, User } from 'react-feather'
import { useNavigate } from 'react-router-dom'

export default function Signup() {

    const navigate = useNavigate()

    return (
        <div className='signin-container'>
            <Row className='m-0 p-0'>
                <Col md={1}></Col>
                <Col md={5}>
                <h1 className='one-click'>One-Click students reports generator</h1>
                    <p className='about'>Creating high quality and accurate reports.</p>
                    <button className='start-btn' onClick={() => navigate('/sign-in')}>Sign in</button>
                </Col>
                <Col md={4} className='text-center middle'>
                    {/* <h1 className='brand-name'>sRecord</h1> */}
                    <Card className='signin-card shadow text-center'>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text span-icon"><User /></span>
                            </div>
                            <input type="text" placeholder="Full Name" />
                        </div>
                        <div className="input-group mt-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text span-icon"><Phone /></span>
                            </div>
                            <input type="number" placeholder="Phone" />
                        </div>
                        <div className="input-group mt-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text span-icon"><Mail /></span>
                            </div>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="input-group mt-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text span-icon"><Unlock /></span>
                            </div>
                            <input type="password" placeholder="Password" />
                        </div>
                        <Row>
                            <Col md={6}>
                                <p className='remember-me'>
                                    <input className="check" type="checkbox" value="" />
                                    Remember Me
                                </p>
                            </Col>
                            <Col md={6}>
                            </Col>
                        </Row>
                        <hr></hr>
                        <p className='dont-have-account'>Have an account? | <span className='signup' onClick={() => navigate('/sign-in')}>Sign in</span></p>
                    </Card>
                    <button className='login-btn' onClick={()=>navigate('/home')}>SIGN UP</button>

                </Col>
                <Col md={2}></Col>
            </Row>
        </div>
    )
}
