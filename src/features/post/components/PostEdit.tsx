/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "@mui/material";
import { PostInterface } from "../interfaces";
import TextField from "@mui/material/TextField";

interface Props {
  post: PostInterface;
  onSubmit: (e: any) => void;
}

export const PostEdit = ({
  post: { title, body, reactions, tags },
  onSubmit,
}: Props) => {
  return (
    <form
      onSubmit={onSubmit}
      css={css`
        position: relative;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        .MuiTextField-root {
          margin: 15px 0;
        }
      `}
    >
      <TextField
        // label="Post title"
        name="title"
        multiline
        maxRows={1}
        defaultValue={title}
      />
      <TextField
        // label="Post description"
        name="description"
        multiline
        maxRows={10}
        defaultValue={body}
      />
      <TextField
        // label="Post reactions"
        name="reactions"
        multiline
        maxRows={1}
        defaultValue={reactions}
      />
      <TextField
        //label="Post tags"
        name="tags"
        multiline
        maxRows={1}
        defaultValue={tags}
      />

      <Button type="submit" variant="contained" color="info">
        Save
      </Button>
    </form>
  );
};
