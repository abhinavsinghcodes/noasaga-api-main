const fs = require("fs");
const path = require("path");

const dataFilePath = path.join(__dirname, "../data/episodes.json");

// Function to get all anime data
function getAllAnime() {
    try {
        const data = fs.readFileSync(dataFilePath, "utf8");
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading episodes.json:", error);
        return [];
    }
}

// Function to get a specific anime by name
function getAnimeByName(name) {
    const allAnime = getAllAnime();
    return allAnime.find(anime => anime.name.toLowerCase() === name) || null;
}

module.exports = { getAllAnime, getAnimeByName };
