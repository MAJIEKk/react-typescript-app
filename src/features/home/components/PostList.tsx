import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useDataPosts } from "../hooks";
import { PostInterface } from "../interfaces";
import { PostItem } from "./PostItem";

interface Props {
  posts: PostInterface[];
}

export const PostList = ({ posts }: Props) => (
  <div>
    {posts.map((post) => (
      <PostItem post={post} />
    ))}
    <Link to={"/contacts"}>Go to Contacts</Link>
  </div>
);
