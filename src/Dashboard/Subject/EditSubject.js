import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import back from '../../images/back.png'
import { useNavigate } from 'react-router-dom'
export default function EditSubject() {
  const navigate = useNavigate()
  return (
    <div>
      <Card className='classes-card shadow py-3 px-4 mt-3'>
        <Row>
          <Col md={6}>
            <h3><span><img className="action-img" src={back} style={{ width: 35, height: 35, cursor: 'pointer' }} data-toggle="tooltip" data-placement="bottom" title="back" akt='' onClick={() => navigate('/subject')} /></span>Edit Subject</h3>
          </Col>
          <Col md={6}>
          </Col>
        </Row>
        <Row>
          <Col md={6} className='mt-3'>
            <input placeholder='Subject Name' type='text' />
            <input placeholder='Teacher Name' type='text' />
            <input placeholder='No of Students' type='number' />
            <div>
              <button className='create-btn'>Save</button>
              <button className='create-btn'>Cancel</button>
            </div>
          </Col>
        </Row>
        {/* <img className="action-img" src={back} style={{ width: 35, height: 35, cursor: 'pointer' }} data-toggle="tooltip" data-placement="bottom" title="back" akt='' onClick={() => navigate('/class')} /> */}
      </Card>
    </div>
  )
}
