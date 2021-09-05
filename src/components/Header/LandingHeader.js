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
import {Button, Col, Container, Row, UncontrolledCarousel} from "reactstrap";
import MainMenu from './MainMenu'

class LandingHeader extends React.Component {
    render() {
        return (
            <>
                <MainMenu/>

                <section className="section section-shaped">
                    <div className="shape shape-style-1 shape-default"
                         style={{background: "linear-gradient(150deg, #2dce89 15%, #2dce89 70%, #2dce89 94%)"}}>
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                    </div>
                    <Container className="py-md">
                        <Row className="justify-content-between align-items-center">
                            <Col className="mb-5 mb-lg-0" lg="5">
                                <h1 className="text-white font-weight-light">
                                    AED HartstikkeNodig
                                </h1>
                                <p className="lead text-white mt-4">
                                    De Stichting AED HartstikkeNodig Wijk bij Duurstede beheert en onderhoudt het
                                    netwerk van burgerhulpverleners en publiek beschikbare AED's in de gemeente Wijk
                                    bij Duurstede, in samenwerking met de ambulancedienst RAVU, de gemeente Wijk bij
                                    Duurstede en het oproepsysteem HartslagNu .
                                </p>
                                <Button
                                    className="btn-white mt-4"
                                    color="default"
                                    href="https://nl-nl.facebook.com/AEDHarstikkeNodig"
                                >
                                    Zie ons op Facebook
                                </Button>
                            </Col>
                            <Col className="mb-lg-auto" lg="6">
                                <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                                    <UncontrolledCarousel items={[{
                                        src:     require("assets/img/theme/wijk.jpg"),
                                        altText: "",
                                        caption: "",
                                        header:  ""
                                    },
                                                                  {
                                                                      src:     require("assets/img/theme/aed.jpg"),
                                                                      altText: "",
                                                                      caption: "",
                                                                      header:  ""
                                                                  }]}/>
                                </div>
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
                            <polygon className="fill-white" points="2560 0 2560 100 0 100"/>
                        </svg>
                    </div>
                </section>
            </>
        );
    }
}

export default LandingHeader;
