import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MyBlog.css';

const MyBlog = () => {
  const [posts, setPosts] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  useEffect(() => {
    axios.get('https://blogbackend-1-h4wy.onrender.com/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  // Delete Blog
  const deleteBlog = async (id) => {
    try {
      const response = await axios.delete(`https://blogbackend-1-h4wy.onrender.com/delete/${id}`);
      alert(response.data.message); // Show message to user
      setPosts(posts.filter(post => post._id !== id)); // Remove the deleted blog from the state
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  // Update Blog
  const updateBlog = async (id) => {
    try {
      const response = await fetch(`https://blogbackend-1-h4wy.onrender.com/update/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newTitle, content: newContent }),
      });

      const result = await response.json();
      alert(result.message); // Show message to user

      // Update the blog in the state
      setPosts(posts.map(blog => (blog._id === id ? { ...blog, title: newTitle, content: newContent } : blog)));
      setEditingBlog(null); // Close the editing mode
      setNewTitle('');
      setNewContent('');
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  // Like Blog
  const likeBlog = (id) => {
    alert('Liked the blog! ❤️'); // You can add logic to track likes in the state
  };

  // Cancel Edit
  const cancelEdit = () => {
    setEditingBlog(null); // Close the editing mode
    setNewTitle('');
    setNewContent('');
  };

  return (
    <div className="my-blogs-container">
      <h2>My Blogs</h2>
      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        <div className="posts-grid">
          {posts.map(post => (
            <div key={post._id} className="post-card">
              {editingBlog === post._id ? (
                <div>
                  <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="Update Title"
                  />
                  <textarea
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    placeholder="Update Content"
                  />
                  <button onClick={() => updateBlog(post._id)}>Save</button>
                  <button onClick={cancelEdit}>Cancel</button> {/* Cancel button */}
                </div>
              ) : (
                <div>
                  <h3>{post.title}</h3>
                  <p>{post.content}</p>
                  <button onClick={() => {
                    setEditingBlog(post._id);
                    setNewTitle(post.title);
                    setNewContent(post.content);
                  }}>
                    Edit
                  </button>
                  <button onClick={() => deleteBlog(post._id)}>Delete</button>
                  <button onClick={() => likeBlog(post._id)}>❤️Like</button> {/* Like button with emoji */}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBlog;
