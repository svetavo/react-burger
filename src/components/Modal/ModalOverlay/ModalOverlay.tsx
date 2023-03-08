import modalOverlayStyles from "./ModalOverlay.module.css";
import PropTypes from "prop-types";
import React from "react";

type TModalOverlay = {
  children: React.ReactNode,
  handleClose: () => void,
}

export const ModalOverlay: React.FC<TModalOverlay> = ({ children, handleClose }) => {
  return (
    <div className={modalOverlayStyles.modal__overlay} onClick={handleClose}>
      {children}
    </div>
  );
}

