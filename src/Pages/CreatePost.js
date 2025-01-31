import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CreatePost.css';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/createpost', { 
                title, 
                content 
            });
            console.log("Post created:", response.data);
            alert(response.data.message);
            navigate('/index');   
        } catch (error) {
            console.error('Error creating post:', error);
            alert('Failed to create post');
        }
    };

    return (
        <div id="create-post-container">
            <h2 id="create-post-title">Create Your Post</h2>
            <form id="create-post-form" onSubmit={handleSubmit}>
                {/* Title input field */}
                <input 
                    id="post-title" 
                    type="text" 
                    placeholder="Title" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    required 
                />
                    
                {/* Content textarea */}
                <textarea 
                    id="post-content" 
                    placeholder="Content" 
                    value={content} 
                    onChange={(e) => setContent(e.target.value)} 
                    required
                ></textarea>

                <button id="submit-post" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CreatePost;
    