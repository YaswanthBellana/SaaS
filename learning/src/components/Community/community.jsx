import React from 'react';
import Navbar from '../Navbar/navbar.jsx';
import "./community.css";

const Community = () => {

    return (
        <div className="window">
            <div className='navbarwebpageoccupation'>
                <Navbar />
            </div>
            <div className='communitywebpageoccupation'>
                <h1 className='communityhead'>Community Members</h1>
                <img src='src/assets/courses/community.png' className='communitypicture' />
            </div>
        </div>
    );
};

export default Community;