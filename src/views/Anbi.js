import React from "react";
// nodejs library that concatenates classes
// reactstrap components
import {CardImg, Col, Container, ListGroup, ListGroupItem, ListGroupItemHeading, Row, Badge, Button} from "reactstrap";
// core components
import ReactGA from "react-ga";
// index page sections
import Footer from "../components/Footers";
import PageHeader from '../components/Header/PageHeader';

class Anbi extends React.Component {

    componentDidMount() {
        document.documentElement.scrollTop  = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop            = 0;

        ReactGA.initialize("G-N3XDQG32HE");
        ReactGA.pageview(window.location.pathname + window.location.search);
    }


    /**
     * Handles input changes
     * @param e
     */
    handleChange(e) {
        const value = e.target.value;
        this.setState({
            ...this.state,
            [e.target.name]: value
        });
    }


    render() {
        return (
            <>
                <PageHeader title={"ANBI"}/>
                <main ref="main">
                    <div>
                        <section className="section section-lg">
                            <Container>
                                <Row className="justify-content-center mt-lg">
                                    <Col lg="8" className={"text-center mb-5"}>
                                        <CardImg
                                            alt="..."
                                            src={require("assets/img/theme/anbi2.jpg")}
                                            top
                                        />
                                        <p className="lead text-muted">
                                            De Stichting Voedselbank Kromme Rijn is een ANBI - een Algemeen Nut Beogende
                                            Instelling. Dat betekent onder andere dat we geen winst mogen maken. Maar
                                            ook dat we transparant moeten zijn over onze activiteiten en financiën.
                                            Vandaar de gegevens hieronder.

                                            Als u vragen heeft over onze activiteiten, financiën of ANBI status -
                                            <a href={"/contact"}>neem dan contact met ons</a> op via de contactpagina.
                                        </p>
                                        <Button
                                            className="btn-1 ml-1"
                                            color="success"
                                            outline
                                            href={"#"}
                                            type="button"
                                        >
                                            Beleidsplan 2022
                                        </Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="mb-5 mb-lg-0" lg="4" md="6">
                                        <div className="px-4">
                                            <div className="pt-4 text-center">

                                                <ListGroup>
                                                    <ListGroupItemHeading>
                                                        Registraties
                                                    </ListGroupItemHeading>
                                                    <ListGroupItem>KVK: 0000000000</ListGroupItem>
                                                    <ListGroupItem>BTW: 0000000000</ListGroupItem>
                                                </ListGroup>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="mb-5 mb-lg-0" lg="4" md="6">
                                        <div className="px-4">
                                            <div className="pt-4 text-center">
                                                <ListGroup>
                                                    <ListGroupItemHeading>
                                                        Jaarverslagen
                                                    </ListGroupItemHeading>
                                                    <ListGroupItem>bestand.pdf <Badge pill>2022</Badge></ListGroupItem>
                                                    <ListGroupItem>bestand.pdf <Badge pill>2021</Badge></ListGroupItem>
                                                    <ListGroupItem>bestand.pdf <Badge pill>2020</Badge></ListGroupItem>
                                                    <ListGroupItem>bestand.pdf <Badge pill>2019</Badge></ListGroupItem>
                                                    <ListGroupItem>bestand.pdf <Badge pill>2018</Badge></ListGroupItem>
                                                </ListGroup>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="mb-5 mb-lg-0" lg="4" md="6">
                                        <div className="px-4">
                                            <div className="pt-4 text-center">
                                                <ListGroup>
                                                    <ListGroupItemHeading>
                                                        Financiële verantwoording
                                                    </ListGroupItemHeading>
                                                    <ListGroupItem>bestand.pdf <Badge pill>2022</Badge></ListGroupItem>
                                                    <ListGroupItem>bestand.pdf <Badge pill>2021</Badge></ListGroupItem>
                                                    <ListGroupItem>bestand.pdf <Badge pill>2020</Badge></ListGroupItem>
                                                    <ListGroupItem>bestand.pdf <Badge pill>2019</Badge></ListGroupItem>
                                                    <ListGroupItem>bestand.pdf <Badge pill>2018</Badge></ListGroupItem>
                                                </ListGroup>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>


                            </Container>
                        </section>
                    </div>
                    <Footer/>
                </main>
            </>
        );
    }
}

export default Anbi;
