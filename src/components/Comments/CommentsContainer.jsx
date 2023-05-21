import React, { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments, removeComments } from "../../redux/commentsReducer";
import CommentsComponent from "./CommentsComponent";
import Loader from "../Loader/Loader";

const CommentsContainer = ({ postId }) => {
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.comments);
  useEffect(() => {
    dispatch(fetchComments(postId));
    /* таск сделать когда размаутилась компонета удалить из стейта */
    return () => {
      dispatch(removeComments(postId));
    };
  }, []);
  if (!comments[postId]) {
    return (
      <ListGroup style={{ maxHeight: "250px", overflowX: "auto" }}>
        <Loader />
      </ListGroup>
    );
  }
  return (
    <ListGroup style={{ maxHeight: "250px", overflowX: "auto" }}>
      {comments[postId].map((comment) => {
        return <CommentsComponent key={comment.id} {...comment} />;
      })}
    </ListGroup>
  );
};

export default CommentsContainer;
