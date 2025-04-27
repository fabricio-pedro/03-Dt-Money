import axios from "axios";

export const client = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 2000, // Set a timeout if needed
  headers: {
    "Content-Type": "application/json",
  },
});
