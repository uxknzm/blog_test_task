import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import Sidebar from "../Sidebar/Sidebar";

const NavbarComponent = (props) => {
  const { updateModal, isVisible } = props;
  return (
    <Navbar bg="light" variant="light">
      <Button bsStyle="primary" onClick={() => updateModal(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </Button>
      <Sidebar isVisible={isVisible} onHide={() => updateModal(false)}>
        <Nav className="flex-column">
          <Link to="/">posts</Link>
          <Link to="/me">about me</Link>
        </Nav>
      </Sidebar>
    </Navbar>
  );
};

export default NavbarComponent;
