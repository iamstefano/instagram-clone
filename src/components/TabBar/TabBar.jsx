import "./TabBar.css";

import {
  HomeIcon,
  SearchIcon,
  AddContentIcon,
  HearthIcon,
  ProfileIcon,
} from "../../icons";

const TabBar = () => {
  return (
    <div className="TabBar">
      <HomeIcon />
      <SearchIcon />
      <AddContentIcon />
      <HearthIcon />
      <ProfileIcon />
    </div>
  );
};

export default TabBar;
