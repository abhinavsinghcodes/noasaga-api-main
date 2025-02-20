const express = require("express");
const { getAllAnime, getAnimeByName } = require("./utils");

const router = express.Router();

// Endpoint to get all anime data
router.get("/data", (req, res) => {
    const data = getAllAnime();
    res.json(data);
});

// Endpoint to get anime by name
router.get("/:name", (req, res) => {
    const animeName = req.params.name.toLowerCase();
    const anime = getAnimeByName(animeName);
    
    if (anime) {
        res.json(anime);
    } else {
        res.status(404).json({ error: "Anime not found" });
    }
});

module.exports = router;
