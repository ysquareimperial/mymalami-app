import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Col, Row } from 'reactstrap'
import logo from '../images/sRecord-L&B.png'
import logo2 from '../images/s-white.png'
import oneclick from '../images/one-click.svg'
import classs from '../images/class.svg'
import angel from '../images/angel.jfif'
import report from '../images/report.svg'
import score from '../images/score.svg'
import quote from '../images/quote.png'
import address from '../images/address.png'
import android from '../images/android.png'
import email from '../images/email.png'
// import { useNavigate } from 'react-router-dom'
import customer1 from '../images/ysquareimperial.png'
import './LandingPage.css'
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'react-feather'
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
                    <Col md={2} className='div'>
                        <button className='start-btn mt-1 shadow' onClick={() => navigate('/sign-in')}>Sign In</button>
                        <button className='start-btn mt-1 shadow' onClick={() => navigate('/sign-up')}>Sign Up</button>
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
                            <p className='l-p'>sRecord is an application that helps teachers generate students reports by creating classes, subjects, students and records.</p>
                            <button className='sign-up shadow' onClick={() => navigate('/sign-up')}>Get stated for free</button>
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
                            <h1 className='l-h1 mb-0 mt-5'>How it works</h1>
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
                        <h1 className='l-h1 mt-5'>Customer Reviews</h1>
                        <p className='text-white mb-5'>what our customers are saying...</p>
                    </Col>
                    <Col md={4}></Col>
                </Row>
                <Row className='c-row m-0 p-0'>
                    <Col md={3}>
                        <button className='c-name'>Musa Isah</button>
                        <Card className='c-card shadow py-4 px-4'>
                            <Row>
                                <Col md={2}>
                                    <img src={quote} alt='' style={{}} />
                                </Col>
                                <Col md={10}>
                                    <p className='c-review'>afasfsdafasdf fasdfasdf afasdfas fa adsfasd  fasd fasdf adfa fa fafasdfasd  asdfasfsd gsgsdf  gsgsdf g sfdgsdgsd f sfgsdfg</p>
                                </Col>
                                <div className='text-center'>
                                    <img src={angel} alt='' className='c-img' />
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
                                    <p className='c-review'>aafasfsdafasdf fasdfasdf afasdfas fa adsfasd  fasd fasdf adfa fa fafasdfasd  asdfasfsd gsgsdf  gsgsdf g sfdgsdgsd f sfgsdfddddddddddddd</p>
                                </Col>
                                <div className='text-center'>
                                    <img src={angel} alt='' className='c-img' />
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
                                    <p className='c-review'>aafasfsdafasdf fasdfasdf afasdfas fa adsfasd  fasd fasdf adfa fa fafasdfasd  asdfasfsd gsgsdf  gsgsdf g sfdgsdgsd f sfgsdfddddddddddddd</p>
                                </Col>
                                <div className='text-center'>
                                    <img src={angel} alt='' className='c-img' />
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
                                    <p className='c-review'>aafasfsdafasdf fasdfasdf afasdfas fa adsfasd  fasd fasdf adfa fa fafasdfasd  asdfasfsd gsgsdf  gsgsdf g sfdgsdgsd f sfgsdfddddddddddddd</p>
                                </Col>
                                <div className='text-center'>
                                    <img src={angel} alt='' className='c-img' />
                                </div>
                            </Row>
                        </Card>
                    </Col>
                    {/* <Col md={2}></Col> */}
                </Row>
            </div>
            <div className='section-4 text-center'>
                <Row className='m-0 p-0'>
                    <Col md={2}></Col>
                    <Col md={8} className='text-center features'>
                        <h1 className='c-r mt-5'>Subscribe to sRecord</h1>
                        <p className='mb-5 sub-d'>Subscribe to sRecord by clicking one of the following packages.</p>
                    </Col>
                    <Col md={2}></Col>
                </Row>
                <Row className='mt-5 m-0 p-0'>
                    <Col md={2}></Col>
                    <Col md={2}>
                        <Card className='p-card-2 shadow py-4 px-4 text-center'>
                            <div className='p-type-1 shadow'>
                                <h4>Free</h4>
                                <h5 style={{ fontWeight: 'bold' }}>₦ 0.00<small style={{ fontWeight: 'lighter' }}>/month</small></h5>
                            </div>
                            <p>fasfsdf fasfsdf</p>
                            <p>fasfsdf fasfsdf</p>
                            <p>fasfsdf fasfsdf</p>
                            <p>fasfsdf fasfsdf</p>
                            <p>fasfsdf fasfsdf</p>
                            <p>fasfsdf fasfsdf</p>
                            <button className='p-btn-1 shadow py-2'>Get Started</button>
                        </Card>
                    </Col>
                    <Col md={2}>
                        <Card className='p-card-2 shadow py-4 px-4 text-center'>
                            <div className='p-type-1 shadow'>
                                <h4>Bronze</h4>
                                <h5 style={{ fontWeight: 'bold' }}>₦ 1,000<small style={{ fontWeight: 'lighter' }}>/month</small></h5>
                            </div>
                            <p>fasfsdf fasfsdf</p>
                            <p>fasfsdf fasfsdf</p>
                            <p>fasfsdf fasfsdf</p>
                            <p>fasfsdf fasfsdf</p>
                            <p>fasfsdf fasfsdf</p>
                            <p>fasfsdf fasfsdf</p>
                            <button className='p-btn-1 shadow py-2'>Get Started</button>
                        </Card>
                    </Col>
                    <Col md={2}>
                        <Card className='p-card-2 shadow py-4 px-4 text-center'>
                            <div className='p-type-2 shadow'>
                                <h4>Silver</h4>
                                <h5 style={{ fontWeight: 'bold' }}>₦ 1,000<small style={{ fontWeight: 'lighter' }}>/month</small></h5>
                            </div>
                            <p>fasfsdf fasfsdf</p>
                            <p>fasfsdf fasfsdf</p>
                            <p>fasfsdf fasfsdf</p>
                            <p>fasfsdf fasfsdf</p>
                            <p>fasfsdf fasfsdf</p>
                            <p>fasfsdf fasfsdf</p>
                            <button className='p-btn-2 shadow py-2'>Get Started</button>
                        </Card>
                    </Col>
                    <Col md={2}>
                        <Card className='p-card-2 shadow py-4 px-4 text-center'>
                            <div className='p-type-3 shadow'>
                                <h4>Diamond</h4>
                                <h5 style={{ fontWeight: 'bold' }}>₦ 1,000<small style={{ fontWeight: 'lighter' }}>/month</small></h5>
                            </div>
                            <p>fasfsdf fasfsdf</p>
                            <p>fasfsdf fasfsdf</p>
                            <p>fasfsdf fasfsdf</p>
                            <p>fasfsdf fasfsdf</p>
                            <p>fasfsdf fasfsdf</p>
                            <p>fasfsdf fasfsdf</p>
                            <button className='p-btn-3 shadow py-2'>Get Started</button>
                        </Card>
                    </Col>

                    <Col md={2}></Col>
                </Row>
            </div>
            <div className='section-5'>
                <Row className='m-0 p-0'>
                    <Col md={4} className='mt-5'>
                        <img src={logo2} alt='sRecord-logo' className='footer-logo' />
                        <div className='footer-left'>
                            <p className='footer-p'>...Creating High Quality and Accurate Reports!</p>
                            <p className='footer-p1'>Copyrights &copy; 2022 sRecord - All Rights Reserved</p>
                            <p className='footer-p1'>Terms - Privacy - Cookies - Sign-up - Sign In</p>
                        </div>
                    </Col>
                    <Col md={4} className='mt-5'>
                        <h4 className='address'>Address</h4>
                        <div className=''>
                            <Row>
                                <Col md={1}> <MapPin style={{ color: 'white' }} /></Col>
                                <Col md={11}>

                                    <p className='icon-p'>Office: Floor 1, African Alliance Building, No 1 Sani Abacha Way, Kano, Nigeria</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={1}><Phone style={{ color: 'white' }} /></Col>
                                <Col md={11}>

                                    <p className='icon-p'>Phone: +234 000 0000 0000 +234 000 0000 0000</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={1}><Mail style={{ color: 'white' }} /></Col>
                                <Col md={11}>

                                    <p className='icon-p'>Email: support@srecord.com</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col md={4} className='mt-5'>
                        <h4 className='address'>Contact Us</h4>
                        <p className='text-white'>Follow us on our social media platforms:</p>
                        <div className=''>
                            <Row>
                                <Col md={2}> <Facebook className='social' size='2.5em'/></Col>
                                <Col md={2}> <Instagram className='social' size='2.5em'/></Col>
                                <Col md={2}> <Twitter className='social' size='2.5em'/></Col>
                                <Col md={6}> <Linkedin className='social' size='2.5em'/></Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
