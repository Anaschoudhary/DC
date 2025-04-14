import axios from "axios";

const BASE_URL = "/api/comicvine/"; // Keeping your original base URL

const comicVine = axios.create({
  baseURL: BASE_URL,
  headers: {
    "User-Agent": "NextMarvelTest/1.0", 
    Accept: "application/json",
  },
});

 export const fetchComics = async ( selectedVillain ) => {
  try {
    const response = await comicVine.get("search/", {
      params: {
        //limit,
        //sort: 'release_date:desc',
        //filter: 'cover_date:2021-01-01|2021-12-31',
        //field_list: 'id,name,image,description,real_name,publisher,gender',
        query: "batman " + selectedVillain,
        resources: "issue", 
      },
    });
    // const allCharacters = response.data.results || [];
    // const dcCharacters = allCharacters.filter(
    //   (char) => char.publisher.id === 10
    // );
     return response.data.results;
     //return dcCharacters.slice(0, 10);
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};