import { title } from "process";
import React, { useState } from "react";

import "./App";
import { Post } from "./SocialPosts";

export interface PostFormProps {
  onSubmit: (Post: any) => void;
  onClose: () => void;
}
export default function PostForm({ onSubmit, onClose }: PostFormProps) {
  const [post, setPost] = useState<Post>({ title: "", thought: "" });
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit(post);
    onClose();
  }

  function handleClose(e: React.ChangeEvent<HTMLInputElement>) {
    return setPost({ title, thought: e.target.value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name={title}
        placeholder="Enter a todo"
        value={post.title}
      />
      <button type="submit">Add</button>
    </form>
  );
}
//todoform
