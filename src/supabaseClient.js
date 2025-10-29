import { createClient } from '@supabase/supabase-js';

// Find these in your Supabase dashboard under Project Settings → API
const supabaseUrl = 'https://lkdcycmxcyxpkzfrjzdg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxrZGN5Y214Y3l4cGt6ZnJqemRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE2NTQyNzIsImV4cCI6MjA3NzIzMDI3Mn0.1xk7qrLCtjJoWHb8PAacbOh0b8nS7RhbIPh2xs9azxY';
export const supabase = createClient(supabaseUrl, supabaseAnonKey);