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
                <div className='dashboardcardcontainer'>
                    <div className='dashboardcards'>
                        <img className='dashboardprofilepicture' src='src/assets/profile.png' />
                        <div className='dashboardstatus'>
                            <div className='dashboardcoursecomplete'>
                                <span className='dashboardratings'>4/5</span>
                                <span className='dashboardcoursehead'>Skill Ratings</span>
                            </div>
                            <div className='dashboardcoursecomplete'>
                                <span className='dashboardratings'>71%</span>
                                <span className='dashboardcoursehead'>Course Complete</span>
                            </div>
                        </div>
                    </div>
                    <div className='dashboardcards'>
                        <h2 className='dashboardnotification'>MY DETAILS</h2>
                        <p className='dashboardprofiledetails'>Course: Web Development</p>
                        <p className='dashboardprofiledetails'>Your Name: BELLANA YASWANTH</p>
                        <p className='dashboardprofiledetails'>Father Name: B KRISHNA RAO</p>
                        <p className='dashboardprofiledetails'>Mother Name: B KUSUMA</p>
                        <p className='dashboardprofiledetails'>Phone number: +91 77801 57464</p>
                        <p className='dashboardprofiledetails'>Email: yaswanthXXXX@gmail.com</p>
                    </div>
                    <div className='dashboardcards'>
                        <h2 className='dashboardnotification'>NOTIFICATIONS</h2>
                        <ul className='notificationslist'>
                            <li className='dashboardnotificationitem'>You have a podcast with the </li>
                            <li className='dashboardnotificationitem'>You have a skill test on 29th Dec. All the best</li>
                            <li className='dashboardnotificationitem'>You are ratings graph decreased compared to last week.</li>
                        </ul>
                    </div>
                    <div className='dashboardcards'>
                    <h2 className='dashboardnotification'>REMAINDERS</h2>
                        <ul className='notificationslist'>
                            <li className='dashboardnotificationitem'>Complete the activity of that podcast.</li>
                            <li className='dashboardnotificationitem'>Exam On 29th Dec.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;