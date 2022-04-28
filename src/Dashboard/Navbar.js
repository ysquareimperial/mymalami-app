import React, { useState } from 'react'
import { ArrowDownCircle, Circle} from 'react-feather'
import { Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'reactstrap'
import './Navbar.css'
import ysquare from '../images/ysquareimperial.png'
export default function Navbar() {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    };
    return (
        <div>
            <Row>
                <Col md={6}>
                    <p className='logo'>
                        <Circle color='white' size='2.7em' style={{ backgroundColor: 'white', borderRadius: 20 }} />
                    </p>
                </Col>
                <Col md={6}>
                    <Dropdown isOpen={open} toggle={toggle}>
                        <DropdownToggle className='drop-down'>
                            <ArrowDownCircle />
                        </DropdownToggle>
                        <DropdownMenu className='drop-down-menu'>
                            {/* <DropdownItem header>Settings & Privacy</DropdownItem> */}
                            {/* <DropdownItem disabled>Action</DropdownItem> */}
                            <DropdownItem className='drop-down-item'>Settings & Privacy</DropdownItem>
                            <DropdownItem className='drop-down-item'>Help & Support</DropdownItem >
                            <DropdownItem className='drop-down-item' divider />
                            <DropdownItem className='drop-down-item'>Sign Out</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <h1 className='dp-name'>
                        <img src={ysquare} alt='profile' style={{ width: 38, height: 38, borderRadius: 50 }} />{" "}
                        Mr. Yasir Ado Hassan  
                    </h1>
                </Col>
            </Row>
        </div>
    )
}
