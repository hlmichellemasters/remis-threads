import { Form } from 'react-bootstrap';

const AttributesFilterComponent = () => {
  return (
    <>
      {[
        { color: ['red', 'green', 'blue'] },
        { size: ['small', 'medium', 'large'] },
      ].map((item, index) => (
        <div key={index} className="mb-3">
          <Form.Label>
            <b>{Object.keys(item)}</b>
          </Form.Label>
          {item[Object.keys(item)].map((item2, index2) => (
            <Form.Check
              key={index2}
              type="checkbox"
              id="default-checkbox"
              label={item2}
              // TODO: fix cursor pointer and selection of proper item
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default AttributesFilterComponent;
