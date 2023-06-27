import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const RegisterPage = () => {
  const [validated, setValidated] = useState(false);

  const onPasswordChange = () => {
    const password = document.querySelector('input[name=password]');
    const repeatPassword = document.querySelector('input[name=repeatPassword]');
    if (password.value !== repeatPassword.value) {
      repeatPassword.setCustomValidity("Passwords Don't Match");
    } else repeatPassword.setCustomValidity('');
  };

  const handleSubmit = () => {
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
          <h1>Register</h1>

          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                name="firstName"
              />
              <Form.Control.Feedback type="invalid">
                Please enter your first name
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                name="lastName"
              />
              <Form.Control.Feedback type="invalid">
                Please enter your last name
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter Email Address"
                name="email"
              />
              <Form.Control.Feedback type="invalid">
                Please enter your email
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Enter a Password"
                name="password"
                minLength={6}
                onChange={onPasswordChange}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid password
              </Form.Control.Feedback>
              <Form.Text className="text-muted">
                Password must be at least 6 characters long
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formRepeatPassword">
              <Form.Label>Repeat Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Repeat Password"
                name="repeatPassword"
                minLength={6}
                onChange={onPasswordChange}
              />
              <Form.Control.Feedback type="invalid">
                Passwords should match
              </Form.Control.Feedback>
            </Form.Group>

            <Row className="pb-2">
              <Col>
                Do you have an account already?
                <Link to="/login">Login</Link>
              </Col>
            </Row>
            <Button type="submit">
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Submit
            </Button>
            <Alert show={true} variant="danger">
              A user with that email already exists!
            </Alert>
            <Alert show={true} variant="info">
              User created!
            </Alert>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
