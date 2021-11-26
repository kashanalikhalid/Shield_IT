import React, {useEffect, useState} from "react";
import '../assets/css/dashboard.css'
import CanvasJSReact from '../assets/canvasJs/canvasjs.react';

import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";

function Dashboard({history}) {
  let CanvasJS = CanvasJSReact.CanvasJS;
  let CanvasJSChart = CanvasJSReact.CanvasJSChart;
  const dispatch= useDispatch()


  const emailOptions = {
    theme: "light1",
    animationEnabled: true,
    axisY: {
      title: "Emails"
    },
    toolTip: {
      shared: true
    },
    legend: {
      verticalAlign: "center",
      horizontalAlign: "right",
      reversed: true,
      cursor: "pointer",
    },
    data: [{
      type: "spline",
      name: "Received",
      showInLegend: true,
      dataPoints: [
        { y: 155, label: "Jan" },
        { y: 150, label: "Feb" },
        { y: 152, label: "Mar" },
        { y: 148, label: "Apr" },
        { y: 142, label: "May" },
        { y: 150, label: "Jun" },
        { y: 146, label: "Jul" },
        { y: 149, label: "Aug" },
        { y: 153, label: "Sept" },
        { y: 158, label: "Oct" },
        { y: 154, label: "Nov" },
        { y: 150, label: "Dec" }
      ]
    },
      {
        type: "spline",
        name: "Sent",
        showInLegend: true,
        dataPoints: [
          { y: 172, label: "Jan" },
          { y: 173, label: "Feb" },
          { y: 175, label: "Mar" },
          { y: 172, label: "Apr" },
          { y: 162, label: "May" },
          { y: 165, label: "Jun" },
          { y: 172, label: "Jul" },
          { y: 168, label: "Aug" },
          { y: 175, label: "Sept" },
          { y: 170, label: "Oct" },
          { y: 165, label: "Nov" },
          { y: 169, label: "Dec" }
        ]
      }]
  }


  const departmentOptions = {
    theme: "light1",
    animationEnabled: true,
    axisY: {
      title: "Threats"
    },
    toolTip: {
      shared: true
    },
    legend: {
      verticalAlign: "center",
      horizontalAlign: "right",
      reversed: true,
      cursor: "pointer",
    },

    data: [{
      type: "line",
      color: 'green',
      name: "Threats",
      showInLegend: true,
      dataPoints: [
        { y: 5, label: "IT" },
        { y: 10, label: "Marketing" },
        { y: 12, label: "Design" },
        { y: 18, label: "Sales" },
        { y: 12, label: "Accounts" },
      ]
    },
      ]
  }


  const pieOptions = {
    animationEnabled: true,
    theme: "light1", // "light1", "dark1", "dark2"
    colorSet:"colorSet1",
    data: [{
      type: "pie",

      indexLabel: "{label}: {y}%",
      startAngle: -90,
      dataPoints: [
        { y: 70 },
        { y: 30},
      ]
    }]
  }


  useEffect(()=>{
  },[dispatch])



  const showDashboad=()=>{





    const events = {
      select: function(event) {
        var { nodes, edges } = event;
      }
    };

        return( <Container fluid>
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats card-stats-bg-1">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className=" text-primary nc-icon nc-single-02 "></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Total Employees</p>
                      <Card.Title className="" as="h4">284</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>

            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats card-stats-bg-2">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-email-85 text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className=" card-category">Total Emails</p>
                      <Card.Title  as="h4">3600</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>

            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats card-stats-bg-3">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-bell-55 text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className=" text-white-util card-category">No. of Risky Emails</p>
                      <Card.Title className="text-white-util" as="h4">170</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>

            </Card>
          </Col>

          <Col lg="3" sm="6">
            <Card className="card-stats card-stats-bg-3">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-alien-33 text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className=" text-white-util card-category">Burnout percentage</p>
                      <Card.Title className="text-white-util" as="h4">20%</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>

            </Card>
          </Col>
        </Row>


          <Row>
            <Col md="8">
              <Card>
                <Card.Header>
                  <Card.Title as="h4">Threats in department</Card.Title>
                  <p className="card-category">Monthly Stats</p>
                </Card.Header>
                <Card.Body>
                  <div className="ct-chart" id="chartHours">
                    <CanvasJSChart options = {departmentOptions}/>

                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md="4">
              <Card>
                <Card.Header>
                  <Card.Title as="h4">Company Health</Card.Title>
                </Card.Header>
                <Card.Body>
                  <div
                      className="ct-chart height-util ct-perfect-fourth"
                      id="chartPreferences"
                  >
                    <CanvasJSChart options = {pieOptions}/>
                  </div>
                  <div className="legend">
                    <i className="fas fa-circle text-info"></i>
                    Normal Employees <i className="fas fa-circle text-danger"></i>
                    Suspicious Employees
                  </div>
                  <hr></hr>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md="12">
              <Card>
                <Card.Header>
                  <Card.Title as="h4">Email Sent and Received </Card.Title>
                  <p className="card-category">Monthly Stats</p>
                </Card.Header>
                <Card.Body>
                  <div
                      className="ct-chart ct-perfect-fourth"
                      id="chartPreferences"
                  >
                    <CanvasJSChart options = {emailOptions}/>
                  </div>
                  <hr></hr>
                </Card.Body>
              </Card>
            </Col>
          </Row>


      </Container>)
    }


  return (
    <>{showDashboad()}
    </>
  );
}

export default Dashboard;
