import React, { useState } from "react";
import {
  Button,
  Card,
  CardText,
  CardTitle,
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  Table,
  TabPane,
} from "reactstrap";
import classnames from "classnames";
import SubjectRecord from "./SubjectRecord";
import RecordTable from "./RecordTable";

export default function RecordTab() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [activeTab, setActiveTab] = useState("0");
  const toggle2 = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const tabs = [
    {
      tab1: "English"
    },
    {
      tab2:''
    }
  ];
  return (
    <div>
      <div>
        <div>
          <Nav tabs className="mt-3">
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "0" })}
                  onClick={() => {
                    toggle2("0");
                  }}
                >
                  English
                </NavLink>
              </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "4" })}
                onClick={() => {
                  toggle2("4");
                }}
              >
                Mathematics
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "5" })}
                onClick={() => {
                  toggle2("5");
                }}
              >
                Physics
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="0">
            <Row>
              <Col sm="12">
                <RecordTable />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Col sm="12">
                <RecordTable />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="5">
            <Row>
              <Col md="12">
                <RecordTable />
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
}
