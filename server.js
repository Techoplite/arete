const express = require("express");
const bodyParser = require("body-parser");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// PostgreSQL connection
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "arete_db",
  password: "@P28mi04or89",
});

// Routes
app.post("/add-ingredient", async (req, res) => {
  const { name, calories } = req.body;

  try {
    await pool.query(
      "INSERT INTO ingredients (name, calories) VALUES ($1, $2)",
      [name, calories]
    );
    res.status(201).send("Ingredient added!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error adding ingredient");
  }
});

app.post("/add-exercise", async (req, res) => {
  const { name, caloriesBurned } = req.body;

  try {
    await pool.query(
      "INSERT INTO exercises (name, calories_burned) VALUES ($1, $2)",
      [name, caloriesBurned]
    );
    res.status(201).send("Exercise added!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error adding exercise");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
