import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
// import { homePage } from "./components/Home"
import AllPosts from "./components/Posts";

function App() {
  return <>
  <div>
    {/* will contain navbar */}
    <Link to="/posts">View All Posts</Link>
  </div>
  <div>
    {/* will contain routes for home, posts, profile, logout */}
    <Routes>
      {/* <Route path="/home" element={<Home />}/> */}
      <Route path="/posts" element={<AllPosts />}/>
    </Routes>
  </div>
  </>;
}

export default App;
