import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap-icons/font/bootstrap-icons.css";
import InputGroup from "react-bootstrap/InputGroup";

const Navegation = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-navbar fixed-top">
        <Container>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            data-bs-theme="dark"
          />
            <Form inline>
            <Row>
              <Col xs="auto">
                <InputGroup >
                  <InputGroup.Text className="bg-lupa">
                    <i className="bi bi-search"></i>
                  </InputGroup.Text>

                  <Form.Control
                    type="text"
                    placeholder="Search..."
                    className=" bg-search"
                    
                  />
                </InputGroup>
              </Col>
            </Row>
          </Form>
          <Navbar.Collapse id="basic-navbar-nav">
        
            <Nav className="ms-auto text-end">
              <Nav.Link href="#link" className="text-light">
                <i className="bi bi-envelope-open-heart"></i>
              </Nav.Link>
              <Nav.Link href="#home" className="text-light position-relative">
                <i className="bi bi-cart"></i>
                <span className="position-absolute start-100 translate-middle badge rounded-pill bg-rosa ">
                  0
                </span>
              </Nav.Link>
              <Nav className="grouped-items text-end ms-3">
                <Nav.Link href="https://www.facebook.com/" className="text-light " target="_blank">
                  <i className="bi bi-facebook"></i>
                </Nav.Link>
                <Nav.Link href="https://ar.pinterest.com/" className="text-light" target="_blank">
                  <i className="bi bi-pinterest"></i>
                </Nav.Link>
                <Nav.Link href="https://www.tiktok.com/" className="text-light" target="_blank">
                  <i className="bi bi-tiktok"></i>
                </Nav.Link>
                <Nav.Link href="https://x.com/" className="text-light" target="_blank">
                  <i className="bi bi-twitter-x"></i>
                </Nav.Link>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navegation;
