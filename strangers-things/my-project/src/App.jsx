import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import AllPosts from "./components/Posts";
// import Authenticate from "./components/Authenticate";
import Register from "./components/Register";
import AddNewPost from "./components/AddNewPost";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <div className="links">
        {/* will contain navbar */}
        <Link to="/posts">View All Posts </Link>
        <Link to="/login">Log In </Link>
        <Link to="/register">Register </Link>
      </div>
      <div>
        {/* will contain routes for home, posts, profile, logout */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/register"
            element={<Register token={token} setToken={setToken} />}
          />
          <Route
            path="/register"
            element={<Login token={token} setToken={setToken} />}
          />
          <Route path="/posts" element={<AllPosts />} />
          <Route
            path="/posts"
            element={<AddNewPost token={token} setToken={setToken} />}
          />
          {/* <Route
            path="/register"
            element={<Authenticate token={token} setToken={setToken} />}
          /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
