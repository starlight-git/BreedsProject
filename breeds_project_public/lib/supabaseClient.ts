import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!; //!:Non-nullable

export const supabase = createClient(supabaseUrl, supabaseAnonKey); //create the supabase path