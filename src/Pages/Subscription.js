import React, { useState } from 'react';
  // Assuming H is a component you're importing
// import './subscription.css'; // Assuming this is the correct path for your CSS

const Subscription = () => {
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleFeedbackChange = (e) => setFeedback(e.target.value);

  const handleClick = () => {
    if (email && feedback) {
      setLoading(true);
      const subject = "Subscription Confirmation";
      const body = `Thank you for subscribing to our service!\n\nFeedback:\n${feedback}`;

      // Open Gmail with the pre-filled subject and body
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');

      // Show success message
      setMessage(`✅ Thank you for subscribing, ${email}!`);
      setEmail('');
      setFeedback('');
      setLoading(false);
    } else {
      setMessage('❌ Please provide both email and feedback.');
    }
  };

  return (
    <div>
   
      <div id="subscribe">
        <h2>Never miss an update!</h2>
        <p>Subscribe now and get the latest updates delivered to your inbox.</p>

        <form>
          
            <legend><h2>Subscription Form</h2></legend>

            <div id="email">
              <label>Email: </label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                required
              />
              
            </div>

            <div id="feedback">
              <label>Feedback: </label>
              <textarea
                value={feedback}
                onChange={handleFeedbackChange}
                placeholder="Enter your feedback"
                required
              />
            </div>

            <button
              type="button"
              id="send"
              onClick={handleClick}
              disabled={loading}
            >
              {loading ? "Sending..." : "Subscription"}
            </button>
         
        </form>

        {message && <p className="subscription-message">{message}</p>}
      </div>
    </div>
  );
};

export default Subscription;
