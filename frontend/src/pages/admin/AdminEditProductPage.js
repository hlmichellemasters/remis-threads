import {
  Container,
  Row,
  Col,
  Form,
  CloseButton,
  Table,
  Alert,
  Image,
  Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const AdminEditProductPage = () => {
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

  const onHover = {
    cursor: 'pointer',
    position: 'absolute',
    left: '5px',
    top: '-10px',
    transform: 'scale(2)',
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md={1}>
          <Link to="/admin/products" className="btn btn-info my-3">
            Back
          </Link>
        </Col>
        <Col md={6}>
          <h1>Edit Product</h1>
          <Form novalidat validated={validated} onSubmit={submitHandler}>
            <Form.Group controlId="name" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="product name"
                required
                defaultValue="Samsung 65' 4K Smart TV"
              />
            </Form.Group>

            <Form.Group controlId="description" className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                type="text"
                as="textarea"
                rows={3}
                required
                defaultValue="Samsung 65' 4K Smart TV"
              />
            </Form.Group>

            <Form.Group controlId="count" className="mb-3">
              <Form.Label>Stock count</Form.Label>
              <Form.Control
                name="stock"
                type="number"
                required
                defaultValue={5}
              />
            </Form.Group>

            <Form.Group controlId="price" className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                name="price"
                type="text"
                required
                defaultValue="$699"
              />
            </Form.Group>

            <Form.Group controlId="category" className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select
                name="category"
                type="select"
                aria-label="Default select example"
                required
              >
                <option value="">Select category</option>
                <option value="1">TV</option>
                <option value="2">Laptops</option>
                <option value="3">Games</option>
              </Form.Select>
            </Form.Group>

            <Row className="mt-4">
              <Col md={6}>
                <Form.Group className="mb-3" controlId="attributes">
                  <Form.Label>Choose attribute</Form.Label>
                  <Form.Select
                    name="attributes"
                    aria-label="Default select example"
                  >
                    <option value="">Select attribute</option>
                    <option value="1">Size</option>
                    <option value="2">Color</option>
                    <option value="3">Weight</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="attributeValue">
                  <Form.Label>Attribute value</Form.Label>
                  <Form.Select
                    name="attributeValue"
                    aria-label="Default select example"
                  >
                    <option value="">Set attribute value</option>
                    <option value="1">1</option>
                    <option value="2">5</option>
                    <option value="3">10</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Table className="mt-3" hover>
                <thead>
                  <tr>
                    <th>Attribute</th>
                    <th>Value</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>attrKey</td>
                    <td>attrVal</td>
                    <td>
                      <CloseButton />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group controlId="newAttribute" className="mb-3 mt-3">
                  <Form.Label>New attribute</Form.Label>
                  <Form.Control
                    name="newAttribute"
                    type="text"
                    placeholder="first choose category for attribute"
                    disabled={false}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="newAttributeValue" className="mb-3 mt-3">
                  <Form.Label>Attribute value</Form.Label>
                  <Form.Control
                    name="newAttributeValue"
                    type="text"
                    placeholder="first choose category for attribute"
                    disabled={false}
                    required={true}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Alert variant="primary">
              After typing attribute and value press enter on one of the fields
            </Alert>

            <Form.Group controlId="image" className="mb-3 mt-5">
              <Form.Label>Images</Form.Label>
              <Row>
                <Col style={{ position: 'relative' }} xs={3}>
                  <Image
                    src="/images/monitors-category.png"
                    crossOrigin="anonymous"
                    rounded
                    fluid
                  />
                  <i className="bi bi-x text-danger" style={onHover}></i>
                </Col>
              </Row>
              <Form.Control type="file" required multiple />
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

export default AdminEditProductPage;
