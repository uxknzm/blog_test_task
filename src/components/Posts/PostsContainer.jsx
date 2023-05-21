import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { fetchPosts } from "../../redux/postsReducer";
import PostsComponent from "./PostsComponent";
import Loader from "../Loader/Loader";

const PostsContainer = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  if (!posts || !posts.length) {
    return (
      <Container>
        <Row>
          <Loader />
        </Row>
      </Container>
    );
  };
  return (
    <Container>
      <Row>
        {posts.map((post) => (
          <PostsComponent key={post.id} {...post} size={"22rem"} />
        ))}
      </Row>
    </Container>
  );
};

export default PostsContainer;
