// giphy.ts
import axios from 'axios';
import { ApiResponse } from '../types/api';

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
const BASE_URL = 'https://api.giphy.com/v1/gifs';

// ✅ Debugging API Key
console.log("API Key:", API_KEY);

export const fetchTrendingGifs = async (offset: number = 0): Promise<ApiResponse> => {
  try {
    console.log("📡 Fetching trending GIFs..."); // Debugging log

    const response = await axios.get<ApiResponse>(`${BASE_URL}/trending`, {
      params: {
        api_key: API_KEY,
        limit: 10,
        offset,
      },
    });

    console.log("API Response:", response?.data); // ✅ Debugging API Response

    return response?.data;
  } catch (error) {
    console.error("Error fetching trending GIFs:", error);
    throw new Error("Failed to fetch GIFs.");
  }
};


// ✅ Now, restart your app and check the console (F12 > Console) for these logs:

// "🔑 API Key: YOUR_ACTUAL_KEY_HERE"
// "📡 Fetching trending GIFs..."
// "✅ API Response: { ... }" ✅ (Good sign)
// "❌ Error fetching GIFs: [Error details]" ❌ (Bad sign, we need to fix it)
