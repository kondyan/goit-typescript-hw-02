// axios, async function which fetches and returns data according to params and query
import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers = {
  Authorization: `Client-ID ${import.meta.env.VITE_API_ACCESS_KEY}`,
};
const params = {
  per_page: 12,
};

export async function fetchQuery(query, page = 1) {
  try {
    params.query = query;
    params.page = page;
    const response = await axios.get("search/photos", { params });
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}
