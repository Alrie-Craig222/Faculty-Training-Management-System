// Import the Supabase client
import { supabase } from '../../src/supabase.js';

// Add event listener to the login form
document.querySelector('.login-form form').addEventListener('submit', loginUser);

// Function to handle user login with Supabase and role-based redirection
async function loginUser(event) {
  event.preventDefault();

  // Get the form data
  const email = document.querySelector('.login-form input[type="text"]').value;
  const password = document.querySelector('.login-form input[type="password"]').value;

  try {
    // Sign in using Supabase
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (authError) {
      // Display an error message
      alert(`Login failed: ${authError.message}`);
      return;
    }

    // Fetch user role from the 'users' table
    const userId = authData.user.id;
    const { data: userData, error: userError } = await supabase
      .from('users')
      .select('role')
      .eq('id', userId)
      .single();

    if (userError || !userData) {
      alert('Error fetching user profile');
      console.error(userError);
      return;
    }

    // Role-based redirection
    switch (userData.role) {
      case 'admin':
        window.location.href = 'admin_profile.html';
        break;
      case 'faculty':
        window.location.href = 'faculty_dashboard.html';
        break;
      case 'training_department':
        window.location.href = 'training_dashboard.html';
        break;
      default:
        alert('No dashboard assigned for your role.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please try again later.');
  }
}
