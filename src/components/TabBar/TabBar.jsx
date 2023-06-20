import "./TabBar.css";

import {
  HomeIcon,
  SearchIcon,
  AddContentIcon,
  LikesIcon,
  ProfileIcon,
  TabBar__Bar,
} from "../../icons";

const TabBar = () => {
  return (
    <div className="TabBar">
      <HomeIcon />
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
