document.addEventListener('DOMContentLoaded', function() {
    const farmerLoginButton = document.querySelector('.farmer-login');
    const landownerLoginButton = document.querySelector('.landowner-login');
    const farmerForm = document.querySelector('.farmer-form');
    const landownerForm = document.querySelector('.landowner-form');

    farmerLoginButton.addEventListener('click', function() {
        farmerForm.style.display = 'block';
        landownerForm.style.display = 'none';
    });

    landownerLoginButton.addEventListener('click', function() {
        landownerForm.style.display = 'block';
        farmerForm.style.display = 'none';
    });
});