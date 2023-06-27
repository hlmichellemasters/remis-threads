import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { useState } from 'react';

const UserProfilePage = () => {
  const [validated, setValidated] = useState(false);

  const onPasswordChange = () => {
    const password = document.querySelector('input[name=password]');
    const repeatPassword = document.querySelector('input[name=repeatPassword]');
    if (password.value !== repeatPassword.value) {
      repeatPassword.setCustomValidity("Passwords Don't Match");
    } else repeatPassword.setCustomValidity('');
  };

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
          <h1>Register</h1>

          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                defaultValue="John"
                name="firstName"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                defaultValue="Snow"
                name="lastName"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                name="phone"
                defaultValue=""
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                disabled
                placeholder="john.snow@gmail.com if you want to change email, remove account and create a new one with the new email address"
                name="email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your shipping address"
                name="phone"
                defaultValue=""
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your city"
                name="city"
                defaultValue=""
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formState">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your state"
                name="state"
                defaultValue=""
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formZip">
              <Form.Label>Zip code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your zip code"
                name="zip"
                defaultValue=""
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCountry">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your country"
                name="country"
                defaultValue=""
              />
            </Form.Group>

            <div className="mt-5 mb-3">
              <h3> Reset your password</h3>
            </div>
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

            <Button variant="primary" type="submit">
              Update
            </Button>
            <Alert show={true} variant="info">
              User updated!
            </Alert>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfilePage;
