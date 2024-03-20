import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://rxnqnaqntunewsichlnk.supabase.co';

const API_KEY =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4bnFuYXFudHVuZXdzaWNobG5rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgxMjAwOTAsImV4cCI6MjAyMzY5NjA5MH0.07VfPdigDeMDPy0lsA6t0Y4Zh6q_zU4Va46TvAk_MZY';

const supabase = createClient(supabaseUrl, API_KEY);

export default supabase;
