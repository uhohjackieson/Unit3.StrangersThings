// this will return the form for a new post using the function post from index.js
import { makeNewPost } from "../API";
import { useState } from "react";

export default function AddNewPost({token}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div className="post-form">
      <form action="">
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
          onClick={(event) => {
            event.preventDefault();
            makeNewPost(title, description, price, location, token);
          }}
        >
          Create
        </button>
      </form>
    </div>
  );
}
