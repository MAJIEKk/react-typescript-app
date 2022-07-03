import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PostInterface } from "../interfaces";

export const useDataPost = () => {
  const { postId, type } = useParams();
  let navigate = useNavigate();

  const [post, setPost] = useState({} as PostInterface);

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPost(data);
      });
  }, []);

  const onEditSubmit = (e: any) => {
    e.preventDefault();

    const title = e.target.title.value;
    const description = e.target.description.value;
    const reactions = e.target.reactions.value;
    const tags = e.target.tags.value;

    fetch(`https://dummyjson.com/posts/${postId}`, {
      method: "PUT",
      body: JSON.stringify({
        title: title,
        body: description,
        reactions: reactions,
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate(`/post/${postId}`);
      });
  };
  return { post, isEdit: type === "edit", onEditSubmit };
};
