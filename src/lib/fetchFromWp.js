import axios from "axios";

export const fetchFromWp = async (query = {}) => {
  try {
    const response = await axios.post("/api/graphql", {
      query,
    }, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.data.errors) {
      console.error("GraphQL Errors:", response.data.errors);
      throw new Error("Failed to fetch from WordPress GraphQL");
    }

    return response.data;
  } catch (error) {
    console.error("Axios Error:", error);
    throw error;
  }
};
