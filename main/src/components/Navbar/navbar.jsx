import { useState, useEffect } from "react";
import { Events } from "react-scroll";
import { Link, NavLink, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import Cookies from "js-cookie";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});
    return () => {
      window.removeEventListener("scroll", handleScroll);
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const logout = () => {
    setMenuOpen(false);
    localStorage.removeItem("jwt_token");
  };

  return (
    <div className="navbar prevent-select">
      <Link to="/" className="link-text">
        <div className="nav-logo-header">
          <img src="./wave.png" alt="logo" className="nav-title" />
          <h1 className="nav-logo-heading"><span className="wavespan">Wave</span>Tech</h1>
        </div>
      </Link>
      <div className="menu" onClick={toggleMenu}>
        <RxHamburgerMenu style={{ fontSize: "32px" }} />
      </div>
      <div className={`overlays ${menuOpen ? "show" : ""}`} onClick={toggleMenu}></div>
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <NavLink to="/" onClick={toggleMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/courses" onClick={toggleMenu}>
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink to="/review" onClick={toggleMenu}>
            Reviews
          </NavLink>
        </li>
        <li>
          <NavLink to="/hire" onClick={toggleMenu}>
            Hire Students
          </NavLink>
        </li>
        <li>
            <NavLink to="http://localhost:5000" onClick={toggleMenu}>
              Student Login
            </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;