import { useEffect } from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ReactPortal from "../ReactPortal/ReactPortal";
import modalStyles from "./Modal.module.css";

function Modal({ children, isOpen, handleClose }) {
  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === "Escape" ? handleClose() : null);
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="react-modals">
      <div className={modalStyles.modal__overlay} onClick={() => handleClose()}>
        <div
          className={`${modalStyles.modal__content} pb-15`}
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={handleClose} className={modalStyles.modal__close}>
            <CloseIcon />
          </button>
          {children}
        </div>
      </div>
    </ReactPortal>
  );
}
export default Modal;
