import React from 'react'
import { Row, Col, Card, Container } from 'reactstrap'
// import './signin.css'
// import { Mail, Unlock } from 'react-feather'
import lb from '../images/sRecord-L&B.png'
import { useNavigate } from 'react-router-dom'
export default function ForgotPassword() {
    const navigate = useNavigate()
    return (
        <div className='signin-container'>
            <Container>

                <Row className='m-0 p-0'>
                    <Col md={7} className="signin-row signin-row-mobile">
                        <div
                            className="sign-left-col"
                        >
                            <div>
                                <h1 className="sign-heading">
                                    One-Click students report generator
                                </h1>
                                <p className="sign-para">
                                    Creating high quality and accurate reports.
                                </p>
                                <button className="s-btn" onClick={() => navigate("/sign-up")}>
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </Col>
                    <Col md={5} className="text-center middle signin-row">
                        <div className="sign-right-col">
                            <div>
                                <Card className='sign-card shadow text-center'>
                                    {/* <img class="card-img-top img-circle rounded-circle" src="https://dummyimage.com/100x100/000/fff" /> */}
                                    {/* <User className='card-img-top' size='5em' /> */}
                                    <div>
                                        <img src={lb} className='sign-logo' alt='sRecord Logo' />
                                    </div>
                                    <div className='input-wrap'>
                                        <h5>Reset Password</h5>
                                        <p className='forgot-text'>Enter your email, we will send a link that will help you reset your password</p>
                                        <div className="input-group">
                                            {/* <div className="input-group-prepend">
                                    <span className="input-group-text span-icon" id=""><Mail /></span>
                                </div> */}
                                            <input type="email" className="" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className='send-email-div'>
                                        <button className='action-btn' onClick={() => navigate('/email-sent')}>Send email</button>
                                    </div>
                                    {/* <hr></hr> */}
                                </Card>
                        <button className='login-btn'><span className='signup' onClick={() => navigate('/sign-up')}>Create new account</span> | <span className='signup' onClick={() => navigate('/sign-in')}>Sign in</span></button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="brand-d">
                <p className="brand-info">
                    Terms . <span>Privacy . </span>
                    sRecord &copy; 2022
                </p>
            </div>
        </div>
    )
}
