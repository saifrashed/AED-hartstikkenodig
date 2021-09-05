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
import MainMenu from './MainMenu'

class PageHeader extends React.Component {
    render() {
        return (
            <>
                <MainMenu/>
                <section className="section section-shaped">
                    <div className="shape shape-style-1 shape-default" style={{background: "linear-gradient(150deg, #2dce89 15%, #2dce89 70%, #2dce89 94%)"}}>
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                    <Container className="py-md">
                        <Row className="justify-content-between align-items-center">
                            <Col className="mb-12 mb-lg-0" lg="12">
                                <h1 className="text-white font-weight-light">
                                    {this.props.title}
                                </h1>
                            </Col>
                        </Row>
                    </Container>
                    {/* SVG separator */}
                    <div className="separator separator-bottom separator-skew">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon className="fill-white" points="2560 0 2560 100 0 100" />
                        </svg>
                    </div>
                </section>
            </>
        );
    }
}

export default PageHeader;
