import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const { user } = useAuth();
  const navigate = useNavigate();

  const fetchData = async () => {
    const { data: postData } = await api.get(`/posts/${id}`);
    setPost(postData);
    const { data: commentData } = await api.get(`/comments/${id}`);
    setComments(commentData);
  };

  useEffect(() => { fetchData(); }, [id]);

  const handleLike = async () => {
    const { data } = await api.put(`/posts/${id}/like`);
    setPost(data);
  };

  const handleComment = async (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    const { data } = await api.post(`/comments/${id}`, { text: commentText });
    setComments([data, ...comments]);
    setCommentText('');
  };

  const handleDeletePost = async () => {
    if (!window.confirm('Delete this post?')) return;
    await api.delete(`/posts/${id}`);
    navigate('/');
  };

  if (!post) return <p className="p-4">Loading...</p>;

  const isAuthor = user && user._id === post.author._id;
  const isLiked = user && post.likes.includes(user._id);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-4">by {post.author.username}</p>
      <p className="mb-4">{post.content}</p>

      {user && (
        <button onClick={handleLike} className="mb-4 px-3 py-1 border rounded">
          {isLiked ? '❤️ Liked' : '🤍 Like'} ({post.likes.length})
        </button>
      )}

      {isAuthor && (
        <div className="flex gap-2 mb-6">
          <button onClick={() => navigate(`/edit/${id}`)} className="px-3 py-1 border rounded">Edit</button>
          <button onClick={handleDeletePost} className="px-3 py-1 border rounded text-red-500">Delete</button>
        </div>
      )}

      <h3 className="text-xl font-semibold mb-2">Comments</h3>
      {user && (
        <form onSubmit={handleComment} className="flex gap-2 mb-4">
          <input
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Write a comment..."
            className="border p-2 rounded flex-1"
          />
          <button type="submit" className="bg-blue-500 text-white px-3 rounded">Post</button>
        </form>
      )}
      {comments.map((c) => (
        <div key={c._id} className="border-b py-2">
          <p className="text-sm font-medium">{c.author.username}</p>
          <p>{c.text}</p>
        </div>
      ))}
    </div>
  );
};

export default PostDetail;