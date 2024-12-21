import React from 'react';
import Navbar from '../Navbar/navbar.jsx';
import "./courses.css";

const Courses = () => {

    return (
        <div className="window">
            <div className='navbarwebpageoccupation'>
                <Navbar />
            </div>
            <div className="coursemaincontentblog">
                <h1 className="courseheading">Courses</h1>
                <div className="coursesection">
                    <div className="courseCard">
                        <img src="src/assets/courses/aiml.png" className="courseCardImage" />
                        <h4 className="courseContentHead">AI / ML</h4>
                        <div className="courseCardContent">
                            <p className="courseContentPara"><b>Price:</b> ₹9,999</p>              
                            <p className="courseContentPara"><b>Skills:</b> Basics Python, Python modules, AI intoduction, ML models</p>
                        </div>
                    </div>
                    <div className="courseCard">
                        <img src="src/assets/courses/cyber.png" className="courseCardImage" />
                        <h4 className="courseContentHead">Cyber Security</h4>
                        <div className="courseCardContent">
                            <p className="courseContentPara"><b>Price:</b> ₹15,999</p>              
                            <p className="courseContentPara"><b>Skills:</b> Computer Basics, OS, Cyber Security Types, Cyber Tools</p>
                        </div>
                    </div>
                    <div className="courseCard">
                        <img src="src/assets/courses/javafullstack.png" className="courseCardImage" />
                        <h4 className="courseContentHead">Java Full Stack</h4>
                        <div className="courseCardContent">
                            <p className="courseContentPara"><b>Price:</b> ₹9,999</p>              
                            <p className="courseContentPara"><b>Skills:</b> Java, Html, CSS, JavaScript, SQL</p>
                        </div>
                    </div>
                    <div className="courseCard">
                        <img src="src/assets/courses/webdevelopment.png" className="courseCardImage" />
                        <h4 className="courseContentHead">Web Development</h4>
                        <div className="courseCardContent">
                            <p className="courseContentPara"><b>Price:</b> ₹8,999</p>              
                            <p className="courseContentPara"><b>Skills:</b> Html, CSS, JavaScript, React.Js, Node.Js, SQL, MongoDB</p>
                        </div>
                    </div>
                    <div className="courseCard">
                        <img src="src/assets/courses/datascience.png" className="courseCardImage" />
                        <h4 className="courseContentHead">Data Science</h4>
                        <div className="courseCardContent">
                            <p className="courseContentPara"><b>Price:</b> ₹19,999</p>              
                            <p className="courseContentPara"><b>Skills:</b> Python, PowerBI, Algorithms</p>
                        </div>
                    </div>
                    <div className="courseCard">
                        <img src="src/assets/courses/business.png" className="courseCardImage" />
                        <h4 className="courseContentHead">Business Management</h4>
                        <div className="courseCardContent">
                            <p className="courseContentPara"><b>Price:</b> ₹5,999</p>              
                            <p className="courseContentPara"><b>Skills:</b> Market Analysis, Market MindSet, Vision</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;