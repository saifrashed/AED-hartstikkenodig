import React from "react";
// reactstrap components
import {Button, Card, CardBody, Col, Container, Row} from "reactstrap";
// core components
import ReactGA from "react-ga";
// index page sections
import Footer from "../components/Footers";
import PageHeader from '../components/Header/PageHeader';

class Courses extends React.Component {
    state = {};

    componentDidMount() {
        document.documentElement.scrollTop  = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop            = 0;

        ReactGA.initialize("G-N3XDQG32HE");
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    render() {
        return (
            <>
                <PageHeader title={"Cursussen"}/>
                <main ref="main">
                    <section className="section section-lg ">
                        <Container>
                            <Row className="justify-content-center">
                                <Col lg="12">
                                    <Row className="row-grid">
                                        <Col lg="4">
                                            <Card className="card-lift--hover shadow border-0">
                                                <CardBody className="py-5">
                                                    <div
                                                        className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                                                        <i className="ni ni-check-bold"/>
                                                    </div>
                                                    <h6 className="text-primary text-uppercase">
                                                        Basis Life Support (BLS)
                                                    </h6>
                                                    <p className="description mt-3">
                                                        volledige cursus reanimatie volwassenen waaronder hartmassage,
                                                        beademing en het toepassen van de AED ( Automatische Externe
                                                        Defibrillator)
                                                    </p>
                                                    <Button
                                                        className="mt-4"
                                                        color="primary"
                                                        href="/contact"
                                                    >
                                                        Inschrijven
                                                    </Button>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col lg="4">
                                            <Card className="card-lift--hover shadow border-0">
                                                <CardBody className="py-5">
                                                    <div
                                                        className="icon icon-shape icon-shape-success rounded-circle mb-4">
                                                        <i className="ni ni-check-bold"/>
                                                    </div>
                                                    <h6 className="text-success text-uppercase">
                                                        Kinder reanimatie
                                                    </h6>
                                                    <p className="description mt-3">
                                                        Het reanimeren van baby’s en kinderen neemt een aparte plaats
                                                        in. Dit komt door afwijkende oorzaken, verschil in bouw en
                                                        grootte en het verschil in de uitvoering van de reanimatie. De
                                                        reanimatie van baby’s en kinderen vergt een speciale training.
                                                        Wij hebben hiervoor speciale oefenpoppen met een blue tooth
                                                        controle op de uitvoering.
                                                    </p>
                                                    <Button
                                                        className="mt-4"
                                                        color="success"
                                                        href="/contact"
                                                    >
                                                        Inschrijven
                                                    </Button>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col lg="4">
                                            <Card className="card-lift--hover shadow border-0">
                                                <CardBody className="py-5">
                                                    <div
                                                        className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                                                        <i className="ni ni-check-bold"/>
                                                    </div>
                                                    <h6 className="text-warning text-uppercase">
                                                        herhalingslessen
                                                    </h6>
                                                    <p className="description mt-3">
                                                        De jaarlijkse herhalingsles van benoemde cursussen.
                                                    </p>
                                                    <Button
                                                        className="mt-4"
                                                        color="warning"
                                                        href="/contact"
                                                    >
                                                        Inschrijven
                                                    </Button>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className="section section-lg">
                        <Container>
                            <Row className="row-grid align-items-center">
                                <Col className="order-md-2" md="6">
                                    <img
                                        alt="..."
                                        className="img-fluid floating"
                                        src={require("assets/img/theme/cursus1.jpg")}
                                    />
                                </Col>
                                <Col className="order-md-1" md="6">
                                    <img
                                        alt="..."
                                        className="img-fluid floating"
                                        src={require("assets/img/theme/cursus2.jpeg")}
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <Footer/>
                </main>
            </>
        );
    }
}

export default Courses;
