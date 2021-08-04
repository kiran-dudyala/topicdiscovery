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
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import Typed from "react-typed";
import Search from "./Search";

const Header = (props) => {
  
  const onSearchChange = (value) => {
    props.onSearchChange(value);
  };

  return (
    <>
      <div
        className="header pb-8 pt-5 pt-md-8"
        style={{
          background: "linear-gradient(87deg, #ff7e5f 0, #feb47b 100%)",
        }}
      >
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}

            <Row>
              <Col lg="4" xl="4"></Col>
              <Col lg="4" xl="4">
                <Card style={{ border: "none" }}>
                  <CardHeader
                    style={{ marginBottom: -23, borderBottom: "none" }}
                  >
                    <Typed
                      strings={[
                        "Discover Company Trend",
                        "Discover Topic Trend",
                        "Discover Product Trend",
                      ]}
                      typeSpeed={40}
                      backSpeed={50}
                      attr="placeholder"
                      loop
                    >
                      <input
                        type="text"
                        disabled
                        style={{
                          fontSize: 22,
                          border: "none",
                          background: "transparent",
                        }}
                      />
                    </Typed>
                  </CardHeader>
                  <CardBody style={{ background: "transparent" }}>
                    <Search onSearchChange={onSearchChange} />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
