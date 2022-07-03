import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { AddPostForm } from "./AddPostForm";

interface Props {}

export const AddPostPopup = (props: Props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        startIcon={<AddIcon />}
      >
        Add post
      </Button>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClickClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Add new post</DialogTitle>
        <DialogContent>
          <AddPostForm handleClose={handleClickClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
};
