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
    <div className="container mt-5">
      <h1 className="text-center fw-bold mb-5">📝 All Blog Posts</h1>

      {posts.length === 0 ? (
        <div className="alert alert-info text-center">
          No posts found.
        </div>
      ) : (
        <div className="row">
          {posts.map((post) => (
            <div className="col-md-6 col-lg-4 mb-4" key={post._id}>
              <div className="card h-100 shadow-lg border-0 rounded-4">

                <div className="card-body">

                  <h3 className="card-title fw-bold">
                    {post.title}
                  </h3>

                  <p className="card-text text-muted">
                    {post.content}
                  </p>

                  <hr />

                  <p>
                    <strong>👤 Author:</strong>{" "}
                    {post.author?.username || "Unknown"}
                  </p>

                  <div className="mb-3">
                    {post.tags?.map((tag, index) => (
                      <span
                        key={index}
                        className="badge bg-primary me-2"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="card-footer bg-white border-0 d-flex justify-content-between align-items-center">

                  <small className="text-muted">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </small>

                  <button className="btn btn-outline-primary btn-sm">
                    Read More
                  </button>

                </div>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}