import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Col, Row } from 'reactstrap'
import logo from '../images/sRecord-L&B.png'
import oneclick from '../images/one-click.svg'
import classs from '../images/class.svg'
import report from '../images/report.svg'
import score from '../images/score.svg'
import quote from '../images/quote.png'
import customer1 from '../images/ysquareimperial.png'
import './LandingPage.css'
export default function LandingPage() {
    const navigate = useNavigate()
    return (
        <div className='whole'>
            <div className='nav-bar'>
                <Row className='navbar-row'>
                    <Col md={2}>
                        <img src={logo} alt='sRecord' className='ln-logo' />
                    </Col>
                    <Col md={8} className='nav-items'>
                        <ul className='nav-list'>
                            <li className='l'>Features</li>
                            <li className='l'>Testimonials</li>
                            <li className='l'>Subscribe</li>
                            <li className='l'>Contact</li>
                        </ul>
                    </Col>
                    <Col md={2}>
                        <button className='start-btn mt-1'>Get Started</button>
                    </Col>
                </Row>
            </div>
            {/* <button onClick={() => navigate('/sign-in')}>get started</button> */}
            <div className='section-1'>
                <Row className='p-0 m-0'>
                    <Col md={6}>
                        <div className=''>
                            <h1 className='l-h1'>One-Click Students Reports Generator</h1>
                            {/* <p>Creating High Quality and Accurate Reports</p> */}
                            <p className='l-p'>sRecord is an application that helps teachers to generate students reports by creating classes, subjects, and records.</p>
                            <button className='sign-up shadow'>Sign Up</button>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='text-center'>
                            <img src={oneclick} className='shadow' alt='' style={{ width: 500, borderRadius: 300, height: 500, padding: 50 }} />
                        </div>
                    </Col>
                </Row>
            </div>

            <div className='section-2'>
                <div>
                    <Row className='m-0 p-0'>
                        <Col md={4}></Col>
                        <Col md={4} className='text-center features'>
                            <h1 className='l-h1 mb-0 '>How it works</h1>
                            <p className='text-white'>sRecord...Creating High Quality and Accurate Reports</p>
                        </Col>
                        <Col md={4}></Col>
                    </Row>
                </div>
                <Row className='m-0 p-0 mt-2'>
                    <Col md={3}>
                        <Card className='py-2 px-3 f-card shadow text-center'>
                            <div className='text-center'>
                                <img src={classs} className='shadow f-img' />
                            </div>
                            <h3 className='f-title'>Create Classes</h3>
                            <p className='f-p'>This feature is used for creating and assigning class to individaul student.</p>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className='py-2 px-3 f-card shadow text-center'>
                            <div className='text-center'>
                                <img src={classs} className='shadow f-img' />
                            </div>
                            <h3 className='f-title'>Create Subjects</h3>
                            <p className='f-p'>Creating subjects will allow the teacher to assign subjects that students undertake.</p>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className='py-2 px-3 f-card shadow text-center'>
                            <div className='text-center'>
                                <img src={score} className='shadow f-img' />
                            </div>
                            <h3 className='f-title'>Assign Scores</h3>
                            <p className='f-p'>Students scores are recorded and automatically graded.</p>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className='py-2 px-3 f-card shadow text-center'>
                            <div className='text-center'>
                                <img src={report} className='shadow f-img' />
                            </div>
                            <h3 className='f-title'>Generate Reports</h3>
                            <p className='f-p'>Reports are generated for every automatically student.</p>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className='section-3'>
                <Row className='m-0 p-0'>
                    <Col md={4}></Col>
                    <Col md={4} className='text-center features'>
                        <h1 className='l-h1 mb-0 '>Customer Reviews</h1>
                        <p className='text-white'>what our customers are saying...</p>
                    </Col>
                    <Col md={4}></Col>
                </Row>
                <Row className='c-row'>
                    <Col md={3}>
                        <button className='c-name'>Musa Isah</button>
                        <Card className='c-card shadow py-4 px-4'>
                            <Row>
                                <Col md={2}>
                                    <img src={quote} alt='' style={{}} />
                                </Col>
                                <Col md={10}>
                                    <p className=''>afasfsdafasdf fasdfasdf afasdfas fa adsfasd  fasd fasdf adfa fa fafasdfasd  asdfasfsd gsgsdf  gsgsdf g sfdgsdgsd f sfgsdfg</p>
                                </Col>
                                <div className='text-center'>
                                    <img src={customer1} alt='' className='c-img' />
                                </div>
                            </Row>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <button className='c-name'>Musa Isah</button>
                        <Card className='c-card shadow py-4 px-4'>
                            <Row>
                                <Col md={2}>
                                    <img src={quote} alt='' style={{}} />
                                </Col>
                                <Col md={10}>
                                    <p>aafasfsdafasdf fasdfasdf afasdfas fa adsfasd  fasd fasdf adfa fa fafasdfasd  asdfasfsd gsgsdf  gsgsdf g sfdgsdgsd f sfgsdfddddddddddddd</p>
                                </Col>
                                <div className='text-center'>
                                    <img src={customer1} alt='' className='c-img' />
                                </div>
                            </Row>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <button className='c-name'>Musa Isah</button>
                        <Card className='c-card shadow py-4 px-4'>
                            <Row>
                                <Col md={2}>
                                    <img src={quote} alt='' style={{}} />
                                </Col>
                                <Col md={10}>
                                    <p>aafasfsdafasdf fasdfasdf afasdfas fa adsfasd  fasd fasdf adfa fa fafasdfasd  asdfasfsd gsgsdf  gsgsdf g sfdgsdgsd f sfgsdfddddddddddddd</p>
                                </Col>
                                <div className='text-center'>
                                    <img src={customer1} alt='' className='c-img' />
                                </div>
                            </Row>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <button className='c-name'>Musa Isah</button>
                        <Card className='c-card shadow py-4 px-4'>
                            <Row>
                                <Col md={2}>
                                    <img src={quote} alt='' style={{}} />
                                </Col>
                                <Col md={10}>
                                    <p>aafasfsdafasdf fasdfasdf afasdfas fa adsfasd  fasd fasdf adfa fa fafasdfasd  asdfasfsd gsgsdf  gsgsdf g sfdgsdgsd f sfgsdfddddddddddddd</p>
                                </Col>
                                <div className='text-center'>
                                    <img src={customer1} alt='' className='c-img' />
                                </div>
                            </Row>
                        </Card>
                    </Col>
                    {/* <Col md={2}></Col> */}
                </Row>
            </div>
            <div className='section-4'>
            </div>
            <div className='section-5'>
            </div>
        </div>
    )
}
