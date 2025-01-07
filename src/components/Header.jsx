import Container from "react-bootstrap/esm/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logoPanda from "../assets/panda.png";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import productoEstrella from "../assets/producto-estrella.jpg"
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
      <div className="hr-pink p-2"></div>

      <Container className="bg-header mb-4" style={{ minHeight: "300px" }}>
        <Row className="h-100">
          <Col sm={12} md={6} lg={6}>
            <div className="recuadro-img p-2 margin-titulo d-flex justify-content-center w-75 mx-auto mb-5">
<img src={productoEstrella} alt="producto estrella" className="img-fluid" />
            </div>
          </Col>
          <Col sm={12} md={6} lg={6} className="font-family-header d-flex ">
            <div className="w-75">
              <h2 className="fw-bold margin-titulo">
                {" "}
                <span className="color-yellow"> Let  </span>
                <span className="color-pink">p</span>
                <span className="color-orange">a</span>
                <span className="color-yellow">n</span>
                <span className="color-aqua">d</span>
                <span className="color-lightPink">a</span>
                <span className="fontfamily-market"> market </span>  
                <span className="color-aqua">add joy to your daily routine! </span>
              </h2>
              <button className="btn-pink lead fs-6 px-4 py-2 my-5" >Learn More</button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
