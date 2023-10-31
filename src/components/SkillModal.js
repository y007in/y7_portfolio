import { FaRegTimesCircle } from "react-icons/fa";
import "../assets/scss/SkillModal.scss";

const SkillModal = ({ des, skill }) => {
  return (
    <div className="overlay">
      <div className="des_mobile">
        <FaRegTimesCircle fill="white" />
        <span className="modal_skill_title">{skill}</span>
        <ul>{des}</ul>
      </div>
    </div>
  );
};

export default SkillModal;
