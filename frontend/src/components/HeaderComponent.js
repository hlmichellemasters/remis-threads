import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Dropdown,
  DropdownButton,
  Badge,
  Button,
  InputGroup,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand href="/">REMI&apos;S THREADS</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <InputGroup size="sm">
              <DropdownButton
                id="dropdown-basic-button"
                title="All"
                menuVariant="dark"
                size="sm"
              >
                <Dropdown.Item style={{ fontSize: '14px' }}>
                  Tanks
                </Dropdown.Item>
                <Dropdown.Item style={{ fontSize: '14px' }}>
                  Shirts
                </Dropdown.Item>
                <Dropdown.Item style={{ fontSize: '14px' }}>Mugs</Dropdown.Item>
              </DropdownButton>
              <Form.Control type="text" placeholder="Search shop" />
              <Button variant="warning">
                <i className="bi bi-search text-dark"></i>
              </Button>
            </InputGroup>
          </Nav>

          <Nav>
            <LinkContainer to="/admin/orders">
              <Nav.Link>
                Admin
                <span className="position-absolute top-1 start-10 translate-middle p-2 bg-danger border border-light rounded-circle"></span>
              </Nav.Link>
            </LinkContainer>
            <Nav.Link href="#pricing">Pricing</Nav.Link>

            <NavDropdown
              title="John Doe"
              id="collasible-nav-dropdown"
              menuVariant="dark"
            >
              <NavDropdown.Item
                as={Link}
                eventKey="/user/orders"
                to="/user/orders"
              >
                Orders
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} eventKey="/user" to="/user">
                Profile
              </NavDropdown.Item>

              <NavDropdown.Item>Logout</NavDropdown.Item>
            </NavDropdown>
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/register">
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/cart">
              <Nav.Link>
                <Badge pill bg="danger">
                  2
                </Badge>
                <i className="bi bi-cart-dash"></i>
                <span className="ms-1">Cart </span>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;
