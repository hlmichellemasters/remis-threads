import { Form } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';
import { useState } from 'react';

const AdminChatRoomComponent = () => {
  const [toast1, setToast1] = useState(true);
  const [toast2, setToast2] = useState(true);

  const close1 = () => setToast1(false);
  const close2 = () => setToast2(false);
  return (
    <>
      <Toast show={toast1} onClose={close1} className="ms-4 mb-5">
        <Toast.Header>
          <strong className="me-auto">Chat with John Doe</strong>
        </Toast.Header>
        <Toast.Body>
          <div style={{ maxHeight: '400px', overflow: 'auto' }}>
            {Array.from({ length: 30 }).map((_, index) => (
              <>
                <p className="bg-primary p-3 ms-4 text-light rounded-pill">
                  <b>User wrote: </b>Hello, world! This is a chat message
                </p>
                <p>
                  <b>Admin wrote: </b>Hello, world! This is a chat message
                </p>
              </>
            ))}
          </div>
          <Form>
            <Form.Group className="mb-3 mt-3" controlId="message">
              <Form.Label>Write a message</Form.Label>
              <Form.Control
                name="message"
                as="textarea"
                rows={2}
                placeholder="Type your message here..."
                required={true}
              />
            </Form.Group>
          </Form>
        </Toast.Body>
      </Toast>

      <Toast show={toast2} onClose={close2} className="ms-4 mb-5">
        <Toast.Header>
          <strong className="me-auto">Chat with John Doe</strong>
        </Toast.Header>
        <Toast.Body>
          <div style={{ maxHeight: '400px', overflow: 'auto' }}>
            {Array.from({ length: 30 }).map((_, index) => (
              <>
                <p className="bg-primary p-3 ms-4 text-light rounded-pill">
                  <b>User wrote: </b>Hello, world! This is a chat message
                </p>
                <p>
                  <b>Admin wrote: </b>Hello, world! This is a chat message
                </p>
              </>
            ))}
          </div>
          <Form>
            <Form.Group className="mb-3 mt-3" controlId="message">
              <Form.Label>Write a message</Form.Label>
              <Form.Control
                name="message"
                as="textarea"
                rows={2}
                placeholder="Type your message here..."
                required={true}
              />
            </Form.Group>
          </Form>
        </Toast.Body>
      </Toast>
    </>
  );
};

export default AdminChatRoomComponent;
