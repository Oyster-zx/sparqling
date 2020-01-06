import React from "react";
import Explorer from "./Explorer";
import {Col, Container, Row} from "react-bootstrap";
import QueryList from "./QueryList";

export const Main = () => (
    <Container fluid>
        <Row>
            <Col md={3} sd={2}>
                <Explorer/>
            </Col>
            <Col>
                <QueryList/>
            </Col>
        </Row>
    </Container>
)