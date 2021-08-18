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
  
  const [list, setList] = useState(null);

  function OnLoad() { 
    fetch('http://10.25.0.5:5454/getList', {
      'method': 'GET'
    })
    .then(res => res.json())
    .then(res => {
      setList(res)
    })
  };

  return (
    <>
    {
      list == null ?
      OnLoad() :
      null
    }
      <div className="content">
        <Row>
          <Col lg="12" md="12">
              <TaskCard
                title="Tasks"
                subtitle="Today"
              >
                  {
                     list && list.map((data, index) => {
                         return(
                             <>
                                <Task 
                                    key={index}
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
