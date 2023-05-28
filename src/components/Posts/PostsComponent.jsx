import React, { useState } from "react";
import { Button, ButtonGroup, Card, Col, Image } from "react-bootstrap";
import CommentsContainer from "../Comments/CommentsContainer";
import { Link } from "react-router-dom";

const PostsComponent = ({ post, photo, user, size = "22rem", key, avatar }) => {
  const [visibleComments, setVisibleComments] = useState(false);
  const onClick = () => {
    setVisibleComments(!visibleComments);
  };
  return (
    <Col style={{ marginTop: 20 }}>
      <Card key={key} style={{ width: size }}>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
          <Link to={`/user/${user.id}`}>
            <div style={{ display: "flex", gap: 10, alignItems: "center", padding: "20px 0" }}>
            <Image src={avatar} width={50} roundedCircle={true} />
            <span>{user.name}</span>
            </div>
          </Link>
          <ButtonGroup size="sm">
            <Button onClick={onClick} variant="secondary">
              Go to comments
            </Button>
          </ButtonGroup>
        </Card.Body>
        {visibleComments && <CommentsContainer postId={post.id} />}
      </Card>
    </Col>
  );
};

export default PostsComponent;
