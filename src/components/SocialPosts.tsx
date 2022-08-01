import PostInList from "./PostInList";
import PostForm from "./PostForm";
import App from "../App";
import { useState } from "react";

export interface Post {
  title: string;
  thought: string;
}

export default function SocialPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
}
