import React, {useEffect, useState} from "react";
import ChartistGraph from "react-chartist";
import Graph from "react-graph-vis";


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
  Tooltip,
} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";

function Dashboard({history}) {

  const dispatch= useDispatch()


  useEffect(()=>{
  },[dispatch])

  const showDashboad=()=>{


    const graph = {
      nodes: [
        { id: 0, label: "Kashan \n Marketing", group: 3  },
        { id: 1, label: "1", group: 3 },
        { id: 2, label: "2", group: 3 },
        { id: 3, label: "3", group: 2 },
        { id: 4, label: "4", group: 2 },
        { id: 5, label: "5", group: 2 },
        { id: 6, label: "6", group: 2 },
        { id: 7, label: "7", group: 2 },
        { id: 8, label: "8", group: 2 },
        { id: 9, label: "9", group: 3 },
        { id: 10, label: "10", group: 3 },
        { id: 11, label: "11", group: 3 },
        { id: 12, label: "12", group: 3 },
        { id: 13, label: "13", group: 3 },
        { id: 14, label: "14", group: 3 },
        { id: 15, label: "15", group: 2 },
        { id: 16, label: "16", group: 3 },
        { id: 17, label: "17", group: 3 },
        { id: 18, label: "18", group: 3 },
        { id: 19, label: "19", group: 3 },
        { id: 20, label: "20", group: 3 },
        { id: 21, label: "21", group: 3 },
        { id: 22, label: "22", group: 3 },
        { id: 23, label: "23", group: 3 },
        { id: 24, label: "24", group: 3 },
        { id: 25, label: "25", group: 3 },
        { id: 26, label: "26", group: 3 },
        { id: 27, label: "27", group: 3 },
        { id: 28, label: "28", group: 3 },
        { id: 29, label: "29", group: 3 },
      ],
      edges: [
        { from: 1, to: 0 },
        { from: 2, to: 0 },
        { from: 4, to: 3 },
        { from: 5, to: 4 },
        { from: 4, to: 0 },
        { from: 7, to: 6 },
        { from: 8, to: 7 },
        { from: 7, to: 0 },
        { from: 10, to: 9 },
        { from: 11, to: 10 },
        { from: 10, to: 4 },
        { from: 13, to: 12 },
        { from: 14, to: 13 },
        { from: 13, to: 0 },
        { from: 16, to: 15 },
        { from: 17, to: 15 },
        { from: 15, to: 10 },
        { from: 19, to: 18 },
        { from: 20, to: 19 },
        { from: 19, to: 4 },
        { from: 22, to: 21 },
        { from: 23, to: 22 },
        { from: 22, to: 13 },
        { from: 25, to: 24 },
        { from: 26, to: 25 },
        { from: 25, to: 7 },
        { from: 28, to: 27 },
        { from: 29, to: 28 },
        { from: 28, to: 0 },
      ]
    };

    var options = {
      nodes: {
        shape: "dot",
        size: 20,
        font: {
          size: 20,
          color: "black",
        },
        borderWidth: 2,
      },
      edges: {
        width: 2,
      },
    };

    const events = {
      select: function(event) {
        var { nodes, edges } = event;
      }
    };

        return( <Container fluid>
        <Row>
          <Col lg="4" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-single-02 text-primary"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Total Employees</p>
                      <Card.Title as="h4">284</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>

            </Card>
          </Col>
          <Col lg="4" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-email-85 text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Total Emails</p>
                      <Card.Title as="h4">3600</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>

            </Card>
          </Col>
          <Col lg="4" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-bell-55 text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">No. of Risky Emails</p>
                      <Card.Title as="h4">170</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>

            </Card>
          </Col>
        </Row>
          <Row>
            <Col xs={12}>
              <div style={{height:"800px", width: '800px'}}>

                <Graph
                    graph={graph}
                    options={options}
                    events={events}
                    getNetwork={network => {
                      //  if you want access to vis.js network api you can set the state in a parent component using this property
                    }}
                />
              </div>

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
