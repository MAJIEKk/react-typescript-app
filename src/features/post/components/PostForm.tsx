/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

// import EditIcon from "@mui/icons-material/Edit";
// import { Link } from "react-router-dom";
import { PostInterface } from "../interfaces";

interface Props {
  post: PostInterface;
}

export const PostForm = ({
  post: { id, title, body, reactions, tags },
}: Props) => (
  <div
    css={css`
      position: relative;
    `}
  >
    <h1>{title}</h1>
    <p>{body}</p>
    <p>reactions: {reactions}</p>
    <p>tags: {tags}</p>
  </div>
);
