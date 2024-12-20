import React from 'react';
import './courses.css';

const Courses = () => {
  return (
    <div className="courses">
      <h1>Explore Our Courses</h1>
      <p>We offer a variety of courses designed to help you achieve your goals. Whether you're looking to learn programming, develop business skills, or improve your creative abilities, we have something for you.</p>
      <ul>
        <li><strong>Web Development:</strong> Learn HTML, CSS, JavaScript, and React to build modern websites and applications.</li>
        <li><strong>Data Science:</strong> Master Python, R, and machine learning to analyze data and make informed decisions.</li>
        <li><strong>Graphic Design:</strong> Enhance your creativity with Adobe Photoshop, Illustrator, and design principles.</li>
        <li><strong>Marketing:</strong> Understand digital marketing, SEO, and social media strategies.</li>
      </ul>
      <p>Join us today and start your learning journey!</p>
    </div>
  );
};

export default Courses;
