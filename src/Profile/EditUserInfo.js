import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import ysquare from '../images/ysquareimperial.png'
import back from '../images/back.png'
export default function EditUserInfo() {
    return (
        <div>
            <Card className='classes-card shadow py-3 px-4 mt-3'>
                <Row>
                    <Col md={6}>
                        <h3>
                            <span>
                                <img className="action-img" src={back}
                                    alt='' />
                            </span>
                            User Information
                        </h3>
                    </Col>
                    <Col md={6}>
                    </Col>
                </Row>
                <h5><img src={ysquare} alt=''  />{"  "}</h5>
                {/* <input type='file' /> */}
                <input className="form-control" type="file" id="formFile" />
                <input type='text' />
                <input type='text' />
                <input type='number' />
                <input type='email' />
                <input type='address' />
            </Card>
        </div>
    )
}
