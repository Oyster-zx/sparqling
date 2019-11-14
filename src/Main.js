import React from "react";
import Explorer from "./Explorer";
import {Col, Container, Row} from "react-bootstrap";
import {Queries} from "./Queries";

export const Main = () => (
    <Container fluid>
        <Row>
            <Col md={3}>
                <Explorer/>
            </Col>
            <Col>
                <Queries/>
            </Col>
        </Row>
    </Container>
)