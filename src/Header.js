import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';
import Subscription from './Pages/Subscription';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleSearch = (event) => {
    event.preventDefault();

    // Convert search query to lowercase for case-insensitive comparison
    const query = searchQuery.toLowerCase().trim();

    // Define navigation mapping
    const routes = {
      home: "/starting",
      "my blog": "/MyBlog",
      "create post": "/create",
      contact: "/Contact",
      Subscription:"/Subscription"
    };

    // Check if the query matches a predefined route and navigate
    if (routes[query]) {
      navigate(routes[query]);
    } else {
      console.log('No matching page found for:', searchQuery);
      // You can display a message saying "No results found"
    }

    setSearchQuery(''); // Clear input after searching
  };

  return (
    <div className="header-container">
      <h1>BLOGS</h1>
      <nav>
        <ul>
          <li><Link to="/starting">HOME</Link></li>
          <li><Link to="/MyBlog">MY BLOG</Link></li>
          <li><Link to="/create">CREATE POST</Link></li>
          <li><Link to="/Contact">CONTACT</Link></li>
          <li><Link to="/Subscription">SUBSCRIPTION</Link></li>
          <a id="lbtn" href="http://localhost:3000/"><li><strong>LOGOUT</strong></li></a>
        </ul>
      </nav>
      {/* Search Bar */}
      <form className="search-bar" onSubmit={handleSearch}>
        <input 
          type="text" 
          placeholder="Search blog header..." 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Header;
