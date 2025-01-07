import Container from "react-bootstrap/esm/Container";
import Header from "../components/Header";
import regalo from "../assets/regalo.png";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import productoEstrella from "../assets/producto-estrella.jpg";
const Home = () => {
  return (
    <>
      <Header></Header>
      <Container className="bg-header mb-4" style={{ minHeight: "300px" }}>
        <Row className="h-100">
          <Col sm={12} md={6} lg={6}>
            <div className="recuadro-img p-2 margin-titulo d-flex justify-content-center w-75 mx-auto mb-5">
              <img
                src={productoEstrella}
                alt="producto estrella"
                className="img-fluid"
              />
            </div>
          </Col>
          <Col sm={12} md={6} lg={6} className="font-family-header d-flex ">
            <div className="w-75">
              <h2 className="fw-bold margin-titulo">
                {" "}
                <span className="color-yellow"> Let </span>
                <span className="color-pink">p</span>
                <span className="color-orange">a</span>
                <span className="color-yellow">n</span>
                <span className="color-aqua">d</span>
                <span className="color-lightPink">a</span>
                <span className="fontfamily-market"> market </span>
                <span className="color-aqua">
                  add joy to your daily routine!{" "}
                </span>
              </h2>
              <button className="btn-pink lead fs-6 px-4 py-2 my-5">
                Learn More
              </button>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="hr-pink" fluid>
        <Container className="text-center mt-2 my-4">
          <Row>
            <Col sm={12} md={4} lg={4}>
              {" "}
              <img
                src={regalo}
                alt="regalo"
                className="img-fluid img-present my-4"
              />
            </Col>
            <Col sm={12} md={4} lg={4} >
              <h4 className="text-light fw-semibold mt-4">a special gift</h4>
              <h4 className="fw-semibold color-pink">for you!</h4>
              <p className="text-light fw-semibold">
              Subscribe and receive a free guide with tips to create &apos;cute&apos; spaces and organize with style✨
              </p>
       </Col>
            <Col sm={12} md={4} lg={4}>
              <h5 className="fontfamily-market fw-bold my-4 ">subscribe</h5>
              <Form>
              <Form.Control type="email" placeholder="Enter email" className="form-subscribe"/>
              <Button className="btn-pink rounded-0 w-100 mt-3 mx-auto">
                Submit
              </Button>
              </Form>
          
            </Col>
          </Row>
        </Container>
        <div className="d-flex justify-content-center"></div>
      </Container>
    </>
  );
};

export default Home;
