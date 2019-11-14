var mockQuery = "#defaultView:Graph\n" +
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
    "}";

export default (state = {query: mockQuery}, action) => {
    switch (action.type) {
        case 'SAVE_QUERY':
            return {
                query: action.query
            };
        default:
            return state
    }
}