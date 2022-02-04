import React from "react";
// nodejs library that concatenates classes
// reactstrap components
import {CardImg, Col, Container, Row} from "reactstrap";
// core components
import ReactGA from "react-ga";
// index page sections
import PageHeader from '../components/Header/PageHeader';
import SimpleFooter from "../components/Footers";

class Article extends React.Component {
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
                <PageHeader title={"Het jaarlijkse overleg in het Huis van de Gemeente"}/>

                <main ref="main">


                    <Container>
                        <Row className="row-grid align-items-center">

                            <Col md="12" className={"my-5"}>


                                <CardImg
                                    alt="..."
                                    src={require("assets/img/theme/artikel.jpg")}
                                    top
                                />

                                <p className="lead text-italic ">
                                    Tijdens het jaarlijkse overleg in het Huis van de Gemeente met wethouder Wil
                                    Kosterman, werd even tijd gemaakt voor het afscheid van voorzitter Jan Oechies. Want
                                    in dertien jaren, sinds de oprichting in 2008 is er enorm veel gebeurd, met als
                                    gevolg dat onze gemeente inmiddels ruim 70 AED’s telt, waarvan 26 AED’s en
                                    buitenkasten van AED HartstikkeNodig. Een prachtig resultaat. Helemaal afscheid
                                    nemen doet Oechies nog niet, desgevraagd zal hij graag advies geven. Zijn functie
                                    als voorzitter wordt opgevolgd door Freddy Scherpenzeel.
                                    „Het doel om een goede dekking binnen 500 meter binnen de gemeente te realiseren, is
                                    gelukt,” zegt Oechies. Ook voor AED HartstikkeNodig is het een lastige periode
                                    geweest met corona. „Het is nu even afwachten hoe het vrijwilligersbestand er voor
                                    staat.” Oechies kan terugkijken op een overwegend mooie periode. In juni 2008 werd
                                    de Stichting AED HartstikkeNodig opgericht met het doel een netwerk van
                                    vrijwilligers op te zetten en 24/7 beschikbare AED’s (Automatische Externe
                                    Defibrillator) te plaatsen en onderhouden. In de loop der jaren zijn er al veel
                                    vrijwilligers door de stichting opgeleid. Elk jaar is er een nascholingscursus.
                                    Bestuurslid John Jansen controleert de AED’s regelmatig. „Dat is van groot belang,
                                    want het gaat wel om mensenlevens.”
                                    <br/>
                                    <br/>

                                    <b>GOEDE CONTACTEN</b> „Sinds de start in 2008 hebben we te maken gehad met drie
                                    burgemeesters,” gaat Oechies verder. „Burgemeester Guus Swillens was ook direct onze
                                    eerste vrijwilliger, samen met wethouder Jan Burger. De AED kast op de Markt is naar
                                    Swillens vernoemd. Dat was nog een toestand, want eigenlijk mocht een kast niet
                                    worden gemonteerd op een rijksmonument. Maar ook burgemeester Tjapko Poppens was een
                                    pleitbezorger. Bij het 10-jarig bestaan kwam hij in een ambulance aanrijden en deed
                                    een reanimatie op de Markt.” De Koninklijke onderscheidingen die door burgemeester
                                    Iris Meerts zijn uitgereikt aan bestuursleden Henk Huisman en secretaris Wil van Dam
                                    vindt Oechies zeer terecht. „Alles staat met een goed secretariaat en
                                    penningmeesterschap.” Al die jaren is er een goed contact geweest met de
                                    ambulancedienst. Door de inzet van AED HartstikkeNodig is een van de eerste
                                    gemeenten in de provincie die dit heeft bereikt. Dit is mede mogelijk gemaakt door
                                    het Rabo Stimuleringsfonds en de Willem van Abcoude Stichting. „Onze vrijwilligers
                                    staan bij nacht en ontij klaar om te assisteren bij een reanimatie. In de coronatijd
                                    waren er maar weinig meldingen, maar nadat de Deense voetballer Christian Eriksen
                                    werd getroffen door een hartstilstand lijkt het of het aantal reanimaties toeneemt.
                                    Misschien heeft dit er toch mee te maken dat mensen sinds de lockdowns een slechtere
                                    conditie hebben. Je ziet ook dat veel mensen na corona moeten revalideren.”
                                    <br/>
                                    <br/>

