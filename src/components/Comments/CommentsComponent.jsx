import React from "react";
import { ListGroupItem } from "react-bootstrap";

const CommentsComponent = ({ body, email, id, name }) => {
  return (
    <ListGroupItem
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">{email}</div>
        {body}
      </div>
    </ListGroupItem>
  );
};

export default CommentsComponent;
