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
// reactstrap components
import {Col, Container, Row} from "reactstrap";

class Hero extends React.Component {
    render() {
        return (
            <>
                <div className="position-relative">
                    {/* Hero for FREE version */}
                    <section className="section section-hero section-shaped">
                        {/* Background circles */}
                        <div className="shape shape-style-1 shape-default" style={{background: "linear-gradient(150deg, #2dce89 15%, #2dce89 70%, #2dce89 94%)"}}>
                            <span className="span-150"/>
                            <span className="span-50"/>
                            <span className="span-50"/>
                            <span className="span-75"/>
                            <span className="span-100"/>
                            <span className="span-75"/>
                            <span className="span-50"/>
                            <span className="span-100"/>
                            <span className="span-50"/>
                            <span className="span-100"/>
                        </div>
                        <Container className="shape-container d-flex align-items-center py-lg">
                            <div className="col px-0">
                                <Row className="align-items-center justify-content-center">
                                    <Col className="text-center" lg="12">
                                        <img
                                            alt="..."
                                            className="img-fluid"
                                            src={require("assets/img/brand/argon-react-white.png")}
                                            style={{width: "200px"}}
                                        />
                                        <p className="lead text-white">
                                            De Stichting AED HartstikkeNodig Wijk bij Duurstede beheert en onderhoudt het
                                            netwerk van burgerhulpverleners en publiek beschikbare AED's in de gemeente
                                            Wijk bij Duurstede, in samenwerking met de ambulancedienst RAVU, de gemeente
                                            Wijk bij Duurstede en het oproepsysteem HartslagNu . Wij werken op basis van
                                            een overeenkomst met de gemeente Wijk bij Duursted en de ambulancedienst.
                                            Onze burgerhulpverleners worden via de 112-meldkamer ambulancezorg
                                            opgeroepen. Wij zijn een burgerinitiatief met een structurele subsidie van
                                            de gemeente Wijk bij Duurstede. Ons doel is heel Wijk bij Duurstedt
                                            Hartveilig te maken. Dit doen we door er naar te streven dat overal in Wijk
                                            bij Duurstede en het grote buitengebied van onze gemeente binnen 6 minuten
                                            (zgn. 6-minutenzones) na een 112-melding van een hartstilstand onze
                                            burgerhulpverleners met de reanimatie beginnen en een AED aansluiten.
                                            Hiermee overbruggen wij de tijd tussen de 112-melding en de aankomst van de
                                            eerste ambulance. Wij doen dit samen met de first responders van brandweer
                                            en politie. Vaak zijn onze burgerhulpverleners als eerste ter plaatse omdat
                                            ze letterlijk om de hoek bij het slachtoffer aanwezig zijn als de oproep van
                                            de 112- meldkamer (via HartslagNu) komt. Zo vergroten wij de
                                            overlevingskansen substantieel.
                                        </p>
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                        {/* SVG separator */}
                        <div className="separator separator-bottom separator-skew zindex-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                                version="1.1"
                                viewBox="0 0 2560 100"
                                x="0"
                                y="0"
                            >
                                <polygon
                                    className="fill-white"
                                    points="2560 0 2560 100 0 100"
                                />
                            </svg>
                        </div>
                    </section>
                </div>
            </>
        );
    }
}

export default Hero;
