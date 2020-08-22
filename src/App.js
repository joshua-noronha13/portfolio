import React from "react";
import "./App.css";
import SideBar from "./components/SideNav/SideNav"
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from "./components/Landing/Landing"
import MainNavbar from "./components/Navbar/Navbar"
import { Container, Card, Button, Row, Col } from "react-bootstrap"

function App() {
  
  return (
    <div>
      <MainNavbar/>
      <Landing />
      <SideBar />
      <Container>
        <Row>
          <Col sm="12" md="6" lg="4">
            <Card>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
      </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="12" md="6" lg="4">
            <Card>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
      </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="12" md="6" lg="4">
            <Card>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
      </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </div>

  );
}

export default App;
