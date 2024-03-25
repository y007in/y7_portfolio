import { motion } from "framer-motion";
import { FaRegTimesCircle } from "react-icons/fa";
import "assets/scss/main.scss";

const SkillModal = ({ des, skill }) => {
  return (
    <motion.div className="overlay">
      <motion.div className="des_mobile">
        <FaRegTimesCircle />
        <span className="modal_skill_title">{skill}</span>
        <ul>{des}</ul>
      </motion.div>
    </motion.div>
  );
};

export default SkillModal;
