import PostInList from "./PostInList";
import PostForm from "./PostForm";
import { Post } from "../App";
import { useState } from "react";
import "./styling.css";

export default function SocialPosts() {
  //   const [listPost, setListPost] = useState<Post[]>([
  //     { title: "React", thought: "it's hard" },
  //   ]);

  //<> modify specific state
  const [postList, setPostList] = useState<Post[]>([]);
  const [openForm, setOpenForm] = useState(false);

  function handleSubmit(post: Post) {
    setPostList([post, ...postList]);
    console.log(post.title);
  }

  function handleDeletePost(post: Post) {
    setPostList(postList.filter((post2) => post2.title !== post.title));
    console.log(post.title);
  }

  function showForm() {
    setOpenForm(true);
  }
  function exitForm() {
    setOpenForm(false);
  }

  return (
    <div>
      <button className="new-thought-button" onClick={showForm}>
        New Thought
      </button>
      <div>
        {postList.map((post) => (
          <PostInList post={post} onDelete={() => handleDeletePost(post)} />
        ))}
        {openForm ? (
          <PostForm onSubmit={handleSubmit} onClose={exitForm} />
        ) : null}
      </div>
    </div>
  );
}
