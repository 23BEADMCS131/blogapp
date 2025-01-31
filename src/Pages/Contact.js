import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [alertMessage, setAlertMessage] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleRating = (value) => {
    setRating(value);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setAlertMessage("Please fill out all required fields.");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setAlertMessage("Please enter a valid email address.");
      return false;
    }
    setAlertMessage(""); // Clear any previous alert message
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Successfully submitted!");
      setFormData({ name: "", email: "", message: "" }); // Clear form
    }
  };

  return (
    <div className="contact-container">
      <header>
        <div className="container">
          <h1>Contact Me</h1>
        </div>
      </header>

      <main className="container">
        <form onSubmit={handleSubmit}>
          {alertMessage && <p className="error alert">{alertMessage}</p>} {/* Show alert message */}
          
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </main>

      <div className="rating-section">
        <h3>RATE MY BLOG:</h3>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${rating >= star ? "filled" : ""}`}
              onClick={() => handleRating(star)}
            >
              &#9733;
            </span>
          ))}
        </div>
        <p>Your Rating: {rating} {rating > 0 ? "star" : ""}</p>
      </div>

      {/* Footer Section */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <br /><br />
      <footer className="footer">
        <h2>Follow Me on Social Media</h2>
        <div className="footer-social-media">
          <div className="footer-social-links">
            <a href="https://github.com/23BEADMCS131" className="social-icon" aria-label="GitHub">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://wa.me/8825632225" className="social-icon" aria-label="WhatsApp">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a href="mailto:rithikaspt@gmail.com" className="social-icon" aria-label="Email">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
        <br /><br />
        <div className="footer-bar">
          <p className="footer-copy">
            Copyright &copy; 2025; Designed by <b>RITHIKA</b>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
