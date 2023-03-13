import { createClient } from "@supabase/supabase-js";


const SUPABASE_URL = process.env.VUE_APP_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.VUE_APP_SUPABASE_ANON_KEY;

console.log(process.env.VUE_APP_SUPABASE_URL)

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);