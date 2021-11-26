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

function Analaytics({history}) {
    let CanvasJS = CanvasJSReact.CanvasJS;
    let CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const dispatch= useDispatch()


    const emailOptions = {
        theme: "light2",
        animationEnabled: true,
        title:{
            text: "Employee Comparison"
        },
        axisX: {
            title: "States"
        },
        axisY: {
            title: "Emails Sent to outsiders",
            titleFontColor: "#6D78AD",
            lineColor: "#6D78AD",
            labelFontColor: "#6D78AD",
            tickColor: "#6D78AD"
        },
        axisY2: {
            title: "Emails received",
            titleFontColor: "#51CDA0",
            lineColor: "#51CDA0",
            labelFontColor: "#51CDA0",
            tickColor: "#51CDA0"
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
        },
        data: [{
            type: "spline",
            name: "Kashan Ali",
            showInLegend: true,
            xValueFormatString: "MMM",
            yValueFormatString: "#,##0 Emails",
            dataPoints: [
                { x: new Date(2017, 0), y: 120 },
                { x: new Date(2017, 1), y: 135 },
                { x: new Date(2017, 2 ), y: 144 },
                { x: new Date(2017, 3 ), y: 103 },
                { x: new Date(2017, 4 ), y: 93 },
                { x: new Date(2017, 5 ), y: 129 },
                { x: new Date(2017, 6 ), y: 143 },
                { x: new Date(2017, 7 ), y: 156 },
                { x: new Date(2017, 8 ), y: 122 },
                { x: new Date(2017, 9 ), y: 106 },
                { x: new Date(2017, 10 ), y: 137 },
                { x: new Date(2017, 11), y: 142 }
            ]
        },
            {
                type: "spline",
                name: "Ahmed",
                axisYType: "primary",
                showInLegend: true,
                xValueFormatString: "MMM",
                yValueFormatString: "#,##0 Emails",
                dataPoints: [
                    { x: new Date(2017, 0), y: 190 },
                    { x: new Date(2017, 1  ), y: 200 },
                    { x: new Date(2017, 2 ), y: 273 },
                    { x: new Date(2017, 3 ), y: 200 },
                    { x: new Date(2017, 4 ), y: 202 },
                    { x: new Date(2017, 5 ), y: 290 },
                    { x: new Date(2017, 6 ), y: 304 },
                    { x: new Date(2017, 7 ), y: 325 },
                    { x: new Date(2017, 8 ), y: 202 },
                    { x: new Date(2017, 9 ), y: 272 },
                    { x: new Date(2017, 10 ), y: 335 },
                    { x: new Date(2017, 11), y: 325 }
                ]
            }]
    }


    const departmentOptions = {
            animationEnabled: true,
            subtitles: [{
                text: "Kashan Ali Khalid",
                verticalAlign: "center",
                fontSize: 24,
                dockInsidePlotArea: true
            }],
            data: [{
                type: "doughnut",
                showInLegend: true,
                indexLabel: "{name}: {y}",
                yValueFormatString: "#,###'%'",
                dataPoints: [
                    { name: "IT", y: 5 },
                    { name: "Marketing", y: 31 },
                    { name: "Support", y: 40 },
                    { name: "Design", y: 17 },
                    { name: "Accounts", y: 7 }
                ]
            }]
    }

    const pieOptions = {
        animationEnabled: true,
        theme: "light1", // "light1", "dark1", "dark2"
        data: [{
            showInLegend: true,
            legendText: "{label}",
            toolTipContent: "{label}: <strong>{y}%</strong>",
            indexLabelPlacement: "inside",
            type: "pie",
            indexLabel: "{label}: {y}%",
            dataPoints: [
                { y: 10, label: "Sent" },
                { y: 90, label: "Received" },
            ]
        }]
    }


    useEffect(()=>{
    },[dispatch])

    const showDashboad=()=>{

        return( <Container fluid>
            <Row>
                <Col md="8">
                    <Card>
                        <Card.Header>
                            <Card.Title as="h4">Emails sent to various departments</Card.Title>
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
                            <Card.Title as="h4">Emails sent vs received</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div
                                className="ct-chart height-util ct-perfect-fourth"
                                id="chartPreferences"
                            >
                                <CanvasJSChart options = {pieOptions}/>
                            </div>
                            {/*<div className="legend">*/}
                            {/*    <i className="fas fa-circle text-info"></i>*/}
                            {/*    Normal Employees <i className="fas fa-circle text-danger"></i>*/}
                            {/*    Suspicious Employees*/}
                            {/*</div>*/}
                            <hr></hr>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col md="12">
                    <Card>
                        <Card.Header>
                            <Card.Title as="h4">Email Sent to outsiders </Card.Title>
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

export default Analaytics;
