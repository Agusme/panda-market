import Container from "react-bootstrap/esm/Container";
import Header from "../components/Header";
import regalo from "../assets/regalo.png";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const Home = () => {
  return (
    <>
      <Header></Header>
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
