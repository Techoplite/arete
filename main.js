import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";
import { SUPABASE_KEY, SUPABASE_URL } from "./env.js";

const supabaseUrl = SUPABASE_URL;
const supabaseKey = SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

const getCaloriesValue = async () => {
  const { data } = await supabase.from("calories_log").select();

  const totalCaloriesSpan = document.getElementById("total-calories");
  const calories = data?.map((c) => c.calories).reduce((a, b) => a + b, 0);
  totalCaloriesSpan.textContent = calories;

  latestId = data[data.length - 1].id;
};

getCaloriesValue();

let latestId;

const handleCaloriesInput = async (adverb) => {
  const caloriesInput = document.getElementById(`calories-${adverb}`).value;
  await supabase.from("calories_log").insert({
    calories: adverb === "in" ? caloriesInput : "-" + caloriesInput,
  });

  getCaloriesValue();

  document.getElementById(`calories-${adverb}`).value = "";
};

// Make the function globally accessible
window.handleCaloriesInput = handleCaloriesInput;
