import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PostInList from "./components/PostInList";

//socialpost is going in here - import it here
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
      <PostInList />
    </div>
  );
}

export default App;
