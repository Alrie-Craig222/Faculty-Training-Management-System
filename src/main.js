// main.js
import { supabase } from './supabase.js';

document.getElementById('login-form').addEventListener('submit', async (e) => {
   e.preventDefault();

   const email = document.getElementById('email').value;
   const password = document.getElementById('password').value;

   try {
      // Sign in the user
      const { data: { user }, error } = await supabase.auth.signInWithPassword({ email, password });

      if (error) {
         alert(`Login failed: ${error.message}`);
         return;
      }

      console.log('User logged in:', user); // Add this line for debugging

      // Fetch user role from the `users` table
      const { data: userData, error: fetchError } = await supabase
         .from('users')
         .select('role')
         .eq('email', email)
         .single();

      if (fetchError || !userData) {
         alert('Failed to retrieve user role. Please contact support.');
         return;
      }

      const userRole = userData.role;
      console.log('User role:', userRole); // Add this line for debugging


      // Redirect based on role
      if (userRole === 'admin') {
         window.location.href = 'admin/dashboard.html';
      } else if (userRole === 'faculty') {
         window.location.href = 'faculty/faculty_dashboard.html';
      } else if (userRole === 'training_department') {
         window.location.href = 'agency/agency_dashboard.html';
      } else {
         alert('Role not recognized. Please contact support.');
      }

   } catch (error) {
      console.error('Unexpected error logging in:', error);
      alert('An unexpected error occurred. Please try again.');
   }
});
