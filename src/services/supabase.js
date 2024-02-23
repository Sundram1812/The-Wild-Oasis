import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://fwmculbkpegjxcpfoncd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3bWN1bGJrcGVnanhjcGZvbmNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcyOTIwNTEsImV4cCI6MjAyMjg2ODA1MX0.6rwBCDdalVwjVzn1R3qo--0PRsm2ib4cLR6gdlzIstE";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
