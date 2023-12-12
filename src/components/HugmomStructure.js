import {
  hugmomStructure,
  hugmomWireFramePC,
  hugmomWireFrameM,
  hugmomUI,
} from "../assets/img/index";

import "assets/scss/main.scss";

const HugmomStructure = () => {
  return (
    <ul className="structure">
      <li>
        구조
        <div className="img_wrap">
          <img src={hugmomStructure} alt={"hugmom structure"} />
          <img src={hugmomUI} alt={"hugmom UI"} />
        </div>
      </li>
      <li className="ui">
        UI
        <div>
          <span>[PC]</span>
          <img src={hugmomWireFramePC} alt={"  hugmomWireFramePC"} />
          <span>[MOBILE]</span>
          <img src={hugmomWireFrameM} alt={"  hugmomWireFrameM"} />
        </div>
      </li>
    </ul>
  );
};

export default HugmomStructure;
