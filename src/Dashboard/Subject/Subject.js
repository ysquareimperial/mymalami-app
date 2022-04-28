import React from 'react'
import { Card, Col, Row, Table } from 'reactstrap'
import './subject.css'
import edit from '../../images/edit.png'
import dlt from '../../images/delete.png'
import sum from '../../images/sum.png'
import { useNavigate } from 'react-router-dom'
export default function Subject() {
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
                  <td className='text-white'>{item.students}</td>
                  <td className='d-flex justify-content-end'>
                    {/* <img className='' data-toggle="tooltip" data-placement="bottom" title="view" style={{ width: 30, height: 30 }} src={eye} alt='s' /> */}
                    <img className='action-img-1' data-toggle="tooltip" data-placement="bottom" title="edit class" style={{ width: 38, height: 38 }} src={edit} alt='s' />
                    <img className='action-img-1' data-toggle="tooltip" data-placement="bottom" title="delete class" style={{ width: 38, height: 38 }} src={dlt} alt='s' />
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
