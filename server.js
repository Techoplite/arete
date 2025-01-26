import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://gnoijvmiulhfdgptzwit.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const { data, error } = await supabase.from("calories_log").select();
console.log("error :>> ", error);
console.log("data :>> ", data);
