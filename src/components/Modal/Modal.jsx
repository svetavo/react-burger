import { useEffect } from "react";
import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import modalStyles from "./Modal.module.css";
import ModalOverlay from "./ModalOverlay/ModalOverlay";
import PropTypes from "prop-types";

function Modal({ children, isOpen, handleClose, title }) {
  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscapeKey = (e) => (e.key === "Escape" ? handleClose() : null);
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose, isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <ModalOverlay handleClose={handleClose}>
        <div
          className={`${modalStyles.modal__content} pb-15`}
          onClick={(e) => e.stopPropagation()}
        >
          <h2
            className={`${modalStyles.modal__title} text text_type_main-large`}
          >
            {title}
          </h2>
          <button onClick={handleClose} className={modalStyles.modal__close}>
            <CloseIcon />
          </button>
          {children}
        </div>
      </ModalOverlay>
    </>,
    document.getElementById("react-modals")
  );
}

export default Modal;

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
};
