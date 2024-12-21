import React from 'react';
import Navbar from '../Navbar/navbar.jsx';
import "./home.css";

const Home = () => {

    return (
        <div className="window">
            <div className='navbarwebpageoccupation'>
                <Navbar />
            </div>
            <div className='homewebpageoccupation'>
                <h1 className='aiwebpagemessage'>You will have your AI Tutor soon.</h1>
            </div>
        </div>
    );
};

export default Home;