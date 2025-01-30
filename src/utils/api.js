import axios from "axios";

const API_KEY = "90797b6c84msh84adfb63092f1ddp18300ajsn9e94b087300c";
const BASE_URL = "https://bayut.p.rapidapi.com";

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    "X-RapidAPI-Key": API_KEY,
  },
});

export const fetchData = async () => {
  try {
    const response = await apiClient.get("/properties/list", {
      params: {
        locationExternalIDs: "5002, 6020",
        purpose: "for-rent",
        hitsPerPage: 12,
        roomsMin:2
      },
    });
    return response.data.hits;
  } catch (error) {
    error.value = "Failed to fetch properties..";

    throw new Error(error);
  }
};
