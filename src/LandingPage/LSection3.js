import React from "react";
import { Card, Col, Row } from "reactstrap";
import angel from "../images/angel.jfif";
import quote from "../images/quote.png";

export default function LSection3() {
  return (
    <div className="section-3" id="testimonials">
      <Row className="m-0 pt-5">
        <Col md={4}></Col>
        <Col md={4} className="text-center features">
          <h1 className="l-h1">Customer Reviews</h1>
          <p className="">what our customers are saying...</p>
        </Col>
        <Col md={4}></Col>
      </Row>
      <Row className="c-row m-0 p-4">
        <Col md={3}>
          <button className="c-name">Musa Isah</button>
          <Card className="c-card shadow py-4 px-4">
            <Row>
              <Col md={2}>
                <img src={quote} alt=""  />
              </Col>
              <Col md={10}>
                <p className="c-review">
                  afasfsdafasdf fasdfasdf afasdfas fa adsfasd fasd fasdf adfa fa
                  fafasdfasd asdfasfsd gsgsdf gsgsdf g sfdgsdgsd f sfgsdfg
                </p>
              </Col>
              <div className="text-center">
                <img src={angel} alt="" className="c-img" />
              </div>
            </Row>
          </Card>
        </Col>
        <Col md={3}>
          <button className="c-name">Musa Isah</button>
          <Card className="c-card shadow py-4 px-4">
            <Row>
              <Col md={2}>
                <img src={quote} alt=""  />
              </Col>
              <Col md={10}>
                <p className="c-review">
                  aafasfsdafasdf fasdfasdf afasdfas fa adsfasd fasd fasdf adfa
                  fa fafasdfasd asdfasfsd gsgsdf gsgsdf g sfdgsdgsd f
                  sfgsdfddddddddddddd
                </p>
              </Col>
              <div className="text-center">
                <img src={angel} alt="" className="c-img" />
              </div>
            </Row>
          </Card>
        </Col>
        <Col md={3}>
          <button className="c-name">Musa Isah</button>
          <Card className="c-card shadow py-4 px-4">
            <Row>
              <Col md={2}>
                <img src={quote} alt=""  />
              </Col>
              <Col md={10}>
                <p className="c-review">
                  aafasfsdafasdf fasdfasdf afasdfas fa adsfasd fasd fasdf adfa
                  fa fafasdfasd asdfasfsd gsgsdf gsgsdf g sfdgsdgsd f
                  sfgsdfddddddddddddd
                </p>
              </Col>
              <div className="text-center">
                <img src={angel} alt="" className="c-img" />
              </div>
            </Row>
          </Card>
        </Col>
        <Col md={3}>
          <button className="c-name">Musa Isah</button>
          <Card className="c-card shadow py-4 px-4">
            <Row>
              <Col md={2}>
                <img src={quote} alt=""  />
              </Col>
              <Col md={10}>
                <p className="c-review">
                  aafasfsdafasdf fasdfasdf afasdfas fa adsfasd fasd fasdf adfa
                  fa fafasdfasd asdfasfsd gsgsdf gsgsdf g sfdgsdgsd f
                  sfgsdfddddddddddddd
                </p>
              </Col>
              <div className="text-center">
                <img src={angel} alt="" className="c-img" />
              </div>
            </Row>
          </Card>
        </Col>
        {/* <Col md={2}></Col> */}
      </Row>
    </div>
  );
}
