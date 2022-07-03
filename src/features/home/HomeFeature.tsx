import { useDataPosts } from "./hooks";
import { PostList } from "./components";
import { Pagination } from "./components/Pagination";
import { AddPostPopup } from "./components";

export const HomeFeature = () => {
  const { posts, setPage, page, onChangePagination } = useDataPosts();
  return (
    <div>
      <AddPostPopup />
      <PostList posts={posts} />
      <Pagination onChange={onChangePagination} page={page} />
    </div>
  );
};
