import React from "react";
import { ListGroup, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import Sidebar from "../Sidebar/Sidebar";

const NavbarComponent = (props) => {
  const { updateModal, isVisible } = props;
  return (
    <Navbar bg="light" variant="light">
      <svg
        onClick={() => updateModal(true)}
        style={{ marginLeft: 20, cursor: "pointer" }}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        class="bi bi-list"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>
      <Sidebar isVisible={isVisible} onHide={() => updateModal(false)}>
        <ListGroup as="ul">
          <NavLink
            to="/"
            onClick={() => updateModal(false)}
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                backgroundColor: isActive ? "#8888ff" : "white",
                textDecoration: "none",
              };
            }}
          >
            <ListGroup.Item style={{ backgroundColor: "transparent" }} as="li">
              Posts
            </ListGroup.Item>
          </NavLink>
          <NavLink
            to="/me"
            onClick={() => updateModal(false)}
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                backgroundColor: isActive ? "#8888ff" : "white",
                textDecoration: "none",
              };
            }}
          >
            <ListGroup.Item style={{ backgroundColor: "transparent" }} as="li">
              About me
            </ListGroup.Item>
          </NavLink>
        </ListGroup>
      </Sidebar>
    </Navbar>
  );
};

export default NavbarComponent;
