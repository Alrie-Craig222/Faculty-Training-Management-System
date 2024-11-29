

// Add event listeners to the login and signup forms
document.querySelector('.login-form form').addEventListener('submit', loginUser);
document.querySelector('.signup-form form').addEventListener('submit', registerUser);

// Function to handle user login
function loginUser(event) {
  event.preventDefault();

  // Get the form data
  const email = document.querySelector('.login-form input[type="text"]').value;
  const password = document.querySelector('.login-form input[type="password"]').value;

  // Send the login data to the Laravel backend
  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
    },
    body: JSON.stringify({ email, password })
  })
  .then(response => response.json())
  .then(data => {
    // Handle the response from the Laravel backend
    if (data.success) {
      // Redirect the user to the dashboard or another page
      window.location.href = 'admin_profile.html';
    } else {
      // Display an error message
      alert(data.message);
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('An error occurred. Please try again later.');
  });
}

// Function to handle user registration
function registerUser(event) {
  event.preventDefault();

  // Get the form data
  const firstName = document.querySelector('.signup-form input[name="first_name"]').value;
  const lastName = document.querySelector('.signup-form input[name="last_name"]').value;
  const email = document.querySelector('.signup-form input[name="email"]').value;
  const password = document.querySelector('.signup-form input[name="password"]').value;

  // Send the registration data to the Laravel backend
  fetch('/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
    },
    body: JSON.stringify({ first_name: firstName, last_name: lastName, email, password })
  })
  .then(response => response.json())
  .then(data => {
    // Handle the response from the Laravel backend
    if (data.success) {
      // Redirect the user to the login page or another page
      window.location.href = 'admin_profile.html';
    } else {
      // Display an error message
      alert(data.message);
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('An error occurred. Please try again later.');
  });
}
