
import React, { Component } from "react";
import { useLocation, NavLink, useHistory } from "react-router-dom";
const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

import {Nav, NavDropdown, SplitButton, Dropdown, DropdownButton} from "react-bootstrap";
import '../../assets/css/sidebar.css'


function Sidebar({ color, image, routes }) {
  const history=useHistory();
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
                    activeRoute('/admin/Employees')
                }
            >
                <NavLink   className="nav-link" to={'/admin/dashboard'}>
                    <span> <i className='nc-icon nc-chart-pie-35' /> <p>Employees </p> </span>
                </NavLink>
            </li>


            <li style={{borderBottom:'1px solid gray'}}
                className={
                    activeRoute('/admin/socialgraphs')
                }
            >
                <NavLink   className="nav-link" to={'/admin/dashboard'}>
                    <span> <i className='nc-icon nc-chart-pie-35' /> <p>Social Graphs </p> </span>
                </NavLink>
            </li>














            <li
                className={
                    activeRoute('/admin/data')
                }
            >
                <NavDropdown title={<span> <i className='nc-icon nc-app' /> <p>Data Management</p> </span>}>
                    <DropdownButton variant='dropdownnested' id="dropdown-item-button" title={<span> <i  className='nc-icon nc-backpack dropdown-icon' /> <p className='dropdown-text'>Students</p> </span>}>
                        <Dropdown.Item onClick={()=>{history.push('/admin/data/addstudent')}} className='btn-dropdownnested-item' as="button"><span> <i  className='dropdown-icon nc-icon nc-simple-add' /> <p className='dropdown-text'>Add Student</p> </span></Dropdown.Item>
                        <Dropdown.Item onClick={()=>{history.push('/admin/data/studentlist')}} className='btn-dropdownnested-item' as="button"><span> <i  className='nc-icon nc-bullet-list-67 dropdown-icon' /> <p className='dropdown-text'>Students list</p> </span></Dropdown.Item>

                    </DropdownButton>

                    <DropdownButton variant='dropdownnested' id="dropdown-item-button" title={<span> <i  className='nc-icon nc-bus-front-12 dropdown-icon' /> <p className='dropdown-text'>Buses</p> </span>}>
                        <Dropdown.Item onClick={()=>{history.push('/admin/data/addbus')}} className='btn-dropdownnested-item' as="button"><span> <i  className='dropdown-icon nc-icon nc-simple-add' /> <p className='dropdown-text'>Add Bus</p> </span></Dropdown.Item>
                        <Dropdown.Item onClick={()=>{history.push('/admin/data/buslist')}} className='btn-dropdownnested-item' as="button"><span> <i  className='nc-icon nc-bullet-list-67 dropdown-icon' /> <p className='dropdown-text'>Bus list</p> </span></Dropdown.Item>

                    </DropdownButton>

                    <DropdownButton variant='dropdownnested' id="dropdown-item-button" title={<span> <i  className='nc-icon nc-single-02 dropdown-icon' /> <p className='dropdown-text'>Drivers</p> </span>}>
                        <Dropdown.Item onClick={()=>{history.push('/admin/data/adddriver')}} className='btn-dropdownnested-item' as="button"><span> <i  className='dropdown-icon nc-icon nc-simple-add' /> <p className='dropdown-text'>Add Driver</p> </span></Dropdown.Item>
                        <Dropdown.Item onClick={()=>{history.push('/admin/data/driverlist')}} className='btn-dropdownnested-item' as="button"><span> <i  className='nc-icon nc-bullet-list-67 dropdown-icon' /> <p className='dropdown-text'>Drivers list</p> </span></Dropdown.Item>

                    </DropdownButton>




                </NavDropdown>
            </li>

            <li
                className={
                    activeRoute('/admin/license')
                }
            >
                <NavDropdown title={<span> <i className='nc-icon nc-key-25' /> <p>Licensing</p> </span>}   onClick={()=>{history.push('/admin/license')}}>
                    <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>

                </NavDropdown>

            </li>
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
