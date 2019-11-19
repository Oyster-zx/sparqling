import React from "react";
import {Query} from "./Query";
import {Col, Row} from "react-bootstrap";
import {MDBPageItem, MDBPageNav, MDBPagination} from "mdbreact";
import {connect} from "react-redux";


var mock = [
    "#defaultView:Graph\n" +
    "PREFIX gas: <http://www.bigdata.com/rdf/gas#>\n" +
    "\n" +
    "SELECT ?item ?itemLabel ?pic ?linkTo\n" +
    "WHERE {\n" +
    "  SERVICE gas:service {\n" +
    "    gas:program gas:gasClass \"com.bigdata.rdf.graph.analytics.SSSP\" ;\n" +
    "                gas:in wd:Q720 ;\n" +
    "                gas:traversalDirection \"Forward\" ;\n" +
    "                gas:out ?item ;\n" +
    "                gas:out1 ?depth ;\n" +
    "\n" +
    "                gas:maxIterations 4 ;\n" +
    "                gas:linkType wdt:P40 .\n" +
    "  }\n" +
    "  OPTIONAL { ?item wdt:P40 ?linkTo }\n" +
    "  OPTIONAL { ?item wdt:P18 ?pic }\n" +
    "  SERVICE wikibase:label {bd:serviceParam wikibase:language \"[AUTO_LANGUAGE],en\" }\n" +
    "}",
    "#graph rendering could be slow due to large number of results\n" +
    "\n" +
    "#defaultView:Graph\n" +
    "SELECT ?item ?itemLabel ?_image ?_subclass_of ?_subclass_ofLabel\n" +
    "WHERE {\n" +
    "  ?item wdt:P31 wd:Q188451;\n" +
    "        wdt:P279 ?_subclass_of.\n" +
    "  SERVICE wikibase:label { bd:serviceParam wikibase:language \"[AUTO_LANGUAGE],en\". }\n" +
    "  OPTIONAL { ?item wdt:P18 ?_image. }\n" +
    "}",
    "#defaultView:LineChart\n" +
    "SELECT ?country ?year ?population ?countryLabel WHERE {\n" +
    "  {\n" +
    "    SELECT ?country ?year (AVG(?population) AS ?population) WHERE {\n" +
    "      {\n" +
    "        SELECT ?country (str(YEAR(?date)) AS ?year) ?population WHERE {\n" +
    "          ?country wdt:P47 wd:Q183;   # shares border with Germany\n" +
    "                   p:P1082 ?populationStatement.\n" +
    "          ?populationStatement ps:P1082 ?population;\n" +
    "                               pq:P585 ?date.\n" +
    "        }\n" +
    "      }\n" +
    "    }\n" +
    "    GROUP BY ?country ?year\n" +
    "  }\n" +
    "  SERVICE wikibase:label { bd:serviceParam wikibase:language \"[AUTO_LANGUAGE],en\". }\n" +
    "}"
]

var categories = [
    "category 1", "cat"
];

export const Queries = (props) => (
    <>
        {props.queryCategorizations && props.queryCategorizations.map((queryCategorization) => {
            console.log(queryCategorization)
            return (
                <>
                    <Query categories={queryCategorization.categories.map(category => category.name)}
                           code={queryCategorization.queryDocument.code} title={queryCategorization.queryDocument.title}
                           description={queryCategorization.queryDocument.description}/>
                </>)
        })}
        <Row>
            <hr/>
        </Row>
        <Row>
            <Col md={{offset: 2}}>
                <MDBPagination className="mb-5" size="lg">
                    <MDBPageItem>
                        <MDBPageNav aria-label="Previous">
                            <span aria-hidden="true">Previous</span>
                        </MDBPageNav>
                    </MDBPageItem>
                    <MDBPageItem>
                        <MDBPageNav>
                            1
                        </MDBPageNav>
                    </MDBPageItem>
                    <MDBPageItem>
                        <MDBPageNav>2</MDBPageNav>
                    </MDBPageItem>
                    <MDBPageItem>
                        <MDBPageNav>3</MDBPageNav>
                    </MDBPageItem>
                    <MDBPageItem>
                        <MDBPageNav aria-label="Previous">
                            <span aria-hidden="true">Next</span>
                        </MDBPageNav>
                    </MDBPageItem>
                </MDBPagination>
            </Col>
        </Row>
    </>
);

const mapStateToProps = state => ({
    ...state.queriesReducer
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Queries);
