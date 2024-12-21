import React from 'react';
import Navbar from '../Navbar/navbar.jsx';
import Cookies from 'js-cookie';
import './mycourse.css';

const MyCourse = () => {
    const jwtToken = Cookies.get('jwt');
    let cookieString = '100000';
    if (jwtToken) {
        cookieString = jwtToken;
    }
    const courses = [
        {
            id: 1,
            name: 'Web Development',
            price: '₹8,999',
            skills: 'Html, CSS, JavaScript, React.Js, Node.Js, SQL, MongoDB',
            image: 'src/assets/courses/webdevelopment.png',
        },
        {
            id: 2,
            name: 'AI / ML',
            price: '₹9,999',
            skills: 'Basics Python, Python modules, AI intoduction, ML models',
            image: 'src/assets/courses/aiml.png',
        },
        {
            id: 3,
            name: 'Data Science',
            price: '₹19,999',
            skills: 'Python, PowerBI, Algorithms',
            image: 'src/assets/courses/datascience.png',
        },
        {
            id: 4,
            name: 'Java Full Stack',
            price: '₹9,999',
            skills: 'Java, Html, CSS, JavaScript, SQL',
            image: 'src/assets/courses/javafullstack.png',
        },
        {
            id: 5,
            name: 'Cybersecurity',
            price: '₹15,999',
            skills: 'Computer Basics, OS, Cyber Security Types, Cyber Tools, Penetration Testing',
            image: 'src/assets/courses/cyber.png',
        },
        {
            id: 6,
            name: 'Business Management',
            price: '₹5,999',
            skills: 'Market Analysis, Market MindSet, Vision',
            image: 'src/assets/courses/business.png',
        },
    ];

    return (
        <div className="window">
            <div className='navbarwebpageoccupation'>
                <Navbar />
            </div>
            <div className="mycoursewebpageoccupation">
                <h2 className='courseheading'>My Courses</h2>
                <div className="courseCardsContainer">
                    {courses.map((course, index) => {
                        // Check if the corresponding cookie value is '1' to show the card
                        if (cookieString[index] === '1') {
                            return (
                                <div className="courseCard" key={course.id}>
                                    <img src={course.image} alt={course.name} className="courseCardImage" />
                                    <h4 className="courseContentHead">{course.name}</h4>
                                    <div className="courseCardContent">
                                        <p className="courseContentPara"><b>Skills:</b> {course.skills}</p>
                                    </div>
                                    <div className='mycoursebuttoncontainer'><button className='mycoursebutton'>Continue learning</button></div>
                                </div>
                            );
                        }
                        return null; // Don't render anything if the cookie value is '0'
                    })}
                </div>
            </div>
        </div>
    );
};

export default MyCourse;