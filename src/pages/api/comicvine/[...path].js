require('dotenv').config();
import axios from "axios";



// const API_KEY = "88b9ce047cccc910a8e2def40bfccbe79ef5614b";
// const BASE_URL = "https://www.comicvine.gamespot.com/api/";

const API_KEY = process.env.API_KEY;  
const BASE_URL = process.env.BASE_URL;

export default async function handler(req, res) {
  
  try {
    const { path } = req.query;
    const apiPath = Array.isArray(path) ? path.join('/') : path;
    
    // Add default filter for Marvel movies
    const params = {
      ...req.query,
      api_key: API_KEY,
      format: 'json',
      // filter: 'name:marvel',
       // This is the only significant change
    };

    const response = await axios.get(`${BASE_URL}${apiPath}`, {
      params,
      headers: {
        "User-Agent": "NextMarvelTest/1.0",
      }
    });
    
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Comic Vine API error:", error);
    res.status(500).json({ error: "Failed to fetch Marvel movies data" });
  }
}