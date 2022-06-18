import { PostInterface } from "../interfaces";

interface Props {
  post: PostInterface;
}

export const PostItem = ({ post: { id, title, body, tags } }: Props) => (
  <div>
    <h3>{title}</h3>
    <p>{body}</p>
    <p>{tags}</p>
  </div>
);
