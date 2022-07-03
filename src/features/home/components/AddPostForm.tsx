/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button, TextField } from "@mui/material";
import { useAddPost } from "../hooks";

interface Props {
  handleClose: () => void;
}

export const AddPostForm = ({ handleClose }: Props) => {
  const { onSubmitAddPost, errors } = useAddPost(handleClose);

  return (
    <form
      onSubmit={onSubmitAddPost}
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <TextField
        error={errors.title}
        name="title"
        label="Title"
        variant="outlined"
      />
      {errors.title && <span>Title suppose to be longer than 5 chars</span>}

      <TextField
        error={errors.description}
        name="description"
        label="Description"
        variant="outlined"
      />
      {errors.description && (
        <span>Description suppose to be longer than 20 chars</span>
      )}

      <Button type="submit" variant="contained">
        Create
      </Button>
    </form>
  );
};
