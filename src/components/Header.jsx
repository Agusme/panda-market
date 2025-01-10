import Container from "react-bootstrap/esm/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logoPanda from "../assets/panda.png";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="mt-5 bg-body-tertiary">
        <Container className="p-0">
          <Container>
            <Row>
              <Col sm={12} md={6} lg={6}>
                <Navbar.Brand href="#home">
                  <div className="d-flex justify-content-center mt-2">
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
                  <div className="d-flex justify-content-between ">
                    <Link to={"/"} className="text-decoration-none link-header me-1">HOME </Link>
                    <Link to={"/about"}  className="text-decoration-none  link-header me-1">ABOUT</Link>
                    <Link href="#link"  className="text-decoration-none  link-header me-1">OFFERS</Link>
                    <Link href="#link"  className="text-decoration-none link-header">CONTACT US</Link>
                  </div>
                </Nav>
              </Col>
            </Row>
          </Container>
        </Container>
      </Navbar>
      <div className="hr-pink p-2"></div>

   
    </>
  );
};

export default Header;
