import React from 'react'
import { Card, Col, Row } from 'reactstrap'
// import './class.css'
import back from '../../images/back.png'
import { useNavigate } from 'react-router-dom'
import Multiselect from 'multiselect-react-dropdown'
export default function CreateClass() {
    const navigate = useNavigate()
    const data = [
        { value: 'Mathematics', id: 1 },
        { value: 'English', id: 2 },
        { value: 'Civic Education', id: 3 },
        { value: 'Mathesmatics', id: 4 },
        { value: 'Englissh', id: 5 }
    ]
    const data2 = [
        { value: 'Adamu Abdullahi', id: 1 },
        { value: 'Aisha Sule', id: 2 },
        { value: 'Murtala Muhammed', id: 3 },
        { value: 'Yasir Ado Hassan', id: 4 },
        { value: 'Wanka Zaharaddeen', id: 5 }
    ]
    return (
        <div>
            <Card className='table-card shadow py-3 px-4 mt-3'>
                <Row>
                    <Col md={6}>
                        <Row>
                            <Col md={1}>
                                <span><img className="action-img" src={back} data-toggle="tooltip" data-placement="bottom" title="back" akt='' onClick={() => navigate('/class')} /></span>
                            </Col>
                            <Col md={11}>
                                <h3 className='table-card-title'>Create Class</h3>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6}>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className='mt-3'>
                        <input placeholder='Class Name' type='text' />
                        {/* <input placeholder='Teacher Name' type='text' />
                        <input placeholder='No of Students' type='number' /> */}
                        <br></br>
                        {/* select subjects */}
                        <Multiselect options={data} displayValue='value' showCheckbox={true} placeholder='Select subjects for class' avoidHighlightFirstOption={true}/>
                        {/* select students */}<br/>
                        <Multiselect options={data2} displayValue='value' showCheckbox={true} placeholder='Select students in class' avoidHighlightFirstOption={true}/>
                        <div>
                            <button className='action-btn'>Create</button>
                            <button className='action-cancel-btn' style={{ float: 'right', marginRight: 0 }}>Cancel</button>
                        </div>
                    </Col>
                </Row>
                {/* <img className="action-img" src={back} style={{ width: 35, height: 35, cursor: 'pointer' }} data-toggle="tooltip" data-placement="bottom" title="back" akt='' onClick={() => navigate('/class')} /> */}
            </Card>
        </div>
    )
}
