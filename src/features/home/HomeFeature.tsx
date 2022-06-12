import { useDataPosts } from "./hooks";

export const HomeFeature = () => {
  const { posts } = useDataPosts();
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};
