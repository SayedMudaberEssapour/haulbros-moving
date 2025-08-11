import React, { useState, useEffect } from "react";

function initialReviews() {
  if (typeof window === "undefined") return [];
  const saved = localStorage.getItem("haulbros-reviews");
  return saved
    ? JSON.parse(saved)
    : [
        { name: "Jane D.", text: "Haul Bros made my move stress-free and affordable!", rating: 5, date: new Date().toISOString() },
        { name: "Mike S.", text: "Professional, fast, and friendly team. Highly recommend!", rating: 5, date: new Date().toISOString() },
      ];
}

export default function Reviews() {
  const [reviews, setReviews] = useState(initialReviews);
  const [newReview, setNewReview] = useState({ name: "", text: "", rating: 5 });
  const [toast, setToast] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("haulbros-reviews", JSON.stringify(reviews));
    }
  }, [reviews]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = { ...newReview, name: newReview.name.trim(), text: newReview.text.trim() };
    if (!trimmed.name || !trimmed.text) return;

    setReviews((r) => [{ ...trimmed, date: new Date().toISOString() }, ...r]);
    setNewReview({ name: "", text: "", rating: 5 });
    setToast("Review submitted. Thank you!");
    setTimeout(() => setToast(""), 2200);
  };

  const handleDelete = (idx) => setReviews((r) => r.filter((_, i) => i !== idx));

  return (
    <section className="reviews-section-futuristic">
      <h2 className="reviews-title">Customer Reviews</h2>

      <div className="reviews-list">
        {reviews.map((r, idx) => (
          <div className="review-card" key={idx}>
            <button className="review-delete-btn" onClick={() => handleDelete(idx)} aria-label="Delete review">✖</button>

            <div className="review-header">
              <div className="review-avatar">{(r.name || "?").charAt(0).toUpperCase()}</div>
              <div className="review-name">{r.name}</div>
              <div className="review-date">
                {new Date(r.date).toLocaleDateString(undefined, { month: "short", day: "numeric" })}
              </div>
            </div>

            <p className="review-text">{r.text}</p>

            <div className="stars" aria-label={`Rating ${r.rating} out of 5`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="star" style={{ background: i < r.rating ? "linear-gradient(120deg,#ffd166,#ff9f1c)" : "" }} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* FORM */}
      <form className="review-form-futuristic" onSubmit={handleSubmit}>
        <div className="floating">
          <input
            className="review-input"
            placeholder=" "
            type="text"
            name="name"
            value={newReview.name}
            onChange={handleChange}
            required
            aria-label="Your name"
          />
          <label>Your name</label>
        </div>

        <div className="floating" style={{ maxWidth: 640 }}>
          <textarea
            className="review-textarea"
            placeholder=" "
            name="text"
            value={newReview.text}
            onChange={handleChange}
            required
            aria-label="Your review"
          />
          <label>Your review</label>
        </div>

        <div className="stars" role="radiogroup" aria-label="Select a rating">
          {[5,4,3,2,1].map((val) => (
            <input
              key={val}
              type="radio"
              name="rating"
              value={val}
              checked={Number(newReview.rating) === val}
              onChange={handleChange}
              className="star"
              aria-label={`${val} stars`}
            />
          ))}
        </div>

        <button type="submit" className="review-submit-btn" disabled={!newReview.name.trim() || !newReview.text.trim()}>
          Submit Review
        </button>
      </form>

      {toast && <div className="toast">{toast}</div>}
    </section>
  );
}


