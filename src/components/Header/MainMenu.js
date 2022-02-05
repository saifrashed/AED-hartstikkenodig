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
import {Col, Container, Nav, Navbar, NavbarBrand, NavItem, NavLink, Row, UncontrolledCollapse} from "reactstrap";
import {Link} from "react-router-dom";


class MainMenu extends React.Component {
    render() {
        return (
            <>
                <header className="header-global">
                    <Navbar className="navbar-dark bg-success navbar-light" expand="lg">
                        <Container>
                            <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                                <img
                                    alt="..."
                                    style={{height: 75}}
                                    src={require("assets/img/brand/logo_light.png")}
                                />
                            </NavbarBrand>
                            <button className="navbar-toggler" id="navbar-success">
                                <span className="navbar-toggler-icon"/>
                            </button>
                            <UncontrolledCollapse navbar toggler="#navbar-success">
                                <div className="navbar-collapse-header">
                                    <Row>
                                        <Col className="collapse-brand" xs="6">
                                            <Link to="/">
                                                <img
                                                    alt="..."
                                                    src={require("assets/img/brand/logo_dark.png")}
                                                />
                                            </Link>
                                        </Col>
                                        <Col className="collapse-close" xs="6">
                                            <button className="navbar-toggler" id="navbar-success">
                                                <span/>
                                                <span/>
                                            </button>
                                        </Col>
                                    </Row>
                                </div>
                                <Nav className="ml-lg-auto" navbar>
                                    <NavItem>
                                        <NavLink
                                            className="nav-link-icon"
                                            href="/"
                                        >
                                            <span className="nav-link-inner--text">Home</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className="nav-link-icon"
                                            href="/cursussen"
                                        >
                                            <span className="nav-link-inner--text">Cursussen</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className="nav-link-icon"
                                            href="/contact"
                                        >
                                            <span className="nav-link-inner--text">Contact</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className="nav-link-icon"
                                            href="https://www.facebook.com/AEDHarstikkeNodig"
                                        >
                                            <i className="fa fa-facebook-square"/>
                                            <span className="nav-link-inner--text d-lg-none">Facebook</span>
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </UncontrolledCollapse>
                        </Container>
                    </Navbar>
                </header>
            </>
        );
    }
}

export default MainMenu;
