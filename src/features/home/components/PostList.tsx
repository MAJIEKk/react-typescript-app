/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Link } from "react-router-dom";

import { PostInterface } from "../interfaces";
import { PostItem } from "./PostItem";

interface Props {
  posts: PostInterface[];
}

export const PostList = ({ posts }: Props) => (
  <div
    css={css`
      display: flex;
      flex-wrap: wrap;
    `}
  >
    {posts.map((post) => (
      <PostItem key={post.id} post={post} />
    ))}
    {/* <Link to={"/contacts"}>Go to Contacts</Link> */}
  </div>
);
