import React, { useState } from 'react'
import { Card, Col, Row } from 'reactstrap'
import back from '../../images/back.png'
import { useNavigate } from 'react-router-dom'
import Multiselect from 'multiselect-react-dropdown'
import subject from '../Subject/ClassSubjects'
import sum from '../../images/sum.png'
export default function CreateStudent() {

    const navigate = useNavigate()
    // const data = [
    //     { value: 'Mathematics', id: 1 },
    //     { value: 'English', id: 2 },
    //     { value: 'Civic Education', id: 3 },
    //     { value: 'Mathesmatics', id: 4 },
    //     { value: 'Englissh', id: 5 }
    // ]

    const [options] = useState(subject)

    function createInput() {
        let newInput = document.createElement('input')
        newInput.setAttribute('type','text')
        newInput.setAttribute('placeholder', 'Student Name')
        document.getElementById('new-input').appendChild(newInput)
    }

    return (
        <div>
            <Card className='table-card shadow py-3 px-4 mt-3'>
                <Row>
                    <Col md={6}>
                        <Row>
                            <Col md={1}>
                                <span><img className="action-img" src={back} data-toggle="tooltip" data-placement="bottom" title="back" akt='' onClick={() => navigate('/student')} /></span>
                            </Col>
                            <Col md={11}>
                                <h3 className='table-card-title'>Create Student</h3>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6}>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className='mt-3'>
                        <input placeholder='Student Name' type='text' />
                        <br></br>
                        <div id='new-input'></div>
                        <Multiselect options={subject} displayValue='value' showCheckbox={true} placeholder='Select subjects to be taken' avoidHighlightFirstOption={true} />
                        <div className=''>
                            <button className='action-btn'>Create</button>
                            <button className='action-cancel-btn' style={{ float: 'right', marginRight: 0 }}>Cancel</button>
                        </div>
                    </Col>
                    <Col>
                        <img className='action-img mt-3' title="add student" src={sum} alt='s' onClick={createInput} />
                    </Col>
                </Row>
            </Card>
        </div>

    )
}
