// Save message to local storage
document.getElementById('send-button').addEventListener('click', function() {
    const email = document.getElementById('user-email').value;
    const message = document.getElementById('user-message').value;

    if (email && message) {
        localStorage.setItem('contactEmail', email);
        localStorage.setItem('contactMessage', message);
        alert('Your message has been sent!');
        document.getElementById('user-email').value = '';
        document.getElementById('user-message').value = '';
    } else {
        alert('Please fill in both fields.');
    }
});

// Show the sent message from local storage
document.getElementById('show-message-button').addEventListener('click', function() {
    const savedEmail = localStorage.getItem('contactEmail');
    const savedMessage = localStorage.getItem('contactMessage');

    if (savedEmail && savedMessage) {
        document.getElementById('saved-email').textContent = `Email: ${savedEmail}`;
        document.getElementById('saved-message').textContent = `Message: ${savedMessage}`;
        document.getElementById('sent-message').classList.remove('hidden');
    } else {
        alert('No message found.');
    }
});

// Go back to the previous page
document.getElementById('back-button').addEventListener('click', function() {
    window.history.back();
});
