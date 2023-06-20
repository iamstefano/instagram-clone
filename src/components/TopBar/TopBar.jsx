import "./TopBar.css";

import { InstaCamIcon, LogoIcon, DirectMessIcon, IGTVIcon } from "../../icons";

const TopBar = () => {
  const onHandleClick = (sectionName) => setSection(sectionName);

  return (
    <div className="TopBar">
      <div className="TopBar__Camera" onClick={() => onHandleClick("camera")}>
        <InstaCamIcon />
      </div>
      <div className="TopBar__MainLogo" onClick={() => onHandleClick("home")}>
        <LogoIcon />
      </div>

      <div className="TopBar__Functions">
        <div
          className="TopBar__Functions--tv"
          onClick={() => onHandleClick("tv")}
        >
          <IGTVIcon />
        </div>
        <div
          className="TopBar__Functions--msg"
          onClick={() => onHandleClick("messages")}
        >
          <DirectMessIcon />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
