import { useState, useEffect } from "react";
import { fetchAllData } from "../API";
import { useNavigate } from "react-router-dom";
import AddNewPost from "./AddNewPost";

// will show all posts from API

export default function AllPosts() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  async function fetchAllPosts() {
    try {
      const posts = await fetchAllData();
      setPosts(posts.data.posts);
    } catch (error) {
      console.log("uhoh trouble fetching posts", error);
    }
  }
  useEffect(() => {
    fetchAllPosts();
  }, []);
  return (
    <div>
      <AddNewPost />
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <h4>{post.description}</h4>
            <h4>hi</h4>
            <button
              onClick={() => {
                navigate(`/posts/${post.id}`);
              }}
            >
              Button
            </button>
          </div>
        );
      })}
    </div>
  );
}
