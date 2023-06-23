import "./Chat.css";

import { BackIcon_messages } from "../../icons";

const Chat = ({ messageChat, setSection }) => {
  const onHandleClick = (sectionName) => setSection(sectionName);
  const changeClass = (cls) => {
    {
      if (cls === 0) {
        return "mine";
      } else {
        return "not__mine";
      }
    }
  };

  return (
    <>
      <div className="Chat">
        <div className="Chat__TopBar">
          <span
            className="Chat__Back"
            onClick={() => onHandleClick("messages")}
          >
            <BackIcon_messages />
          </span>
          <p className="Chat__Username">{messageChat.userName}</p>
        </div>

        <div className="Chat__Messages">
          {messageChat.chatMess.map((el) => (
            <p className={changeClass(el.id)}>{el.message}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Chat;
