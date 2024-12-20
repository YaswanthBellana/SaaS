import Navbar from "/src/components/Navbar/navbar.jsx";
import Footer from "/src/components/Footer/footer.jsx";
import React, { useState, useEffect } from 'react';
import './home.css';

const Home = () => {

  return (
    <>
      <Navbar />
      <div className="main-container">
        <h1 className="heading">Explore the site</h1>
      </div>
      <Footer />
    </>
  );
};

export default Home;