const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());


// Secret key (keep it safe in env variable in real apps)
const SECRET_KEY = "mySuperSecretKey";

// Route 1: Login -> generate JWT
app.post("/", (req, res) => {
  // Normally, you'd verify user from DB
  const user = {
    id: 1,
    username: "piyush",
    role: "admin"
  };

  // Create JWT with payload + expiry
  const token = jwt.sign(user, SECRET_KEY, { expiresIn: "1h" });

  res.json({ token });
});

// ✅ Middleware: Verify JWT
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // "Bearer <token>"

  if (!token) return res.sendStatus(401); // Unauthorized

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403); // Forbidden (invalid/expired token)
    req.user = user; // attach user data to request
    next();
  });
}

// ✅ Route 2: Protected route
app.get("/profile", authenticateToken, (req, res) => {
  res.json({
    message: "Welcome to your profile!",
    user: req.user
  });
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
