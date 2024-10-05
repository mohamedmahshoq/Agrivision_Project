// Load user data from localStorage and populate profile
document.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    const mobile = localStorage.getItem('mobile');
    const profilePhoto = localStorage.getItem('profilePhoto');

    if (username && email && mobile && profilePhoto) {
        document.getElementById('profile-username').textContent = username;
        document.getElementById('profile-email').textContent = email;
        document.getElementById('profile-mobile').textContent = mobile;
        document.getElementById('profile-photo').src = profilePhoto;
    } else {
        // Handle case where user data is missing
        document.querySelector('.profile-section').innerHTML = '<p>No profile data available. Please register or log in.</p>';
    }
});

// Logout functionality
document.getElementById('logout').addEventListener('click', function() {
    if (confirm('Are you sure you want to logout?')) {
        // Clear localStorage (erasing registered details)
        localStorage.clear();
        // Redirect to login page
        window.location.href = 'login.html';
    }
});
