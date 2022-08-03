import { Post } from "../App";
import "./styling.css";
// import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";

interface PostProp {
  post: Post;
  onDelete: () => void;
}

// function HomeIcon(props) {
//   return (
//     <SvgIcon {...props}>
//       <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
//     </SvgIcon>
//   );
// }

export default function PostInList({ post, onDelete }: PostProp) {
  return (
    <div>
      <div className="post-css">
        <h1>{post.title}</h1>
        <p>{post.thought}</p>
        <button onClick={() => onDelete()}>TRASHCAN</button>
      </div>
    </div>
  );
}
