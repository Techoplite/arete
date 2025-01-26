import express from "express"; // Import Express framework
import bodyParser from "body-parser"; // Import body-parser for parsing request bodies
import pkg from "pg"; // Import the package as a whole
const { Pool } = pkg; // Destructure the Pool class from the imported object

import cors from "cors"; // Import CORS middleware
import { createClient } from "@supabase/supabase-js"; // Supabase client library

// Supabase configuration
const supabaseUrl = "https://gnoijvmiulhfdgptzwit.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdub2lqdm1pdWxoZmRncHR6d2l0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY5NjM1ODUsImV4cCI6MjA1MjUzOTU4NX0.Pysq135y24yWLzeJ3r_Zp4sHf44xi4GYpR6AWnedKec";
const supabase = createClient(supabaseUrl, supabaseKey);

// PostgreSQL connection setup
const pool = new Pool({
  connectionString:
    "postgresql://postgres:@S28mi04or89@db.gnoijvmiulhfdgptzwit.supabase.co:5432/postgres",
});

// Express app setup
const app = express();
const port = 3000;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON request bodies

// Create table if it doesn't exist
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS calories_log (
    id SERIAL PRIMARY KEY,
    calories INTEGER NOT NULL,
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
  const { calories } = req.body;

  if (!calories || isNaN(calories)) {
    return res.status(400).send("Invalid calories input");
  }

  try {
    const { data, error } = await supabase
      .from("calories_log")
      .insert([{ calories: parseInt(calories, 10) }]);

    if (error) {
      console.error("Error inserting into Supabase:", error);
      return res.status(500).send("Error inserting data into Supabase");
    }

    return res.status(200).json({ data });
  } catch (error) {
    console.error("Error handling request:", error.message);
    return res.status(500).send("Internal server error");
  }
});

// Route to get total calories
app.get("/get-total-calories", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("calories_log")
      .select("calories")
      .eq("created_at", new Date().toISOString().split("T")[0]); // Filter by today's date

    if (error) {
      console.error("Error fetching from Supabase:", error);
      return res.status(500).send("Error fetching data from Supabase");
    }

    const totalCalories = data.reduce((sum, entry) => sum + entry.calories, 0);

    return res.status(200).json({ totalCalories });
  } catch (error) {
    console.error("Error handling request:", error.message);
    return res.status(500).send("Internal server error");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
