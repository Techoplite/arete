const express = require("express");
const bodyParser = require("body-parser");
const { Pool } = require("pg");
const cors = require("cors"); // Import CORS middleware
const { log } = require("console");

// Create the Express app
const app = express();
const port = 3000;

// Middleware to handle CORS
app.use(cors()); // Enable CORS for all routes

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// PostgreSQL connection setup
const pool = new Pool({
  user: "postgres", // Replace with your PostgreSQL username
  host: "localhost",
  database: "arete_db", // Database name that doesn’t exist yet
  password: "@P28mi04or89", // Replace with your PostgreSQL password
  port: 5432, // Default PostgreSQL port
});

// Create table if it doesn't exist
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS calories_log (
    id SERIAL PRIMARY KEY,
    calories INTEGER NOT NULL,
    type VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

pool
  .query(createTableQuery)
  .then(() => {
    console.log("Table 'calories_log' checked/created successfully.");
  })
  .catch((err) => {
    console.error("Error creating table:", err.message);
  });

// Route to add calories entry
app.post("/add-calories-entry", async (req, res) => {
  const { calories, operator } = req.body;

  // Validate the calories input
  if (!calories || isNaN(calories)) {
    return res.status(400).send("Invalid calories input");
  }

  const client = await pool.connect();

  try {
    // await client.query("BEGIN"); // Start transaction

    // Insert the new row and return the created_at timestamp
    const insertResult = await client.query(
      `INSERT INTO calories_log (calories, type)
     VALUES ($1, $2)
     RETURNING calories, created_at`,
      [operator + parseInt(calories, 10), "in"]
    );

    const insertedCreatedAt = insertResult.rows[0].created_at;

    // Calculate the total calories including the new row
    const result = await client.query(
      `SELECT SUM(calories) AS total_calories
     FROM calories_log
     WHERE DATE(created_at) = CURRENT_DATE
        OR created_at = $1`,
      [insertedCreatedAt] // Ensure the newly inserted row is included
    );

    // await client.query("COMMIT"); // Commit the transaction

    console.log(
      "result.rows[0].total_calories :>> ",
      result.rows[0].total_calories
    );

    return res
      .status(200)
      .json({ totalCalories: result.rows[0].total_calories });
  } catch (error) {
    await client.query("ROLLBACK"); // Rollback in case of error
    throw error;
  } finally {
    client.release(); // Release the client back to the pool
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
