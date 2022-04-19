import { Button } from 'reactstrap'
import React from 'react'
import { Row, Col, Card } from 'reactstrap'
import './signup.css'
import { Mail, Phone, Unlock, User } from 'react-feather'
import { useNavigate } from 'react-router-dom'

export default function Signup() {

    const navigate = useNavigate()

    return (
        <div className='signin-container'>
            <Row className='m-0 p-0'>
                <Col md={4} sm={12}>
                </Col>
                <Col md={4} sm={12} className='text-center'>
                    <h1 className='brand-name'>sRecord</h1>
                    <Card className='signin-card shadow text-center p-5'>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text span-icon" id=""><User /></span>
                            </div>
                            <input type="text" className="" placeholder="Full Name" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mt-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text span-icon" id=""><Phone /></span>
                            </div>
                            <input type="number" className="" placeholder="Phone" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mt-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text span-icon" id=""><Mail /></span>
                            </div>
                            <input type="email" className="" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mt-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text span-icon" id=""><Unlock /></span>
                            </div>
                            <input type="password" className="" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <Row>
                            <Col md={6}>
                                <p className='remember-me'>
                                    <input className="check" type="checkbox" value="" id="" />
                                    Remember Me
                                </p>
                            </Col>
                            <Col md={6}>
                            </Col>
                        </Row>
                        <hr></hr>
                        <p className='dont-have-account'>Have an account? | <span className='signup' onClick={() => navigate('/')}>Sign in</span></p>
                    </Card>
                    <Button className='login-btn'>SIGN UP</Button>

                </Col>
                <Col md={4}></Col>
            </Row>
        </div>
    )
}
