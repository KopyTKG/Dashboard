import React, {useState} from "react";

// nodejs library that concatenates classes
import classNames from "classnames";

import Task from "../components/Task";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

import TaskCard from "components/TaskTable";
import { ReceiptTaxIcon } from "@heroicons/react/outline";

function Todo(props) {
  
  function OnLoad() { 
    fetch('http://10.25.0.5:5454/', {
      'method': 'GET'
    })
    .then(res => res.json())
    .then(res => {
      console.log(res);
    })
  };
  let DummyData = [
      {
        defaultChecked: "y",
        defaultValue: "",
        title: "Test",
        description: "Testing dummy data",
        date: "30.6.2021"
      },
      {
        defaultChecked :"a",
        defaultValue : "",
        title:"Update the Documentation",
        description:"Dwuamish Head, Seattle, WA 8:47 AM",
        date:"12.06.2021"
        },

        {
        defaultChecked:"a",
        defaultValue : "",
        title:"GDPR Compliance",
        description:"The GDPR is a regulation that requires businesses to protect the personal data and privacy of Europe citizens for transactions that occur within EU member states.",
        date:"12.06.2021"
        },
        
        {
        defaultChecked:"a",
        defaultValue : "",
        title:"Solve the issues",
        description:"Fifty percent of all respondents said they would be more likely to shop at a company",
        date:"12.06.2021"
        },
        {
        defaultChecked:"a",
        defaultValue : "",
        title:"Release v2.0.0",
        description:"Ra Ave SW, Seattle, WA 98116, SUA 11:19 AM",
        date:"12.06.2021"
        },

        {
        defaultChecked:"a",
        defaultValue : "",
        title:"Export the processed files",
        description:"The report also shows that consumers will not easily forgive a company once a breach exposing their personal data occurs.",
        date:"12.06.2021"
        },
        {
        defaultChecked:"a",
        defaultValue : "",
        title:"Arival at export process",
        description:"Capitol Hill, Seattle, WA 12:34 AM",
        date:"26.06.2021"
        },

  ]

  return (
    <>
      <div className="content">
        <Row>
          <Col lg="12" md="12">
              <TaskCard
                title="Tasks"
                subtitle="Today"
              >
                  {
                     DummyData && DummyData.map((data, index) => {
                         return(
                             <>
                                <Task 
                                    id={index}
                                    defaultChecked={data["defaultChecked"]}
                                    defaultValue={data["defaultValue"]}
                                    title={data["title"]}
                                    description={data["description"]}
                                    date={data["date"]}
                                />
                             </>
                         )
                     })
                  }
                </TaskCard>
          </Col>
          </Row>
          {/*
          <Row>
          <Col lg="12" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Simple Table</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Country</th>
                      <th>City</th>
                      <th className="text-center">Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td className="text-center">$36,738</td>
                    </tr>
                    <tr>
                      <td>Minerva Hooper</td>
                      <td>Curaçao</td>
                      <td>Sinaai-Waas</td>
                      <td className="text-center">$23,789</td>
                    </tr>
                    <tr>
                      <td>Sage Rodriguez</td>
                      <td>Netherlands</td>
                      <td>Baileux</td>
                      <td className="text-center">$56,142</td>
                    </tr>
                    <tr>
                      <td>Philip Chaney</td>
                      <td>Korea, South</td>
                      <td>Overland Park</td>
                      <td className="text-center">$38,735</td>
                    </tr>
                    <tr>
                      <td>Doris Greene</td>
                      <td>Malawi</td>
                      <td>Feldkirchen in Kärnten</td>
                      <td className="text-center">$63,542</td>
                    </tr>
                    <tr>
                      <td>Mason Porter</td>
                      <td>Chile</td>
                      <td>Gloucester</td>
                      <td className="text-center">$78,615</td>
                    </tr>
                    <tr>
                      <td>Jon Porter</td>
                      <td>Portugal</td>
                      <td>Gloucester</td>
                      <td className="text-center">$98,615</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          </Row>*/}
      </div>
    </>
  );
}

export default Todo;
