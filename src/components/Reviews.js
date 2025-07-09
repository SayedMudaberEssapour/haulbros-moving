import React, { useState } from "react";

function Reviews() {
  const [reviews, setReviews] = useState([
    { name: "Jane D.", text: "Haul Bros made my move stress-free and affordable!" },
    { name: "Mike S.", text: "Professional, fast, and friendly team. Highly recommend!" },
  ]);
  const [newReview, setNewReview] = useState({ name: "", text: "" });

  const handleChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, newReview]);
    setNewReview({ name: "", text: "" });
  };

  return (
    <section className="reviews-section">
      <h2>Customer Reviews</h2>
      <ul>
        {reviews.map((r, idx) => (
          <li key={idx}><strong>{r.name}:</strong> {r.text}</li>
        ))}
      </ul>
      <form className="review-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={newReview.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="text"
          placeholder="Your review"
          value={newReview.text}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit Review</button>
      </form>
    </section>
  );
}

export default Reviews;
