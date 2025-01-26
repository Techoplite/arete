import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";
import { SUPABASE_KEY, SUPABASE_URL } from "./env.js";

const supabaseUrl = SUPABASE_URL;
const supabaseKey = SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);
const { data, error } = await supabase.from("calories_log").select("calories");
console.log("data :>> ", data);
console.log("error :>> ", error);

const totalCaloriesSpan = document.getElementById("total-calories");
const calories = data?.map((c) => c.calories).reduce((a, b) => a + b, 0);
totalCaloriesSpan.textContent = calories;
