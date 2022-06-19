import { useDataPosts } from "./hooks";
import { PostList } from "./components";
import { Pagination } from "./components/Pagination";

export const HomeFeature = () => {
  const { posts, setPage, page, onChangePagination } = useDataPosts();
  return (
    <div>
      <PostList posts={posts} />
      <Pagination onChange={onChangePagination} page={page} />
    </div>
  );
};
