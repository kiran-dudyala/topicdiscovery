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

*/
import React from "react";
// reactstrap components
import { Navbar, Container } from "reactstrap";
import Link from 'next/link'

const AdminNavbar = () => {
  return (
    <>
      <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
        <Container fluid>
          <a
            className="h4 mb-0  d-none d-lg-inline-block"
            href="/"
            style={{
              fontFamily: "Sacramento",
              fontSize: 33,
              fontWeight: 700,
              color: "#ffff",
            }}
          >
            Topic Discovery
          </a>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
