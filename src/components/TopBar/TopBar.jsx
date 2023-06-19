import "./TopBar.css";

import { InstaCamIcon, LogoIcon, DirectMessIcon, IGTVIcon } from "../../icons";

const TopBar = () => {
  return (
    <div className="TopBar">
      <div className="TopBar__InstaCamIcon">
        <InstaCamIcon />
      </div>
      <div className="TopBar__MainLogo">
        <LogoIcon />
      </div>

      <div className="TopBar__Functions">
        <IGTVIcon />
        <DirectMessIcon />
      </div>
    </div>
  );
};

export default TopBar;
