import React, { useState } from 'react'
import { ArrowDownCircle, Circle} from 'react-feather'
import { Button, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'reactstrap'
import './Navbar.css'
import blackhijab from '../images/blackhijab.jpg'
import logo from '../figma-mymalami/logo.png'
// import { Button } from 'bootstrap'
export default function Navbar() {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    }
    return (
        <div>
            <Row className='navbar-main'>
                <Col md={3}>
                    <p className='logo'>
                        {/* <Circle color='white' size='2.7em' style={{ backgroundColor: 'white', borderRadius: 20 }} /> */}
                        <img src={logo} alt='logo' style={{ width: 100, height: 45 }} />
                    </p>
                </Col>
                <Col md={6}>
                    <Row style={{color: 'white', padding: 15, fontWeight: 'bolder'}}>
                        <Col md={3}/>
                        <Col>HOME</Col>
                        <Col>FEATURES</Col>
                        <Col>CONTACT</Col>
                        <Col>ABOUT</Col>
                        <Col md={3}/>
                    </Row>
                </Col>
                <Col md={3}>
                    <div style={{float: 'right', marginTop: 10, marginRight: 25}}>  
                    <Row>
                        <Col>
                            <Button style={{backgroundColor:'white', color: '#1B7B4D', fontWeight: 'bold', borderRadius: 20, width: 125}}>LOGIN</Button>
                        </Col>
                        <Col>
                            <Button style={{backgroundColor:'white', color: '#1B7B4D', fontWeight: 'bold', borderRadius: 20, width: 125}}>SIGNUP</Button>
                        </Col>
                    </Row>  
                    </div>
                    {/* <Dropdown isOpen={open} toggle={toggle}>
                        <DropdownToggle className='drop-down'>
                            <ArrowDownCircle />
                        </DropdownToggle>
                        <DropdownMenu className='drop-down-menu'>
                            <DropdownItem className='drop-down-item'>Settings & Privacy</DropdownItem>
                            <DropdownItem className='drop-down-item'>Help & Support</DropdownItem >
                            <DropdownItem className='drop-down-item' divider />
                            <DropdownItem className='drop-down-item'>Sign Out</DropdownItem>
                        </DropdownMenu>
                    </Dropdown> */}
                    {/* <h1 className='dp-name'>
                        <img src={blackhijab} alt='profile' style={{ width: 38, height: 38, borderRadius: 50 }} />{" "}
                        Ms. Msmsms  
                    </h1> */}
                </Col>
            </Row>
        </div>
    )
}
