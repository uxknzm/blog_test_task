import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

import AboutMeContainer from "../components/AboutMeContainer/AboutMeContainer";

const AboutMePage = () => {
  return (
    <div class="container">
      <div class="main-body">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Posts</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Profile</Breadcrumb.Item>
        </Breadcrumb>
        <AboutMeContainer />
      </div>
    </div>
  );
};

export default AboutMePage;
