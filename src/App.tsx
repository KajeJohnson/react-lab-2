import React from "react";
import "./App.css";

import PostInList from "./components/PostInList";
import SocialPosts from "./components/SocialPosts";

export interface Post {
  title: string;
  thought: string;
}

function App() {
  return (
    <div className="App">
      <header
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "50px",
          color: "#03a9f4",
        }}
      >
        My Thoughts
      </header>
      <SocialPosts />
    </div>
  );
}

export default App;
