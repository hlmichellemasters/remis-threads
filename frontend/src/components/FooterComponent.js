import { Container, Row, Col } from 'react-bootstrap';

const FooterComponent = () => {
  return (
    <footer className="footer">
      <Container fluid>
        <Row className="mt-5">
          <Col className="bg-dark text-white text-center py-5">
            All Rights Reserved 2023 &copy;Remi&apos;s Threads
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
