import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";
import { SUPABASE_KEY, SUPABASE_URL } from "./env.js";

const supabaseUrl = SUPABASE_URL;
const supabaseKey = SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

function groupCaloriesByDay(entries) {
  return entries.reduce((acc, entry) => {
    console.log("acc :>> ", acc);
    // Format date as D/M/YYYY
    let date = new Date(entry.created_at).toLocaleDateString("en-GB");

    // Aggregate calories
    acc[date] = (acc[date] || 0) + entry.calories;

    return acc;
  }, {});
}

const getCaloriesValue = async () => {
  const { data } = await supabase.from("calories_log").select();

  const caloriesGroupedByDay = groupCaloriesByDay(data);

  const today = new Date().toLocaleDateString("en-GB");
  const caloriesToday = caloriesGroupedByDay[today] || 0;

  const totalCaloriesSpanEl = document.getElementById("total-calories");

  totalCaloriesSpanEl.textContent = caloriesToday;

  const previousDaysUlEl = document.getElementById("previous-days");

  previousDaysUlEl.replaceChildren();

  Object.keys(caloriesGroupedByDay)
    .slice(0, -1)
    .reverse()
    .map((day) => {
      const li = document.createElement("li");
      li.textContent = `${day}: ${caloriesGroupedByDay[day]}`;
      previousDaysUlEl.appendChild(li);
    });
};

getCaloriesValue();

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
