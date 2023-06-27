import { Card, Button, Col, Row } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating';
import { LinkContainer } from 'react-router-bootstrap';

const ProductForListComponent = ({ images, index }) => {
  return (
    <Card style={{ marginTop: '30px', marginBottom: '50px' }}>
      <Row>
        <Col lg={5}>
          <Card.Img
            variant="top"
            src={'/images/' + images[index] + '-category.png'}
            crossOrigin="anonymous"
          />
        </Col>
        <Col lg={7}>
          <Card.Body>
            <Card.Title>Product Name</Card.Title>
            <Card.Text>
              Product description goes here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Donec euismod, nisl eget aliquam
              ultricies, nunc sapien aliquet urna, eget aliquam velit nunc eget
              nunc. Donec euismod, nisl eget aliquam ultricies, nunc sapien
              aliquet urna, eget aliquam velit nunc eget nunc.
            </Card.Text>
            <Card.Text>
              <Rating readonly size={20} initialValue={5} /> (1)
            </Card.Text>
            <Card.Text className="h4">
              $124
              <LinkContainer to="/product-details">
                <Button variant="primary">See Product</Button>
              </LinkContainer>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductForListComponent;
