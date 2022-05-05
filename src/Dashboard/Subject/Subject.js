import React, { useState } from 'react'
import { Card, Col, Modal, ModalBody, Row, Table } from 'reactstrap'
import './subject.css'
import edit from '../../images/edit.png'
import dlt from '../../images/delete.png'
import sum from '../../images/sum.png'
import student from '../../images/student.png'
import { useNavigate } from 'react-router-dom'
export default function Subject() {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }
  const [open1, setOpen1] = useState(false)
  const toggle1 = () => {
    setOpen1(!open1)
  }
  const subject = [
    {
      sn: '1',
      name: 'English Language',
      teacherName: 'Futre Pluto Hndrx',
      students: '30'
    },
    {
      sn: '2',
      name: 'JS Language',
      teacherName: 'Futre Pluto Hndrx',
      students: '30'
    },
    {
      sn: '3',
      name: 'HTM Language',
      teacherName: 'Futre Pluto Hndrx',
      students: '30'
    },
  ]
  const navigate = useNavigate()

  return (
    <div>
      <Card className='classes-card shadow py-3 px-4 mt-3'>
        <Row>
          <Col md={6}>
            <h3>Subjects</h3>
          </Col>
          <Col md={6}>
            <div className='d-flex justify-content-end'>
              <img className='action-img'
                data-toggle="tooltip"
                data-placement="bottom"
                title="create subject"
                style={{ width: 40, height: 40 }}
                src={sum} alt='s'
                onClick={() => navigate('/create-subject')} />
            </div>
          </Col>
        </Row>
        <div className='mt-4'>
          <Table >
            <thead>
              <tr>
                <th>S/N</th>
                <th>Subject Name</th>
                <th>Teacher Name</th>
                <th>No of Students</th>
                <th className='d-flex justify-content-end'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {subject.map((item, index) => (
                <tr>
                  <th className='text-white' scope="row">{item.sn}</th>
                  <td className='text-white'>{item.name}</td>
                  <td className='text-white'>{item.teacherName}</td>
                  <td className='text-white' ata-toggle="tooltip" data-placement="bottom" title="click to view students" ><span style={{ cursor: 'pointer' }} onClick={toggle1}>{item.students}</span></td>
                  <td className='d-flex justify-content-end'>
                    {/* <img className='' data-toggle="tooltip" data-placement="bottom" title="view" style={{ width: 30, height: 30 }} src={eye} alt='s' /> */}
                    <img className='action-img-1' data-toggle="tooltip" data-placement="bottom" title="edit subject" style={{ width: 38, height: 38 }} src={edit} alt='s' onClick={() => navigate('/edit-subject')} />
                    <img className='action-img-1' data-toggle="tooltip" data-placement="bottom" title="delete subject" style={{ width: 38, height: 38 }} src={dlt} alt='s' onClick={toggle} />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Card>
      <Modal isOpen={open} toggle={toggle} className='dlt-modal'>
        <ModalBody className='modal-body' style={{ borderRadius: '' }}>
          <img src={dlt} style={{ width: 40, height: 40 }} /><p style={{ display: 'inline-block' }}>Are you sure you want to delete this Subject/Course?</p>
          <div>
            <p className='dlt-details'>Subject Name: <span>JSS One</span></p>
            <p className='dlt-details'>Teacher Name: <span>Quavo Hunchox</span></p>
            <p className='dlt-details'>Number of Students: <span>30</span></p>
          </div>
          <div className='' style={{ float: 'right' }}>
            <button className='modal-btn' onClick={toggle}>Cancel</button>
            <button className='modal-btn'>Delete</button>
          </div>
        </ModalBody>
      </Modal>
      <Modal isOpen={open1} toggle={toggle1} className='dlt-modal'>
        <ModalBody className='modal-body' style={{ borderRadius: '' }}>
          <img src={student} style={{ width: 40, height: 40 }} /><p style={{ display: 'inline-block' }}>Students</p>
          <div>
            <p className='dlt-details'>Subject Name: <span>Mathematics</span></p>
            <br></br>
            <p className='dlt-details'>Ali</p>
            <p className='dlt-details'>Prince</p>
            <p className='dlt-details'>LV</p>
            <p className='dlt-details'>Chanel</p>
            <p className='dlt-details'>Berkin</p>
            <p className='dlt-details'>Hermes</p>
            <p className='dlt-details'>Gucci</p>
            <p className='dlt-details'>Balanciaga</p>
          </div>
          <div className='' style={{ float: 'right' }}>
            <button className='modal-btn' onClick={toggle1}>Close</button>
          </div>
        </ModalBody>
      </Modal>
    </div>
  )
}
