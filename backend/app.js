const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const app = express();
const cors = require("cors");
const port = 4000;

const db = new sqlite3.Database("./database.db", (err) => {
  if (err) {
    console.error("Error connecting to SQLite database:", err);
    return;
  }
  console.log("Connected to SQLite database");
});

app.use(express.json());
app.use(cors());

// Login route
app.post("/login", (request, response) => {
  const { email, password } = request.body;
  if (!email || !password) {
    return response
      .status(400)
      .json({ error: "Email and Password are required" });
  }
  const query = `
    SELECT email, userid, password, auth_token
    FROM users
    WHERE email = ?
  `;
  db.get(query, [email], (err, row) => {
    if (err) {
      console.error("Error executing query:", err);
      return response.status(500).json({ error: "Internal Server Error" });
    }
    if (!row) {
      return response.status(401).json({ error: "Invalid email" });
    }
    if (row.password !== password) {
      return response.status(401).json({ error: "Invalid password" });
    }
    // Return the auth_token if email and password match
    response.json({ auth_token: row.auth_token });
  });
});




// Profile route
app.get("/profile", (request, response) => {
  const { userid } = request.query;
  if (!userid) {
    return response.status(400).json({ error: "userid is required" });
  }
  const query1 = `SELECT * FROM profile WHERE userid = ?;`;
  const query2 = `SELECT * FROM education WHERE userid = ?;`;
  db.get(query1, [userid], (err, profileRow) => {
    if (err) {
      console.error("Error fetching profile:", err);
      return response.status(500).json({ error: "Internal Server Error" });
    }
    if (!profileRow) {
      return response.status(404).json({ error: "Profile not found" });
    }
    db.get(query2, [userid], (err, educationRow) => {
      if (err) {
        console.error("Error fetching education:", err);
        return response.status(500).json({ error: "Internal Server Error" });
      }
      if (!educationRow) {
        return response
          .status(404)
          .json({ error: "Education details not found" });
      }
      const profileAndEducation = { ...profileRow, education: educationRow };
      response.json(profileAndEducation);
    });
  });
});




// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
