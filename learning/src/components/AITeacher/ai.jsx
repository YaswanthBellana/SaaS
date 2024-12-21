import React from 'react';
import Navbar from '../Navbar/navbar.jsx';
import "./ai.css";

const AITeacher = () => {

    return (
        <div className="window">
            <div className='navbarwebpageoccupation'>
                <Navbar />
            </div>
            <div className='aiwebpageoccupation'>
                <h1 className='aiwebpagemessage'>You will have your AI Tutor soon.</h1>
            </div>
        </div>
    );
};

export default AITeacher;