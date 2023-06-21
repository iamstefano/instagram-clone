import { useState, useEffect } from "react";
import "./App.css";

/* Data */
import { storiesData } from "./mocks/stories";
import { userData } from "./mocks/user";
import { postsData } from "./mocks/posts";
import { messagesData } from "./mocks/messages";

/* Components */
import TopBar from "./components/TopBar";
import Stories from "./components/Stories";
import Posts from "./components/Posts";
import Camera from "./components/Camera/Camera";
import TabBar from "./components/TabBar";
import Messages from "./components/Messages";

function App() {
  const [section, setSection] = useState("home");

  const [stories, setStories] = useState(storiesData);
  const [user, setUser] = useState(userData);
  const [posts, setPosts] = useState(postsData);
  const [messages, setMessages] = useState(messagesData);

  /* POSTS FETCH*/
  useEffect(() => {
    fetch("https://api.npoint.io/8ff413d650de87b834eb")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  /* STORIES FETCH*/
  useEffect(() => {
    fetch("https://api.npoint.io/81fd1c31dbaa8b3db363")
      .then((res) => res.json())
      .then((data) => setStories(data));
  }, []);

  /* MESSAGES FETCH*/
  useEffect(() => {
    fetch("https://api.npoint.io/d8a6a8d1aae08f13d84a")
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);

  const onSectionRender = () => {
    switch (section) {
      case "home":
        return (
          <>
            <Stories user={user} stories={stories} />
            <Posts posts={posts} />
          </>
        );
      case "camera":
        return <Camera />;
      case "tv":
        return <h1>IGTV here</h1>;
      case "messages":
        return <Messages messages={messages} />;
    }
  };

  return (
    <>
      <TopBar setSection={setSection} />
      {onSectionRender()}
      <TabBar />
    </>
  );
}

export default App;
