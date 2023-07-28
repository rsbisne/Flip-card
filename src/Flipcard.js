import React from "react";
const Flipcard = () => {
  return (
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="/Demonslayer.png" alt="Front" />
        </div>
        <div class="flip-card-back">
          <div class="card-content">
            <h2>Demo Card</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              auctor, eros at posuere fringilla, turpis tortor efficitur velit,
              at fringilla tortor magna id quam.
            </p>
            <a href=" " class="btn">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flipcard;
