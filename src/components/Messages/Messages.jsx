import "./Messages.css";

import Message from "../Message";
import SearchBar from "../SearchBar";

import {
  BackIcon_messages,
  AddIcon_messages,
  AccountsListIcon_messages,
} from "../../icons";

/* useEffect(() => {
  GET("https://api.npoint.io/45615d0ddef177eef95b").then((res) =>
    setMessages(res.messageList)
  );
}, []); */

const Messages = ({ messages, setSection, handleMessage }) => {
  const onHandleClick = (sectionName) => setSection(sectionName);

  return (
    <div className="Messages">
      <div className="Messages__TopBar">
        <span onClick={() => onHandleClick("home")}>
          <BackIcon_messages />
        </span>

        <span className="Messages__TopBar__Name">
          StefanoA <AccountsListIcon_messages />
        </span>

        <span>
          <AddIcon_messages />
        </span>
      </div>

      <div className="Messages__SearchBar">
        <SearchBar />
        <input type="search" id="searchBar" placeholder="Search" />
      </div>

      <ul className="Messages__Container">
        {messages?.map((message) => (
          <li className="Message__Item" key={message.id}>
            <Message
              message={message}
              handleMessage={handleMessage}
              setSection={setSection}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Messages;
