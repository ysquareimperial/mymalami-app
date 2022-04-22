import React from 'react'
import { Col, Row } from 'reactstrap'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import './Dashboard.css'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import Classes from './Classes'
export default function Index() {

    return (
        <div className='home-container'>
            <Row className='navbar'>
                <Col lg={12} md={12} sm={12} xs={12}>
                    <Navbar />
                </Col>
            </Row>

            <Row className='sidebar-row'>
                <Col lg={2} md={2} className='sidebar'>
                    <Sidebar />
                </Col>
                <Col lg={10} md={10} sm={12} xs={12} className="index-container">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/classes' element={<Classes />} />
                    </Routes>
                </Col>
            </Row>
        </div>
    )
}
