import React from "react";

function Gallery() {
  // Replace with your own images/videos
  const photos = [
    { src: "/gallery/photo1.jpg", alt: "Moving day" },
    { src: "/gallery/photo2.jpg", alt: "Team at work" },
    // Add more as needed
  ];

  return (
    <section className="gallery-section">
      <h2>Gallery: Our Past Moves</h2>
      <div className="gallery-grid">
        {photos.map((photo, idx) => (
          <img key={idx} src={photo.src} alt={photo.alt} className="gallery-photo" />
        ))}
      </div>
      {/* For videos, embed YouTube or local videos similarly */}
    </section>
  );
}

export default Gallery;
