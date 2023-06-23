import "./TabBar.css";

import {
  HomeIcon,
  SearchIcon,
  AddContentIcon,
  LikesIcon,
  ProfileIcon,
  TabBar__Bar,
} from "../../icons";

const TabBar = ({ setSection }) => {
  const onHandleClick = (sectionName) => setSection(sectionName);
  return (
    <div className="TabBar">
      <span onClick={() => onHandleClick("home")}>
        <HomeIcon />
      </span>
      <SearchIcon />
      <AddContentIcon />
      <LikesIcon />
      <ProfileIcon />
      <div className="TabBar__Bar">
        <TabBar__Bar />
      </div>
    </div>
  );
};

export default TabBar;
