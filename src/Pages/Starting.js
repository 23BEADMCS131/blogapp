import React from 'react';
import './Starting.css';

const Starting = () => {
  const sampleBlogs = [
    {
      title: "Getting Started with React",
      content: "In this post, I’ll walk you through setting up a React project and explain the basics of React components, state, and props.",
    },
    {
      title: "Introduction to JavaScript ES6",
      content: "Learn about the new features introduced in ES6, including arrow functions, template literals, destructuring, and more.",
    },
    {
      title: "Web Development Trends in 2025",
      content: "Explore the latest trends in web development, including new frameworks, tools, and best practices for building modern web applications.",
    },
  ];

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <br></br><br></br><br></br><br></br><br></br><br></br>
          <h1 className="hero-heading">Welcome to My Blog</h1>
          <p className="hero-subheading">Join me on my coding journey.</p>
        </div>
      </section>

      {/* About Me Section */}
      <section className="about-me">
        <div className="about-me-content">
          <h2 className="section-heading">About Me</h2>
          <p className="about-me-text">
            I'm Rithika, a software developer sharing my coding experiences and insights.
          </p>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="blogs">
        <div className="blogs-content">
          <h2 className="section-heading">Trending Blogs</h2>
          <div className="blogs-list">
            {sampleBlogs.map((blog, index) => (
              <div key={index} className="blog-card">
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-content">{blog.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Starting;
