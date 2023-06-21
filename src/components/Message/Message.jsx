import "./Message.css";
import { Avatar_message } from "../../icons";

const Message = ({ message }) => {
  return (
    <>
      <div className="Message">
        <img
          src={message.userImage}
          alt="user profile image"
          className="Message__Image"
        />

        <div className="Message__Info">
          <p>{message.userName}</p>

          <div className="Message__Info__bottom">
            <p className="Message__IB__text">{message.message}</p>
            <p className="Message__IB__date">{message.date}</p>
          </div>
        </div>

        <div className="Message__Photo">
          <Avatar_message />
        </div>
      </div>
    </>
  );
};

export default Message;
