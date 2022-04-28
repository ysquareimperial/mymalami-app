import { FormGroup, Input, Label, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap'
import React, { useState } from 'react'
import { Card, Col, Row } from 'reactstrap'
import './class.css'
import edit from '../../images/edit.png'
import dlt from '../../images/delete.png'
import sum from '../../images/sum.png'
import { useNavigate } from 'react-router-dom'
export default function Classes() {
  const classs = [
    {
      sn: '1',
      name: 'Quavo Huncho',
      teacherName: 'Future Hndrxx',
      students: '30'
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
  let form = {
    contactName: "",
    contactPhone: "",
    contactEmail: "",
    contactDescription: "",
  }

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
                  <td className='text-white'>{item.students}</td>
                  <td className='text-white'>
                    <img className='action-img-1' data-toggle="tooltip" data-placement="bottom" title="edit class" style={{ width: 35, height: 35 }} src={edit} alt='s' />
                    <img className='action-img-1' data-toggle="tooltip" data-placement="bottom" title="delete class" style={{ width: 35, height: 35 }} src={dlt} alt='s' />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Card>
    </div>
  )
}
