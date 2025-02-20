const express = require("express");
const { getAllAnime, getAnimeByName } = require("./utils");

const router = express.Router();

// Endpoint to get all anime data
router.get("/data", (req, res) => {
    const data = getAllAnime();
    res.json(data);
});

// Endpoint to get anime by name
router.get("/anime/:name", (req, res) => {
    let animeName = req.params.name.replace(/[-_]/g, " "); // Convert hyphens/underscores to spaces

    let anime = data.find(a => a.name.toLowerCase() === animeName.toLowerCase());

    if (anime) {
        res.json(anime);
    } else {
        res.status(404).json({ error: "Anime not found" });
    }
});


module.exports = router;
