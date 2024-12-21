import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/navbar.jsx';
import "./profile.css";

const Profile = () => {

    const [profileData, setProfileData] = useState({
        firstName: '',
        lastName: '',
        fatherName: '',
        motherName: '',
        phoneNumber: '',
        email: '',
        gender: '',
        dob: '',
        linkedIn: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        pincode: '',
        collegeName: '',
        branch: '',
        collegeState: '',
    });

    useEffect(() => {
        fetch('http://localhost:4000/profileFetch')
          .then((response) => response.json())
          .then((data) => setProfileData(data))
          .catch((error) => console.error('Error fetching profile data:', error));
    }, []);
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData((prevData) => ({ ...prevData, [name]: value }));
    };
    
    const handleSaveChanges = () => {
        fetch('http://localhost:4000/profileEdit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(profileData),
        })
          .then((response) => {
            if (response.ok) {
              alert('Profile updated successfully!');
            } else {
              alert('Failed to update profile.');
            }
          })
          .catch((error) => console.error('Error updating profile:', error));
    };

    return (
        <div className="window">
            <div className='navbarwebpageoccupation'>
                <Navbar />
            </div>

            <div className='profilewebpageoccupation'>
              <div className='profilesectionsalign'>
                <div className='profilewebpageoccupationcontainer'>
                    <div class="profilepageminicontainer">
                        <input className='profilepageminicontainer1input' type="text" placeholder="First Name" name="firstName" value={profileData.firstName} onChange={handleInputChange} />
                        <input className='profilepageminicontainer1input' type="text" placeholder="Last Name" name="lastName" value={profileData.lastName} onChange={handleInputChange} />
                    </div>
                    <div class="profilepageminicontainer">
                        <input className='profilepageminicontainer1input' type="text" placeholder="Father's Name" name="fatherName" value={profileData.fatherName} onChange={handleInputChange} />
                        <input className='profilepageminicontainer1input' type="text" placeholder="Mother's Name" name="motherName" value={profileData.motherName} onChange={handleInputChange} />
                    </div>
                    <div class="profilepageminicontainer">
                        <input className='profilepageminicontainer1input' type="text" placeholder="Phone Number" name="phoneNumber" value={profileData.phoneNumber} onChange={handleInputChange} />
                        <input className='profilepageminicontainer1input' type="email" placeholder="Email" name="email" value={profileData.email} onChange={handleInputChange} />
                    </div>
                    <div class="profilepageminicontainer">
                        <select className="profilepageminicontainer1input" name="gender" value={profileData.gender} onChange={handleInputChange}>
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        <input className='profilepageminicontainer1input' type="date" placeholder="DOB" name="dob" value={profileData.dob} onChange={handleInputChange} />
                    </div>
                    <input className='profilepageminicontainer2input' type="url" placeholder="LinkedIn Profile" name="linkedIn" value={profileData.linkedIn} onChange={handleInputChange} />
                </div>
                <div className='profilewebpageoccupationcontainer'>
                    <input className='profilepageminicontainer2input' type="text" placeholder="Address Line 1" name="addressLine1" value={profileData.addressLine1} onChange={handleInputChange} />
                    <input className='profilepageminicontainer2input' type="text" placeholder="Address Line 2" name="addressLine2" value={profileData.addressLine2} onChange={handleInputChange} />
                    <div class="profilepageminicontainer">
                        <input className='profilepageminicontainer1input' type="text" placeholder="City" name="city" value={profileData.city} onChange={handleInputChange} />
                        <input className='profilepageminicontainer1input' type="text" placeholder="State" name="state" value={profileData.state} onChange={handleInputChange} />
                    </div>
                    <div class="profilepageminicontainer">
                        <input className='profilepageminicontainer1input' type="text" placeholder="Country" name="country" value={profileData.country} onChange={handleInputChange} />
                        <input className='profilepageminicontainer1input' type="text" placeholder="Pincode" name="pincode" value={profileData.pincode} onChange={handleInputChange} />
                    </div>
                </div>
                <div className='profilewebpageoccupationcontainer'>
                    <input className='profilepageminicontainer2input' type="text" placeholder="College Name" name="collegeName" value={profileData.collegeName} onChange={handleInputChange} />
                    <input className='profilepageminicontainer2input' type="text" placeholder="Branch" name="branch" value={profileData.branch} onChange={handleInputChange} />
                    <input className='profilepageminicontainer2input' type="text" placeholder="College State" name="collegeState" value={profileData.collegeState} onChange={handleInputChange} />
                </div>

                <div className='profilepagebuttoncontainer'>
                    <button className='profilepagesavechanges' onClick={handleSaveChanges}>Save Changes</button>
                </div>
              </div>
            </div>

        </div>
    );
};

export default Profile;