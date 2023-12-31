import '../../chats.css';

const UserChatComponent = () => {
  return (
    <>
      <input type="checkbox" id="check" />
      <label className="chat-btn" htmlFor="check">
        <i className="bi bi-chat-dots comment"></i>
        <span className="position-absolute top-0 start-10 translate-middle p-2 bg-danger border border-light rounded-circle"></span>
        <i className="bi bi-x-circle close"></i>
      </label>
      <div className="chat-box">
        <div className="chat-box-header">
          <h6>Let&apos;s Chat</h6>
        </div>

        <div className="chat-form">
          <div className="chat-msg">
            {Array.from({ length: 20 }).map((_, id) => (
              <div key={id}>
                <p>
                  <b>You wrote:</b> Lorem ipsum dolor sit amet consectetur
                </p>
                <p className="bg-primary p-3 ms-4 text-light rounded-pill">
                  <b>Support wrote:</b> Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            ))}
          </div>

          <textarea
            id="clientChatMsg"
            className="form-control"
            placeholder="Type your message here..."
          ></textarea>

          <button className="btn btn-success btn-block">Send</button>
        </div>
      </div>
    </>
  );
};

export default UserChatComponent;
