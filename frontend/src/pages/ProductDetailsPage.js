import {
  Col,
  Container,
  ListGroup,
  Row,
  Form,
  Button,
  Alert,
} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { Rating } from 'react-simple-star-rating';
import ImageZoom from 'js-image-zoom';
import { useEffect } from 'react';
import AddedToCartMessageComponent from '../components/AddedToCartMessageComponent';

const ProductDetailsPage = () => {
  var options = {
    // width: 400,
    // zoomWidth: 500,
    // fillContainer: true,
    // zoomPosition: 'bottom',
    scale: 2,
    offset: { vertical: 0, horizontal: 0 },
  };
  useEffect(() => {
    new ImageZoom(document.getElementById('first'), options);
    new ImageZoom(document.getElementById('second'), options);
    new ImageZoom(document.getElementById('third'), options);
    new ImageZoom(document.getElementById('fourth'), options);
  });

  return (
    <Container>
      <AddedToCartMessageComponent />
      <Row className="mt-5">
        <Col style={{ zIndex: 1 }} md={4}>
          <div id="first">
            <Image
              fluid
              crossOrigin="anonymous"
              src="/images/games-category.png"
              alt="games category"
            />
          </div>
          <div id="second">
            {' '}
            <Image
              fluid
              crossOrigin="anonymous"
              src="/images/monitors-category.png"
              alt="monitors category"
            />
          </div>
          <div id="third">
            {' '}
            <Image
              fluid
              crossOrigin="anonymous"
              src="/images/tablets-category.png"
              alt="tablets category"
            />
          </div>
          <div id="fourth">
            {' '}
            <Image
              fluid
              crossOrigin="anonymous"
              src="/images/games-category.png"
              alt="games category"
            />
          </div>
        </Col>
        <Col md={8}>
          <Row>
            {' '}
            <Col md={8}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h1>Product Name</h1>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating readonly size={20} initialValue={4} /> (5)
                </ListGroup.Item>
                <ListGroup.Item>
                  Price <span className="fw-bold">$35</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  Morbi leo risuse mofds fdsjfds fgoiewrjh fdsoijas
                  fdsfdsjfdskljfdsklfjdskl fdsfdsj fdsfdewi fdfdid wfcdsjf
                  wsfdsif{' '}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={4}>
              <ListGroup>
                <ListGroup.Item>Status: In Stock</ListGroup.Item>
                <ListGroup.Item>
                  Price <span className="fw-bold">$35</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  Quantity:
                  <Form.Select size="md" aria-label="Default select example">
                    <option>1</option>
                    <option value="1">2</option>
                    <option value="2">3</option>
                    <option value="3">4</option>
                  </Form.Select>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button variant="danger">Add to Cart</Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row>
            {' '}
            <Col className="mt-5">
              <h5>REVIEWS</h5>
              <ListGroup variant="flush">
                {Array.from({ length: 5 }).map((item, idx) => (
                  <ListGroup.Item key={idx}>
                    John Doe <br />
                    <Rating readonly size={20} initialValue={4} />
                    <br />
                    20-09-2001 <br />
                    Porta ac consectetur ac Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Perferendis, illo.
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>{' '}
          </Row>
          <hr />
          send review form
          <Alert variant="danger">Login first to write a review</Alert>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Write a review</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Select aria-label="Default select example">
              <option>Your rating</option>
              <option value="5">5 (very good)</option>
              <option value="4">4 (good)</option>
              <option value="3">3 (average)</option>
              <option value="2">2 (bad)</option>
              <option value="1">1 (terrible)</option>
            </Form.Select>
            <Button className="mb-3 mt-3" variant="primary">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailsPage;
