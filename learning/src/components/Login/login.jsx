import React, { useState } from "react";
import Cookies from "js-cookie";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const payload = { email, password };
    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (response.ok) {
        Cookies.set("jwtToken", data.token, { expires: 2 }); // Token stored for 2 days
        console.log("Login Successful", data);
      } else {
        setError(data.error || "Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="loginWebpage">
      <h1 className="loginCompanyhead"><img src="wave.png" className="logincompanyimage" />Wave Tech Student Login</h1>
      <div className="loginContainer">
        <form className="loginForm" onSubmit={handleSubmit}>
          <h2 className="loginTitle">Login</h2>
          <div className="loginField">
            <label className="loginlabel" htmlFor="email">Email:</label>
            <input type="email" id="email" className="loginInputemail" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="loginField">
            <label className="loginlabel" htmlFor="password">Password:</label>
            <div className="passwordContainer">
              <input type={showPassword ? "text" : "password"} id="password" className="loginInputpassword" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className="showPasswordContainer">
              <input type="checkbox" checked={showPassword} onChange={() => setShowPassword(!showPassword)} />
              <label className="showPasswordLabel">Show Password</label>
            </div>
          </div>

          {/* Displaying error message in red */}
          {error && <p className="error-message">{error}</p>}

          <div className="loginwebpagebutton">
            <button type="submit" className="loginSubmitButton">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
