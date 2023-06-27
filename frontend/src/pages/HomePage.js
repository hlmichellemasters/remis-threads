import ProductCarouselComponent from '../components/ProductCarouselComponent';
import CategoryCardComponent from '../components/CategoryCardComponent';
import { Row, Container } from 'react-bootstrap';

const HomePage = () => {
  const categories = [
    'Tablets',
    'Laptops',
    'Cameras',
    'Headphones',
    'Books',
    'Smartphones',
  ];
  return (
    <>
      <ProductCarouselComponent />
      <Container>
        <Row xs={1} md={2} className="g-4 mt-5">
          {categories.map((category, index) => (
            <CategoryCardComponent
              key={index}
              category={category}
              index={index}
            />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
