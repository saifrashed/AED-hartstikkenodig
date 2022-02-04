import React from "react";
// nodejs library that concatenates classes
// reactstrap components
import {Col, Container, FormGroup, Input, Row} from "reactstrap";
// core components
import ReactGA from "react-ga";
// index page sections
import SimpleFooter from "../components/Footers";
import PageHeader from '../components/Header/PageHeader';
import emailjs from '@emailjs/browser';
import Button from "reactstrap/es/Button";

class Contact extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            firstname: "",
            lastname:  "",
            subject:   "",
            phone:     "",
            email:     "",
            message:   "",
        }
    }

    componentDidMount() {
        document.documentElement.scrollTop  = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop            = 0;

        ReactGA.initialize("G-N3XDQG32HE");
        ReactGA.pageview(window.location.pathname + window.location.search);
    }


    sendEmail = (e) => {
        e.preventDefault();

        console.log(this.state)

        for(var key in this.state) {
            if(this.state[key] === "") {
                return false;
            }
        }

        emailjs.send("service_j9ybr2i", "template_4ftde86", this.state, 'user_gxTz9VfBhNCKRtnLTr8wh')
               .then((result) => {
                   this.setState({
                       firstname: "",
                       lastname:  "",
                       subject:   "",
                       phone:     "",
                       email:     "",
                       message:   "",
                   });

                   console.log(result.text);
               }, (error) => {
                   console.log(error.text);
               });
    };

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
                                                    <span
                                                        className="d-block mb-1">Stichting, Cursussen, Aanmeldingen...</span>
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

                                <Row className="justify-content-center text-center mt-lg">
                                    <Col lg="8">
                                        <h2 className="display-3">
                                            Neem contact
                                        </h2>
                                        <FormGroup>
                                            <Input
                                                className="form-control-alternative"
                                                placeholder="Voornaam"
                                                type="text"
                                                value={this.state.firstname}
                                                name="firstname"
                                                onChange={(e) => {
                                                    this.handleChange(e)
                                                }}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Input
                                                className="form-control-alternative"
                                                placeholder="Achternaam"
                                                type="text"
                                                value={this.state.lastname}
                                                name="lastname"
                                                onChange={(e) => {
                                                    this.handleChange(e)
                                                }}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Input
                                                className="form-control-alternative"
                                                placeholder="Mobiele nummer"
                                                type="number"
                                                value={this.state.phone}
                                                name="phone"
                                                onChange={(e) => {
                                                    this.handleChange(e)
                                                }}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Input
                                                className="form-control-alternative"
                                                placeholder="Email"
                                                type="email"
                                                value={this.state.email}
                                                name="email"
                                                onChange={(e) => {
                                                    this.handleChange(e)
                                                }}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Input
                                                className="form-control-alternative"
                                                type="select"
                                                value={this.state.subject}
                                                name="subject"
                                                onChange={(e) => {
                                                    this.handleChange(e)
                                                }}
                                            >
                                                <option value={"GEEN"}>Betreffende cursus (niet verplicht)</option>
                                                <option value={"BASIS LIFE SUPPORT (BLS)"}>BASIS LIFE SUPPORT (BLS)</option>
                                                <option value={"KINDER REANIMATIE"}>KINDER REANIMATIE</option>
                                                <option value={"HERHALINGSLESSEN"}>HERHALINGSLESSEN</option>
                                            </Input>

                                        </FormGroup>
                                        <FormGroup>
                                            <Input
                                                type="textarea"
                                                placeholder="Uw bericht"
                                                rows="5"
                                                value={this.state.message}
                                                name="message"
                                                onChange={(e) => {
                                                    this.handleChange(e)
                                                }}
                                            />
                                        </FormGroup>

                                        <Button onClick={this.sendEmail}>
                                            Verzend bericht
                                        </Button>

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
