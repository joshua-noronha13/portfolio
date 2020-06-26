import React from "react";
import "./landing.css"
import { Container, Row, Col } from "react-bootstrap"
import PrimaryButton from "../BasicComponents/PrimaryButton"

function Landing() {
    return (
        <Container id="landing-container">
            <Row>
                <Col>
                    <div>
                        <div id="preface">Hi, my name is</div>
                        <div id="title">Joshua Noronha.</div>
                        <div id="subtitle">I am a Full Stack Developer.</div>
                        <div id="title-text">
                            I'm a software engineer based in Mumbai specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.
                        </div>
                    </div>
                    <PrimaryButton text="See Projects!"/>
                </Col>
            </Row>
        </Container>
    )
}

export default Landing;