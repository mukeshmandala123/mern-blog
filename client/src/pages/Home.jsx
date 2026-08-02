import { useEffect, useState } from "react";
import api from "../services/api";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await api.get("/posts");
      setPosts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>All Posts</h1>

      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        posts.map((post) => (
          <div
            key={post._id}
            style={{
              border: "1px solid #ccc",
              marginBottom: "20px",
              padding: "15px",
            }}
          >
            <h2>{post.title}</h2>

            <p>{post.content}</p>

            <p>
              <strong>Author:</strong> {post.author.username}
            </p>

            <p>
              <strong>Tags:</strong> {post.tags.join(", ")}
            </p>
          </div>
        ))
      )}
    </div>
  );
}