import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import UserProfileComponent from "./UserProfileComponent";
import { fetchPosts } from "../../redux/postsReducer";
import { Container } from "react-bootstrap";
import Loader from "../Loader/Loader";

const UserProfileContainer = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const { id } = useParams();
  const filterArray = posts && posts.filter((post) => post.post.userId === Number(id));
  const user = posts && posts.find((post) => post.user.id === Number(id));
  const mount = useRef();

  useEffect(() => {
    // во время первого маунта не делаем запрос, потом смотрим если есть стейте, то мы не отправляем запрос на сервер 
    if (!mount.current) {
      mount.current = true;
    } else {
      if (!posts.length) {
        dispatch(fetchPosts());
      };
    };
  }, [posts]);

  if (!filterArray || !filterArray.length) {
    return (
      <Container>
          <Loader />
      </Container>
    );
  };

  return <UserProfileComponent posts={filterArray} { ...user?.user } avatar="https://buzookod.ru/media/2816616767_vubrbeJ.jpg" />;
};

export default UserProfileContainer;
