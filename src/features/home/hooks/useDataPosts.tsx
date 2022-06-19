import React, { useEffect, useState } from "react";
import { PostInterface } from "../interfaces";

export const useDataPosts = () => {
  const [posts, setPosts] = useState([] as PostInterface[]);
  const [page, setPage] = useState(1);

  const limit_posts = 10;

  const onChangePagination = (e: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const skip = page * limit_posts - limit_posts;
  console.log(skip);
  useEffect(() => {
    fetch(`https://dummyjson.com/posts?limit=${limit_posts}&&skip=${skip}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts);
      });
  }, [page]);

  return {
    posts,
    page,
    setPage,
    onChangePagination,
  };
};
