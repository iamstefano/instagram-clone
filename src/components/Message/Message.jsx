import "./Message.css";
import { Camera_message } from "../../icons";

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
            <p className="Message__text">{message.message}</p>
          </div>
        </div>

        <div className="Message__Date">
          <p className="Message__date">{message.date}</p>
        </div>

        <div className="Message__Camera">
          <Camera_message />
        </div>
      </div>
    </>
  );
};

export default Message;
