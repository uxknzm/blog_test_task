import React, { useState } from "react";

import NavbarComponent from "./Navbar";

const NavbarContainer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const updateModal = (flag) => {
    setIsVisible(flag);
  };

  return <NavbarComponent updateModal={updateModal} isVisible={isVisible} />;
};

export default NavbarContainer;
