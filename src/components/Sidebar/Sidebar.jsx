import React from "react";
import { Modal } from "react-bootstrap";

import "./index.css";

const Sidebar = (props) => {
  return (
    <Modal
      className="menu-sidebar left"
      show={props.isVisible}
      onHide={props.onHide}
      autoFocus
      keyboard
    >
      <Modal.Header closeButton>
        <Modal.Title>Links</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
    </Modal>
  );
};

export default Sidebar;
