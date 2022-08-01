import { Post } from "./SocialPosts";
import "./App";

// interface PostProp {
//   post: Post[];
//   onDelete: (id: string) => void;
// }
//todolistitem

export interface PostProp {
  onDelete: () => void;
  post: Post;
}
export default function PostInList({ post, onDelete }: PostProp) {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.thought}</p>
      <button onClick={() => onDelete()}>Delete</button>
    </div>
  );
}
// export default function PostInList() {
//     return(
//   <button onClick={() => onDelete()}></button>
//     )
// }
