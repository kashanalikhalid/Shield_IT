import React, {useEffect, useState} from "react";
import ChartistGraph from "react-chartist";
import Graph from "react-graph-vis";
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
    Tooltip,
} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";

function Socialgraphs({history}) {




    const showDashboad=()=>{


        const graph = {
            nodes: [
                { id: 0, label: "Kashan \n Marketing",color:"red"  },
                { id: 1, label: "Muddasir \n Marketing", color:"red" },
                { id: 2, label: "Kashan \n Marketing", color:"red" },
                { id: 3, label: "Kashan \n Marketing", color:"red"},
                { id: 4, label: "Kashan \n Marketing", color:"red" },
                { id: 5, label: "Kashan \n Marketing", color:"red" },
                { id: 6, label: "6", color:"green" },
                { id: 7, label: "7", color:"green" },
                { id: 8, label: "8", group: 2, color:"green" },
                { id: 9, label: "9", group: 3, color:"green" },
                { id: 10, label: "10", group: 3, color:"green" },
                { id: 11, label: "11", group: 3, color:"green" },
                { id: 12, label: "12", group: 3, color:"green" },
                { id: 13, label: "13", group: 3, color:"green" },
                { id: 14, label: "14", group: 3, color:"green" },
                { id: 15, label: "15", group: 2, color:"green" },
                { id: 16, label: "16", group: 3, color:"green" },
                { id: 17, label: "17", group: 3, color:"green" },
                { id: 18, label: "18", group: 3, color:"green" },
                { id: 19, label: "19", group: 3, color:"green" },
                { id: 20, label: "20", group: 3, color:"green" },
                { id: 21, label: "21", group: 3, color:"green" },
                { id: 22, label: "22", group: 3, color:"green" },
                { id: 23, label: "23", group: 3, color:"green" },
                { id: 24, label: "24", group: 3, color:"green" },
                { id: 25, label: "25", group: 3, color:"green" },
                { id: 26, label: "26", group: 3, color:"green" },
                { id: 27, label: "27", group: 3, color:"green" },
                { id: 28, label: "28", group: 3, color:"green" },
                { id: 29, label: "29", group: 3, color:"green" },
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

        let options = {
            nodes: {
                shape: "dot",
                size: 30,
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
                    <Card className="card-stats card-stats-bg-1">
                        <Card.Body>
                            <Row>
                                <Col xs="5">
                                    <div className="icon-big text-center icon-warning">
                                        <i className=" text-white-util nc-icon nc-single-02 "></i>
                                    </div>
                                </Col>
                                <Col xs="7">
                                    <div className="numbers">
                                        <p className="card-category text-white-util">Total Employees</p>
                                        <Card.Title className="text-white-util" as="h4">284</Card.Title>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>

                    </Card>
                </Col>
                <Col lg="4" sm="6">
                    <Card className="card-stats card-stats-bg-2">
                        <Card.Body>
                            <Row>
                                <Col xs="5">
                                    <div className="icon-big text-center icon-warning">
                                        <i className="nc-icon nc-email-85 text-white-util"></i>
                                    </div>
                                </Col>
                                <Col xs="7">
                                    <div className="numbers">
                                        <p className=" text-white-util card-category">Total Emails</p>
                                        <Card.Title className="text-white-util" as="h4">3600</Card.Title>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>

                    </Card>
                </Col>
                <Col lg="4" sm="6">
                    <Card className="card-stats card-stats-bg-3">
                        <Card.Body>
                            <Row>
                                <Col xs="5">
                                    <div className="icon-big text-center icon-warning">
                                        <i className="nc-icon nc-bell-55 text-white-util"></i>
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
            </Row>


            <Row>
                <Col md="6">
                    <Card>
                        <Card.Header>
                            <Card.Title as="h4">Social Graph</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="ct-chart" id="chartHours">
                                <div style={{height:"600px", width: '700px'}}>

                                    <Graph
                                        graph={graph}
                                        options={options}
                                        events={events}
                                        getNetwork={network => {
                                            //  if you want access to vis.js network api you can set the state in a parent component using this property
                                        }}
                                    />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="6">
                    <Card>
                        <Card.Header>
                            <Card.Title as="h4">Social graph</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div
                                className="ct-chart height-util ct-perfect-fourth"
                                id="chartPreferences"
                            >
                                <div style={{height:"600px", width: '700px'}}>

                                    <Graph
                                        graph={graph}
                                        options={options}
                                        events={events}
                                        getNetwork={network => {
                                            //  if you want access to vis.js network api you can set the state in a parent component using this property
                                        }}
                                    />
                                </div>
                            </div>

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

export default Socialgraphs;
