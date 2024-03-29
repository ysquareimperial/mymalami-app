import React from "react";
import { Outlet } from "react-router-dom";
import { Col, Row } from "reactstrap";
import MobileFooter from "../Dashboard/MobileFooter";
import Navbar from "../Dashboard/Navbar";
import Sidebar from "../Dashboard/Sidebar";
// import '../Dashboard/Dashboard.css'
export default function AppIndex() {
  return (
    <div className="home-container">
      <Row className="navbar">
        <Col lg={12} md={12} sm={12} xs={12}>
          <Navbar />
          <MobileFooter/>
        </Col>
      </Row>
      <Row className="sidebar-row">
        <Col lg={2} md={2} className="sidebar">
          <Sidebar />
        </Col>
        <Col lg={10} md={10} sm={12} xs={12} className="index-container">
          <Outlet className='mt-5'/>
        </Col>
      </Row>
    </div>
  );
}
