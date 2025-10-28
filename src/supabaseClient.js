import { createClient } from '@supabase/supabase-js';

// Find these in your Supabase dashboard under Project Settings → API
const supabaseUrl = 'https://yncdcmjwszvrympeqybj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InluY2RjbWp3c3p2cnltcGVxeWJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE1NDE5MzgsImV4cCI6MjA3NzExNzkzOH0.MIrESAplLbLVjjniItN-YrvOkduRXmx_Jpesna68qic';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);