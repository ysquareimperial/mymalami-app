import React from "react";
import { Card, Col, Row } from "reactstrap";

export default function LSection4() {
  return (
    <div>
      <div className="section-4 text-center" id="subscribe">
        <Row className="m-0 pt-5">
          <Col md={2}></Col>
          <Col md={8} className="text-center features">
            <h1 className="c-r">Subscribe to sRecord</h1>
            <p className="sub-d">
              Subscribe to sRecord by clicking one of the following packages.
            </p>
          </Col>
          <Col md={2}></Col>
        </Row>
        <Row className="m-0 p-5">
          <Col md={2}></Col>
          <Col md={2}>
            <Card className="p-card-2 shadow py-4 px-4 text-center">
              <div className="p-type-1 shadow">
                <h4>Free</h4>
                <h5 className='price'>
                  ₦ 0.00<small className='price-duration'>/month</small>
                </h5>
              </div>
              <p>fasfsdf fasfsdf</p>
              <p>fasfsdf fasfsdf</p>
              <p>fasfsdf fasfsdf</p>
              <p>fasfsdf fasfsdf</p>
              <p>fasfsdf fasfsdf</p>
              <p>fasfsdf fasfsdf</p>
              <button className="p-btn-1 shadow py-2">Get Started</button>
            </Card>
          </Col>
          <Col md={2}>
            <Card className="p-card-2 shadow py-4 px-4 text-center">
              <div className="p-type-1 shadow">
                <h4>Bronze</h4>
                <h5 className='price'>
                  ₦ 1,000<small className='price-duration'>/month</small>
                </h5>
              </div>
              <p>fasfsdf fasfsdf</p>
              <p>fasfsdf fasfsdf</p>
              <p>fasfsdf fasfsdf</p>
              <p>fasfsdf fasfsdf</p>
              <p>fasfsdf fasfsdf</p>
              <p>fasfsdf fasfsdf</p>
              <button className="p-btn-1 shadow py-2">Get Started</button>
            </Card>
          </Col>
          <Col md={2}>
            <Card className="p-card-2 shadow py-4 px-4 text-center">
              <div className="p-type-2 shadow">
                <h4>Silver</h4>
                <h5 className='price'>
                  ₦ 1,000<small className='price-duration'>/month</small>
                </h5>
              </div>
              <p>fasfsdf fasfsdf</p>
              <p>fasfsdf fasfsdf</p>
              <p>fasfsdf fasfsdf</p>
              <p>fasfsdf fasfsdf</p>
              <p>fasfsdf fasfsdf</p>
              <p>fasfsdf fasfsdf</p>
              <button className="p-btn-2 shadow py-2">Get Started</button>
            </Card>
          </Col>
          <Col md={2}>
            <Card className="p-card-2 shadow py-4 px-4 text-center">
              <div className="p-type-3 shadow">
                <h4>Diamond</h4>
                <h5 className='price'>
                  ₦ 1,000<small className='price-duration'>/month</small>
                </h5>
              </div>
              <p>fasfsdf fasfsdf</p>
              <p>fasfsdf fasfsdf</p>
              <p>fasfsdf fasfsdf</p>
              <p>fasfsdf fasfsdf</p>
              <p>fasfsdf fasfsdf</p>
              <p>fasfsdf fasfsdf</p>
              <button className="p-btn-3 shadow py-2">Get Started</button>
            </Card>
          </Col>

          <Col md={2}></Col>
        </Row>
      </div>
    </div>
  );
}
