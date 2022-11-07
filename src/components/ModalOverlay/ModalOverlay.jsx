import modalOverlayStyles from "./ModalOverlay.module.css";
import PropTypes from "prop-types";

export default function ModalOverlay({ children, handleClose }) {
  return (
    <div className={modalOverlayStyles.modal__overlay} onClick={handleClose}>
      {children}
    </div>
  );
}

ModalOverlay.propTypes = {
  handleClose: PropTypes.func.isRequired,
};
