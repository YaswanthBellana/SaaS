import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <div className="navbarcompanyname">
                <img src="src/assets/wave.png" alt="Company Icon" className="navbarcompanyicon" />
                <h5 className="navbarcompanyhead">WaveTech</h5>
            </div>
            <div className="navbaritem">
                <div className="navbarcard">
                    <NavLink to="/" activeClassName="active">
                    <div className='navbarcard'>
                        <img src="src/assets/dashboard.png" alt="Dashboard Icon" className="navbaricons" />
                        <h5 className="navbarhead">Dashboard</h5>
                    </div>
                    </NavLink>
                </div>
                <div className="navbarcard">
                    <NavLink to="/profile" activeClassName="active">
                    <div className='navbarcard'>
                        <img src="src/assets/profile.png" alt="Profile Icon" className="navbaricons" />
                        <h5 className="navbarhead">Profile</h5>
                    </div>
                    </NavLink>
                </div>
                <div className="navbarcard">
                    <NavLink to="/courses" activeClassName="active">
                    <div className='navbarcard'>
                        <img src="src/assets/courses.png" alt="Courses Icon" className="navbaricons" />
                        <h5 className="navbarhead">Courses</h5>
                    </div>
                    </NavLink>
                </div>
                <div className="navbarcard">
                    <NavLink to="/mycourse" activeClassName="active">
                    <div className='navbarcard'>
                        <img src="src/assets/mycourse.png" alt="My Courses Icon" className="navbaricons" />
                        <h5 className="navbarhead">My Courses</h5>
                    </div>
                    </NavLink>
                </div>
                <div className="navbarcard">
                    <NavLink to="/ai_teacher" activeClassName="active">
                    <div className='navbarcard'>
                        <img src="src/assets/ai.png" alt="AI Teacher Icon" className="navbaricons" />
                        <h5 className="navbarhead">AI Teacher</h5>
                    </div>
                    </NavLink>
                </div>
                <div className="navbarcard">
                    <NavLink to="/job_board" activeClassName="active">
                    <div className='navbarcard'>
                        <img src="src/assets/job.png" alt="Job Portal Icon" className="navbaricons" />
                        <h5 className="navbarhead">Job Portal</h5>
                    </div>
                    </NavLink>
                </div>
                <div className="navbarcard">
                    <NavLink to="/activity" activeClassName="active">
                    <div className='navbarcard'>
                        <img src="src/assets/activity.png" alt="Activity Icon" className="navbaricons" />
                        <h5 className="navbarhead">Activity</h5>
                    </div>
                    </NavLink>
                </div>
                <div className="navbarcard">
                    <NavLink to="/community" activeClassName="active">
                    <div className='navbarcard'>
                        <img src="src/assets/community.png" alt="Community Icon" className="navbaricons" />
                        <h5 className="navbarhead">Community</h5>
                    </div>
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default Navbar;