import axios from 'axios';
import { ApiResponse } from '../types/api';

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
const BASE_URL = 'https://api.giphy.com/v1/gifs';

export const fetchTrendingGifs = async (offset: number = 0): Promise<ApiResponse> => {
  const response = await axios.get<ApiResponse>(`${BASE_URL}/trending`, {
    params: {
      api_key: API_KEY,
      limit: 10,
      offset,
    },
  });
  return response.data;
};

export const searchGifs = async (query: string, offset: number = 0): Promise<ApiResponse> => {
  const response = await axios.get<ApiResponse>(`${BASE_URL}/search`, {
    params: {
      api_key: API_KEY,
      q: query,
      limit: 10,
      offset,
    },
  });
  return response.data;
};
