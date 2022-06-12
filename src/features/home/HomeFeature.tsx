import { Link } from "react-router-dom";

import { useDataPosts } from "./hooks";

export const HomeFeature = () => {
  const { posts } = useDataPosts();
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
      <Link to={"/contacts"}>Go to Contacts</Link>
    </div>
  );
};
