import { useDataPost } from "./hooks";

export const PostFeature = () => {
  const { title, body, reactions, tags } = useDataPost();

  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
      <p>reactions: {reactions}</p>
      <p>tags: {tags}</p>
    </div>
  );
};
