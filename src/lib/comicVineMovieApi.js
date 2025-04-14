import axios from "axios";

const BASE_URL = "/api/comicvine/"; // Keeping your original base URL

const comicVine = axios.create({
  baseURL: BASE_URL,
  headers: {
    "User-Agent": "NextMarvelTest/1.0", 
    Accept: "application/json",
  },
});

export const fetchMovies = async (limit = 10) => {
  try {
    const response = await comicVine.get("movies/", {
      params: {
        limit,
        // sort: 'release_date:desc',
        filter: 'name:marvel',
        // field_list: 'id,name,image,description,deck,release_date,runtime',
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};