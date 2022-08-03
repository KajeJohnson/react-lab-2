import { Post } from "../App";
import "./styling.css";

interface PostProp {
  post: Post;
  onDelete: () => void;
}

export default function PostInList({ post, onDelete }: PostProp) {
  return (
    <div>
      <div className="post-css">
        <h1>{post.title}</h1>
        <p>{post.thought}</p>
        <button onClick={() => onDelete()}>TrashCan</button>
      </div>
    </div>
  );
}
