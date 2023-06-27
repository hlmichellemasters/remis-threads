import { Form } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating';

const RatingFilterComponent = () => {
  return (
    <>
      <span className="fw-bold">Rating: </span>
      {Array.from({ length: 5 }).map((_, index) => (
        <Form.Check key={index} type="checkbox" id={`check-api-${index}`}>
          <Form.Check.Input
            type="checkbox"
            isValid
            style={{ cursor: 'pointer' }}
          />
          <Form.Check.Label>
            <Rating
              readonly
              size={20}
              initialValue={5 - index}
              style={{ cursor: 'pointer' }}
            />
          </Form.Check.Label>
        </Form.Check>
      ))}
    </>
  );
};

export default RatingFilterComponent;
