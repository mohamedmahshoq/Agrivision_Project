document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    // Collect form data
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const profilePhoto = document.getElementById('profile-photo').files[0]; // File object
    const password = document.getElementById('password').value;
    const mobile = document.getElementById('mobile').value;

    if (username && email && password.length >= 8 && mobile.length >= 10) {
        const confirm = window.confirm('Are you sure you want to register with these details?');
        if (confirm) {
            // Store data in local storage
            localStorage.setItem('username', username);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            localStorage.setItem('mobile', mobile);

            // Handle file upload
            if (profilePhoto) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    localStorage.setItem('profilePhoto', event.target.result); // Save base64 data URL
                }
                reader.readAsDataURL(profilePhoto);
            } else {
                localStorage.setItem('profilePhoto', ''); // Handle no photo scenario
            }

            // Redirect to login page
            window.location.href = 'login.html';
        }
    } else {
        alert('Please fill in all required fields correctly.');
    }
});
