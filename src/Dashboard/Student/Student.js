import React, { useState } from 'react'
import { Card, Col, Modal, ModalBody, Row, Table } from 'reactstrap'
import './student.css'
import edit from '../../images/edit.png'
import dlt from '../../images/delete.png'
import sum from '../../images/sum.png'
import view from '../../images/view.png'
import book from '../../images/book.png'
import { useNavigate } from 'react-router-dom'


export default function Student() {
  const navigate = useNavigate()

  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }
  const [open1, setOpen1] = useState(false)
  const toggle1 = () => {
    setOpen1(!open1)
  }
  const student = [
    {
      sn: '1',
      name: 'Quavo Huncho',
      className: 'JSS 1',
      subject: 'Mathddnndn kk ',
      teacherName: 'Future Hndrxx'
    },
    {
      sn: '2',
      name: 'Quavo Huncho',
      className: 'JSS 1',
      subject: 'Math',
      teacherName: 'Future Hndrxx'
    },
    {
      sn: '3',
      name: 'Quavo Huncho',
      className: 'JSS 1',
      subject: 'Math',
      teacherName: 'Future Hndrxx'
    },

  ]

  return (
    <div>


      <Card className='classes-card shadow py-3 px-4 mt-3'>
        <Row>
          <Col md={6}>
            <h3>Students</h3>
          </Col>
          <Col md={6}>
            <div className='d-flex justify-content-end'>
              <img className='action-img' data-toggle="tooltip" data-placement="bottom" title="add class" style={{ width: 40, height: 40 }} src={sum} alt='s' onClick={() => navigate('/create-student')} />
            </div>
          </Col>
        </Row>
        <div className='mt-4'>
          <Table className='table' >
            <thead>
              <tr>
                <th>S/N</th>
                <th>Student Name</th>
                <th>Class Name</th>
                <th>Class Teacher Name</th>
                <th>Subjects/Courses</th>
                <th className='d-flex justify-content-end'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {student.map((item, index) => (
                <tr>
                  <th className='text-white' scope="row">{item.sn}</th>
                  <td className='text-white'>{item.name}</td>
                  <td className='text-white'>{item.className}</td>
                  <td className='text-white'>{item.teacherName}</td>
                  <td className='text-white'><img src={view} alt='' className='action-img-1' data-toggle="tooltip" data-placement="bottom" title="view subjects/courses" style={{ width: 35, height: 35 }} onClick={toggle1} /></td>
                  {/* <td className='text-white'>20</td> */}
                  <td className='d-flex justify-content-end'>
                    {/* <img className='' data-toggle="tooltip" data-placement="bottom" title="view" style={{ width: 30, height: 30 }} src={eye} alt='s' /> */}
                    <img className='action-img-1'
                      data-toggle="tooltip" data-placement="bottom" title="edit class"
                      style={{ width: 38, height: 38 }} src={edit} alt='s' onClick={()=>navigate('/edit-student')}/>
                    <img className='action-img-1'
                      data-toggle="tooltip" data-placement="bottom" title="delete class"
                      style={{ width: 38, height: 38 }} src={dlt} alt='s' onClick={toggle} />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Card>
      <Modal isOpen={open} toggle={toggle} className='dlt-modal'>
        <ModalBody className='modal-body' style={{ borderRadius: '' }}>
          <img src={dlt} style={{ width: 40, height: 40 }} /><p style={{ display: 'inline-block' }}>Are you sure you want to delete this Student?</p>
          <div>
            <p className='dlt-details'>Student Name: <span>JSS One</span></p>
            <p className='dlt-details'>Class Name: <span>Quavo Hunchox</span></p>
            <p className='dlt-details'>Class Teacher Name: <span>30</span></p>
          </div>
          <div className='' style={{ float: 'right' }}>
            <button className='modal-btn' onClick={toggle}>Cancel</button>
            <button className='modal-btn'>Delete</button>
          </div>
        </ModalBody>
      </Modal>
      <Modal isOpen={open1} toggle={toggle1} className='dlt-modal'>
        <ModalBody className='modal-body' style={{ borderRadius: '' }}>
          <img src={book} alt='' style={{ width: 40, height: 40 }} /><p style={{ display: 'inline-block' }}>Subjects/Courses</p>
          <div>
            <p className='dlt-details'>Student Name: <span>Quavo Huncho</span></p>
            <br></br>
            <p className='dlt-details'>Mathematics</p>
            <p className='dlt-details'>English</p>
          </div>
          <div className='' style={{ float: 'right' }}>
            <button className='modal-btn' onClick={toggle1}>Close</button>
          </div>
        </ModalBody>
      </Modal>
    </div>
  )
}
