document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');
    const loginIcon = document.getElementById('login-icon');

    // Toggle the navigation links and hamburger menu
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuIcon.classList.toggle('active');
    });

    // Redirect to login page when clicking the login icon
    loginIcon.addEventListener('click', () => {
        window.location.href = 'login.html';
    });

    // Handle grid clicks for redirection
    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid => {
        grid.addEventListener('click', () => {
            const id = grid.id;
            if (id === 'build-house') {
                window.location.href = 'build-house.html';
            } else if (id === 'build-shop') {
                window.location.href = 'build-shop.html';
            } else if (id === 'build-agriculture') {
                window.location.href = 'build-agriculture.html';
            } else if (id === 'buy-sell-land') {
                window.location.href = 'buy-sell-land.html';
            }
        });
    });
});
document.getElementById('farm').addEventListener('click', function() {
    window.location.href = 'register.html';  // Redirect to farmer registration page
});

document.getElementById('land').addEventListener('click', function() {
    window.location.href = 'register.html';  // Redirect to landowner registration page
});

