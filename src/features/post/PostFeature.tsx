/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useDataPost } from "./hooks";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import { PostForm, PostEdit } from "./components";

export const PostFeature = () => {
  const { post, onEditSubmit, isEdit } = useDataPost();

  return (
    <div
      css={css`
        position: relative;
      `}
    >
      {!isEdit && (
        <Link to={`/post/${post.id}/edit`}>
          <EditIcon
            css={css`
              cursor: pointer;
              position: absolute;
              top: 0;
              right: 10px;
              z-index: 100;
            `}
          />
        </Link>
      )}

      {isEdit ? (
        <PostEdit post={post} onSubmit={onEditSubmit} />
      ) : (
        <PostForm post={post} />
      )}
    </div>
  );
};
