import { useState } from "react";
import api from "../services/api";

export default function CreatePost() {
  const [form, setForm] = useState({
    title: "",
    content: "",
    tags: "",
  });

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await api.post("/posts", {
      title: form.title,
      content: form.content,
      tags: form.tags.split(",").map((tag) => tag.trim()),
    });

    alert("Post created!");

    setForm({
      title: "",
      content: "",
      tags: "",
    });
  } catch (err) {
    alert(err.response?.data?.message || "Failed to create post");
  }
};


  return (
    <div style={{ padding: "20px" }}>
      <h2>Create Post</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
        />

        <br /><br />

        <textarea
          name="content"
          placeholder="Content"
          rows="8"
          cols="50"
          value={form.content}
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="tags"
          placeholder="react,node,mongodb"
          value={form.tags}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}