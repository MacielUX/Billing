// Create a file named `scripts.js`

document.getElementById('loginx').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
  
    // Perform login validation here (e.g., check email and password)
  
    // If validation is successful, redirect to another page
    window.location.href = 'index.html'; // Replace with your target page
  });
  