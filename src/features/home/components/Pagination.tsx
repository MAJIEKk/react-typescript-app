/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PaginationMUI from "@mui/material/Pagination";

interface Props {
  page: number;
  onChange: (e: React.ChangeEvent<unknown>, value: number) => void;
}

export const Pagination = ({ onChange, page }: Props) => {
  return (
    <PaginationMUI
      onChange={onChange}
      page={page}
      count={15}
      variant="outlined"
      shape="rounded"
    />
  );
};
