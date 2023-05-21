import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

import UserProfileContainer from "../components/UserProfile/UserProfileContainer";

const UserPage = () => {
  return (
    <div class="container">
      <div class="main-body">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Posts</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Profile</Breadcrumb.Item>
        </Breadcrumb>
        <UserProfileContainer />
      </div>
    </div>
  );
};

export default UserPage;
