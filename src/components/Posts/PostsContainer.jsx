import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { fetchPosts } from "../../redux/postsReducer";
import PostsComponent from "./PostsComponent";
import Loader from "../Loader/Loader";

const PostsContainer = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  console.log(posts);
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
  }
  return (
    <div style={{ marginLeft: 60, overflow: "hidden" }}>
      <Row>
        {posts.map((post) => (
          <PostsComponent key={post.id} {...post} avatar="https://buzookod.ru/media/2816616767_vubrbeJ.jpg"  size={"22rem"} />
        ))}
      </Row>
    </div>
  );
};

export default PostsContainer;
