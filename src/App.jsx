import { useState, useEffect } from "react";
import "./App.css";

/* Data */
import { storiesData } from "./mocks/stories";
import { userData } from "./mocks/user";
import { postsData } from "./mocks/posts";

/* Components */
import TopBar from "./components/TopBar";
import Stories from "./components/Stories";
import Posts from "./components/Posts";
import Camera from "./components/Camera/Camera";
import TabBar from "./components/TabBar";

function App() {
  const [section, setSection] = useState("home");

  const [stories, setStories] = useState(storiesData);
  const [user, setUser] = useState(userData);
  const [posts, setPosts] = useState(postsData);

  useEffect(() => {
    fetch("https://api.npoint.io/c59d0538fafba6432ffe")
      .then((res) => res.json())
      .then((data) => setPosts(data));
    // console.log("UseEffect");
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
        return <h1>IGTV</h1>;
      case "messages":
        return <h1>DIRECT MESS</h1>;
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
