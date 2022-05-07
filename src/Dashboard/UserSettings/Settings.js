import React, { useState } from 'react'
import { Card, Col, Modal, ModalBody, Row } from 'reactstrap'
import settings from '../../images/settings.png'
import './settings.css'
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
    <div>
      <Card className='classes-card shadow py-3 px-4 mt-3'>
        <Row>
          <Col md={6}>
            <h3><span><img className="action-img" src={settings} style={{ width: 35, height: 35 }} alt='' /></span>Settings</h3>
          </Col>
          <Col md={6}>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Card className='text-center settings-card shadow py-3 px-4 mt-3'>
              <p><span><img src={email} alt='' style={{ width: 35, height: 35 }} /></span>Email and Password</p>
              <div className='d-flex justify-content-center'>
                <input placeholder='' type='email' />
              </div>
              <div className='d-flex justify-content-center'>
                <input placeholder='' type='password' />
              </div>
              <div className='text-center'>
                <button className='change-email-btn'>Change Email</button>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className='text-center settings-card shadow py-3 px-4 mt-3'>
              <p><span><img src={password} alt='' style={{ width: 35, height: 35 }} /></span>Change Password</p>
              <div className='d-flex justify-content-center'>
                <input placeholder='current password' type='password' />
              </div>
              <div className='d-flex justify-content-center'>
                <input placeholder='new password' type='password' />
              </div>
              <div className='d-flex justify-content-center'>
                <input placeholder='confirm password' type='password' />
              </div>
              <div className='text-center'>
                <button className='change-password-btn'>Save Password</button>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className='text-center settings-card shadow py-3 px-4 mt-3'>
              <p><span><img src={dlt} alt='' style={{ width: 35, height: 35 }} /></span>Delete My Account</p>
              <p style={{ color: 'rgb(206, 41, 41)', margin: 0, padding: 0 }}>Your account will not be recovered once deleted! </p>

              <div className=' justify-content-center'>
                <p>Please enter your password to confirm the deletion of your account.</p>
                <input placeholder='password' type='password' />
              </div>
              <div className='text-center'>
                <button className='dlt-acnt-btn' onClick={toggle}>Delete My Account</button>
              </div>
            </Card>
          </Col>
        </Row>
      </Card>
      <Modal isOpen={open} toggle={toggle} className='dlt-modal'>
        <ModalBody className='modal-body' style={{ borderRadius: '' }}>
          <img src={dlt} alt='' style={{ width: 40, height: 40 }} />
          <p style={{ display: 'inline-block' }}>Are you sure you want to delete your account?</p>
          <div>
            <h5><img src={ysquare} alt='' 
            style={{ width: 70, height: 70, borderRadius: 50 }} />{"  "}Yasir Ado Hassan</h5>
          </div>
          <div className='' style={{ float: 'right' }}>
            <button className='modal-btn' onClick={toggle}>Cancel</button>
            <button className='modal-btn'>Delete</button>
          </div>
        </ModalBody>
      </Modal>
    </div>
  )
}
