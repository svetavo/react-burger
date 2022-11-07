import { useEffect } from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ReactPortal from "../ReactPortal/ReactPortal";
import modalStyles from "./Modal.module.css";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import PropTypes from "prop-types";

function Modal({ children, isOpen, handleClose }) {
  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscapeKey = (e) => (e.key === "Escape" ? handleClose() : null);
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose, isOpen]);

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="react-modals">
      <ModalOverlay handleClose={handleClose}>
        <div
          className={`${modalStyles.modal__content} pb-15`}
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={handleClose} className={modalStyles.modal__close}>
            <CloseIcon />
          </button>
          {children}
        </div>
      </ModalOverlay>
    </ReactPortal>
  );
}

export default Modal;

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
};
