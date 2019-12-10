import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";
import {MDBDataTable} from 'mdbreact';
import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import {connect} from "react-redux";
import {runQuery, setEndpoint} from "./actions/runnerAction";

export const QueryResult = (props) => (
    <Col>
        <Row>
            <TextField id="outlined-basic" label="SPARQL endpoint" margin="normal" variant="outlined"
                       fullWidth
                       defaultValue={props.endpoint}
                       onChange={(e) => {
                           props.setEndpoint(e.target.value)
                       }}
            />
            <Button variant="success" onClick={() => {
                console.log(props)
                props.runQuery(props.endpoint, props.queryToRun)
            }}>Run</Button>
        </Row>
        <Row>
            <Col>
                {props.queryResult && <MDBDataTable striped bordered hover data={props.queryResult}/>}
            </Col>
        </Row>
    </Col>
);


const mapStateToProps = state => ({
    ...state.runnerReducer
});

const mapDispatchToProps = dispatch => ({
    setEndpoint: (endpoint) => dispatch(setEndpoint(endpoint)),
    runQuery: (endpoint, query) => dispatch(runQuery(endpoint, query))
});

export default connect(mapStateToProps, mapDispatchToProps)(QueryResult);
