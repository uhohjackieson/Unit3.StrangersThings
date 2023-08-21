// this will return the form for a new post using the function post from index.js
// import { makeNewPost } from "../API";
import { useState } from "react";



const COHORT_NAME = "2306-GHP-ET-WEB-FT-SF";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export default function AddNewPost( {token} ) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");

  async function makeNewPost(event) {
    event.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          post: {
            title,
            description,
            price,
            location,
          },
        }),
      });
      const post = await response.json();
      console.log(post);
      console.log(token);
      return post;
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="post-form">
      <form onSubmit={makeNewPost}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="price">Price</label>
        <input
          type="text"
          id="price"
          name="price"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button
          className="add-post-button"
          type="submit"
          // onClick={(event) => {
          //   event.preventDefault();
          //   makeNewPost(title, description, price, location);
          // }}
        >
          Create
        </button>
      </form>
      <div>

      </div>
    </div>
  );
}
