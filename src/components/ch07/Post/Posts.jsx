import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Posts.css"; // Importing the CSS file

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const response = await axios.get("http://localhost:5000/api/posts");
    setPosts(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = editId
      ? `http://localhost:5000/api/posts/${editId}`
      : "http://localhost:5000/api/posts";
    const method = editId ? "put" : "post";

    await axios[method](url, { title, content });

    setTitle("");
    setContent("");
    setEditId(null);
    fetchPosts();
  };

  const handleEdit = (post) => {
    setTitle(post.title);
    setContent(post.content);
    setEditId(post._id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/posts/${id}`);
    fetchPosts();
  };

  return (
    <div className="posts-container">
      <h1>Posts</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          required
        ></textarea>
        <button type="submit">{editId ? "Update Post" : "Add Post"}</button>
      </form>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <div className="post-buttons">
              <button onClick={() => handleEdit(post)}>Edit</button>
              <button onClick={() => handleDelete(post._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
