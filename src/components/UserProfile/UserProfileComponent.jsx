import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import _ from "lodash";

import PostsComponent from "../Posts/PostsComponent";

const UserProfileComponent = ({
  posts = [],
  address = {},
  company = {},
  email,
  name,
  phone,
  username,
  website,
  avatar = "https://buzookod.ru/media/2816616767_vubrbeJ.jpg",
}) => {
  return (
    <div class="row gutters-sm">
      <div class="col-md-4 mb-3">
        <Card>
          <Card.Img variant="top" src={avatar} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{email}</Card.Text>
          </Card.Body>
        </Card>
        <div class="card mt-3">
          <ListGroup>
            <ListGroup.Item>{`phone: ${phone}`}</ListGroup.Item>
            <ListGroup.Item>{`username: ${username}`}</ListGroup.Item>
            <ListGroup.Item>website: <a target="_blank" href={website}>{website}</a></ListGroup.Item>
          </ListGroup>
        </div>
      </div>
      <div class="col-md-8">
        <h4 style={{ textAlign: "center" }}>Company:</h4>
        <ListGroup>
          {_.map(company, (desc, name) => {
            return <ListGroup.Item key={name}>{`${name}: ${desc}`}</ListGroup.Item>;
          })}
        </ListGroup>
        <h4 style={{ textAlign: "center" }}>Address:</h4>
        <ListGroup>
          {_.map(address, (desc, name) => {
            if (name === "geo") {
              return null;
            }
            return <ListGroup.Item key={name}>{`${name}: ${desc}`}</ListGroup.Item>;
          })}
        </ListGroup>
        {posts.map((post) => (
          <PostsComponent key={post.id} {...post} size={"100%"} />
        ))}
      </div>
    </div>
  );
};

export default UserProfileComponent;
