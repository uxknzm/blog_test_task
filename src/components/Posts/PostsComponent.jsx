import React, { useState } from "react";
import { Button, ButtonGroup, Card, Col } from "react-bootstrap";
import CommentsContainer from "../Comments/CommentsContainer";
import { Link } from "react-router-dom";

const PostsComponent = ({ post, photo, user, size = "22rem", key }) => {
  const [visibleComments, setVisibleComments] = useState(false);
  const onClick = () => {
    setVisibleComments(!visibleComments);
  };
  return (
    <Col style={{ marginTop: 20 }}>
      <Card key={key} style={{ width: size }}>
        <Link to={`/user/${user.id}`}>
          <Card.Img variant="top" src={photo.url} />
        </Link>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
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
