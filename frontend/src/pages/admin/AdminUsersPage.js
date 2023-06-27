import { Col, Row, Table, Button } from 'react-bootstrap';
import AdminLinksComponent from '../../components/admin/AdminLinksComponent';
import { LinkContainer } from 'react-router-bootstrap';

const AdminUsersPage = () => {
  const deleteHandler = () => {
    if (window.confirm('Are you sure?')) alert('User deleted');
  };

  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinksComponent />
      </Col>
      <Col className="mx-auto" md={10}>
        <h1>Users</h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Email</th>
              <th>Is admin?</th>
              <th>Edit / Delete</th>
            </tr>
          </thead>
          <tbody>
            {['bi bi-check-lg text-success', 'bi bi-x-lg text-danger'].map(
              (item, index) => (
                <tr key="index">
                  <td>{index + 1}</td>
                  <td>Mark</td>
                  <td>Twain</td>
                  <td>mark.twain@email.com</td>
                  <td>
                    <i className={item}></i>
                  </td>
                  <td>
                    <LinkContainer to="/admin/edit-user/1">
                      <Button className="btn-sm">
                        <i className={'bi bi-pencil-square'} />
                      </Button>
                    </LinkContainer>
                    {' / '}
                    <Button
                      className="btn-sm"
                      onClick={deleteHandler}
                      variant="danger"
                    >
                      <i className={'bi bi-x-circle'} />
                    </Button>
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

export default AdminUsersPage;
