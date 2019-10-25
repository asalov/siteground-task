import React from "react";
import { Modal } from "react-bootstrap";

import ActionButton from "components/ActionButton/ActionButton";

const ProductModal = ({ show, title, content, actionButtons, onClose }) => {
  const renderActionButtons = () =>
    actionButtons.map(button => (
      <ActionButton
        key={button.text}
        buttonStyle={button.style || "default"}
        text={button.text}
        onClick={button.onClick}
      />
    ));

  return (
    <Modal data-testid="modal" show={show} onHide={onClose}>
      <Modal.Header>
        <Modal.Title data-testid="modal-title">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{content}</Modal.Body>
      <Modal.Footer>{renderActionButtons()}</Modal.Footer>
    </Modal>
  );
};

export default ProductModal;
