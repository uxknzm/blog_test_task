import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { fetchPosts } from "../../redux/postsReducer";
import PostsComponent from "./PostsComponent";

const PostsContainer = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  if (!posts) {
    return null
  };
  return (
    <Container>
      <Row>
        {posts.map((post) => (
          <PostsComponent {...post} />
        ))}
      </Row>
    </Container>
  );
};

export default PostsContainer;
