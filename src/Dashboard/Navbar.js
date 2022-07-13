import React, { useState } from "react";
import { ArrowDownCircle, HelpCircle, Lock, Settings } from "react-feather";
import { useNavigate } from "react-router-dom";
import {
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
} from "reactstrap";
// import './Navbar.css'
import ysquare from "../images/user.png";
import logo from "../images/sReord.png";
// import Profile from "../Profile/Profile";
import profileimage from '../images/ysquareimperial.png'
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  const navigate = useNavigate();
  return (
    <div>
      <Row className="nav-row m-0 p-0">
        <Col md={6} sm={6} xs={6}>
          <Row>
            <Col md={1}>
              <p className="logo">
                <img
                  className="logo"
                  src={logo}
                  alt="sdfa"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="sRecord"
                  onClick={() => navigate("/home")}
                />
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
        <Col md={6} sm={6} xs={6}>
          <Dropdown isOpen={open} toggle={toggle} className='dropdown'>
            <DropdownToggle className="drop-down">
              <ArrowDownCircle />
            </DropdownToggle>
            <DropdownMenu className="drop-down-menu">
              {/* <DropdownItem header>Settings & Privacy</DropdownItem> */}
              {/* <DropdownItem disabled>Action</DropdownItem> */}
              <DropdownItem className="drop-down-item"
                onClick={() => navigate("/profile")}>

                <div className="mobile-profile">
                  <div>
                    <img src={profileimage} className='mobile-profile shadow' alt="" />
                  </div>
                </div>
              </DropdownItem>
              <DropdownItem
                className="drop-down-item"
                onClick={() => navigate("/settings")}
                style={{ fontSize: 13 }}
              >
                Settings <Settings style={{ float: 'right', color: 'grey' }} size='1.5em' />
              </DropdownItem>
              <DropdownItem className="drop-down-item" style={{ fontSize: 13 }} >
                Support <HelpCircle style={{ float: 'right', color: 'grey' }} size='1.5em' />
              </DropdownItem >
              <DropdownItem className="drop-down-item" onClick={() => navigate('/sign-in')} style={{ fontSize: 13 }}>Sign Out <Lock style={{ float: 'right', color: 'grey' }} size='1.5em' /></DropdownItem>
              <div className="brand-d mt-0">
                <DropdownItem className="drop-down-item" divider />
                <DropdownItem>
                  <p className="brand-info" style={{ color: "grey", float:'left' }}>
                    Terms . <span>Privacy . </span>

                  </p>
                  <p className="brand-info" style={{ color: "grey",float:'left' }}>
                    sRecord &copy; 2022
                  </p>
                </DropdownItem>
              </div>

            </DropdownMenu>
          </Dropdown>
          <h1 className="dp-name" onClick={() => navigate("/profile")}>
            <img src={ysquare} className="dp" alt="profile" /> <span className="profile-name">Mr. Muhammadu</span>
          </h1>
        </Col>
      </Row>
    </div>
  );
}
