const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (CSS)
app.use(express.static(path.join(__dirname, "src")));

// Homepage Route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "src", "home.html"));
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
