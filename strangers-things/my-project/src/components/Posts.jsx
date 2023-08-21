import { useState, useEffect } from "react";
import { fetchAllData } from "../API";
import { useNavigate } from "react-router-dom";
import AddNewPost from "./AddNewPost";

// will show all posts from API

export default function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [searchParam, setSearchParam] = useState("");
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
  const postsToDisplay = searchParam
    ? posts.filter((post) => post.title.toLowerCase().includes(searchParam))
    : posts;
  return (
    <div>
      <AddNewPost />
      <div>
        <label>
          Search:{""}
          <input
            type="text"
            placeholder="search"
            onChange={(e) => setSearchParam(e.target.value).toLowerCase()}
          />
        </label>
      </div>
      {postsToDisplay.map((post) => {
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
