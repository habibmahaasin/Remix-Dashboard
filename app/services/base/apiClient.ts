import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const handleApiError = (error: any) => {
  throw new Error(
    error.response?.data?.message || "An error occurred while fetching data"
  );
};
