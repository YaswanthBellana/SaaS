import Navbar from "/src/components/Navbar/navbar.jsx";
import Footer from "/src/components/Footer/footer.jsx";

import React from 'react';
import './register.css';

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to a server)
    console.log('Form submitted');
  };

  return (
    <>
    <Navbar />
    <div className="registerClass">
      <div className="box-canvas">
        <div className="scene-wrapper">
          {/* Ant 1 */}
          <div className="ant-wrapper one">
            <div className="box">Web Developer</div>
            <div className="body-left"></div>
            <div className="body-middle"></div>
            <div className="body-right"></div>
          </div>

          {/* Ant 2 */}
          <div className="ant-wrapper two">
            <div className="box">Data Science</div>
            <div className="body-left"></div>
            <div className="body-middle"></div>
            <div className="body-right"></div>
          </div>

          {/* Ant 3 */}
          <div className="ant-wrapper three">
            <div className="box">Java Full Stack</div>
            <div className="body-left"></div>
            <div className="body-middle"></div>
            <div className="body-right"></div>
          </div>

          {/* Ant 4 */}
          <div className="ant-wrapper four">
            <div className="box">Cyber Security</div>
            <div className="body-left"></div>
            <div className="body-middle"></div>
            <div className="body-right"></div>
          </div>

          {/* Ant 5 */}
          <div className="ant-wrapper five">
            <div className="box">AI/ML</div>
            <div className="body-left"></div>
            <div className="body-middle"></div>
            <div className="body-right"></div>
          </div>

          {/* Ant 6 */}
          <div className="ant-wrapper six">
            <div className="box">Python</div>
            <div className="body-left"></div>
            <div className="body-middle"></div>
            <div className="body-right"></div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '80px' }}></div>

      <div className="infoText">
        <p>Hello kid, getting confused what to study?
          <br/>
          Register the form below and book a free class to understand
          <br/>
          the latest technology and our courses.
          </p>
      </div>

      <form className="registerForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="studentName">Student Name</label>
          <input type="text" id="studentName" name="studentName" required />
        </div>
        <div className="form-group">
          <label htmlFor="fatherName">Father's Name</label>
          <input type="text" id="fatherName" name="fatherName" required />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="altPhoneNumber">Alternative Phone Number</label>
          <input type="tel" id="altPhoneNumber" name="altPhoneNumber" required />
        </div>
        <button className="registerbutton" type="submit">Submit</button>
      </form>
    </div>
    <Footer />
    </>

  );
};

export default Register;
