import { Modal, ModalBody, Table } from 'reactstrap'
import React, { useState } from 'react'
import { Card, Col, Row } from 'reactstrap'
import './class.css'
import edit from '../../images/edit.png'
import dlt from '../../images/delete.png'
import sum from '../../images/sum.png'
import view from '../../images/view.png'
import student from '../../images/student.png'
import book from '../../images/book.png'
import { useNavigate } from 'react-router-dom'
export default function Classes() {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }
  const [open1, setOpen1] = useState(false)
  const toggle1 = () => {
    setOpen1(!open1)
  }
  const [open2, setOpen2] = useState(false)
  const toggle2 = () => {
    setOpen2(!open2)
  }
  const classs = [
    {
      sn: '1',
      name: 'Quavo Huncho',
      teacherName: 'Future Hndrxx',
      students: '30',
    },
    {
      sn: '2',
      name: 'Quavo Huncho',
      teacherName: 'Future Hndrxx',
      students: '30'
    },
    {
      sn: '3',
      name: 'Quavo Huncho',
      teacherName: 'Future Hndrxx',
      students: '30'
    }

  ]
  const navigate = useNavigate()
  // let form = {
  //   contactName: "",
  //   contactPhone: "",
  //   contactEmail: "",
  //   contactDescription: "",
  // }

  return (
    <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12">
      <Card className='classes-card shadow py-3 px-4 mt-3'>
        <Row>
          <Col md={6}>
            <h3>Classes</h3>
          </Col>
          <Col md={6}>
            <div className='d-flex justify-content-end'>
              <img className='action-img' data-toggle="tooltip" data-placement="bottom" title="add class" style={{ width: 40, height: 40 }} src={sum} alt='s' onClick={() => navigate('/create-class')} />
            </div>
          </Col>
        </Row>
        <div className='mt-4'>
          <Table className='table' >
            <thead>
              <tr>
                <th>S/N</th>
                <th>Class Name</th>
                <th>Class Teacher Name</th>
                <th>Subjects</th>
                <th>No of Students</th>
                <th className='d-flex justify-content-end'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {classs.map((item, index) => (
                <tr>
                  <th className='text-white' scope="row">{item.sn}</th>
                  <td className='text-white'>{item.name}</td>
                  <td className='text-white'>{item.teacherName}</td>
                  <td className='text-white'><img src={view} alt='' className='action-img-1' data-toggle="tooltip" data-placement="bottom" title="view subjects/courses" style={{ width: 35, height: 35 }} onClick={toggle1}/></td>
                  {/* <td className='text-white'>{item.students}</td> */}
                  <td className='text-white' ata-toggle="tooltip" data-placement="bottom" title="click to view students" ><span style={{ cursor: 'pointer' }} onClick={toggle2}>{item.students}</span></td>

                  <td className='text-white d-flex justify-content-end'>
                    <img className='action-img-1' data-toggle="tooltip" data-placement="bottom" title="edit class" style={{ width: 35, height: 35 }} src={edit} alt='s' onClick={()=>navigate('/edit-class')}/>
                    <img className='action-img-1' data-toggle="tooltip" data-placement="bottom" title="delete class" style={{ width: 35, height: 35 }} src={dlt} alt='s' onClick={toggle} />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Card>
      <Modal isOpen={open} toggle={toggle} className='dlt-modal'>
        <ModalBody className='modal-body' style={{ borderRadius: '' }}>
          <img src={dlt} alt='' style={{ width: 40, height: 40 }} /><p style={{ display: 'inline-block' }}>Are you sure you want to delete this class?</p>
          <div>
            <p className='dlt-details'>Class Name: <span>JSS One</span></p>
            <p className='dlt-details'>Class teacher Name: <span>Quavo Hunchox</span></p>
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
        <img src={book} alt='' style={{ width: 40, height: 40 }} /><p style={{ display: 'inline-block' }}>Subjects/Courses</p>
          <div>
            <p className='dlt-details'>Class Name: <span>JSS One</span></p>
            <br></br>
            <p className='dlt-details'>Mathematics</p>
            <p className='dlt-details'>English</p>
          </div>
          <div className='' style={{ float: 'right' }}>
            <button className='modal-btn' onClick={toggle1}>Close</button>
          </div>
        </ModalBody>
      </Modal>
      <Modal isOpen={open2} toggle={toggle2} className='dlt-modal'>
        <ModalBody className='modal-body' style={{ borderRadius: '' }}>
          <img src={student} alt='' style={{ width: 40, height: 40 }} /><p style={{ display: 'inline-block' }}>Students</p>
          <div>
            <p className='dlt-details'>Class Name: <span>JSS One</span></p>
            <br></br>
            <p className='dlt-details'>Ali</p>
            <p className='dlt-details'>Crrrrr</p>
          </div>
          <div className='' style={{ float: 'right' }}>
            <button className='modal-btn' onClick={toggle2}>Close</button>
          </div>
        </ModalBody>
      </Modal>
    </div>
  )
}
