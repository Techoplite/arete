import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";
import { SUPABASE_KEY, SUPABASE_URL } from "./env.js";

const supabaseUrl = SUPABASE_URL;
const supabaseKey = SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);
const { data, error } = await supabase.from("calories_log").select();
console.log("data :>> ", data);
console.log("error :>> ", error);
