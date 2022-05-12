import React, { useState } from 'react'
import { Card, Col, Modal, ModalBody, Row } from 'reactstrap'
import settings from '../../images/settings.png'
// import './settings.css'
import email from '../../images/email.png'
import password from '../../images/password.png'
import ysquare from '../../images/ysquareimperial.png'
import dlt from '../../images/delete.png'
export default function Settings() {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }
  return (
    <div className='py-3 px-3'>
      <Row>
        <Col md={6}>
          <h3 >Settings</h3>
        </Col>
        <Col md={6}>
        </Col>
      </Row>
      <Row className='profile-row'>
        <Col md={4}>
          <Card className='text-center table-card shadow py-3 px-4 mt-3'>
            <p><span><img className='action-img' src={email} alt='' /></span>Email and Password</p>
            <div className='d-flex justify-content-center'>
              <input placeholder='' type='email' />
            </div>
            <div className='d-flex justify-content-center mt-3'>
              <input placeholder='' type='password' />
            </div>
            <div className='text-center'>
              <button className='action-btn'>Change Email</button>
            </div>
          </Card>
        </Col>
        <Col md={4}>
          <Card className='text-center table-card shadow py-3 px-4 mt-3'>
            <p><span><img className='action-img' src={password} alt='' /></span>Change Password</p>
            <div className='d-flex justify-content-center'>
              <input placeholder='current password' type='password' />
            </div>
            <div className='d-flex justify-content-center mt-3'>
              <input placeholder='new password' type='password' />
            </div>
            <div className='d-flex justify-content-center mt-3'>
              <input placeholder='confirm password' type='password' />
            </div>
            <div className='text-center'>
              <button className='action-btn'>Save Password</button>
            </div>
          </Card>
        </Col>
        <Col md={4}>
          <Card className='text-center table-card shadow py-3 px-4 mt-3'>
            <p><span><img className='action-img' src={dlt} alt='' /></span>Delete My Account</p>
            <p className='text-danger'>Your account will not be recovered once deleted! </p>

            <div className=' justify-content-center'>
              <p>Please enter your password to confirm the deletion of your account.</p>
              <input placeholder='password' type='password' />
            </div>
            <div className='text-center'>
              <button className='action-cancel-btn' onClick={toggle}>Delete My Account</button>
            </div>
          </Card>
        </Col>
      </Row>
      <Modal isOpen={open} toggle={toggle} className='dlt-modal'>
        <ModalBody className='modal-body' >
          <img src={dlt} alt='' />
          <p>Are you sure you want to delete your account?</p>
          <div>
            <h5><img src={ysquare} alt=''
            />{"  "}Yasir Ado Hassan</h5>
          </div>
          <div className='' >
            <button className='action-btn' onClick={toggle}>Cancel</button>
            <button className='action-cancel-btn'>Delete</button>
          </div>
        </ModalBody>
      </Modal>
    </div>
  )
}
