import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

// CORS to allow requests from other origins
app.use(cors());

// Import your authors data
import { authors } from "./src/assets/db.js"; // Make sure the file extension is .js

// Endpoint to serve the authors array
app.get("/api/authors", (req, res) => {
  res.json(authors);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});