import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = ({ height = "100vh" }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        height,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Spinner animation="border" role="status" />
    </div>
  );
};

export default Loader;
