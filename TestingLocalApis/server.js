import express from "express";
import cors from "cors";
import { authors } from "./src/assets/db.js";

const app = express();
const PORT = 5000;

app.use(express.json());

app.use(express.static("public"));

app.use(cors());

app.get("/api/authors", (req, res) => {
  res.json(authors);
});

app.post("/api/authors", (req, res) => {
  const newAuthor = req.body;
  authors.push(newAuthor);
  res.status(201).json(newAuthor); 
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});