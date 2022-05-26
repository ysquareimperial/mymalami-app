import React from 'react'
import { Row, Col, Card } from 'reactstrap'
// import './signin.css'
// import { Mail, Unlock } from 'react-feather'
import lb from '../images/sRecord-L&B.png'
import { useNavigate } from 'react-router-dom'
export default function Signin() {
    const navigate = useNavigate()
    return (
        <div className='signin-container'>
            <Row className='m-0 p-0'>
                <Col lg={1} md={1}></Col>
                <Col lg={5} md={5} className='signin-row'>
                    <div className='sign-left-col'>
                        <h1 className='sign-heading'>One-Click students reports generator</h1>
                        <p className='sign-para'>Creating high quality and accurate reports.</p>
                        <button className='signin-btn' onClick={() => navigate('/sign-up')}>Get Started</button>
                    </div>
                </Col>
                <Col lg={4} md={4} className='text-center middle signin-row'>
                    {/* <h1 className='brand-name'>sRecord</h1> */}
                    <Card className='sign-card shadow text-center'>
                        {/* <img class="card-img-top img-circle rounded-circle" src="https://dummyimage.com/100x100/000/fff" /> */}
                        {/* <User className='card-img-top' size='5em' /> */}
                        <div>
                            <img src={lb} className='sign-logo' alt='sRecord Logo'/>
                        </div>
                        <div className='input-wrap'>
                            <div className="input-group">
                                {/* <div className="input-group-prepend">
                                    <span className="input-group-text span-icon" id=""><Mail /></span>
                                </div> */}
                                <input type="email" className="" placeholder="Email" />
                            </div>
                            <div className="input-group mt-3">
                                {/* <div className="input-group-prepend">
                                    <span className="input-group-text span-icon" id=""><Unlock /></span>
                                </div> */}
                                <input type="password" className="" placeholder="Password" />
                            </div>
                        </div>
                        <Row>
                            <Col lg={6} md={6} sm={6} xs={6}>
                                {/* <p className='remember-me'>
                                    <input className="check" type="checkbox" value="" id="" />
                                    Remember Me
                                </p> */}
                            </Col>
                            <Col lg={6} md={6} sm={6} xs={6}>
                                <p className='forgot-p'>Forgot Password?</p>
                            </Col>
                        </Row>
                        <hr></hr>
                        <p className='dont-have-account'>Don't have an account? | <span className='signup' onClick={() => navigate('/sign-up')}>Sign up</span></p>
                    </Card>
                    <button className='login-btn' onClick={() => navigate('/home')}>SIGN IN</button>
                </Col>
                <Col md={2}></Col>
            </Row>
        </div>
    )
}
