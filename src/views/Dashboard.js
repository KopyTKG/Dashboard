import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

import Task from "../components/Task";

import sec from "../json/sec.json"
import min from "../json/minute.json"
//import min from "../json/minute.json"
import data from "../json/buffer.json"
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

// core components
import {
  chartExample1,
  chartExample2,
  chartExample4
} from "variables/charts.js";
import TaskCard from "components/TaskTable";

function Dashboard(props) {
  const [table, settable] = React.useState("sec");
  const [display, setdisplay] = React.useState("second");
  const OnLoad = () => {
    //console.log(data["temps"]);
  }

  let MainTableSettings = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: true,
            color: "rgba(255,140,248,0.0)",
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9a9a9a",
          },
        },
      ],
      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: true,
            color: "rgba(255,140,248,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a",
          },
        },
      ],
    },
  };

  let MainTable = {
    sec: (canvas) => {
      let ctx = canvas.getContext("2d");
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)");
      let dump = {
        labels: [],
        datasets: [
          {
            label: "Seconds Table",
            /* Display underline color */
            fill: true,
            /* Underline color */
            backgroundColor: gradientStroke,
            /* Line color */
            borderColor: "#1f8ef1",
            /* Line width */
            borderWidth: 1,
            borderDash: [],
            borderDashOffset: 0.0,
            /* Point color */
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(50,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [],
          },
        ],
      };
      dump["labels"] = sec["labels"]
      dump["datasets"][0]["data"] = sec["temps"]
      console.log(dump["datasets"][0]["data"])
      return dump;
    },
    min: (canvas) => {
      let ctx = canvas.getContext("2d");
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)");
      let dump = {
        labels: [],
        datasets: [
          {
            label: "Seconds Table",
            /* Display underline color */
            fill: true,
            /* Underline color */
            backgroundColor: gradientStroke,
            /* Line color */
            borderColor: "#1f8ef1",
            /* Line width */
            borderWidth: 1,
            borderDash: [],
            borderDashOffset: 0.0,
            /* Point color */
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(50,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [],
          },
        ],
      };
      dump["labels"] = min["labels"]
      dump["datasets"][0]["data"] = min["temps"]
      console.log(dump["datasets"][0]["data"])
      return dump;
    },
    hour: (canvas) => {
      let ctx = canvas.getContext("2d");
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)");
      let dump = {
        labels: [],
        datasets: [
          {
            label: "Hour Table",
            /* Display underline color */
            fill: true,
            /* Underline color */
            backgroundColor: gradientStroke,
            /* Line color */
            borderColor: "#1f8ef1",
            /* Line width */
            borderWidth: 1,
            borderDash: [],
            borderDashOffset: 0.0,
            /* Point color */
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(50,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [],
          },
        ],
      };
      dump["labels"] = data["labels"]
      dump["datasets"][0]["data"] = data["temps"]
      console.log(dump["datasets"][0]["data"])
      return dump;
    }
  };
  return (
    <>
      {
        OnLoad()
      }
      <div className="content">
        <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <h5 className="card-category">Temperature reading</h5>
                    <CardTitle tag="h2">Temperature per {display}</CardTitle>
                  </Col>
                  <Col sm="6">
                    <ButtonGroup
                      className="btn-group-toggle float-right"
                      data-toggle="buttons"
                    >
                      <Button
                        tag="label"
                        className={classNames("btn-simple", {
                          active: table === "sec",
                        })}
                        color="info"
                        id="0"
                        size="sm"
                        onClick={() => {settable("sec"); setdisplay("minute")}}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Seconds
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-single-02" />
                        </span>
                      </Button>
                      <Button
                        tag="label"
                        className={classNames("btn-simple", {
                          active: table === "min",
                        })}
                        color="info"
                        id="1"
                        size="sm"
                        onClick={() => {settable("min"); setdisplay("hour")}}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Minutes
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-single-02" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="2"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: table === "hour",
                        })}
                        onClick={() => {settable("hour"); setdisplay("day")}}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Hour
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-gift-2" />
                        </span>
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={MainTable[table]}
                    options={MainTableSettings}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Total Shipments</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-bell-55 text-info" /> 763,215
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Total Shipments</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-bell-55 text-info" /> 763,215
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Bar
                    data={chartExample4.data}
                    options={chartExample4.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="12">
              <TaskCard
                title="Tasks"
                subtitle="Today"
              >
                <Task
                defaultChecked="a"
                defaultValue = ""
                title="Update the Documentation"
                description="Dwuamish Head, Seattle, WA 8:47 AM"
                date="12.06.2021"
                />

                <Task
                defaultChecked="a"
                defaultValue = ""
                title="GDPR Compliance"
                description="The GDPR is a regulation that requires businesses to
                protect the personal data and privacy of Europe
                citizens for transactions that occur within EU
                member states."
                date="12.06.2021"
                />
                
                <Task
                defaultChecked="a"
                defaultValue = ""
                title="Solve the issues"
                description="Fifty percent of all respondents said they would be
                more likely to shop at a company"
                date="12.06.2021"
                />
                <Task
                defaultChecked="a"
                defaultValue = ""
                title="Release v2.0.0"
                description="Ra Ave SW, Seattle, WA 98116, SUA 11:19 AM"
                date="12.06.2021"
                />

                <Task
                defaultChecked="a"
                defaultValue = ""
                title="Export the processed files"
                description="The report also shows that consumers will not easily
                forgive a company once a breach exposing their
                personal data occurs."
                date="12.06.2021"
                />
                <Task
                defaultChecked="a"
                defaultValue = ""
                title="Arival at export process"
                description="Capitol Hill, Seattle, WA 12:34 AM"
                date="26.06.2021"
                />
                </TaskCard>
          </Col>
          <Col lg="6" md="12">
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
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
