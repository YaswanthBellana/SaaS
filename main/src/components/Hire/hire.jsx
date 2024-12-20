import Navbar from "/src/components/Navbar/navbar.jsx";
import Footer from "/src/components/Footer/footer.jsx";
import React, { useState } from "react";
import "./hire.css";

const Hire = () => {

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phoneNumber: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Our agent will contact you and explain the courses and finalize the fee."
    );
    setFormData({
      name: "",
      company: "",
      phoneNumber: "",
      email: "",
    });
  };

  return (
    <>
      <Navbar />
      <div className="hire">

        <div className="hireSection1">
          <div className="hireSection1part1">
            <div className="hireSection1part11">
              <h1 className="hireSection1part11head1">Fastest Way to hire</h1>
              <h1 className="hireSection1part11head2">Job-Ready Developers at Zero Cost</h1>
            </div>
          </div>
          <div className="hireSection1part2">
            <div className="hireSection1part2card">
              <div className="hireSection1part2card1">
                <img src="src/assets/hire/rupee.png" className="hirecardimage" />
              </div>
              <div className="hireSection1part2card2">
                <h2 className="hireSection1part2card2head">ZERO</h2>
                <p className="hireSection1part2card2para">Hiring fee for recruiters</p>
              </div>
            </div>
            <div className="hireSection1part2card">
              <div className="hireSection1part2card1">
                <img src="src/assets/hire/time.png" className="hirecardimage" />
              </div>
              <div className="hireSection1part2card2">
                <h2 className="hireSection1part2card2head">3-7 Days</h2>
                <p className="hireSection1part2card2para">Time to Hire</p>
              </div>
            </div>
            <div className="hireSection1part2card">
              <div className="hireSection1part2card1">
                <img
                  src="src/assets/hire/trained-graduates.png"
                  className="hirecardimage"
                />
              </div>
              <div className="hireSection1part2card2">
                <h2 className="hireSection1part2card2head">Top 2%</h2>
                <p className="hireSection1part2card2para">Trained by IIT's and IIIT's</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hireSection2">
          <div className="hireSection2contentheadnote">
            <p className="hireSectionhead"><b>Hello Recruiters</b></p>
            <p className="hireSectionhead color">We are thrilled and excited that our students will have the opportunity<br />to be placed in your esteemed company.</p>
          </div>
          <div className="hireSection2content">
            <form  className="formhiring" onSubmit={handleSubmit}>
              <input className="inputhiring" type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
              <input className="inputhiring" type="text" name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} required />
              <input className="inputhiring" type="tel" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} required />
              <input className="inputhiring" type="email" name="email" placeholder="Company Email" value={formData.email} onChange={handleChange} required />
              <button type="submit" className="btnhiring">Submit</button>
            </form>
          </div>
        </div>

        <div className="hireSection3">
          <button className="hireSection3button">Get In Touch</button>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default Hire;
