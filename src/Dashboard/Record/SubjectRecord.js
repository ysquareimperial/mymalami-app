import React, { useState } from 'react'
import { Card, Col, Modal, ModalBody, Row, Table } from 'reactstrap'
// import './record.css'
import edit from '../../images/edit.png'
import dlt from '../../images/delete.png'
import sum from '../../images/sum.png'
import back from '../../images/back.png'
import view from '../../images/view.png'
import save from '../../images/save.png'
import { useNavigate } from 'react-router-dom'


export default function SubjectRecord() {
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
            name: 'Ali Mike',
            aissignment: '10',
            presentation: '8',
            ca: '10 ',
            exam: '70'
        },
        {
            sn: '1',
            name: 'Ali Mike',
            aissignment: '10',
            presentation: '8',
            ca: '10 ',
            exam: '70'
        },
        {
            sn: '1',
            name: 'Ali Mike',
            aissignment: '10',
            presentation: '8',
            ca: '10 ',
            exam: '70'
        }

    ]

    return (
        <div>
            <Card className='table-card shadow py-3 px-4 mt-3'>
                <Row>
                    <Col md={6}>
                        <Row>
                            <Col md={1}>
                                <span><img className="action-img" src={back} data-toggle="tooltip" data-placement="bottom" title="back" akt='' onClick={() => navigate('/record')} /></span>
                            </Col>
                            <Col md={11}>
                                <h3 className='table-card-title'>Create Subject Record</h3>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6}>
                        <div className='d-flex justify-content-end'>
                            {/* <img className='action-img' data-toggle="tooltip" data-placement="bottom" title="add class"  src={sum} alt='s' onClick={() => navigate('/create-student')} /> */}
                        </div>
                    </Col>
                </Row>
                <div className='mt-4'>
                    <Table className='table' >
                        <thead>
                            <tr>
                                <th>S/N</th>
                                <th>Student Name</th>
                                <th>English Assignment</th>
                                <th>English Presentation</th>
                                <th>English CA</th>
                                <th>English Exam</th>
                            </tr>
                        </thead>
                        <tbody>
                            {student.map((item, index) => (
                                <tr>
                                    <th className='' scope="row">{item.sn}</th>
                                    <td className=''>{item.name}</td>
                                    <td className=''><input className='record-input' type='text' /></td>
                                    <td className=''><input className='record-input' type='text' /></td>
                                    <td className=''><input className='record-input' type='text' /></td>
                                    <td className=''><input className='record-input' type='text' /></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <div className=''>
                        <button className='action-btn'><img className='action-img' src={save} />save</button>
                    </div>
                </div>
            </Card>

        </div>
    )
}
