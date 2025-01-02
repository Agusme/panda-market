import Container from "react-bootstrap/esm/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logoPanda from "../assets/panda.png";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="mt-5 bg-body-tertiary">
        <Container className="p-0">
          <Container>
            <Row>
              <Col sm={12} md={6} lg={6}>
                <Navbar.Brand href="#home">
                  <div className="ms-5">
                    <img
                      src={logoPanda}
                      alt="Logo de Panda Market"
                      className="img-fluid logo-size "
                    />
                  </div>
                </Navbar.Brand>
              </Col>
              <Col sm={12} md={6} lg={6}>
                <Nav className="me-auto font-family-header fw-bold mt-5 ">
                  <div className="d-flex justify-content-between">
                    <Nav.Link href="#home">HOME</Nav.Link>
                    <Nav.Link href="#link">ABOUT</Nav.Link>
                    <Nav.Link href="#link">OFFERS</Nav.Link>
                    <Nav.Link href="#link">CONTACT US</Nav.Link>
                  </div>
                </Nav>
              </Col>
            </Row>
          </Container>
       
        </Container>
  
      </Navbar>
      <div className="hr-pink p-2">

</div>
    </>
  );
};

export default Header;
