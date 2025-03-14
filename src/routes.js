const express = require("express");
const router = express.Router();
const episodesData = require("../data/episodes.json");

// Ensure anime_list exists
const animeList = episodesData.anime_list || {};

// ✅ Get all anime data
router.get("/anime/data", (req, res) => {
    res.json(animeList);
});

// ✅ Get anime by ID
router.get("/anime/:animeId", (req, res) => {
    const { animeId } = req.params;
    let foundAnime = null;

    // Search for anime by ID
    for (const animeName in animeList) {
        if (animeList[animeName].anime_id === animeId) {
            foundAnime = { name: animeName, ...animeList[animeName] };
            break;
        }
    }

    if (!foundAnime) {
        return res.status(404).json({ error: "Anime not found" });
    }

    res.json(foundAnime);
});

// ✅ Get season by season ID
router.get("/anime/:animeId/:seasonId", (req, res) => {
    const { animeId, seasonId } = req.params;
    let foundSeason = null;

    for (const animeName in animeList) {
        const anime = animeList[animeName];

        if (anime.anime_id === animeId) {
            for (const seasonName in anime) {
                const season = anime[seasonName];

                if (typeof season === "object" && season.season_id === seasonId) {
                    foundSeason = {
                        anime_name: animeName,
                        season_name: seasonName,
                        episodes: season.episodes || {}
                    };
                    break;
                }
            }
        }
    }

    if (!foundSeason) {
        return res.status(404).json({ error: "Season not found" });
    }

    res.json(foundSeason);
});

// ✅ Get episode by episode number
router.get("/anime/:animeId/:seasonId/:episodeNumber", (req, res) => {
    const { animeId, seasonId, episodeNumber } = req.params;
    let foundEpisode = null;

    for (const animeName in animeList) {
        const anime = animeList[animeName];

        if (anime.anime_id === animeId) {
            for (const seasonName in anime) {
                const season = anime[seasonName];

                if (typeof season === "object" && season.season_id === seasonId && season.episodes) {
                    for (const episodeName in season.episodes) {
                        const episode = season.episodes[episodeName];

                        if (episode.ep_number === episodeNumber) {
                            foundEpisode = {
                                anime_name: animeName,
                                season_name: seasonName,
                                episode_name: episodeName,
                                ...episode
                            };
                            break;
                        }
                    }
                }
            }
        }
    }

    if (!foundEpisode) {
        return res.status(404).json({ error: "Episode not found" });
    }

    res.json(foundEpisode);
});

module.exports = router;
