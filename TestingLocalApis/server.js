import express from "express";
import cors from "cors";
import { authors } from "./src/assets/db.js";

const app = express();
const PORT = 5000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Serve static files from the "public" folder
app.use(express.static("public"));

// CORS to allow requests from other origins
app.use(cors());

// GET endpoint to serve the authors array
app.get("/api/authors", (req, res) => {
  res.json(authors);
});

// POST endpoint to add a new author
app.post("/api/authors", (req, res) => {
  const newAuthor = req.body; // Get the new author data from the request body
  authors.push(newAuthor); // Add the new author to the array
  res.status(201).json(newAuthor); // Respond with the new author and a 201 status code
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});