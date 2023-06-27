import Carousel from 'react-bootstrap/Carousel';
import { LinkContainer } from 'react-router-bootstrap';

const ProductCarouselComponent = () => {
  const cursorPointer = {
    cursor: 'pointer',
  };

  return (
    <Carousel>
      <Carousel.Item>
        <img
          crossOrigin="anonymous" // following images will be deleted and loaded dynamically so just need this once
          style={{ height: '300px', objectFit: 'cover' }}
          className="d-block w-100"
          src="/images/carousel/carousel-1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <LinkContainer to="/product-details" style={cursorPointer}>
            <h3>Bestseller in Laptops Category</h3>
          </LinkContainer>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: '300px', objectFit: 'cover' }}
          className="d-block w-100"
          src="/images/carousel/carousel-2.png"
          crossOrigin="anonymous"
          alt="Second slide"
        />

        <Carousel.Caption>
          <LinkContainer to="/product-details" style={cursorPointer}>
            <h3>Bestseller in Books Category</h3>
          </LinkContainer>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: '300px', objectFit: 'cover' }}
          className="d-block w-100"
          src="/images/carousel/carousel-3.png"
          crossOrigin="anonymous"
          alt="Third slide"
        />

        <Carousel.Caption>
          <LinkContainer to="/product-details" style={cursorPointer}>
            <h3>Bestseller in Cameras Category</h3>
          </LinkContainer>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarouselComponent;
