import React, {useState} from "react";

// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line } from "react-chartjs-2";

import Task from "../components/Task";

import sec from "../json/sec.json"
import min from "../json/minute.json"
import data from "../json/hour.json"
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

import Security from "../variables/Security";
import TicTac from "../variables/TicTac";
import percentage from "../variables/Temp";

import TaskCard from "components/TaskTable";
import { CircularProgressbar } from "components/CircleGraf";

function Dashboard(props) {
  const [table, settable] = useState("sec");
  const [display, setdisplay] = useState("second");
  
  function OnLoad() { 
    fetch('http://10.25.0.5:5454/', {
      'method': 'GET'
    })
    .then(res => res.json())
    .then(res => {
      console.log(res);
    })
  };

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
            borderColor: "#fd5d93",
            /* Line width */
            borderWidth: 1,
            borderDash: [],
            borderDashOffset: 0.0,
            /* Point color */
            pointBackgroundColor: "#fd5d93",
            pointBorderColor: "rgba(50,255,255,0)",
            pointHoverBackgroundColor: "#fd5d93",
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
            borderColor: "#00f2c3",
            /* Line width */
            borderWidth: 1,
            borderDash: [],
            borderDashOffset: 0.0,
            /* Point color */
            pointBackgroundColor: "#00f2c3",
            pointBorderColor: "rgba(50,255,255,0)",
            pointHoverBackgroundColor: "#00f2c3",
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
            borderColor: "#ff8d72",
            /* Line width */
            borderWidth: 1,
            borderDash: [],
            borderDashOffset: 0.0,
            /* Point color */
            pointBackgroundColor: "#ff8d72",
            pointBorderColor: "rgba(50,255,255,0)",
            pointHoverBackgroundColor: "#ff8d72",
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
      //OnLoad()
    }
      <div className="content">
        <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <h5 className="card-category">Temperature reading    |    date: {sec["date"]}</h5>
                    <CardTitle tag="h2">Temperature per {display}</CardTitle>
                  </Col>
                  <Col sm="6">
                    <ButtonGroup
                      className="btn-group-toggle float-right rbc-btn-group"
                      data-toggle="buttons"
                    >
                      <Button
                        tag="label"
                        className={classNames("btn-simple", {
                          active: table === "sec",
                        })}
                        color="danger"
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
                        color="success"
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
                        color="warning"
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
        <Col lg="4" md="5">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Temperature Reading</h5>
                <CardTitle tag="h3">
                  Current Temperature
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Row>
                    <Col xs="12">
                      <center>
                    <div style={{height: 220, width: 220}}>

                      <CircularProgressbar value={percentage} text={`${percentage}°C`} 
                      styles={
                          percentage > 50 ?
                          {
                              path:{stroke: "red", strokeLinecap: "round"},
                              text:{  fill: "red", fontSize: "16px", dominantBaseline: "middle", textAnchor: "middle"}
                          } 
                          : 
                              percentage >  40?
                                  {
                                      path:{stroke: "orange", strokeLinecap: "round"},
                                      text:{  fill: "orange", fontSize: "16px", dominantBaseline: "middle", textAnchor: "middle"}
                                  } 
                                  :
                                  {
                                      path:{stroke: "limegreen", strokeLinecap: "round"},
                                      text:{  fill: "limegreen", fontSize: "16px", dominantBaseline: "middle", textAnchor: "middle"}
                                  }
                          
                          }
                  />
                    </div>
                    </center>
                    </Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" md="12">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Bot status</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-bell-55 text-info" /> Status display
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Row>
                    <Col>
                    <center>
                    <div style={{height: 220, width: 220}}>
                      <CircularProgressbar 
                      value={100}
                      text={"Demon"}
                      styles={
                          Security === "online" ?
                          {
                            path:{stroke:"limegreen", strokeLinecap: "round"},
                            text:{fill: "white", fontSize: "18px", dominantBaseline:"middle", textAnchor: "middle"}
                          }
                          :
                            Security === "reboot" ?
                            {
                              path:{stroke:"yellow", strokeLinecap: "round"},
                              text:{fill: "white", fontSize: "18px", dominantBaseline:"middle", textAnchor: "middle"}
                            }
                            :
                            {
                              path:{stroke:"red", strokeLinecap: "round"},
                              text:{fill: "white", fontSize: "18px", dominantBaseline:"middle", textAnchor: "middle"}
                            }
                      }
                      />
                      </div>
                      </center>
                    </Col>
                    <Col>
                      <center>
                      <div style={{height: 220, width: 220}}>
                        <CircularProgressbar 
                        value={100}
                        text={"Ghost"}
                        styles={
                          TicTac == "online" ?
                          {
                            path:{stroke:"limegreen", strokeLinecap: "round"},
                            text:{fill: "white", fontSize: "18px", dominantBaseline:"middle", textAnchor: "middle"}
                          }
                          :
                            TicTac === "reboot" ?
                            {
                              path:{stroke:"yellow", strokeLinecap: "round"},
                              text:{fill: "white", fontSize: "18px", dominantBaseline:"middle", textAnchor: "middle"}
                            }
                            :
                            {
                              path:{stroke:"red", strokeLinecap: "round"},
                              text:{fill: "white", fontSize: "18px", dominantBaseline:"middle", textAnchor: "middle"}
                            }
                        }
                        />
                      </div>
                      </center>
                    </Col>
                  </Row>

                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
