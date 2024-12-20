import React from 'react';
import './review.css';

const Review = () => {
  return (
    <div className="review">
      <h1>What Our Students Say</h1>
      <p>We value the feedback of our students. Here's what they have to say about our courses and instructors:</p>
      <div className="review-card">
        <p>"The web development course was amazing! The hands-on projects helped me build my portfolio and land a job."</p>
        <h4>- John Doe</h4>
      </div>
      <div className="review-card">
        <p>"The instructors were very knowledgeable and supportive. I gained so much confidence in data analysis."</p>
        <h4>- Jane Smith</h4>
      </div>
      <div className="review-card">
        <p>"The graphic design course unleashed my creativity! Highly recommend for anyone looking to enter the design field."</p>
        <h4>- Mike Johnson</h4>
      </div>
    </div>
  );
};

export default Review;
