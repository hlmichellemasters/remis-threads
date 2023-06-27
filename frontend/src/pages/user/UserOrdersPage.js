import { Col, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserOrdersPage = () => {
  return (
    <Row className="mt-5">
      <Col className="mx-auto" md={10}>
        <h1>Orders</h1>
        <Table striped bordered hover className="mt-5">
          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Date</th>
              <th>Total</th>
              <th>Delivered</th>
              <th>Order Details</th>
            </tr>
          </thead>
          <tbody>
            {['bi bi-check-lg text-success', 'bi bi-x-lg text-danger'].map(
              (item, index) => (
                <tr key="index">
                  <td>{index + 1}</td>
                  <td>Mark Twain</td>
                  <td>09/12/2023</td>
                  <td>$124</td>
                  <td>
                    <i className={item} />
                  </td>
                  <td>
                    <Link to="/user/order-details">Go to order</Link>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default UserOrdersPage;
