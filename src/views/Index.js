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
import {Badge, Button, Col, Container, Row} from "reactstrap";
// core components
// index page sections
import SimpleFooter from "../components/Footers/SimpleFooter.js";
import LandingHeader from '../components/Header/LandingHeader';

class Index extends React.Component {
    componentDidMount() {
        document.documentElement.scrollTop  = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop            = 0;
    }

    render() {
        return (
            <>
                <LandingHeader/>
                <main ref="main">
                    <section className="section section-lg">
                        <Container>
                            <Row className="row-grid justify-content-center">
                                <Col className="text-center" lg="12">
                                    <h2 className="display-3">
                                        Welkom
                                    </h2>
                                    <p className="lead">
                                        De Stichting AED HartstikkeNodig Wijk bij Duurstede beheert en onderhoudt het
                                        netwerk van burgerhulpverleners en publiek beschikbare AED's in de gemeente Wijk
                                        bij Duurstede, in samenwerking met de ambulancedienst RAVU, de gemeente Wijk bij
                                        Duurstede en het oproepsysteem HartslagNu . Wij werken op basis van een
                                        overeenkomst met de gemeente Wijk bij Duursted en de ambulancedienst. Onze
                                        burgerhulpverleners worden via de 112-meldkamer ambulancezorg opgeroepen. Wij
                                        zijn een burgerinitiatief met een structurele subsidie van de gemeente Wijk bij
                                        Duurstede. Ons doel is heel Wijk bij Duurstedt Hartveilig te maken. Dit doen we
                                        door er naar te streven dat overal in Wijk bij Duurstede en het grote
                                        buitengebied van onze gemeente binnen 6 minuten (zgn. 6-minutenzones) na een
                                        112-melding van een hartstilstand onze burgerhulpverleners met de reanimatie
                                        beginnen en een AED aansluiten. Hiermee overbruggen wij de tijd tussen de
                                        112-melding en de aankomst van de eerste ambulance. Wij doen dit samen met de
                                        first responders van brandweer en politie. Vaak zijn onze burgerhulpverleners
                                        als eerste ter plaatse omdat ze letterlijk om de hoek bij het slachtoffer
                                        aanwezig zijn als de oproep van de 112- meldkamer (via HartslagNu) komt. Zo
                                        vergroten wij de overlevingskansen substantieel.
                                    </p>
                                    <div className="btn-wrapper">
                                        <Button
                                            className="mb-3 mb-sm-0"
                                            color="success"
                                            href="/artikel"
                                        >
                                            Lees artikel
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    <div className="py-5 bg-secondary">
                        <section className="section section-lg">
                            <Container>
                                <Row className="row-grid align-items-center">
                                    <Col className="order-md-2" md="6">
                                        <img
                                            alt="..."
                                            className="img-fluid floating"
                                            src={require("assets/img/theme/medicine.svg")}
                                        />
                                    </Col>
                                    <Col className="order-md-1" md="6">
                                        <div className="pr-md-5">
                                            <div
                                                className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                                                <i className="ni ni-trophy"/>
                                            </div>
                                            <h3>Wilt u ook meehelpen Wijk bij Duurstede 'hartveilig' te maken?</h3>
                                            <p>
                                                U kunt dit doen door:
                                            </p>
                                            <ul className="list-unstyled mt-5">
                                                <li className="py-1">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <Badge
                                                                className="badge-circle mr-3"
                                                                color="success"
                                                            >
                                                                <i className="ni ni-satisfied"/>
                                                            </Badge>
                                                        </div>
                                                        <div>
                                                            <h6 className="mb-0">
                                                                Het aanschaffen en ter beschikking stellen van een AED
                                                                en/of
                                                                een buitenkast met pincode.
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="py-1">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <Badge
                                                                className="badge-circle mr-3"
                                                                color="success"
                                                            >
                                                                <i className="ni ni-satisfied"/>
                                                            </Badge>
                                                        </div>
                                                        <div>
                                                            <h6 className="mb-0">Het opstarten van een Buurt AED
                                                                                 actie.</h6>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="py-1">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <Badge
                                                                className="badge-circle mr-3"
                                                                color="success"
                                                            >
                                                                <i className="ni ni-satisfied"/>
                                                            </Badge>
                                                        </div>
                                                        <div>
                                                            <h6 className="mb-0">
                                                                Als Vrijwiliger. Ik kan al reanimeren en wil
                                                                vrijwilliger
                                                                worden
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="py-1">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <Badge
                                                                className="badge-circle mr-3"
                                                                color="success"
                                                            >
                                                                <i className="ni ni-satisfied"/>
                                                            </Badge>
                                                        </div>
                                                        <div>
                                                            <h6 className="mb-0">
                                                                Als vrijwilliger. Ik wil graag één van jullie cursussen
                                                                volgen.
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="py-1">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <Badge
                                                                className="badge-circle mr-3"
                                                                color="success"
                                                            >
                                                                <i className="ni ni-satisfied"/>
                                                            </Badge>
                                                        </div>
                                                        <div>
                                                            <h6 className="mb-0">Als Vrijwilliger. Ik wil niet
                                                                                 reanimeren
                                                                                 maar wel iets anders doen bij AED
                                                                                 HartstikkeNodig.</h6>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="py-1">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <Badge
                                                                className="badge-circle mr-3"
                                                                color="success"
                                                            >
                                                                <i className="ni ni-satisfied"/>
                                                            </Badge>
                                                        </div>
                                                        <div>
                                                            <h6 className="mb-0">
                                                                Ik wil een eenmalige donatie geven.
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="py-1">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <Badge
                                                                className="badge-circle mr-3"
                                                                color="success"
                                                            >
                                                                <i className="ni ni-satisfied"/>
                                                            </Badge>
                                                        </div>
                                                        <div>
                                                            <h6 className="mb-0">
                                                                Ik wil sponsor worden in Natura of geld.
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </section>
                    </div>

                    <section className="section section-lg ">
                        <Container>
                            <Row className="row-grid align-items-center text-center">
                                <Col lg="12">
                                    <h2 className="display-3">Hoe werkt het?</h2>
                                    <p>
                                        Als er een hartstilstand bij u in de buurt wordt gemeld via 112, ontvangt u
                                        van het oproepsysteem een bericht op uw mobiele telefoon. In het bericht
                                        staat de locatie van het slachtoffer. U krijgt de mededeling om direct naar
                                        de locatie toe te gaan, of om eerst een AED van een specifiek adres op te
                                        halen. U kunt de oproep accepteren of weigeren. Als u een SMS krijgt, kunt u
                                        ja terugsturen om te accepteren. Door niet te reageren, weigert u de oproep.
                                        Meerdere mensen in de omgeving krijgen de oproep, daardoor is de kans groot
                                        dat u samen hulpverleent aan het slachtoffer. Ook de Brandweer en de Politie
                                        worden ter plaatse gestuurd. Wie het eerst aankomt begint met de reanimatie.
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    <div className="py-5 bg-secondary">
                        <section className="section section-lg ">
                            <Container>
                                <Row className="row-grid align-items-center text-center">
                                    <Col lg="12">
                                        <h2 className="display-3">De vrijwilligers.</h2>
                                        <p>
                                            In principe leiden wij onze vrijwilligers zelf op. Onze twee ervaren
                                            instructeurs geven de cursus volgens de richtlijnen van de Nederlandse
                                            Reanimatie Raad (NRR). Omdat wij van onze vrijwilligers een goede inzet
                                            verwachten stellen wij een jaarlijkse nascholing verplicht. Hebt u elders
                                            een
                                            reanimatie certificaat behaald dan kunt u zich bij ons aanmelden.
                                        </p>
                                    </Col>
                                </Row>
                            </Container>
                        </section>
                    </div>

                    <section className="section section-lg ">
                        <Container>
                            <Row className="row-grid align-items-center text-center">
                                <Col lg="12">
                                    <h2 className="display-3">De AED’s</h2>
                                    <p>
                                        Onze stichting heeft 26 AED’s en buitenkasten in eigendom. Een aantal AED’s zijn
                                        door anderen aangeschaft. Controle en onderhoud vindt in eigen beheer plaats.
                                        Iedere twee maanden controleren onze techneuten alle AED”s en kasten die in ons
                                        systeem zijn opgenomen. Ook controleren zij AED in bedrijven.
                                        Huisartsenpraktijken, sportscholen etc.
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    <div className="py-5 bg-secondary">
                        <section className="section section-lg">
                            <Container>
                                <Row className="justify-content-center text-center mb-lg">
                                    <Col lg="8">
                                        <h2 className="display-3">Het bestuur.</h2>
                                        <p className="lead text-muted">
                                            Sinds de oprichting van de stichting in 2008 wordt het dagelijks bestuur
                                            gevormd
                                            door:
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="mb-5 mb-lg-0" lg="4" md="6">
                                        <div className="px-4">
                                            <img
                                                alt="..."
                                                className="img-center img-fluid shadow shadow-lg--hover"
                                                src={require("assets/img/theme/Freddy1.jpg")}
                                                style={{width: "200px"}}
                                            />
                                            <div className="pt-4 text-center">
                                                <h5 className="title">
                                                    <span className="d-block mb-1">Freddy Scherpenzeel</span>
                                                    <small className="h6 text-muted">Voorzitter</small>
                                                </h5>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="mb-5 mb-lg-0" lg="4" md="6">
                                        <div className="px-4">
                                            <img
                                                alt="..."
                                                className="img-center img-fluid shadow shadow-lg--hover"
                                                src={require("assets/img/theme/Wil1.jpg")}
                                                style={{width: "200px"}}
                                            />
                                            <div className="pt-4 text-center">
                                                <h5 className="title">
                                                    <span className="d-block mb-1">Wil van Dam</span>
                                                    <small className="h6 text-muted">
                                                        Secretaris
                                                    </small>
                                                </h5>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="mb-5 mb-lg-0" lg="4" md="6">
                                        <div className="px-4">
                                            <img
                                                alt="..."
                                                className="img-center img-fluid shadow shadow-lg--hover"
                                                src={require("assets/img/theme/Henk1.jpg")}
                                                style={{width: "200px"}}
                                            />
                                            <div className="pt-4 text-center">
                                                <h5 className="title">
                                                    <span className="d-block mb-1">Henk Huisman</span>
                                                    <small className="h6 text-muted">Penningmeester</small>
                                                </h5>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="justify-content-center text-center mt-lg">
                                    <Col lg="8">
                                        <Button
                                            className="btn-1 ml-1"
                                            color="success"
                                            outline
                                            href={"/artikel"}
                                            type="button"
                                        >
                                            Klik hier om het artikel over onze nieuwe voorzitter te lezen.
                                        </Button>
                                        <p className="lead text-muted">
                                            De toegevoegde bestuursleden zijn: Sigrid van Petten, bestuurslid kwaliteit
                                            John
                                            Jansen, bestuurslid techniek Freddy Scherpenzeel, instructeur waaronder
                                            kinderreanimatie. De instructeurs zijn: Wil van Dam en Freddy
                                            Scherpenzeel </p>
                                    </Col>
                                </Row>
                            </Container>
                        </section>
                    </div>

                    <SimpleFooter/>


                    {/*<Buttons/>*/}
                    {/*<Inputs/>*/}
                    {/*<section className="section">*/}
                    {/*<Container>*/}
                    {/*<CustomControls/>*/}
                    {/*<Menus/>*/}
                    {/*</Container>*/}
                    {/*</section>*/}
                    {/*<Navbars/>*/}
                    {/*<section className="section section-components">*/}
                    {/*<Container>*/}
                    {/*<Tabs/>*/}
                    {/*<Row className="row-grid justify-content-between align-items-center mt-lg">*/}
                    {/*<Progress/>*/}
                    {/*<Pagination/>*/}
                    {/*</Row>*/}
                    {/*<Row className="row-grid justify-content-between">*/}
                    {/*<Pills/>*/}
                    {/*<Labels/>*/}
                    {/*</Row>*/}
                    {/*<Alerts/>*/}
                    {/*<Typography/>*/}
                    {/*<Modals/>*/}
                    {/*<Datepicker/>*/}
                    {/*<TooltipPopover/>*/}
                    {/*</Container>*/}
                    {/*</section>*/}
                    {/*<Carousel/>*/}
                    {/*<Icons/>*/}
                    {/*<Login/>*/}
                    {/*<Download/>*/}
                    {/*<CardsFooter/>*/}
                </main>
            </>
        );
    }
}

export default Index;
