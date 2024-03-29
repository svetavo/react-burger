import { useEffect } from "react";
import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import modalStyles from "./Modal.module.css";
import { ModalOverlay } from "./ModalOverlay/ModalOverlay";
import React from "react";

type TModal = {
  children: React.ReactNode;
  isOpen?: boolean;
  handleClose: () => void;
  title: string;
};

export const Modal: React.FC<TModal> = ({
  children,
  isOpen,
  handleClose,
  title,
}) => {
  const rootModal = document.getElementById("react-modals") as HTMLDivElement;

  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === "Escape" ? handleClose() : null;
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
            <CloseIcon type="primary" />
          </button>
          {children}
        </div>
      </ModalOverlay>
    </>,
    rootModal
  );
};
