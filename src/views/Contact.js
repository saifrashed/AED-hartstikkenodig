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
import React from "react";
// nodejs library that concatenates classes
// reactstrap components
import {Col, Container, Row} from "reactstrap";
import SimpleFooter from "../components/Footers/SimpleFooter.js";
import PageHeader from '../components/Header/PageHeader';
// core components
// index page sections

class Contact extends React.Component {
    state = {};

    componentDidMount() {
        document.documentElement.scrollTop  = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop            = 0;
    }

    render() {
        return (
            <>
                <PageHeader title={"Contact"}/>
                <main ref="main">

                    <div className="py-5">
                        <section className="section section-lg">
                            <Container>
                                <Row>
                                    <Col className="mb-5 mb-lg-0" lg="4" md="6">
                                        <div className="px-4">
                                            <div className="pt-4 text-center">
                                                <h5 className="title">
                                                    <span className="d-block mb-1">Stichting, Cursussen, Aanmeldingen...</span>
                                                </h5>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="mb-5 mb-lg-0" lg="4" md="6">
                                        <div className="px-4">
                                            <div className="pt-4 text-center">
                                                <h5 className="title">
                                                    <span className="d-block mb-1">AED's, kasten, onderhoud...</span>
                                                </h5>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="mb-5 mb-lg-0" lg="4" md="6">
                                        <div className="px-4">
                                            <div className="pt-4 text-center">
                                                <h5 className="title">
                                                    <span className="d-block mb-1">Subside, donaties, giften...</span>
                                                </h5>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="justify-content-center text-center mt-lg">
                                    <Col lg="8">
                                        <p className="lead text-muted">
                                            De beschikking voor een ANBI status van de Stichting AED HartstikkeNodig is
                                            in aanvraag.
                                            Dit betekent dat wij over onze ontvangen schenkingen geen belasting hoeven
                                            te betalen. Ook als schenker kunt u profiteren van belastingvoordeel.
                                        </p>
                                    </Col>
                                </Row>
                            </Container>
                        </section>
                    </div>


                    <SimpleFooter/>
                </main>
            </>
        );
    }
}

export default Contact;
