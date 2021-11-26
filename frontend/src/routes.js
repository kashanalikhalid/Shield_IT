/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import SignUp from "./layouts/SignUp";
import Employees from "./views/Employees";
import Socialgraphs from "./views/Socialgraphs";
import Analaytics from "./views/Analytics";


const dashboardRoutes = [

  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    layout: "/admin",
  },

  {
    path: "/employees",
    name: "Dashboard",
    component: Employees,
    layout: "/admin",
  },

  {
    path: "/socialgraphs",
    component: Socialgraphs,
    layout: "/admin",
  },

  {
    path: "/analytics",
    component: Analaytics,
    layout: "/admin",
  },







];

export default dashboardRoutes;
