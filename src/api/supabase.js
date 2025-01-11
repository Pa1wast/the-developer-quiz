import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://fglbjslkpuimjbptrjrm.supabase.co';

const API_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZnbGJqc2xrcHVpbWpicHRyanJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY0NDA4MTQsImV4cCI6MjA1MjAxNjgxNH0.4PCoWK_1Pp9iyGu4HbVhsyHs_0xf_PqA65P9RO6geDU';

const supabase = createClient(supabaseUrl, API_KEY);

export default supabase;
