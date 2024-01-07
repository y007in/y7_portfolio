import {
  hugmomStructure,
  hugmomWireFramePC,
  hugmomWireFrameM,
  hugmomUI,
} from "../assets/img/index";

import "assets/scss/main.scss";

const HugmomStructure = () => {
  return (
    <ul className="hugmomStructure">
      <li>
        <h1 className="project_subTitle">구조</h1>
        <div className="img_wrap">
          <img src={hugmomStructure} alt={"hugmom structure"} />
          <img src={hugmomUI} alt={"hugmom UI"} />
        </div>
      </li>
      <li className="ui">
        <h1 className="project_subTitle">UI</h1>
        <div>
          <h2 className="structureSubTitle">[PC]</h2>
          <img src={hugmomWireFramePC} alt={"HugMomWireFramePC"} />
          <h2 className="structureSubTitle">[MOBILE]</h2>
          <img src={hugmomWireFrameM} alt={"HugMomWireFrameMobile"} />
        </div>
      </li>
    </ul>
  );
};

export default HugmomStructure;
