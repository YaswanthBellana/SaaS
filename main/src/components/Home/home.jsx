import Navbar from "/src/components/Navbar/navbar.jsx";
import Footer from "/src/components/Footer/footer.jsx";
import React from "react";
import "./home.css";

const Home = () => {

  return (
    <>
      <Navbar />
      <div className="main-container">
        <div className="header">
          <div className="inner-header flex">
            <div className="headercard">
              <h1>Welcome to Our Platform</h1>
              <h1>WAVE TECH</h1>
              <p>Empowering you to learn and grow with our expert-curated resources.</p>
              <p>We teach valuable skills and provide job opportunities to kickstart your career.</p>
            </div>
          </div>
          {/* Single Wave */}
          <div>
            <svg
              className="waves"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shapeRendering="auto"
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g className="parallax">
                <use xlinkHref="#gentle-wave" x="48" y="0" fill="#fff" />
              </g>
            </svg>
          </div>
          {/* Wave End */}
        </div>
      </div>
      
      <div className="imageInputHome">
        <h1 className="comapnieshiredheading">Featured In</h1>
        <img className="featuredImage" src="src/assets/featured.png" />
      </div>
      
      <div className="imageInputHome">
        <h2 className="learnthebestfrom">LEARN THE BEST FROM THE ALUMNI OF</h2>
        <img className="featuredImage" src="src/assets/alumini.png" />
        <h3>and many more...</h3>
      </div>

      <div className="betweenblockdivs">
        <h1 className="betweenblockdivsheading">Here are our recent PODCASTS</h1>

        <div className="betweenblockdivsminisection">
          <div className="betweenblockdivsminiCard">
            <img src="src/assets/man.png" className="betweenblockdivsminiCardImage" />
            <div className="betweenblockdivsminiCarddetails">
              <h4 className="betweenblockdivsminiCardHead">Mr. Ram</h4>
              <p className="betweenblockdivsminiCardPara">Data Scientist, IBM</p>
              <p className="betweenblockdivsminiCardPara">IIT Madras</p>
            </div>
          </div>
          <div className="betweenblockdivsminiCard">
            <img src="src/assets/man.png" className="betweenblockdivsminiCardImage" />
            <div className="betweenblockdivsminiCarddetails">
              <h4 className="betweenblockdivsminiCardHead">Mr. Rahul</h4>
              <p className="betweenblockdivsminiCardPara">SEO, Google</p>
              <p className="betweenblockdivsminiCardPara">IIT Kharagpur</p>
            </div>
          </div>
          <div className="betweenblockdivsminiCard">
            <img src="src/assets/women.png" className="betweenblockdivsminiCardImage women" />
            <div className="betweenblockdivsminiCarddetails">
              <h4 className="betweenblockdivsminiCardHead">Mrs. Sema</h4>
              <p className="betweenblockdivsminiCardPara">SDE, Acko</p>
              <p className="betweenblockdivsminiCardPara">IIT Mumbai</p>
            </div>
          </div>
        </div>

      </div>

      <div className="imageInputHome gap">
        <h2 className="comapnieshiredheading">100+ companies hired our students</h2>
        <img className="featuredImage" src="src/assets/hiringcompanies.png" />
      </div>
      <div className="imageInputHome gap">
        <button className="callbackbutton">Request a Callback</button>
      </div>
      <Footer />
    </>
  );
};

export default Home;