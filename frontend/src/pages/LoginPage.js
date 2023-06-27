import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const LoginPage = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Container>
      <Row className="mt-5">
        <Col md={6}>
          <h1>Login</h1>

          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter Email Address"
                name="email"
              />
              {/* <Form.Control.Feedback type="invalid">
                Please enter your email
              </Form.Control.Feedback> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Enter Password"
                name="password"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCheckbox">
              <Form.Check
                type="checkbox"
                name="doNotLogout"
                label="Keep me logged in"
              />
            </Form.Group>

            <Row className="pb-2">
              <Col>
                Don&apos;t have an account yet?{' '}
                <Link to="/register">Register</Link>
              </Col>
            </Row>
            <Button variant="primary" type="submit">
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Login
            </Button>
            <Alert show={true} variant="danger">
              Incorrect email or password
            </Alert>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
