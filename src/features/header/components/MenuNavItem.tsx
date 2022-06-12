/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface Props {
  item: { id: number; name: string; url: string };
}

export const MenuNavItem = ({ item: { id, name, url } }: Props) => (
  <li key={id}>
    <a
      css={css`
        color: white;
        text-decoration: none;
        font-weight: bold;
        text-transform: uppercase;
        padding: 10px 15px;
        display: block;
        :hover {
          text-decoration: underline;
        }
      `}
      href={url}
    >
      {name}
    </a>
  </li>
);
