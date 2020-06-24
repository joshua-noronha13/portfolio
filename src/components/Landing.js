import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap"

function Landing() {
    return (
        <Container style={{ padding: "2%", margin:"4% auto", marginTop:"4em" }}>
            <Row>
                <Col>
                    <div>
                        <div style={{ fontSize: "1.1rem", fontFamily: "Overpass Mono", color: "rgb(136, 146, 176)" }}>Hi, my name is</div>
                        <div style={{ fontSize: "6rem", fontWeight: 500, color: "black" }}>Joshua Noronha.</div>
                        <div style={{ fontSize: "3.5rem", fontWeight: 500, marginTop: "0.4em", color: "rgb(110,110,110)" }}>I am a Full Stack Developer.</div>
                        <div style={{ fontSize: "1.2rem", fontWeight: 400, marginTop: "1em", color: "rgb(110,110,110)" }}>
                            I'm a software engineer based in Mumbai specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.
                        </div>
                    </div>
                    <Button variant="outline-primary">
                        See Projects!
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Landing;