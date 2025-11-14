// Supabase Global Connection File

const SUPABASE_URL = "https://astwbozfcbmudhxesovp.supabase.co";

const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzdHdib3pmY2JtdWRoeGVzb3ZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMwNzExMTUsImV4cCI6MjA3ODY0NzExNX0.t6GHVmDt05N-ZX9aCxxzRxc_-Us-gEKuTHOlk_Ozlu8";

// Create Global Supabase Client
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Debug Check
console.log("Supabase Connected:", SUPABASE_URL);