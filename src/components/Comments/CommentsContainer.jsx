import React, { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../../redux/commentsReducer";
import CommentsComponent from "./CommentsComponent";

const CommentsContainer = ({ postId }) => {
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.comments);
  useEffect(() => {
    dispatch(fetchComments(postId));
  }, []);
  if (!comments[postId]) {
    return null;
  };
  return (
    <ListGroup style={{ maxHeight: "250px", overflowX: "auto" }}>
      {comments[postId].map((comment) => {
        return <CommentsComponent key={comment.id} {...comment} />;
      })}
    </ListGroup>
  );
};

export default CommentsContainer;
