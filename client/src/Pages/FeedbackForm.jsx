import React, { useState } from 'react';
import './FeedbackForm.css'; 

const FeedbackForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !feedback) {
            setError('All fields are required!');
            return;
        }

        // Handle the form submission (you can send data to a server here)
        alert(`Feedback submitted!\nName: ${name}\nEmail: ${email}\nFeedback: ${feedback}`);
        
        // Reset the form fields
        setName('');
        setEmail('');
        setFeedback('');
        setError('');
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Feedback Form</h2>
            <form className="feedback-form" onSubmit={handleSubmit}>
                <input
                    className="input-field"
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className="input-field"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                    className="textarea-field"
                    placeholder="Your Feedback"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                ></textarea>
                {error && <div className="error-message">{error}</div>}
                <button className="submit-button" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FeedbackForm;
