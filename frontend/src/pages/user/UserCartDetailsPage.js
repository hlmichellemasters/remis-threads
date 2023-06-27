import {
  Col,
  Row,
  Container,
  Alert,
  Form,
  ListGroup,
  Button,
} from 'react-bootstrap';
import CartItemComponent from '../../components/CartItemComponent';

const UserCartDetailsPage = () => {
  return (
    <Container fluid>
      <Row className="mt-4">
        <h1>Cart Details</h1>
        <Col md={8}>
          <br />
          <Row>
            <Col md={6}>
              <h2>Shipping</h2>
              <b>Name</b>: John Doe <br />
              <b>Address</b>: 123 Main St, New York, NY 10030 <br />
              <b>Phone</b>: 123-456-7890 <br />
            </Col>
            <Col md={6}>
              <h2>Payment Method</h2>
              <Form.Select>
                <option value="paypal">PayPal</option>
                <option value="stripe">Stripe</option>
              </Form.Select>
            </Col>
            <Row>
              <Col>
                <Alert className="mt-3" variant="danger">
                  Not delivered. In order to make order, fill out your profile
                  with shipping address and phone number.
                </Alert>
              </Col>
              <Col>
                <Alert className="mt-3" variant="success">
                  Not paid yet
                </Alert>
              </Col>
            </Row>
          </Row>
          <br />
          <h2>Order Items</h2>
          <ListGroup variant="flush">
            {Array.from({ length: 3 }).map((_, index) => (
              <CartItemComponent key={index} />
            ))}
          </ListGroup>
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroup.Item>
              <h3>Order Summary</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Items price (after tax): <span className="fw-bold">$35</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Shipping price: <span className="fw-bold">$8</span>
            </ListGroup.Item>
            <ListGroup.Item className="text-danger">
              Total price: <span className="fw-bold">$43</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="d-grid gap-2">
                <Button size="lg" variant="danger">
                  Pay
                </Button>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default UserCartDetailsPage;
