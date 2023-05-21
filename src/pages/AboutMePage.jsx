import React from "react";

import AboutMeContainer from "../components/AboutMeContainer/AboutMeContainer";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

const AboutMePage = () => {
  return (
    <div class="container">
      <div class="main-body">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Back</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <AboutMeContainer />
      </div>
    </div>
  );
};

export default AboutMePage;
