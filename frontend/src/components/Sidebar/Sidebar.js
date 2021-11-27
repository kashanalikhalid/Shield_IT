
import React, {Component, useState} from "react";
import { useLocation, NavLink, useHistory } from "react-router-dom";
const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

import {Nav, NavDropdown, SplitButton, Dropdown, DropdownButton} from "react-bootstrap";

import '../../assets/css/sidebar.css'
import {
    Button,
    Card,
    Form,
    Container,
    Row,
    Col, Modal, Alert
} from "react-bootstrap";

function Sidebar({ color, image, routes }) {
  const history=useHistory();
  const [radio,setRadio]=useState('none')
  const location = useLocation();
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  return (
    <div className="sidebar" data-image={image} data-color={color}>
      <div
        className="sidebar-background"
      />
      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-start">
          <a
            href="https://www.creative-tim.com?ref=lbd-sidebar"
            className="simple-text logo-mini mx-1"
          >
            <div className="logo-img">
              <img
                src={require("assets/img/logo.png").default}
                alt="..."
              />
            </div>
          </a>
        </div>
        <Nav>

          <li
              className={
                activeRoute('/admin/dashboard')
              }
          >
            <NavLink   className="nav-link" to={'/admin/dashboard'}>
                <span> <i className='nc-icon nc-chart-pie-35' /> <p>Dashboard </p> </span>
            </NavLink>
          </li>

            <li
                className={
                    activeRoute('/admin/analytics')
                }
            >
                <NavLink   className="nav-link" to={'/admin/analytics'}>
                    <span> <i className='nc-icon nc-chart-pie-36' /> <p>Analaytics </p> </span>
                </NavLink>
            </li>

            <li
                className={
                    activeRoute('/admin/employees')
                }
            >
                <NavLink   className="nav-link" to={'/admin/employees'}>
                    <span> <i className='nc-icon nc-single-02' /> <p>Employees </p> </span>
                </NavLink>
            </li>


            <li style={{borderBottom:'1px solid gray'}}
                className={
                    activeRoute('/admin/socialgraphs')
                }
            >
                <NavLink   className="nav-link" to={'/admin/socialgraphs'}>
                    <span> <i className='nc-icon nc-chart-bar-32' /> <p>Social Graphs </p> </span>
                </NavLink>
            </li>

            <li
                className={
                    activeRoute('/admin/default')
                }
            >
                <NavLink onClick={()=>{setRadio('Default')}}   className="nav-link" to={'/admin/default'}>
                    <span> <i className='nc-icon nc-circle' /> <p>Default </p> </span>
                </NavLink>
            </li>

            <li
                className={
                    activeRoute('/admin/threats')
                }
            >
                <NavLink   className="nav-link" to={'/admin/threats'} onClick={()=>{setRadio('Threats')}}>
                    <span> <i className='nc-icon nc-light-3' /> <p>Threats </p> </span>
                </NavLink>
            </li>

            <li
                className={
                    activeRoute('/admin/outsider')
                }
            >
                <NavLink onClick={()=>{setRadio('Outsider')}}   className="nav-link" to={'/admin/outsider'}>
                    <span> <i className='nc-icon nc-cctv' /> <p>Outsiders </p> </span>
                </NavLink>
            </li>


            <li
                className={
                    activeRoute('/admin/Competitors')
                }
            >
                <NavLink onClick={()=>{setRadio('Competitors')}}  className="nav-link" to={'/admin/Competitors'}>
                   <span onClick={()=>{setRadio("Competitors")}} style={{backgroundColor: `${radio==='Competitors' ?'#baa000':'transparent'}`}} className="dot"></span>
                    <span>  <p>Competitors </p> </span>
                </NavLink>
            </li>


        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
