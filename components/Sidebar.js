/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

/*eslint-disable*/
import React from "react";
import { NavbarBrand, Navbar, Container } from "reactstrap";

const Sidebar = () => {
  return (
    <Navbar className="navbar-vertical" expand="md" id="sidenav-main">
      <Container fluid>
        {/* Brand */}
        <a
          href="/"
          style={{
            fontFamily: "Sacramento",
            fontSize: 23,
            fontWeight: 700,
            color: "#ff7f50",
          }}
        >
          Topic Discovery
        </a>
      </Container>
    </Navbar>
  );
};

export default Sidebar;
