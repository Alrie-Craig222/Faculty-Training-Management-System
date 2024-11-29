import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = 'https://vombbtbujrddmghlpkgs.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvbWJidGJ1anJkZG1naGxwa2dzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA0NjU5OTUsImV4cCI6MjA0NjA0MTk5NX0.bBjsNtQ8YrXjVL4qeqkeX4cek2OPpAAeB0iDDbRT31I';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

