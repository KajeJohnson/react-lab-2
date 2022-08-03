import React, { useState } from "react";
import { Post } from "../App";
import "./styling.css";

export interface PostFormProps {
  onSubmit: (post: Post) => void;
  onClose: () => void;
}
export default function PostForm({ onSubmit, onClose }: PostFormProps) {
  const [postFormPost, setPostFormPost] = useState<Post>({
    title: "",
    thought: "",
  });

  function handleChangeTitle(e: React.ChangeEvent<HTMLInputElement>) {
    return setPostFormPost({
      title: e.target.value,
      thought: postFormPost.thought,
    });
  }
  function handleChangeThought(e: React.ChangeEvent<HTMLInputElement>) {
    return setPostFormPost({
      title: postFormPost.title,
      thought: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit(postFormPost);
    clearFormValues();
    onClose();
  }

  function clearFormValues() {
    setPostFormPost({
      title: "",
      thought: "",
    });
  }

  return (
    <div>
      <button onClick={onClose}>X</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="titleInput"
          placeholder="Title"
          value={postFormPost.title}
          onChange={handleChangeTitle}
        />
        <input
          type="text"
          name="thoughtInput"
          placeholder="Thought"
          value={postFormPost.thought}
          onChange={handleChangeThought}
        />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
}
