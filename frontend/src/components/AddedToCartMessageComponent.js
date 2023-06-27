import { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

function AlertDismissible() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert
        show={show}
        dismissable
        variant="success"
        onClose={() => setShow(false)}
      >
        <Alert.Heading>The product was added to your cart</Alert.Heading>
        <p>
          <Button variant="success">Go back </Button>{' '}
          <Button variant="danger">Go to cart</Button>{' '}
        </p>
        {/* <hr /> */}
        {/* <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
        </div> */}
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </>
  );
}

export default AlertDismissible;
