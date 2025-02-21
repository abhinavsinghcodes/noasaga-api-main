const express = require("express");
const path = require("path");
const routes = require("./routes"); // ✅ Fixed import (same folder)

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Serve static files (CSS, etc.)
app.use(express.static(path.join(__dirname))); // ✅ Now correctly serves home.css

// Use routes
app.use("/", routes);

// Homepage route (serves home.html)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
