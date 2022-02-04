/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
// reactstrap components
import {Button, Col, Container, Nav, NavItem, NavLink, Row} from "reactstrap";

class SimpleFooter extends React.Component {
    render() {
        return (
            <>
                <footer className=" footer">
                    <Container>
                        <Row className=" row-grid align-items-center mb-5">
                            <Col lg="6">
                                <h3 className=" text-success font-weight-light mb-2">
                                    Heeft u vragen?
                                </h3>
                                <h4 className=" mb-0 font-weight-light">
                                    Neem contact met ons op.
                                </h4>
                                <Button
                                    className="btn-1 mt-4"
                                    color="success"
                                    outline
                                    href="/contact"
                                    type="button"
                                >
                                    Contact
                                </Button>
                            </Col>
                        </Row>
                        <hr/>
                        <Row className=" align-items-center justify-content-md-between">
                            <Col md="6">
                                <div className=" copyright">
                                    © {new Date().getFullYear()}{" "}
                                    <a
                                        className="text-success"
                                        href="https://www.creative-tim.com?ref=adsr-footer"
                                        target="_blank"

                                    >
                                        AED HartstikkeNodig
                                    </a>.

                                </div>
                            </Col>
                            <Col md="6">
                                <Nav className=" nav-footer justify-content-end">
                                    <NavItem>
                                        <NavLink
                                            href="https://www.creative-tim.com?ref=adsr-footer"
                                            target="_blank"
                                        >
                                            AED HartstikkeNodig
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </>
        );
    }
}

export default SimpleFooter;
