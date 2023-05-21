import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import NavbarComponent from "./Navbar";

const NavbarContainer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();

  const updateModal = (flag) => {
    setIsVisible(flag);
  };

  useEffect(() => {
    setIsVisible(false);
  }, [pathname]);
  return <NavbarComponent updateModal={updateModal} isVisible={isVisible} />;
};

export default NavbarContainer;
