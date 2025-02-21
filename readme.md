
---

### `README.md`
```md
# 📌 Noasaga API

A free anime API to fetch anime episodes, seasons, and more.

---

## 📌 Base URL

https://noasaga-api-main.onrender.com

---

## 📜 Endpoints

### 🔹 Get All Anime Data  
**Endpoint:**  
```
GET /anime/data
```
**Response Example:**
```json
{
    "anime_list": {
        "The Apothecary Diaries": {
            "anime_id": "67898",
            "Season 1": {
                "season_id": "s1",
                "Episode 1": {
                    "ep_name": "Episode 1",
                    "ep_number": "1",
                    "qualities": {
                        "360p": { "file_url": "https://...", "file_size": "34.41 MB" },
                        "720p": { "file_url": "https://...", "file_size": "95.90 MB" },
                        "1080p": { "file_url": "https://...", "file_size": "169.49 MB" }
                    }
                }
            }
        }
    }
}
```

---

### 🔹 Get Anime by ID  
**Endpoint:**  
```
GET /anime/:anime_id
```
**Example:**  
```
GET /anime/67898
```
**Response Example:**  
```json
{
    "anime_id": "67898",
    "name": "The Apothecary Diaries",
    "seasons": {
        "s1": "Season 1"
    }
}
```

---

### 🔹 Get Specific Season  
**Endpoint:**  
```
GET /anime/:anime_id/:season_id
```
**Example:**  
```
GET /anime/67898/s1
```
**Response Example:**  
```json
{
    "season_id": "s1",
    "episodes": {
        "1": {
            "ep_name": "Episode 1",
            "ep_number": "1",
            "qualities": {
                "360p": { "file_url": "https://...", "file_size": "34.41 MB" },
                "720p": { "file_url": "https://...", "file_size": "95.90 MB" },
                "1080p": { "file_url": "https://...", "file_size": "169.49 MB" }
            }
        }
    }
}
```

---

### 🔹 Get Specific Episode  
**Endpoint:**  
```
GET /anime/:anime_id/:season_id/:episode_number
```
**Example:**  
```
GET /anime/67898/s1/1
```
**Response Example:**  
```json
{
    "ep_name": "Episode 1",
    "ep_number": "1",
    "qualities": {
        "360p": { "file_url": "https://...", "file_size": "34.41 MB" },
        "720p": { "file_url": "https://...", "file_size": "95.90 MB" },
        "1080p": { "file_url": "https://...", "file_size": "169.49 MB" }
    }
}
```

---

## 📌 How to Use  
1. Use `GET /anime/data` to fetch all anime data.  
2. Use `GET /anime/:anime_id` to fetch a specific anime.  
3. Use `GET /anime/:anime_id/:season_id` to fetch a specific season.  
4. Use `GET /anime/:anime_id/:season_id/:episode_number` to fetch a specific episode.  

---

## 📌 Notes  
- Data is updated manually.  
- Anime IDs and Season IDs are case-sensitive.  

---

### ⭐ Made with ❤️ by Noasaga API Team  
```

---