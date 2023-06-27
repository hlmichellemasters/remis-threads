import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const AdminEditUserPage = () => {
  const [validated, setValidated] = useState(false);

  const submitHandler = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setValidated(true);
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md={1}>
          <Link to="/admin/products" className="btn btn-info my-3">
            Back to Users
          </Link>
        </Col>
        <Col md={6}>
          <h1>Edit User</h1>
          <Form novalidate validated={validated} onSubmit={submitHandler}>
            <Form.Group controlId="firstName" className="mb-3">
              <Form.Label>First name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                required
                defaultValue="Sammy"
              />
            </Form.Group>

            <Form.Group controlId="lastName" className="mb-3">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                name="lastName"
                type="text"
                required
                defaultValue="Smith"
              />
            </Form.Group>

            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                required
                defaultValue="sammy.smith@email.com"
              />
            </Form.Group>

            <Form.Group controlId="adminCheckbox" className="mb-3">
              <Form.Check name="isAdmin" type="checkbox" label="Admin" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Update
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminEditUserPage;
