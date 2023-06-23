import "./Message.css";
import { Camera_message } from "../../icons";

const Message = ({ message, setSection, handleMessage }) => {
  const onHandleClick = (sectionName) => setSection(sectionName);
  const onHandleClickMessage = () => {
    const messageChat = message;
    handleMessage(messageChat);
  };

  return (
    <>
      <div className="Message" onClick={() => onHandleClickMessage()}>
        <img
          src={message.userImage}
          alt="user profile image"
          className="Message__Img"
        />

        <div className="Message__Info" onClick={() => onHandleClick("chat")}>
          <p>{message.userName}</p>

          <div className="Message__MainText">
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