                                    Reanimatiecursussen geven op scholen is erg belangrijk, daar zetten wij op in.
                                    <br/>
                                    <br/>

                                    <b>HEEL ERG NODIG</b> Toen Oechies in Monaco had gezien hoe het kan, wilde hij ook
                                    een sluitend net van AED’s in Wijk bij Duurstede. „Vol trots kijken we terug op het
                                    plaatsen van de eerste AED.” Al snel volgden er meerdere. „Waar we ook heel blij mee
                                    zijn is het kunnen geven van reanimatiecursussen op scholen. In groep 8 van De
                                    Wegwijzer hebben we dit een aantal jaren gedaan.” Daar willen we graag mee verder,”
                                    vertellen instructeurs Van Dam en Scherpenzeel. „We willen dit verder uitrollen bij
                                    andere scholen.” Oechies vult aan: „Uit onderzoek is gebleken dat het helpt.
                                    Kinderen die een reanimatiecursus volgen kunnen dit jaren later nog feilloos
                                    uitvoeren. En dat is wat we willen bereiken; dat iedereen elkaar kan helpen.”
                                    <br/>
                                    <br/>

                                    <b>COMMERCIE</b> Er zijn veel mooie momenten geweest om op terug te kijken, maar
                                    ergernissen zijn er ook. „Wat mij heel erg tegen de borst stuit is dat alles rond
                                    AED’s zo vercommercialiseerd is. De prijs die wordt gevraagd is veel te hoog. Wat
                                    dat betreft zouden ze zich echt moeten schamen. Het is slecht dat het zo commercieel
                                    is geworden. Zoals wij begonnen zijn met verschillende fondsjes, dat is nu niet meer
                                    haalbaar,” zegt Oechies.
                                    <br/>
                                    <br/>

                                    <b>HART EN ZIEL</b> Na zich zoveel jaren hiervoor te hebben ingezet, zal Oechies het
                                    zeker gaan missen. „Maar ik blijf me er wel een klein beetje mee bemoeien. Als
                                    daarom gevraagd wordt geef ik graag adviezen. Met een goed gevoel geef ik het stokje
                                    over aan Freddy Scherpenzeel.” De nieuwe voorzitter heeft als taak het bestuur te
                                    verjongen en te zorgen voor nieuwe aanwas van vrijwilligers. „Daar ligt voor ons een
                                    behoorlijke klus. De dekking is in de gemeente bijzonder goed, maar wij willen nog
                                    graag nieuwe AED’s plaatsen in De Geer en bij de Stadshaven. Ook kinderreanimatie
                                    heeft onze aandacht.” Oechies benadrukt het belang hiervan. „Nu het afgelopen jaar
                                    veel niet door kon gaan, waaronder zwemlessen, zien we dat meer kinderen door
                                    verdrinking om het leven komen. Het is dan goed als vriendjes en vriendinnetjes
                                    weten wat ze moeten doen in een noodsituatie.”
                                    <br/>
                                    <br/>

                                    Meer informatie over AED HartstikkeNodig of aanmelden als vrijwilliger of voor de
                                    reanimatiecursus, neem dan contact op met Wil van Dam, <a
                                    href="mailto:wilvandam65@gmail.com">wilvandam65@gmail.com</a>, telefoon <a
                                    href="telto:0641695302">06 41695302</a>.

                                </p>


                            </Col>
                        </Row>
                    </Container>
                </main>
                <SimpleFooter/>
            </>
        );
    }
}

export default Article;
