document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    // Get input values
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Retrieve stored values
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Check credentials
    if (username === storedUsername && password === storedPassword) {
        // Redirect to profile page
        window.location.href = 'profile.html';
    } else {
        alert('Incorrect username or password.');
    }
});
