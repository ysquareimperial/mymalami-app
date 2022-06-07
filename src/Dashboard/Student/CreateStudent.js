import React, { useState, useCallback } from 'react'
import { Card, Col, Row } from 'reactstrap'
import back from '../../images/back.png'
import { useNavigate } from 'react-router-dom'
// import Multiselect from 'multiselect-react-dropdown'
import CreatableSelect from 'react-select/creatable'
import makeAnimated from 'react-select/animated'
import subject from '../Subject/ClassSubjects'
import sum from '../../images/sum.png'
export default function CreateStudent() {

    const navigate = useNavigate()

    const [value, setValue] = useState();
    const [options, setOptions] = useState(subject)

    const animatedComponents = makeAnimated()
  
    const handleChange = useCallback((inputValue) => setValue(inputValue), []);

    const handleCreate = useCallback(
        (inputValue) => {
        const newValue = { value: inputValue.toLowerCase(), label: inputValue };
      setOptions([...subject, newValue]);
      setValue(newValue);
    },
    [subject]
  )
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
                        <CreatableSelect options={options} 
                              isMulti 
                              components={animatedComponents} 
                              closeMenuOnSelect={false} 
                              onChange={handleChange} 
                              onCreateOption={handleCreate}
                              placeholder='Select Subjects'/>
                        <div className=''>
                            <button className='action-btn'>Create</button>
                            <button className='action-cancel-btn' style={{ float: 'right', marginRight: 0 }}>Cancel</button>
                        </div>
                    </Col>
                    <Col>
                        <img className='action-img mt-3' title="add student" src={sum} alt='s' />
                    </Col>
                </Row>
            </Card>
        </div>

    )
}
