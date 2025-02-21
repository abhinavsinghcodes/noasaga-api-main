const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, "src")));
app.use(express.static(path.join(__dirname))); // Serves CSS, JS, etc.

// Homepage route
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "home.html"));
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
