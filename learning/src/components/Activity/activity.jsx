import React from 'react';
import Navbar from '../Navbar/navbar.jsx';
import "./activity.css";

const Activity = () => {

    return (
        <div className="window">
            <div className='navbarwebpageoccupation'>
                <Navbar />
            </div>
            <div className='activitywebpageoccupation'>
                <h1 className='aiwebpagemessage'>You will have your AI Tutor soon.</h1>
            </div>
        </div>
    );
};

export default Activity;