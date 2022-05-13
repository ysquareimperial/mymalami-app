import React, { useState } from 'react'
import { ArrowDownCircle, Circle, Search } from 'react-feather'
import { useNavigate } from 'react-router-dom'
import { Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'reactstrap'
// import './Navbar.css'
import ysquare from '../images/ysquareimperial.png'
import logo from '../images/sReord.png'
export default function Navbar() {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    };
    const navigate = useNavigate()
    return (
        <div>
            <Row className='nav-row'>
                <Col md={6}>
                    <Row>
                        <Col md={1}>
                            <p className='logo'>
                                <img className='logo' src={logo} alt='sdfa' data-toggle="tooltip" data-placement="bottom" title="sRecord" onClick={()=>navigate('/home')}/>
                               </p>
                        </Col>
                        <Col md={11}>
                            {/* <div class="has-search">
                                <span class="form-control-feedback"><Search/></span>
                                <input type="text" class="search-input" placeholder="Search sRecord" />
                            </div> */}
                        </Col>
                    </Row>
                </Col>
                <Col md={6}>
                    <Dropdown isOpen={open} toggle={toggle}>
                        <DropdownToggle className='drop-down'>
                            <ArrowDownCircle />
                        </DropdownToggle>
                        <DropdownMenu className='drop-down-menu'>
                            {/* <DropdownItem header>Settings & Privacy</DropdownItem> */}
                            {/* <DropdownItem disabled>Action</DropdownItem> */}
                            <DropdownItem className='drop-down-item' onClick={()=>navigate('/settings')}>Settings</DropdownItem>
                            <DropdownItem className='drop-down-item'>Help & Support</DropdownItem >
                            <DropdownItem className='drop-down-item' divider />
                            <DropdownItem className='drop-down-item'>Sign Out</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <h1 className='dp-name' onClick={()=>navigate('/profile')}>
                        <img src={ysquare} className='dp' alt='profile'/>{" "}
                        Mr. Yasir Ado Hassan
                    </h1>
                </Col>
            </Row>
        </div>
    )
}